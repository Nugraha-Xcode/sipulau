import { sipulauPool } from "../../../../db";
import { sqlSafeDirectusURL } from "../../../../utils/constant";
import getCurrentActiveTable from "../../../../utils/api/getCurrentActiveTable";
import getDirectusUserId from "../../../../utils/api/getDirectusUserId";

export default async function islandCommentHandler(req, res) {
  const { method } = req;

  let { id } = req.query;
  id = parseInt(id);
  if (isNaN(id)) {
    return res.status(400).json({ message: "ID toponimi tidak valid" });
  }

  if (method === "POST") {
    const { authorization } = req.headers;

    let token;
    let userId;
    if (authorization) {
      token = authorization.replace("Bearer ", "");
      try {
        let authCheckRes = await getDirectusUserId(token);
        userId = authCheckRes.user;
      } catch (error) {
        return res.status(error.statusCode).json({ message: error.message });
      }
    } else {
      return res.status(401).json({ message: "Harap login terlebih dahulu" });
    }

    let parsedBody;
    if (typeof req.body === "string") {
      try {
        parsedBody = JSON.parse(req.body);
      } catch (error) {
        return res.status(400).json({ message: "Body bukan JSON yang valid" });
      }
    } else {
      parsedBody = req.body;
    }

    const { email, isi, gambar1, gambar2, gambar3, dokumen } = parsedBody;
    if (isi) {
      try {
        let tableName = await getCurrentActiveTable("pulau_terluar");
        let {
          rows: [{ exists }],
        } = await sipulauPool.query(
          `
          SELECT EXISTS(
            SELECT 1
            FROM ${tableName}
            WHERE id_toponim = $1
          )
          `,
          [id]
        );
        if (exists) {
          await sipulauPool.query(
            `
            INSERT INTO komentar_pulau(
              id_toponim, email, isi, gambar_1, gambar_2, gambar_3, dokumen, user_created
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            `,
            [id, email, isi, gambar1, gambar2, gambar3, dokumen, userId]
          );
          return res.status(201).json({ message: "Komentar berhasil dikirim" });
        } else {
          return res
            .status(404)
            .json({ message: "ID toponimi tidak ditemukan" });
        }
      } catch (error) {
        console.error(error);
        return res
          .status(500)
          .json({ message: "Terjadi kesalahan pada server" });
      }
    } else {
      return res.status(400).json({ message: "Isi komentar harus ada" });
    }
  } else if (method === "GET") {
    let { page } = req.query;

    // validate page
    if (page) {
      page = parseInt(page);
      if (isNaN(page) || page < 0) {
        return res.status(400).json({ message: "Halaman tidak valid" });
      }
    } else {
      page = 1;
    }

    // set limit and offset
    let limit = 20;
    let offset = (page - 1) * limit;

    let columns = [
      "isi",
      `COALESCE('${sqlSafeDirectusURL}/assets/' || gambar_1 || '?key=thumb') "gambar1"`,
      `COALESCE('${sqlSafeDirectusURL}/assets/' || gambar_2 || '?key=thumb') "gambar2"`,
      `COALESCE('${sqlSafeDirectusURL}/assets/' || gambar_3 || '?key=thumb') "gambar3"`,
      "date_created",
      "TRIM(CONCAT(first_name, ' ', last_name)) user_created",
    ];
    try {
      let { rows } = await sipulauPool.query(
        `
        SELECT ${columns.join(",")}
        FROM komentar_pulau
        LEFT JOIN directus_users
          ON user_created = directus_users.id
        WHERE komentar_pulau.status = 'diterima'
        AND id_toponim = $1
        ORDER BY komentar_id DESC
        LIMIT $2 OFFSET $3
        `,
        [id, limit, offset]
      );
      return res.json(rows);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Terjadi kesalahan pada server" });
    }
  } else {
    return res
      .setHeader("Allow", ["POST", "GET"])
      .status(405)
      .json({ message: `Method ${method} Not Allowed` });
  }
}

import { sipulauPool } from "../../../db";
import { sqlSafeDirectusURL } from "../../../utils/constant";
import getCurrentActiveTable from "../../../utils/api/getCurrentActiveTable";
import getDirectusUserId from "../../../utils/api/getDirectusUserId";

export default async function userCommentHandler(req, res) {
  const { method } = req;

  if (method !== "GET") {
    return res
      .setHeader("Allow", ["GET"])
      .status(405)
      .json({ message: `Method ${method} Not Allowed` });
  }

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
    "komentar.status",
    "isi",
    "date_created",
    `('${sqlSafeDirectusURL}/assets/' || gambar_1 || '?key=thumb') "gambar1"`,
    `('${sqlSafeDirectusURL}/assets/' || gambar_2 || '?key=thumb') "gambar2"`,
    `('${sqlSafeDirectusURL}/assets/' || gambar_3 || '?key=thumb') "gambar3"`,
    'ST_X(geom) "lon"',
    'ST_Y(geom) "lat"',
  ];
  try {
    let tableName = await getCurrentActiveTable("island");
    let { rows } = await sipulauPool.query(
      `
      SELECT ${columns.join(",")}, 'titik' jenis
      FROM komentar_titik komentar
      WHERE user_created = $3
      UNION ALL
      SELECT ${columns.join(",")}, 'pulau' jenis
      FROM komentar_pulau komentar
      INNER JOIN ${tableName} titikpulau
        ON titikpulau.id_toponim = komentar.id_toponim
      WHERE user_created = $3
      ORDER BY date_created DESC
      LIMIT $1 OFFSET $2
      `,
      [limit, offset, userId]
    );
    return res.json(rows);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
}

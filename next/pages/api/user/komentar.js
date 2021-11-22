import { sipulauPool } from "../../../db";
import { sqlSafeDirectusURL } from "../../../utils/constant";

export default async function userCommentHandler(req, res) {
  const { method } = req;
  const { authorization } = req.headers;

  let token;
  if (authorization) {
    token = authorization.replace("Bearer ", "");
    // TODO validate token
  } else {
    return res.status(401).json({ message: "Tidak ada authorization header" });
  }

  if (method !== "GET") {
    return res
      .setHeader("Allow", ["GET"])
      .status(405)
      .json({ message: `Method ${method} Not Allowed` });
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
    // TODO add user filter
    let { rows } = await sipulauPool.query(
      `
      SELECT ${columns.join(",")}, 'titik' jenis
      FROM komentar_titik komentar
      UNION ALL
      SELECT ${columns.join(",")}, 'pulau' jenis
      FROM komentar_pulau komentar
      INNER JOIN titik_pulau
        ON titik_pulau.id_toponim = komentar.id_toponim
      ORDER BY date_created DESC
      LIMIT $1 OFFSET $2
      `,
      [limit, offset]
    );
    return res.json(rows);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
}

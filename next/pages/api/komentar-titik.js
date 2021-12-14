import { sipulauPool } from "../../db";
import getDirectusUserId from "../../utils/api/getDirectusUserId";

export default async function pointCommentHandler(req, res) {
  const { method } = req;

  if (method !== "POST") {
    return res
      .setHeader("Allow", ["POST"])
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
  let { lon, lat } = parsedBody;
  if (isi && lon !== undefined && lat !== undefined) {
    // parse lon lat
    lon = parseFloat(lon);
    lat = parseFloat(lat);
    if (
      isNaN(lon) ||
      isNaN(lat) ||
      lon > 180 ||
      lon < -180 ||
      lat > 90 ||
      lat < -90
    ) {
      return res
        .status(400)
        .json({ message: "Nilai bujur atau lintang tidak valid" });
    }

    try {
      await sipulauPool.query(
        `
        INSERT INTO komentar_titik(
          email, isi, gambar_1, gambar_2, gambar_3, dokumen, geom, user_created
        )
        VALUES ($1, $2, $3, $4, $5, $6, ST_SetSRID(ST_MakePoint($7, $8), 4326), $9)
        `,
        [email, isi, gambar1, gambar2, gambar3, dokumen, lon, lat, userId]
      );
      return res.status(201).json({ message: "Komentar berhasil dikirim" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Terjadi kesalahan pada server" });
    }
  } else {
    return res
      .status(400)
      .json({ message: "Isi dan koordinat komentar harus ada" });
  }
}

import { sipulauPool } from "../../db";

export default async function pointCommentHandler(req, res) {
  const { method } = req;

  if (method !== "POST") {
    return res
      .setHeader("Allow", ["POST"])
      .status(405)
      .json({ message: `Method ${method} Not Allowed` });
  }

  // TODO add auth
  let parsedBody;
  try {
    parsedBody = JSON.parse(req.body);
  } catch (error) {
    return res.status(400).json({ message: "Body bukan JSON yang valid" });
  }
  const { isi, gambar1, gambar2, gambar3, dokumen } = parsedBody;
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
      // TODO add user id
      await sipulauPool.query(
        `
        INSERT INTO komentar_titik(
          isi, gambar_1, gambar_2, gambar_3, dokumen, geom
        )
        VALUES ($1, $2, $3, $4, $5, ST_SetSRID(ST_MakePoint($6, $7), 4326))
        `,
        [isi, gambar1, gambar2, gambar3, dokumen, lon, lat]
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

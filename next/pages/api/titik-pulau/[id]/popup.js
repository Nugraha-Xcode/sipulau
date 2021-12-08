import { sipulauPool } from "../../../../db";
import getCurrentActiveTable from "../../../../utils/api/getCurrentActiveTable";

export default async function popupHandler(req, res) {
  const { method } = req;
  if (method !== "GET") {
    return res
      .setHeader("Allow", ["GET"])
      .status(405)
      .json({ message: `Method ${method} Not Allowed` });
  }

  let { id } = req.query;
  id = parseInt(id);
  if (isNaN(id)) {
    return res.status(400).json({ message: "ID toponimi tidak valid" });
  }

  let popupResult, commentResult;
  try {
    let tableName = await getCurrentActiveTable("island");
    [popupResult, commentResult] = await Promise.all([
      sipulauPool.query(
        `
        SELECT id_toponim, nammap, wadmkk, wadmpr, foto1, foto2, foto3, foto4
        FROM ${tableName}
        WHERE id_toponim = $1
        `,
        [id]
      ),
      sipulauPool.query(
        `
        SELECT COUNT(*)
        FROM komentar_pulau
        WHERE id_toponim = $1
        AND status = 'diterima'
        `,
        [id]
      ),
    ]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }

  if (popupResult.rows.length > 0) {
    let data = popupResult.rows[0];
    data.jumlahKomentar = commentResult.rows[0].count;
    return res.json(data);
  } else {
    return res.status(404).json({ message: "Pulau tidak ditemukan" });
  }
}

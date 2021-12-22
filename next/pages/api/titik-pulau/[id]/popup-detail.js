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

  let queryResult;
  try {
    let tableName = await getCurrentActiveTable("island");
    queryResult = await sipulauPool.query(
      `
      SELECT
        id_wilayah, artinam, sjhnam, aslbhs, wadmkd, wadmkc, remark, pjg_gp, luas
      FROM ${tableName}
      WHERE id_toponim = $1
      `,
      [id]
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }

  if (queryResult.rows.length > 0) {
    return res.json(queryResult.rows[0]);
  } else {
    return res.status(404).json({ message: "Pulau tidak ditemukan" });
  }
}

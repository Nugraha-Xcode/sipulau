import { sipulauPool } from "../../../db";
import getCurrentActiveTable from "../../../utils/api/getCurrentActiveTable";

export default async function kabkotHandler(req, res) {
  const { method } = req;
  if (method !== "GET") {
    return res
      .setHeader("Allow", ["GET"])
      .status(405)
      .json({ message: `Method ${method} Not Allowed` });
  }

  const { prov } = req.query;
  if (!prov) {
    return res.status(400).json({ message: "Mohon sertakan querystring prov" });
  }

  let queryResult;
  try {
    let tableName = await getCurrentActiveTable("island");
    queryResult = await sipulauPool.query(
      `
      SELECT DISTINCT wadmkk
      FROM ${tableName}
      WHERE wadmpr = $1
      `,
      [prov]
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
  if (queryResult.rows.length) {
    return res.json(queryResult.rows.map((el) => el.wadmkk));
  } else {
    return [];
  }
}

import { sipulauPool } from "../../../db";
import getCurrentActiveTable from "../../../utils/api/getCurrentActiveTable";

export default async function suggestionHandler(req, res) {
  const { method } = req;
  if (method !== "GET") {
    return res
      .setHeader("Allow", ["GET"])
      .status(405)
      .json({ message: `Method ${method} Not Allowed` });
  }

  let { keyword } = req.query;

  let queryResult;
  try {
    let tableName = await getCurrentActiveTable("island");
    queryResult = await sipulauPool.query(
      `
      SELECT nammap
      FROM ${tableName}
      WHERE nammap ILIKE $1
      ORDER BY strict_word_similarity($1, nammap) DESC
      LIMIT 10
      `,
      [`%${keyword}%`]
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
  return res.json(queryResult.rows);
}

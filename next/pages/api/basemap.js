import { sipulauPool } from "../../db";

export default async function basemapHandler(req, res) {
  const { method } = req;
  if (method !== "GET") {
    return res
      .setHeader("Allow", ["GET"])
      .status(405)
      .json({ message: `Method ${method} Not Allowed` });
  }

  let queryResult;
  try {
    queryResult = await sipulauPool.query(
      `
      SELECT label_idn, label_eng, thumb_url, tile_url
      FROM basemaps
      WHERE status = 'active'
      `
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
  return res.json(queryResult.rows);
}

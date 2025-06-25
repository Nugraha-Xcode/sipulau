import { sipulauPool } from "../../../../db";

export default async function provListHandler(req, res) {
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
      SELECT nama_provinsi
      FROM prov_summary
      ORDER BY nama_provinsi
      `
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
  if (queryResult.rows.length) {
    return res.json(queryResult.rows.map((el) => el.nama_provinsi));
  } else {
    return [];
  }
}

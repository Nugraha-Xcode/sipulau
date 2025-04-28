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
      select  id_wadmpr, wadmpr, COUNT(*) total_pulau FROM titik_pulau
      join prov_summary on prov_summary.nama_provinsi = wadmpr
      group by id_wadmpr, wadmpr order by id_wadmpr;
      `
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
  if (queryResult.rows.length) {
    return res.json(queryResult.rows);
  } else {
    return [];
  }
}

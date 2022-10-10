import { sipulauPool } from "../../../../db";

export default async function provSummaryHandler(req, res) {
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
    queryResult = await sipulauPool.query(
      `
      WITH total AS (
        SELECT
        COUNT(*) total_island, SUM(luas) total_area, SUM(pjg_gp) total_coastline
        FROM titik_pulau
        WHERE wadmpr = $1
      ), largest AS (
        SELECT nammap largest_island
        FROM titik_pulau
        WHERE wadmpr = $1
        AND luas = (
          SELECT MAX(luas)
          FROM titik_pulau
          WHERE wadmpr = $1
        )
        LIMIT 1
      ), smallest AS (
        SELECT nammap smallest_island
        FROM titik_pulau
        WHERE wadmpr = $1
        AND luas = (
          SELECT MIN(luas)
          FROM titik_pulau
          WHERE wadmpr = $1
        )
        LIMIT 1
      ), inhabited AS (
        SELECT COUNT(*) total_inhabited
        FROM titik_pulau
        WHERE wadmpr = $1
        AND SPLIT_PART(remark, ' - ', 2) ILIKE '^Berpenduduk'
      ), uninhabited AS (
        SELECT COUNT(*) total_uninhabited
        FROM titik_pulau
        WHERE wadmpr = $1
        AND SPLIT_PART(remark, ' - ', 2) ILIKE '^Tidak Berpenduduk'
      )
      SELECT nama_provinsi, deskripsi, ST_XMin(extent) xmin, ST_YMin(extent) ymin, ST_XMax(extent) xmax, ST_YMax(extent) ymax, total_island, total_area, total_coastline, largest_island, smallest_island, total_inhabited, total_uninhabited
      FROM prov_summary
      LEFT JOIN total ON TRUE
      LEFT JOIN largest ON TRUE
      LEFT JOIN smallest ON TRUE
      LEFT JOIN inhabited ON TRUE
      LEFT JOIN uninhabited ON TRUE
      WHERE nama_provinsi = $1
      `,
      [prov]
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
  if (queryResult.rows.length) {
    return res.json(queryResult.rows[0]);
  } else {
    return res.status(404).json({ message: "Data tidak ditemukan" });
  }
}

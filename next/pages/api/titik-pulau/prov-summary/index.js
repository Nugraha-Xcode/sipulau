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

  const whereWadmpr = prov ? "WHERE wadmpr = $1" : "";
  const whereNamaProv = prov ? "WHERE nama_provinsi = $1" : "";
  const selectColumns = prov
    ? "nama_provinsi, deskripsi, ST_XMin(extent) xmin, ST_YMin(extent) ymin, ST_XMax(extent) xmax, ST_YMax(extent) ymax"
    : "'Seluruh Indonesia' nama_provinsi, NULL deskripsi, 95 xmin, -11 ymin, 141 xmax, 6 ymax";
  const fromProvSumm = prov ? "FROM prov_summary" : "";
  const paramValues = prov ? [prov] : [];

  let queryResult;
  try {
    queryResult = await sipulauPool.query(
      `
      WITH total AS (
        SELECT
        COUNT(*) total_island, SUM(luas) total_area, SUM(pjg_gp) total_coastline
        FROM titik_pulau
        ${whereWadmpr}
      ), largest AS (
        SELECT nammap largest_island
        FROM titik_pulau
        ${whereWadmpr}
        ${whereWadmpr ? "AND" : "WHERE"} luas = (
          SELECT MAX(luas)
          FROM titik_pulau
          ${whereWadmpr}
        )
        LIMIT 1
      ), smallest AS (
        SELECT nammap smallest_island
        FROM titik_pulau
        ${whereWadmpr}
        ${whereWadmpr ? "AND" : "WHERE"} luas = (
          SELECT MIN(luas)
          FROM titik_pulau
          ${whereWadmpr}
        )
        LIMIT 1
      ), inhabited AS (
        SELECT COUNT(*) total_inhabited
        FROM titik_pulau
        ${whereWadmpr}
        ${
          whereWadmpr ? "AND" : "WHERE"
        } SPLIT_PART(remark, ' - ', 2) ~* '^Berpenduduk'
      ), uninhabited AS (
        SELECT COUNT(*) total_uninhabited
        FROM titik_pulau
        ${whereWadmpr}
        ${
          whereWadmpr ? "AND" : "WHERE"
        } SPLIT_PART(remark, ' - ', 2) ~* '^Tidak Berpenduduk'
      )
      SELECT ${selectColumns}, total_island, total_area, total_coastline, largest_island, smallest_island, total_inhabited, total_uninhabited
      ${fromProvSumm}
      ${fromProvSumm ? "LEFT JOIN" : "FROM"} total ${
        fromProvSumm ? "ON TRUE" : ""
      }
      LEFT JOIN largest ON TRUE
      LEFT JOIN smallest ON TRUE
      LEFT JOIN inhabited ON TRUE
      LEFT JOIN uninhabited ON TRUE
      ${whereNamaProv}
      `,
      paramValues
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

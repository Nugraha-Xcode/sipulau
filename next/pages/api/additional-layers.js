import { sipulauPool } from "../../db";

export default async function additionalLayersHandler(req, res) {
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
      SELECT al.layer_id, layer_name, al."label_descID", is_visible, is_priority, json_agg(json_build_object('layer_type', layer_type, 'url', url, 'min_zoom', min_zoom, 'max_zoom', max_zoom)) layer_defs
      FROM additional_layers al
      INNER JOIN additional_layer_def ald ON ald.layer_id = al.layer_id
      GROUP BY al.layer_id
      `
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
  return res.json(queryResult.rows);
}

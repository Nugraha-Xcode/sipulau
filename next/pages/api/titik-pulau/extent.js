import { sipulauPool } from "../../../db";
import getCurrentActiveTable from "../../../utils/api/getCurrentActiveTable";

export default async function extentHandler(req, res) {
  const { method } = req;
  if (method !== "GET") {
    return res
      .setHeader("Allow", ["GET"])
      .status(405)
      .json({ message: `Method ${method} Not Allowed` });
  }

  // validate filters
  let {
    id_toponim,
    nammap,
    artinam,
    sjhnam,
    aslbhs,
    id_wilayah,
    wadmkd,
    wadmkc,
    wadmkk,
    wadmpr,
    status,
    remark,
    bbox,
    selected,
    unselected,
  } = req.query;

  let filters = [];
  let paramVal = [];
  let param = 1;

  // prioritize selected filter
  if (selected !== undefined) {
    selected = selected.split(",");
    let params = [];
    for (let id of selected) {
      id = parseInt(id);
      if (!isNaN(id)) {
        paramVal.push(id);
        params.push(`$${param++}`);
      }
    }
    if (params.length > 0) filters.push(`id_toponim IN (${params.join(",")})`);
  } else {
    let equalFilters = [
      [id_toponim, "id_toponim"],
      [id_wilayah, "id_wilayah"],
      [wadmkd, "wadmkd"],
      [wadmkc, "wadmkc"],
      [wadmkk, "wadmkk"],
      [wadmpr, "wadmpr"],
    ];
    let likeFilters = [
      [nammap, "nammap"],
      [artinam, "artinam"],
      [sjhnam, "sjhnam"],
      [aslbhs, "aslbhs"],
      [status, "status"],
    ];
    // remark filter
    if (remark !== undefined) {
      if (remark === "Berpenduduk" || remark === "Tidak Berpenduduk") {
        paramVal.push(`^${remark}`);
        filters.push(`SPLIT_PART(remark, ' - ', 2) ~* $${param++}`);
      } else {
        filters.push(
          "SPLIT_PART(remark, ' - ', 2) !~* '^Berpenduduk|^Tidak Berpenduduk'"
        );
      }
    }
    // bbox filter
    if (bbox !== undefined) {
      bbox = bbox.split(",");
      if (bbox.length !== 4) {
        return res
          .status(400)
          .json({ message: "Format bbox harus: xmin,ymin,xmax,ymax" });
      }
      bbox = bbox.map((el) => parseFloat(el));
      let [xmin, ymin, xmax, ymax] = bbox;
      if (
        isNaN(xmin) ||
        isNaN(ymin) ||
        isNaN(xmax) ||
        isNaN(ymax) ||
        xmin > xmax ||
        ymin > ymax
      ) {
        return res.status(400).json({ message: "bbox tidak valid" });
      }
      paramVal.push(xmin, ymin, xmax, ymax);
      filters.push(
        `geom && ST_MakeEnvelope($${param++}, $${param++}, $${param++}, $${param++}, 4326)`
      );
    }
    // unselected filter
    if (unselected !== undefined) {
      unselected = unselected.split(",");
      let params = [];
      for (let id of unselected) {
        id = parseInt(id);
        if (!isNaN(id)) {
          paramVal.push(id);
          params.push(`$${param++}`);
        }
      }
      if (params.length > 0)
        filters.push(`id_toponim NOT IN (${params.join(",")})`);
    }

    for (const filter of equalFilters) {
      if (filter[0] !== undefined) {
        paramVal.push(filter[0]);
        filters.push(`${filter[1]} = $${param++}`);
      }
    }
    for (const filter of likeFilters) {
      if (filter[0] !== undefined) {
        paramVal.push("%" + filter[0] + "%");
        filters.push(`${filter[1]} ILIKE $${param++}`);
      }
    }
  }

  // combine filters
  let combinedFilters =
    filters.length > 0 ? `WHERE ${filters.join(" AND ")}` : "";

  try {
    let tableName = await getCurrentActiveTable("island");
    let {
      rows: [extent],
    } = await sipulauPool.query(
      `
      WITH e AS (
        SELECT ST_Extent(geom) extent
        FROM ${tableName}
        ${combinedFilters}
      )
      SELECT
        ST_XMin(extent) xmin, ST_YMin(extent) ymin,
        ST_XMax(extent) xmax, ST_YMax(extent) ymax
      FROM e
      `,
      paramVal
    );
    return res.json(extent);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
}

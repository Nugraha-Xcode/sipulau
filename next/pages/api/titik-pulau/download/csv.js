import { sipulauPool } from "../../../../db";
import { to as copyTo } from "pg-copy-streams";

export default async function downloadCsvHandler(req, res) {
  const { method } = req;
  if (method !== "POST") {
    return res
      .setHeader("Allow", ["POST"])
      .status(405)
      .json({ message: `Method ${method} Not Allowed` });
  }

  // TODO add auth

  let parsedBody;
  try {
    parsedBody = JSON.parse(req.body);
  } catch (error) {
    return res.status(400).json({ message: "Body bukan JSON yang valid" });
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
  } = parsedBody;

  let filters = [];

  // prioritize selected filter
  if (Array.isArray(selected)) {
    let validId = [];
    for (let id of selected) {
      if (Number.isInteger(id)) validId.push(id);
    }
    if (validId.length > 0)
      filters.push(`id_toponim IN (${validId.join(",")})`);
  } else {
    let equalStringFilters = [
      [id_wilayah, "id_wilayah"],
      [wadmkd, "wadmkd"],
      [wadmkc, "wadmkc"],
      [wadmkk, "wadmkk"],
      [wadmpr, "wadmpr"],
    ];
    let likeStringFilters = [
      [nammap, "nammap"],
      [artinam, "artinam"],
      [sjhnam, "sjhnam"],
      [aslbhs, "aslbhs"],
      [status, "status"],
    ];
    // id_toponim filter
    if (Number.isInteger(id_toponim)) {
      filters.push(`id_toponim = ${id_toponim}`);
    }
    // remark filter
    if (remark !== undefined) {
      if (remark === "Berpenduduk" || remark === "Tidak Berpenduduk") {
        filters.push(`SPLIT_PART(remark, ' - ', 2) ~* ^${remark}`);
      } else {
        filters.push(
          "SPLIT_PART(remark, ' - ', 2) !~* '^Berpenduduk|^Tidak Berpenduduk'"
        );
      }
    }
    // bbox filter
    if (typeof bbox === "object") {
      let { xmin, ymin, xmax, ymax } = bbox;
      if (
        typeof xmin !== "number" ||
        typeof ymin !== "number" ||
        typeof xmax !== "number" ||
        typeof ymax !== "number" ||
        xmin < -180 ||
        xmin > 180 ||
        xmax < -180 ||
        xmax > 180 ||
        ymin < -90 ||
        ymin > 90 ||
        ymax < -90 ||
        ymax > 90 ||
        xmin > xmax ||
        ymin > ymax
      ) {
        return res.status(400).json({ message: "bbox tidak valid" });
      }
      filters.push(
        `geom && ST_MakeEnvelope(${xmin}, ${ymin}, ${xmax}, ${ymax}, 4326)`
      );
    }
    // unselected filter
    if (Array.isArray(unselected)) {
      let validId = [];
      for (let id of unselected) {
        if (Number.isInteger(id)) validId.push(id);
      }
      if (validId.length > 0)
        filters.push(`id_toponim NOT IN (${validId.join(",")})`);
    }

    for (const filter of equalStringFilters) {
      if (filter[0] !== undefined) {
        filters.push(`${filter[1]} = '${filter[0].replace(/'/g, "''")}'`);
      }
    }
    for (const filter of likeStringFilters) {
      if (filter[0] !== undefined) {
        filters.push(`${filter[1]} ILIKE '%${filter[0].replace(/'/g, "''")}%'`);
      }
    }
  }

  // combine filters
  let combinedFilters =
    filters.length > 0 ? `WHERE ${filters.join(" AND ")}` : "";

  let client;
  try {
    client = await sipulauPool.connect();

    let stream = client.query(
      copyTo(
        `
        COPY (
          SELECT
            id_toponim "ID", nammap "Nama Pulau", artinam "Arti Nama",
            sjhnam "Sejarah Nama", aslbhs "Asal Bahasa", id_wilayah "ID Wilayah",
            wadmkd "Kelurahan/Desa", wadmkc "Kecamatan", wadmkk "Kabupaten/Kota",
            wadmpr "Provinsi", status "Status", remark "Remark", ST_X(geom) "X",
            ST_Y(geom) "Y"
          FROM titik_pulau
          ${combinedFilters}
        ) TO STDOUT (FORMAT csv, HEADER true)
        `
      )
    );
    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=pulau.csv");
    stream.pipe(res);
    stream.on("end", () => {
      res.end;
    });
    stream.on("error", (error) => {
      console.error(error);
      res.end;
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  } finally {
    client.release();
  }
}

import { sipulauPool } from "../../../../db";
import { to as copyTo } from "pg-copy-streams";

import isValidMultiPolygonGeom from "../../../../utils/api/isValidMultiPolygonGeom";
import getCurrentActiveTable from "../../../../utils/api/getCurrentActiveTable";
import getDirectusUserId from "../../../../utils/api/getDirectusUserId";

export default async function downloadCsvHandler(req, res) {
  const { method } = req;
  if (method !== "POST") {
    return res
      .setHeader("Allow", ["POST"])
      .status(405)
      .json({ message: `Method ${method} Not Allowed` });
  }

  const { authorization } = req.headers;

  let token;
  let userId;
  if (authorization) {
    token = authorization.replace("Bearer ", "");
    try {
      let authCheckRes = await getDirectusUserId(token);
      userId = authCheckRes.user;
    } catch (error) {
      return res.status(error.statusCode).json({ message: error.message });
    }
  } else {
    return res.status(401).json({ message: "Harap login terlebih dahulu" });
  }

  let parsedBody;
  if (typeof req.body === "string") {
    try {
      parsedBody = JSON.parse(req.body);
    } catch (error) {
      return res.status(400).json({ message: "Body bukan JSON yang valid" });
    }
  } else {
    parsedBody = req.body;
  }

  // validate filters
  let {
    fid,
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
    aoi,
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
  } else if (typeof aoi === "object") {
    // then prioritize aoi
    if (isValidMultiPolygonGeom(aoi)) {
      filters.push(
        `geom && ST_GeomFromGeoJSON('${JSON.stringify(aoi).replace(
          /'/g,
          "''"
        )}')`
      );
    } else {
      return res.status(400).json({
        message:
          "AOI harus berbentuk geometri GeoJSON bertipe MultiPolygon yang valid",
      });
    }
  } else {
    let equalStringFilters = [
      [fid, "fid"],
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
        filters.push(`SPLIT_PART(remark, ' - ', 2) ~* '^${remark}'`);
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
    let tableName = await getCurrentActiveTable("island");
    client = await sipulauPool.connect();

    let stream = client.query(
      copyTo(
        `
        COPY (
          SELECT
            fid "ID Pulau", id_toponim "ID Toponim", nammap "Nama Pulau",
            artinam "Arti Nama", sjhnam "Sejarah Nama", aslbhs "Asal Bahasa",
            id_wilayah "ID Wilayah", wadmkd "Kelurahan/Desa",
            wadmkc "Kecamatan", wadmkk "Kabupaten/Kota", wadmpr "Provinsi",
            remark "Remark", ST_X(geom) "X", ST_Y(geom) "Y"
          FROM ${tableName}
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
      return res.status(500).json({ message: "Terjadi kesalahan pada server" });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  } finally {
    client.release();
  }
}

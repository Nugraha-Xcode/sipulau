import { sipulauPool } from "../../../db";
import getCurrentActiveTable from "../../../utils/api/getCurrentActiveTable";
import {
  parseQuery,
  QueryError,
  validColumns,
} from "../../../utils/api/parseQuery";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "25mb",
    },
  },
};

const allowedMethods = ["GET", "POST"];

export default async function tableHandler(req, res) {
  const { method } = req;
  if (!allowedMethods.includes(method)) {
    return res
      .setHeader("Allow", allowedMethods)
      .status(405)
      .json({ message: `Method ${method} Not Allowed` });
  }

  if (req.method === "GET") {
    let { page, ordby: ordBy, orddir: ordDir } = req.query;

    // validate page
    if (page) {
      page = parseInt(page);
      if (isNaN(page) || page < 0) {
        return res.status(400).json({ message: "Halaman tidak valid" });
      }
    } else {
      page = 1;
    }

    // set limit and offset
    let limit = 20;
    let offset = (page - 1) * limit;

    // validate order column
    if (ordBy) {
      ordBy = validColumns.includes(ordBy) ? ordBy : "fid";
    } else {
      ordBy = "fid";
    }

    // validate order direction
    if (ordDir) {
      ordDir = ordDir.toUpperCase() === "DESC" ? "DESC" : "ASC";
    } else {
      ordDir = "ASC";
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
      point,
      nambef,
    } = req.query;
    let filters = [];
    let paramVal = [limit, offset];
    let param = 3;

    let equalFilters = [
      [fid, "fid"],
      [id_toponim, "id_toponim"],
      [id_wilayah, "id_wilayah"],
      [wadmkd, "wadmkd"],
      [wadmkc, "wadmkc"],
      [wadmkk, "wadmkk"],
      [wadmpr, "wadmpr"],
    ];
    for (const filter of equalFilters) {
      if (filter[0] !== undefined) {
        paramVal.push(filter[0]);
        filters.push(`${filter[1]} = $${param++}`);
      }
    }

    let likeFilters = [
      [nammap, "nammap"],
      [artinam, "artinam"],
      [sjhnam, "sjhnam"],
      [aslbhs, "aslbhs"],
      [status, "status"],
      [nambef, "nambef"]
    ];
    for (const filter of likeFilters) {
      if (filter[0] !== undefined) {
        paramVal.push(`%${filter[0]}%`);
        filters.push(`${filter[1]} ILIKE $${param++}`);
      }
    }

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

    // bbox OR point OR aoi filter
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
      paramVal.push(xmin, ymin, xmax, ymax);
      filters.push(
        `geom && ST_MakeEnvelope($${param++}, $${param++}, $${param++}, $${param++}, 4326)`
      );
    } else if (point !== undefined) {
      point = point.split(",");
      if (point.length !== 2) {
        return res.status(400).json({ message: "Format point harus: lon,lat" });
      }
      point = point.map((el) => parseFloat(el));
      let [lon, lat] = point;
      if (
        isNaN(lon) ||
        isNaN(lat) ||
        lon < -180 ||
        lon > 180 ||
        lat < -90 ||
        lat > 90
      ) {
        return res.status(400).json({ message: "point tidak valid" });
      }
      paramVal.push(lon, lat);
      filters.push(
        `ST_DWithin(ST_SetSRID(ST_MakePoint($${param++}, $${param++}), 4326), geom, 0.05)`
      );
    }

    // combine filters
    let combinedFilters =
      filters.length > 0 ? `WHERE ${filters.join(" AND ")}` : "";

    let queryResult;
    try {
      let tableName = await getCurrentActiveTable("island");
      queryResult = await sipulauPool.query(
        `
      SELECT
        fid, id_toponim, nammap, alias, artinam, sjhnam, aslbhs, id_wilayah, wadmkd,
        wadmkc, wadmkk, wadmpr, status, remark, ST_X(geom) lon, ST_Y(geom) lat,
        pjg_gp, luas, nambef
      FROM ${tableName}
      ${combinedFilters}
      ORDER BY ${ordBy} ${ordDir}
      LIMIT $1 OFFSET $2
      `,
        paramVal
      );
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Terjadi kesalahan pada server" });
    }
    return res.json(queryResult.rows);
  } else if (req.method === "POST") {
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

    let { page, ordBy, ordDir, query } = parsedBody;

    // validate page
    if (page) {
      page = parseInt(page);
      if (isNaN(page) || page < 0) {
        return res.status(400).json({ message: "Halaman tidak valid" });
      }
    } else {
      page = 1;
    }

    // set limit and offset
    let limit = 1000;
    let offset = (page - 1) * limit;

    // validate order column
    if (ordBy) {
      ordBy = validColumns.includes(ordBy) ? ordBy : "fid";
    } else {
      ordBy = "fid";
    }

    // validate order direction
    if (ordDir) {
      ordDir = ordDir.toUpperCase() === "DESC" ? "DESC" : "ASC";
    } else {
      ordDir = "ASC";
    }

    // parse query
    let filterOpts = {
      filterDirectives: [],
      filterValues: [limit, offset],
      filterParam: 3,
      unparameterized: false,
    };
    if (query) {
      try {
        parseQuery(query, filterOpts);
      } catch (error) {
        if (error instanceof QueryError) {
          return res.status(400).json({ message: error.message });
        } else {
          console.error(error);
          return res
            .status(500)
            .json({ message: "Terjadi kesalahan pada server" });
        }
      }
    }

    // combine filters
    let combinedFilters =
      filterOpts.filterDirectives.length > 0
        ? `WHERE ${filterOpts.filterDirectives.join(" AND ")}`
        : "";

    let queryResult;
    try {
      let tableName = await getCurrentActiveTable("island");
      queryResult = await sipulauPool.query(
        `
        SELECT
          fid, id_toponim, nammap, alias, artinam, sjhnam, aslbhs, id_wilayah, wadmkd,
          wadmkc, wadmkk, wadmpr, status, remark, ST_X(geom) lon, ST_Y(geom) lat,
          pjg_gp, luas, nambef
        FROM ${tableName}
        ${combinedFilters}
        ORDER BY ${ordBy} ${ordDir}
        LIMIT $1 OFFSET $2
        `,
        filterOpts.filterValues
      );
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Terjadi kesalahan pada server" });
    }
    return res.json(queryResult.rows);
  }
}

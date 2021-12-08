import http from "http";

import isValidMultiPolygonGeom from "../../../../utils/api/isValidMultiPolygonGeom";
import { sipulauPool } from "../../../../db";
import getCurrentActiveTable from "../../../../utils/api/getCurrentActiveTable";
import getDirectusUserId from "../../../../utils/api/getDirectusUserId";

const USER_DOWNLOADS_FOLDER_ID = "45f438ab-3124-43aa-90ac-b52d1954c95b";

function postDownloadRequestToWorker(requestBody) {
  return new Promise((resolve, reject) => {
    let reqBody = JSON.stringify(requestBody);
    const req = http.request(
      {
        hostname: "worker",
        port: 8000,
        path: "/download/shp",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          if (res.statusCode !== 200) {
            reject("Worker error");
          } else {
            let parsedRes = JSON.parse(data);
            resolve(parsedRes);
          }
        });
        res.on("error", (error) => {
          reject(error);
        });
      }
    );

    req.on("error", (error) => {
      reject(error);
    });
    req.write(reqBody);
    req.end();
  });
}

export default async function downloadShpHandler(req, res) {
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

  let downloadDetails = {};

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
    aoi,
  } = parsedBody;

  // prioritize selected filter
  if (Array.isArray(selected)) {
    let validId = [];
    for (let id of selected) {
      if (Number.isInteger(id)) validId.push(id);
    }
    if (validId.length > 0) downloadDetails.selected = validId;
  } else if (typeof aoi === "object") {
    // then prioritize aoi
    if (isValidMultiPolygonGeom(aoi)) {
      downloadDetails.aoi = JSON.stringify(aoi);
    } else {
      return res.status(400).json({
        message:
          "AOI harus berbentuk geometri GeoJSON bertipe MultiPolygon yang valid",
      });
    }
  } else {
    let stringFilters = [
      [id_wilayah, "id_wilayah"],
      [wadmkd, "wadmkd"],
      [wadmkc, "wadmkc"],
      [wadmkk, "wadmkk"],
      [wadmpr, "wadmpr"],
      [nammap, "nammap"],
      [artinam, "artinam"],
      [sjhnam, "sjhnam"],
      [aslbhs, "aslbhs"],
      [status, "status"],
      [remark, "remark"],
    ];
    // id_toponim filter
    if (Number.isInteger(id_toponim)) {
      downloadDetails.id_toponim = id_toponim;
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
      downloadDetails.bbox = { xmin, ymin, xmax, ymax };
    }
    // unselected filter
    if (Array.isArray(unselected)) {
      let validId = [];
      for (let id of unselected) {
        if (Number.isInteger(id)) validId.push(id);
      }
      if (validId.length > 0) downloadDetails.unselected = validId;
    }
    // string filters
    for (const filter of stringFilters) {
      if (filter[0] !== undefined) {
        downloadDetails[filter[1]] = filter[0];
      }
    }
  }

  try {
    // check if it's already exists
    let downloadDetailsWithTableName = {
      table_name: await getCurrentActiveTable("island"),
      ...downloadDetails,
    };
    let { rows } = await sipulauPool.query(
      `
      SELECT id FROM directus_files
      WHERE storage = 'minioshp'
      AND folder = $1
      AND description::jsonb = $2
      `,
      [USER_DOWNLOADS_FOLDER_ID, downloadDetailsWithTableName]
    );

    let objectId;
    if (rows.length > 0) {
      objectId = rows[0].id;
    } else {
      let result = await postDownloadRequestToWorker(downloadDetails);
      objectId = result.object_id;
    }

    let resObj = {
      url:
        process.env.NEXT_PUBLIC_DIRECTUS_URL + `/assets/${objectId}?download`,
    };
    return res.json(resObj);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
}

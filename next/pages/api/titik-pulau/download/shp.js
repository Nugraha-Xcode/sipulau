import http from "http";

function postDownloadRequestToWorker(requestBody) {
  return new Promise((resolve, reject) => {
    let reqBody = JSON.stringify(requestBody);
    const req = http
      .request(
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
            }
            let parsedRes = JSON.parse(data);
            resolve(parsedRes);
          });
        }
      )
      .on("error", (error) => {
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

  // TODO use real user ID with authorization
  let downloadDetails = { user_id: "9b11dfb0-cf6b-4526-926d-ad0d53189f51" };

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

  // prioritize selected filter
  if (Array.isArray(selected)) {
    let validId = [];
    for (let id of selected) {
      if (Number.isInteger(id)) validId.push(id);
    }
    if (validId.length > 0) downloadDetails.selected = validId;
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
    ];
    // id_toponim filter
    if (Number.isInteger(id_toponim)) {
      downloadDetails.id_toponim = id_toponim;
    }
    // remark filter
    if (remark !== undefined) {
      if (remark === "Berpenduduk" || remark === "Tidak Berpenduduk") {
        downloadDetails.remark = remark;
      } else {
        downloadDetails.remark = remark.replace(/'/g, "''");
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
    // escape string filters
    for (const filter of stringFilters) {
      if (filter[0] !== undefined) {
        downloadDetails[filter[1]] = filter.replace(/'/g, "''");
      }
    }
  }

  try {
    let result = await postDownloadRequestToWorker(downloadDetails);
    let resObj = {
      url:
        process.env.NEXT_PUBLIC_DIRECTUS_URL +
        `/assets/${result.object_id}?download`,
    };
    return res.json(resObj);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Terjadi kesalahan pada server" });
  }
}

import http from "http"

export default function getDirectusUserId(token) {
  return new Promise((resolve, reject) => {
    const req = http.request(
      {
        hostname: "directus",
        port: 8055,
        path: "/get-user-id",
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      },
      (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          if (res.statusCode === 401) {
            reject({
              statusCode: res.statusCode,
              message: "Harap login terlebih dahulu",
            });
          } else if (res.statusCode === 200) {
            let parsedRes = JSON.parse(data);
            resolve(parsedRes);
          } else {
            reject({
              statusCode: res.statusCode,
              message: "Terjadi kesalahan pada server",
            });
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
    req.end();
  });
}

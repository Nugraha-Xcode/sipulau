import { defineHook } from "@directus/extensions-sdk";
import http from "http"

interface IInput {
  table_name?: string;
};

function setRedisFromWorker(requestBody: IInput) {
  return new Promise((resolve, reject) => {
    let reqBody = JSON.stringify(requestBody);
    const req = http.request(
      {
        hostname: "worker",
        port: 8000,
        path: "/set-active-island-table",
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

export default defineHook(({ filter }, { exceptions }) => {
  const { ServiceUnavailableException, InvalidPayloadException } = exceptions;

  filter(
    "titik_pulau_aktif.items.update",
    async function (input: IInput) {
      if (!input.table_name) {
        throw new InvalidPayloadException("Nama tabel harus memiliki isi");
      }
      try {
        await setRedisFromWorker(input)
      } catch (error) {
        throw new ServiceUnavailableException(error);
      }
      return input;
    }
  );
});

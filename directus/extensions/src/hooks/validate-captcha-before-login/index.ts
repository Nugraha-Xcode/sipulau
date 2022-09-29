import { defineHook } from "@directus/extensions-sdk";
import http from "http";
// import https from "https";

interface ILoginPayload {
  email?: string;
  password?: string;
  mode?: string;
  captchaToken?: string;
}

const reqOptions = {
  method: "POST",
  headers: {
    Host: "hcaptcha.com",
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

function validateCaptcha(captchaToken: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    if (typeof process.env.HCAPTCHA_SECRET_KEY !== "string")
      return reject("HCaptcha secret key not set");
    let reqBody = `secret=${encodeURIComponent(
      process.env.HCAPTCHA_SECRET_KEY
    )}&response=${encodeURIComponent(captchaToken)}`;

    const req = http
      .request(
        {
          hostname: "192.168.1.28",
          port: 3128,
          path: "https://hcaptcha.com/siteverify",
          ...reqOptions,
        },
        (res) => {
          let data = "";
          res.on("data", (chunk) => {
            data += chunk;
          });
          res.on("end", () => {
            if (res.statusCode !== 200) {
              reject("HCaptcha error: " + data);
            } else {
              let parsedRes = JSON.parse(data);
              resolve(parsedRes.success);
            }
          });
          res.on("error", (error) => {
            reject(error);
          });
        }
      )
      .on("error", (error) => {
        reject(error);
      });

    // const req = https
    //   .request(
    //     {
    //       hostname: "hcaptcha.com",
    //       path: "/siteverify",
    //       ...reqOptions,
    //     },
    //     (res) => {
    //       let data = "";
    //       res.on("data", (chunk) => {
    //         data += chunk;
    //       });
    //       res.on("end", () => {
    //         if (res.statusCode !== 200) {
    //           reject("HCaptcha error: " + data);
    //         } else {
    //           let parsedRes = JSON.parse(data);
    //           resolve(parsedRes.success);
    //         }
    //       });
    //       res.on("error", (error) => {
    //         reject(error);
    //       });
    //     }
    //   )
    //   .on("error", (error) => {
    //     reject(error);
    //   });

    req.write(reqBody);
    req.end();
  });
}

export default defineHook(({ filter }, { exceptions }) => {
  const { ServiceUnavailableException, InvalidPayloadException } = exceptions;

  filter("auth.login", async function (payload: ILoginPayload) {
    if (!payload.captchaToken) {
      throw new InvalidPayloadException("captchaToken required");
    }
    let isCatpchaValid = false;
    try {
      isCatpchaValid = await validateCaptcha(payload.captchaToken);
    } catch (error) {
      throw new ServiceUnavailableException(error);
    }
    if (!isCatpchaValid) {
      throw new InvalidPayloadException("Invalid captcha");
    }
    return payload;
  });
});

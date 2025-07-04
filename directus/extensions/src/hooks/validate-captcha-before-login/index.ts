import { defineHook } from "@directus/extensions-sdk";
import http from "http";
import https from "https";

interface ILoginPayload {
  email?: string;
  password?: string;
  mode?: string;
  captchaToken?: string;
}

const methodHeaders = {
  method: "POST",
  headers: {
    Host: "www.google.com",
    "Content-Type": "application/x-www-form-urlencoded",
  },
};

const proxyUrl = process.env.HTTPS_PROXY
  ? new URL(process.env.HTTPS_PROXY)
  : null;

const reqOptions = proxyUrl
  ? {
      hostname: proxyUrl.hostname,
      port: proxyUrl.port,
      path: "https://www.google.com/recaptcha/api/siteverify",
      ...methodHeaders,
    }
  : { hostname: "www.google.com", path: "/recaptcha/api/siteverify", ...methodHeaders };

const httpOrHttps = proxyUrl?.protocol === "http:" ? http : https;

function validateCaptcha(captchaToken: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    if (typeof process.env.RECAPTCHA_SECRET_KEY !== "string")
      return reject("reCAPTCHA secret key not set");
    let reqBody = `secret=${encodeURIComponent(
      process.env.RECAPTCHA_SECRET_KEY
    )}&response=${encodeURIComponent(captchaToken)}`;

    const req = httpOrHttps
      .request(reqOptions, (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          if (res.statusCode !== 200) {
            reject("reCAPTCHA error: " + data);
          } else {
            let parsedRes = JSON.parse(data);
            resolve(parsedRes.success);
          }
        });
        res.on("error", (error) => {
          reject(error);
        });
      })
      .on("error", (error) => {
        reject(error);
      });

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
    let isCaptchaValid = false;
    try {
      isCaptchaValid = await validateCaptcha(payload.captchaToken);
    } catch (error) {
      throw new ServiceUnavailableException(error);
    }
    if (!isCaptchaValid) {
      throw new InvalidPayloadException("Invalid captcha");
    }
    return payload;
  });
});
import { sipulauPool } from "../../db";
import http from "http";
import https from "https";

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

function validateCaptcha(captchaToken) {
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

export default async function feedbackHandler(req, res) {
  const { method } = req;
  if (method !== "POST") {
    return res
      .setHeader("Allow", ["POST"])
      .status(405)
      .json({ message: `Method ${method} Not Allowed` });
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

  const { nama, email, isi, captchaToken } = parsedBody;
  if (nama && email && isi && captchaToken) {
    try {
      let captchaIsValid = await validateCaptcha(captchaToken);
      if (captchaIsValid) {
        await sipulauPool.query(
          `
          INSERT INTO feedback(nama, email, isi)
          VALUES ($1, $2, $3)
          `,
          [nama, email, isi]
        );
      } else {
        return res.status(400).json({ message: "Captcha tidak valid" });
      }
      return res.status(201).json({ message: "Feedback berhasil dikirim" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Terjadi kesalahan pada server" });
    }
  } else {
    return res
      .status(400)
      .json({ message: "Nama, Email, Isi, dan Captcha harus terisi" });
  }
}
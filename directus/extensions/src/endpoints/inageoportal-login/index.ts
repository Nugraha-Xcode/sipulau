import http from "http";
import crypto from "crypto";

import { defineEndpoint } from "@directus/extensions-sdk";
import { Request } from "express";
import jwt from "jsonwebtoken";
import argon2 from "argon2";
import { nanoid } from "nanoid";
import ms from "ms";

interface IAccessToken {
  accessToken: string;
  expires: number;
}

interface ILoginDetail {
  username: string;
  password: string;
}

interface IGeoportalResponse {
  status: string;
  message: string;
}

interface IUserData {
  id: string;
}

declare global {
  namespace Express {
    interface Request {
      schema: any;
    }
  }
}

const REGISTERED_USER_ROLE_ID = "f451acfb-5dfb-40bf-9ae4-ad6d56f82717";

function postToInageoportal(
  requestBody: ILoginDetail
): Promise<IGeoportalResponse> {
  return new Promise((resolve, reject) => {
    let reqBody = JSON.stringify(requestBody);
    const req = http.request(
      {
        hostname: "10.10.160.40",
        path: "/api-otentifikasi/akun/login",
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
            // api always returns status code 200 even when password error
            reject("Terjadi masalah menghubungi INAGeoportal");
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

export default defineEndpoint((router, { exceptions, database }) => {
  const {
    InvalidCredentialsException,
    InvalidPayloadException,
    ServiceUnavailableException,
  } = exceptions;
  router.post(
    "/",
    async (req: Request<{}, IAccessToken, ILoginDetail>, res, next) => {
      if (!req.body.username || !req.body.password) {
        return next(
          new InvalidPayloadException("Username dan password harus terisi")
        );
      }
      let geoportalRes;
      try {
        geoportalRes = await postToInageoportal({
          username: req.body.username,
          password: req.body.password,
        });
      } catch (error) {
        return next(new ServiceUnavailableException(error));
      }
      if (geoportalRes.status === "success") {
        let user;
        let email = req.body.username + "@inageoportal.id";
        user = await database("directus_users")
          .select<IUserData>("id")
          .where("email", email)
          .first();

        if (!user) {
          let password = await argon2.hash(crypto.randomBytes(64));
          user = { id: crypto.randomUUID() };
          await database("directus_users").insert({
            ...user,
            email,
            password,
            first_name: req.body.username,
            role: REGISTERED_USER_ROLE_ID,
          });
        }

        const tokenPayload = {
          id: user.id,
        };

        const accessToken = jwt.sign(
          tokenPayload,
          process.env.SECRET as string,
          {
            expiresIn: process.env.ACCESS_TOKEN_TTL,
            issuer: "directus",
          }
        );

        const refreshToken = nanoid(64);
        const refreshTokenExpiration = new Date(
          Date.now() + ms(process.env.REFRESH_TOKEN_TTL as string)
        );

        await database("directus_sessions").insert({
          token: refreshToken,
          user: user.id,
          expires: refreshTokenExpiration,
          ip: req.accountability?.ip,
          user_agent: req.accountability?.userAgent,
          data: null,
        });

        await database("directus_sessions")
          .delete()
          .where("expires", "<", new Date());

        await database("directus_users")
          .update({ last_access: new Date() })
          .where({ id: user.id });

        res.cookie(
          process.env.REFRESH_TOKEN_COOKIE_NAME as string,
          refreshToken,
          {
            expires: refreshTokenExpiration,
            secure:
              process.env.REFRESH_TOKEN_COOKIE_SECURE === "true" ? true : false,
            httpOnly: true,
            sameSite: "lax",
          }
        );

        return res.json({
          accessToken,
          expires: ms(process.env.ACCESS_TOKEN_TTL as string),
        });
      } else {
        return next(
          new InvalidCredentialsException("Username atau password tidak valid")
        );
      }
    }
  );
});

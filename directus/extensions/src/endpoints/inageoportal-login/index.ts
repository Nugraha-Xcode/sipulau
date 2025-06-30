import https from "https";
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

interface IAbstractLoginDetail {
  username: string;
  password: string;
}

interface ILoginDetail extends IAbstractLoginDetail {
  captchaToken: string;
}

interface IInageoportalLoginDetail {
  email: string;
  password: string;
  token: string;
}

interface IGeoportalResponse {
  uuid?: string;
  email?: string;
  fullname?: string;
  phone?: string;
  roles?: string[];
  accessToken?: string;
  refreshToken?: string;
  status?: string;
  message?: string;
}

interface IUserData {
  id: string;
  external_identifier?: string;
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
  requestBody: IInageoportalLoginDetail
): Promise<IGeoportalResponse> {
  return new Promise((resolve, reject) => {
    try {
      console.log("🔍 Starting INAGeoportal login request...");
      console.log("🌐 INA_GEO_API_URL:", process.env.INA_GEO_API_URL);
      
      const reqBody = JSON.stringify(requestBody);
      console.log("📝 Request body:", { 
        email: requestBody.email,
        password: "***",
        token: requestBody.token?.substring(0, 20) + "..." 
      });
      
      const baseUrl = process.env.INA_GEO_API_URL || "https://tanahair.indonesia.go.id/api-inageo";
      const fullUrl = `${baseUrl}/auth/signin`;
      console.log("🔗 Full URL:", fullUrl);
      
      const apiUrl = new URL(fullUrl);
      console.log("🏗️ Parsed URL:", {
        hostname: apiUrl.hostname,
        port: apiUrl.port || 443,
        pathname: apiUrl.pathname
      });

      const requestOptions = {
        hostname: apiUrl.hostname,
        port: apiUrl.port || 443,
        path: apiUrl.pathname,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "User-Agent": "Sipulau-App/1.0",
        },
        timeout: 30000,
      };

      console.log("⚙️ Request options:", requestOptions);

      const req = https.request(requestOptions, (res) => {
        console.log("📡 Response status:", res.statusCode);
        console.log("📋 Response headers:", res.headers);
        
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        
        res.on("end", () => {
          console.log("📦 Response data:", data);
          
          try {
            if (res.statusCode !== 200) {
              console.log("❌ Non-200 status code:", res.statusCode);
              if (
                res.statusCode !== 500 &&
                res.headers["content-type"]?.includes("application/json")
              ) {
                const parsedRes = JSON.parse(data);
                console.log("🔴 Parsed error response:", parsedRes);
                reject(parsedRes);
              } else {
                console.log("🔴 Generic error response");
                reject(`HTTP ${res.statusCode}: Terjadi masalah menghubungi INAGeoportal - ${data}`);
              }
            } else {
              const parsedRes = JSON.parse(data);
              console.log("✅ Success response:", parsedRes);
              resolve(parsedRes);
            }
          } catch (parseError: any) {
            console.log("🔴 JSON parse error:", parseError);
            reject(`Response parsing error: ${parseError.message}`);
          }
        });
        
        res.on("error", (error: any) => {
          console.log("🔴 Response error:", error);
          reject(`Response error: ${error.message}`);
        });
      });

      req.on("error", (error: any) => {
        console.log("🔴 Request error:", error);
        reject(`Request error: ${error.message}`);
      });

      req.on("timeout", () => {
        console.log("⏰ Request timeout");
        req.destroy();
        reject("Request timeout: INAGeoportal tidak merespons dalam 30 detik");
      });

      console.log("📤 Sending request...");
      req.write(reqBody);
      req.end();
      
    } catch (error: any) {
      console.log("🔴 Unexpected error in postToInageoportal:", error);
      reject(`Unexpected error: ${error.message}`);
    }
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
      console.log("🚀 INAGeoportal login endpoint called");
      console.log("📋 Environment check:", {
        INA_GEO_API_URL: process.env.INA_GEO_API_URL,
        RECAPTCHA_SECRET_KEY: process.env.RECAPTCHA_SECRET_KEY ? "✅ Set" : "❌ Not set",
        SECRET: process.env.SECRET ? "✅ Set" : "❌ Not set"
      });
      
      try {
        if (!req.body.username || !req.body.password || !req.body.captchaToken) {
          console.log("❌ Missing required fields:", {
            username: !!req.body.username,
            password: !!req.body.password,
            captchaToken: !!req.body.captchaToken
          });
          return next(
            new InvalidPayloadException(
              "username, password, dan captchaToken harus terisi"
            )
          );
        }

        console.log("📝 Login attempt for user:", req.body.username);
        
        let geoportalRes: IGeoportalResponse;
        try {
          geoportalRes = await postToInageoportal({
            email: req.body.username,
            password: req.body.password,
            token: req.body.captchaToken,
          });
        } catch (error: any) {
          console.log("🔴 INAGeoportal API error:", error);
          if (error && typeof error === 'object' && error.message) {
            return next(new InvalidPayloadException(error.message));
          } else if (typeof error === 'string') {
            return next(new ServiceUnavailableException(error));
          } else {
            return next(new ServiceUnavailableException("Terjadi kesalahan saat menghubungi INAGeoportal"));
          }
        }

        console.log("✅ INAGeoportal response received:", geoportalRes);

        if (geoportalRes.uuid && geoportalRes.email) {
          try {
            console.log("🎯 Processing successful INAGeoportal login...");
            
            // REFACTOR: Gunakan email asli dari INAGeoportal response
            const realEmail = geoportalRes.email.trim().toLowerCase();
            const externalId = geoportalRes.uuid;
            
            console.log("📧 Using real email from INAGeoportal:", realEmail);
            console.log("🆔 External identifier (UUID):", externalId);
            
            // Cek user berdasarkan email asli ATAU external_identifier
            let user = await database("directus_users")
              .select<IUserData>("id", "external_identifier")
              .where("email", realEmail)
              .orWhere("external_identifier", externalId)
              .first();

            if (!user) {
              console.log("👤 Creating new user with real email:", realEmail);
              let password = await argon2.hash(crypto.randomBytes(64));
              user = { id: crypto.randomUUID() };
              
              console.log("📝 Inserting user data:", {
                id: user.id,
                email: realEmail,
                first_name: geoportalRes.fullname || "INAGeoportal User",
                external_identifier: externalId,
                role: REGISTERED_USER_ROLE_ID
              });
              
              await database("directus_users").insert({
                ...user,
                email: realEmail,                              // Email asli dari INAGeoportal
                password,
                first_name: geoportalRes.fullname || "INAGeoportal User",
                external_identifier: externalId,              // UUID dari INAGeoportal
                role: REGISTERED_USER_ROLE_ID,
                status: "active",
                // Optional: tambah metadata
                title: geoportalRes.roles?.[0] || "ROLE_MASYARAKAT"
              });
              
              console.log("✅ New INAGeoportal user created successfully");
            } else {
              console.log("👤 Existing user found:", user.id);
              
              // Update external_identifier jika belum ada (untuk existing users)
              if (!user.external_identifier) {
                console.log("🔄 Updating external_identifier for existing user");
                await database("directus_users")
                  .update({ 
                    external_identifier: externalId,
                    last_access: new Date()
                  })
                  .where({ id: user.id });
              } else {
                // Update last access
                await database("directus_users")
                  .update({ last_access: new Date() })
                  .where({ id: user.id });
              }
            }

            console.log("🔐 Creating JWT token...");
            const tokenPayload = {
              id: user.id,
              role: REGISTERED_USER_ROLE_ID,
              app_access: false,
              admin_access: false,
            };
            
            console.log("🎫 Token payload:", tokenPayload);

            const accessToken = jwt.sign(
              tokenPayload,
              process.env.SECRET as string,
              {
                expiresIn: process.env.ACCESS_TOKEN_TTL,
                issuer: "directus",
              }
            );
            
            console.log("✅ JWT token created, length:", accessToken.length);

            const refreshToken = nanoid(64);
            const refreshTokenExpiration = new Date(
              Date.now() + ms(process.env.REFRESH_TOKEN_TTL as string)
            );
            
            console.log("💾 Creating session...");
            await database("directus_sessions").insert({
              token: refreshToken,
              user: user.id,
              expires: refreshTokenExpiration,
              ip: req.accountability?.ip,
              user_agent: req.accountability?.userAgent,
            });
            
            console.log("✅ Session created");

            console.log("🧹 Cleaning old sessions...");
            await database("directus_sessions")
              .delete()
              .where("expires", "<", new Date());

            console.log("🍪 Setting cookie...");
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

            console.log("✅ Login successful for user:", user.id);
            console.log("🎉 INAGeoportal user data synced:", {
              uuid: geoportalRes.uuid,
              email: geoportalRes.email,
              fullname: geoportalRes.fullname,
              roles: geoportalRes.roles,
              syncedToDirectus: {
                userId: user.id,
                email: realEmail,
                externalId: externalId
              }
            });
            
            const responsePayload = {
              accessToken,
              expires: ms(process.env.ACCESS_TOKEN_TTL as string),
            };
            
            console.log("📤 Sending success response:", {
              accessToken: accessToken.substring(0, 20) + "...",
              expires: responsePayload.expires
            });
            
            return res.json(responsePayload);
            
          } catch (dbError: any) {
            console.log("🔴 Database error during user processing:", dbError);
            return next(new ServiceUnavailableException(`Database error: ${dbError.message}`));
          }
        } else {
          console.log("❌ INAGeoportal login failed - no uuid/email in response:", geoportalRes);
          return next(
            new InvalidCredentialsException("Username atau password tidak valid")
          );
        }
      } catch (error: any) {
        console.log("🔴 Unexpected error in login endpoint:", error);
        const errorMessage = error && typeof error === 'object' && error.message 
          ? error.message 
          : "Unexpected error occurred";
        return next(new ServiceUnavailableException(`Unexpected error: ${errorMessage}`));
      }
    }
  );
});
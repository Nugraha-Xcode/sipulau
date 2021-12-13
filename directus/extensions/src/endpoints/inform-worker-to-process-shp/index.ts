import http from "http";

import { defineEndpoint } from "@directus/extensions-sdk";
import { Request } from "express";

interface IAccountability {
  user: string;
  role: string;
  admin: boolean;
  app: boolean;
  ip: string;
  userAgent: string;
  permissions: any[];
}

interface IUploadRequestDetail {
  user_id: string;
  data_type: string;
  object_key: string;
}

interface IBasicMessage {
  message: string;
}

interface IRequestBody {
  dataType: string;
  objectKey: string;
}

interface IReject {
  status: number;
  message: string;
}

declare global {
  namespace Express {
    interface Request {
      accountability: IAccountability;
    }
  }
}

function postProcessRequestToWorker(requestBody: IUploadRequestDetail) {
  return new Promise((resolve, reject) => {
    let reqBody = JSON.stringify(requestBody);
    const req = http.request(
      {
        hostname: "worker",
        port: 8000,
        path: "/upload/shp",
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
          if (res.statusCode === 200) {
            let parsedRes = JSON.parse(data);
            resolve(parsedRes);
          } else if (
            res.statusCode &&
            res.statusCode >= 400 &&
            res.statusCode < 500
          ) {
            let parsedRes = JSON.parse(data);
            reject({ status: res.statusCode, message: parsedRes.message });
          } else {
            reject({ status: 500, message: "Worker error" });
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

export default defineEndpoint((router, { exceptions }) => {
  const {
    InvalidCredentialsException,
    ForbiddenException,
    InvalidPayloadException,
    ServiceUnavailableException,
  } = exceptions;
  router.post(
    "/",
    async (req: Request<{}, IBasicMessage, IRequestBody>, res, next) => {
      if (!req.accountability) {
        return next(new InvalidCredentialsException());
      }
      if (!req.accountability.admin) {
        return next(new ForbiddenException());
      }
      if (!req.body.objectKey || !req.body.dataType) {
        return next(new InvalidPayloadException());
      }
      try {
        await postProcessRequestToWorker({
          user_id: req.accountability.user,
          data_type: req.body.dataType,
          object_key: req.body.objectKey,
        });
      } catch (error) {
        let rejectError: IReject = error as IReject;
        if (rejectError.status >= 400 && rejectError.status < 500) {
          return next(new InvalidPayloadException(rejectError.message));
        } else {
          return next(new ServiceUnavailableException("Worker error"));
        }
      }
      res.json({ message: "Proses selesai" });
    }
  );
});

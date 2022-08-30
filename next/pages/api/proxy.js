import http from "http";
import httpProxy from "http-proxy";

const proxyServer =
  process.env.NODE_ENV === "production"
    ? null
    : httpProxy.createProxyServer({});

function proxyRequest(url, method, origRes) {
  const host = new URL(url).host;
  return new Promise((resolve, reject) => {
    const req = http
      .request(
        {
          hostname: "192.168.1.28",
          port: 3128,
          path: url,
          method,
          headers: {
            Host: host,
          },
        },
        (res) => {
          res.pipe(origRes);
          res.on("end", () => {
            resolve();
          });
          res.on("error", (error) => {
            reject(error);
          });
        }
      )
      .on("error", (error) => {
        reject(error);
      });
    req.end();
  });
}

function proxyMiddleware(req, res, httpProxyOptions) {
  return new Promise((resolve, reject) => {
    proxyServer
      .once("proxyRes", resolve)
      .web(req, res, httpProxyOptions, (error) => {
        reject();
      });
  });
}

export default async function proxyHandler(req, res) {
  const { proxy } = req.query;
  if (!proxy) {
    return res.status(400).json({ message: "Proxy query is required" });
  }
  try {
    if (process.env.NODE_ENV === "production") {
      await proxyRequest(proxy, req.method, res);
    } else {
      await proxyMiddleware(req, res, {
        target: proxy,
        ignorePath: true,
        changeOrigin: true,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: `Proxy error` });
  }
}

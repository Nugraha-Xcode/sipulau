import http from "http";

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
          res.pipe(origRes)
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

export default async function proxyHandler(req, res) {
  const { proxy } = req.query;
  if (!proxy) {
    return res.status(400).json({ message: "Proxy query is required" });
  }
  try {
    await proxyRequest(proxy, req.method, res)
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: `Proxy error` });
  }
}

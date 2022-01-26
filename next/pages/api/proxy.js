import httpProxy from "http-proxy";

const proxyServer = httpProxy.createProxyServer({});

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
    await proxyMiddleware(req, res, {
      target: { hostname: "192.168.1.28", port: 3128, path: proxy },
      ignorePath: true,
      changeOrigin: true,
      toProxy: true,
    });
  } catch (error) {
    return res.status(500).json({ message: `Proxy error` });
  }
}

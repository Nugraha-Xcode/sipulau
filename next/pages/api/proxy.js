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
      target: proxy,
      ignorePath: true,
      changeOrigin: true,
    });
  } catch (error) {
    return res.status(500).json({ message: `Proxy error` });
  }
}

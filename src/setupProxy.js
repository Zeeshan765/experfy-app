const { createProxyMiddleware } = require("http-proxy-middleware");
const dotenv = require("dotenv").config();

const LOGIN_MATCHER = process.env.REACT_APP_LOGIN_MATCHER;
const LOGIN_API_URL = process.env.REACT_APP_LOGIN_URL;

module.exports = function (app) {
  app.use(
    LOGIN_MATCHER,
    createProxyMiddleware({
      target: LOGIN_API_URL,
      changeOrigin: true,
      toProxy: true,
      hostRewrite: true,
      autoRewrite: true,
      followRedirects: true,
      pathRewrite: { [LOGIN_MATCHER]: "" },
    })
  );
};

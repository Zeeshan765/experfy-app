import express from "express";
import payload from "payload";
require("dotenv").config();
const app = express();
import { createProxyMiddleware } from "http-proxy-middleware";

const LOGIN_MATCHER = "/login";
const LOGIN_API_URL = "https://landing-ui-service.develop.experfy.com";

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET ?? "1S2Xf3SF1SAA1UZR2SX",
  mongoURL: process.env.MONGODB_URI ?? "mongodb://localhost/experfy-payload/",
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    console.log("Payload Admin URL: ", payload.getAdminURL());
  },
});

const router = express.Router();

router.use(payload.authenticate);

app.use(
  LOGIN_MATCHER,
  createProxyMiddleware({
    target: LOGIN_API_URL,
    changeOrigin: true,
  })
);

router.post(LOGIN_API_URL + LOGIN_MATCHER, (req, res) => {
  req.params["email"] = "ali.raza@algorepublic.com";
  req.params["password"] = "ars@123456";
  
  res.send(req.params);
});
// Add your own express routes here

app.listen(process.env.PORT);

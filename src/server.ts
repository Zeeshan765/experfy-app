import express from 'express';
import payload from 'payload';
import { createProxyMiddleware } from 'http-proxy-middleware';

// let cors = require('cors');
require('dotenv').config();
const app = express();
const LOGIN_API_URL = 'https://landing-ui-service.develop.experfy.com/login';

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET ?? '1S2Xf3SF1SAA1UZR2SX',
  mongoURL: process.env.MONGODB_URI ?? 'mongodb://localhost/experfy-payload/',
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
  },
});
const router = express.Router();
router.use(
  createProxyMiddleware({
    target: LOGIN_API_URL,
    changeOrigin: true,
    secure: false,
  })
);

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

app.listen(process.env.PORT);

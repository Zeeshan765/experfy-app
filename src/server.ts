import axios from 'axios';
import express from 'express';
import payload from 'payload';
require('dotenv').config();
const app = express();

// app.post(LOGIN_API_URL + '/login-api', (req, res) => {

// })
// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET ?? '1S2Xf3SF1SAA1UZR2SX',
  mongoURL: process.env.MONGODB_URI ?? 'mongodb://localhost/experfy-payload/',
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)

  },

})

// Add your own express routes here

app.listen(process.env.PORT);

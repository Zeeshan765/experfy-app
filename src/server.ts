import express from 'express';
import payload from 'payload';
require('dotenv').config();
const app = express();
import { createProxyMiddleware } from 'http-proxy-middleware';

const router = express.Router();

router.use((req, res, next) => {
  console.log('router.use');
  console.log('req.params', req.params);
  console.log('req.body', req.body);
  console.log('req.query', req.query);
  next();
});
// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});


//Setup Prxoxy
function setupLoginRequestProxy() {
  const LOGIN_MATCHER = process.env.REACT_APP_LOGIN_MATCHER;
  const LOGIN_API_URL = process.env.REACT_APP_LOGIN_URL;

  console.log("jjdbfjbfbdfbjfdbjdjfdb")
 
  console.log("Login Matcher--------------: ", `${LOGIN_MATCHER}`, "Login API URL: ", LOGIN_API_URL);






app.use(
  '/login-api',
  createProxyMiddleware({
    target: 'https://landing-ui-service.develop.experfy.com',
    changeOrigin: true,
    toProxy: true,
    followRedirects: true,
  autoRewrite: true,
  pathRewrite: { ['/login-api']: "" },
  // pathRewrite:function (path, req) {
  //   console.log("pathRewrite",req.hostname)
  //   return path.replace('/login-api', '');


  // },
  // hostRewrite: true,
    
  })
);
}


// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET ?? '1S2Xf3SF1SAA1UZR2SX',
  mongoURL: process.env.MONGODB_URI ?? 'mongodb://localhost/experfy-payload/',
  express: app,
        
 
  onInit: () => {
    
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    console.log('Payload Admin URL: ', payload.getAdminURL());
    console.log("Login Matcher: ", process.env.REACT_APP_LOGIN_MATCHER , "Login API URL: ", process.env.REACT_APP_LOGIN_URL);
  },
});



// app.use(
//   LOGIN_MATCHER,
//   createProxyMiddleware({
//     target: LOGIN_API_URL,
//     changeOrigin: true,
//   })
// );

router.post('https://landing-ui-service.develop.experfy.com/login-api', (req, res) => {
  req.params['email'] = 'ali.raza@algorepublic.com';
  req.params['password'] = 'ars@123456';
  res.send(req.params);
  console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,")
  console.log(res);
});
// Add your own express routes here

function start(){
  setupLoginRequestProxy();
  app.listen(process.env.PORT,()=>
  // console.log(`Server running on port ${process.env.PORT}`)
  console.log(" setupLoginRequestProxy();",setupLoginRequestProxy())
  );
}

start();
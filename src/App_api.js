import axios from 'axios';
import payload from 'payload';
import { AUTHORIZATION, CAREER_PORTAL_API_URL } from './globalConstants';
// const { createProxyMiddleware } = require('http-proxy-middleware');

const LOGIN_MATCHER = '/login';
const LOGIN_API_URL = 'https://landing-ui-service.develop.experfy.com';

// module.exports = function (app) {
//   app.use(
//     LOGIN_MATCHER,
//     createProxyMiddleware({
//       target: LOGIN_API_URL,
//       changeOrigin: true,
//       toProxy: true,
//       hostRewrite: true,
//       autoRewrite: true,
//       followRedirects: true,
//       pathRewrite: { [LOGIN_MATCHER]: '' },
//     })
//   );
// };

// console.log("Auth", AUTHORIZATION);
export const getTokenApi = async (setToken) => {
  try {
    let response = await axios.post(LOGIN_API_URL + '/login', {
      email: 'ali.raza@algorepublic.com',
      password: 'ars@123456',
    });

    if (response.status == 200) {
      localStorage.setItem('token', response.data.access_token);
      setToken(response.data.access_token);
    }
    payload.logger(response['data']);
  } catch (error) {
    // console.log(error);
  }
};

export const getCompanyPortalData = async (setAdminPortal, setLoading) => {
  // setLoading(true);
  try {
    let response = await axios.get(
      CAREER_PORTAL_API_URL +
        `api/v1/admin/portals/${localStorage.getItem('id')}`,
      {
        headers: {
          Authorization: AUTHORIZATION,
        },
      }
    );

    if (response.status == 200) {
      setAdminPortal(response.data);
    }
    setLoading(false);
  } catch (error) {
    setLoading(false);
  }
};

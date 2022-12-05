import React, { createContext, useState, useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useConfig } from 'payload/components/utilities';
import ExperfyNavbar from './components/Nav/ExperfyNavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export const Context = createContext({} as any);

const MyProvider: React.FC<any> = ({ children }) => {
  const {
    routes: { admin: adminRoute },
  } = useConfig();

  const [adminPortal, setAdminPortal] = useState({});
  const [brands, setBrands] = useState(['hey']);
  const [seo_setting, setSeo_Setting] = useState({});

  const value = {
    adminPortal,
    setAdminPortal,
    brands,
    setBrands,
    seo_setting,
    setSeo_Setting,
    adminRoute,
  };

  const LOGIN_URL = process.env.REACT_APP_LOGIN_MATCHER;

  const getTokenApi = async () => {
    console.log('getToken Api Called');
    try {
      let response = await axios.post(LOGIN_URL + '/login', {
        email: 'ali.raza@algorepublic.com',
        password: 'ars@123456',
      });
      console.log('response ==========', response);

      if (response.status == 200) {
        localStorage.setItem('token', response.data.access_token);
        console.log(
          'Token is Stored in Local Storage',
          response.data.access_token
        );
        // setToken(response.data.access_token);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  getTokenApi();

  return (
    <BrowserRouter>
      <ExperfyNavbar />
      <Context.Provider value={value}>{children}</Context.Provider>
    </BrowserRouter>
  );
};

export default MyProvider;

export const useCustom = () => useContext(Context);

// @ts-ignore
import React, { createContext, useState, useContext } from "react";
import dotenv from "dotenv";
import { BrowserRouter } from "react-router-dom";
import { useConfig } from "payload/components/utilities";
import ExperfyNavbar from "./components/Nav/ExperfyNavBar";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Store from "./reducer/store";

export const Context = createContext({} as any);

const MyProvider: React.FC<any> = ({ children }) => {
  const {
    routes: { admin: adminRoute },
  } = useConfig();

  const [adminPortal, setAdminPortal] = useState({});
  const [brands, setBrands] = useState(["hey"]);
  const [seo_setting, setSeo_Setting] = useState({});
  const [selectedPageCode, setSelectedPageCode] = useState("1234");
  // const setSelectedPageCode = (id) => {
  //   setPageId(id);
  // };

  const value = {
    adminPortal,
    setAdminPortal,
    brands,
    setBrands,
    seo_setting,
    setSeo_Setting,
    adminRoute,
    setSelectedPageCode,
    selectedPageCode,
  };

  // const LOGIN_URL = 'https://landing-ui-service.develop.experfy.com/login';

  // const getTokenApi = async () => {
  //   console.log('getToken Api Called: ' + LOGIN_URL );
  //   try {
  //     let response = await axios.post(LOGIN_URL, {
  //       Headers: {
  //         'Content-Type': 'application/json',
  //         'access-control-allow-origin': '*',
  //       },
  //       email: 'ali.raza@algorepublic.com',
  //       password: 'ars@123456',
  //     });
  //     console.log('response ==========', response);

  //     if (response.status == 200) {
  //       localStorage.setItem('token', response.data.access_token);
  //       console.log(
  //         'Token is Stored in Local Storage',
  //         response.data.access_token
  //       );
  //       // setToken(response.data.access_token);
  //     }
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // };

  // getTokenApi();

  return (
    <Provider store={Store}>
      <BrowserRouter>
        <ExperfyNavbar />
        <Context.Provider value={value}>{children}</Context.Provider>
      </BrowserRouter>
    </Provider>
  );
};

export default MyProvider;

export const useCustom = () => useContext(Context);

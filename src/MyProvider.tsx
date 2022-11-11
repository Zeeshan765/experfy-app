import React, { createContext, useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { useConfig } from "payload/components/utilities";

// type CustomContext = {
//   adminPortal;
//   setAdminPortal;
//   brands;
//   setBrands;
//   seo_setting;
//   setSeo_Setting;
// };

export const Context = createContext({} as any);

const MyProvider: React.FC<any> = ({ children }) => {
  const {
    routes: { admin: adminRoute },
  } = useConfig();

  const [adminPortal, setAdminPortal] = useState({});
  const [brands, setBrands] = useState(["hey"]);
  const [seo_setting, setSeo_Setting] = useState({});

  // const [globalState,setGlobalState] = useState({

  //   adminPortal:{},
  //   brands:["pepsi"],
  //   seo_setting:{},
  // })

  // setCheck((prev) => ({
  //   ...prev,
  //   adminPortal: {
  //     ...prev.adminPortal,
  //     name: "ammar",
  //   },
  // }));

  const value = {
    adminPortal,
    setAdminPortal,
    brands,
    setBrands,
    seo_setting,
    setSeo_Setting,
    adminRoute
  };

  return (
    <BrowserRouter>
      <Context.Provider value={value} >{children}</Context.Provider>
    </BrowserRouter>
  );
};

export default MyProvider;

export const useCustom = () => useContext(Context);

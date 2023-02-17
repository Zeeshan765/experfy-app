import React, { createContext, useState, useContext } from 'react';
type CustomContext = {
  getAssets;
  setAssets;
};
const Context = createContext({} as CustomContext);
const AssetsProvider: React.FC<any> = ({ children }) => {
  const [getAssets, setAssets] = useState([]);
  const value = {
    getAssets,
    setAssets,
  };
  console.log('Assets provider called');
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
export default AssetsProvider;
export const useCustom = () => useContext(Context);
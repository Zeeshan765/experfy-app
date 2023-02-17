//@ts-ignore
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useConfig, useAuth } from 'payload/components/utilities';
import axios from 'axios';
export const StyleContext = createContext({} as any);
const GetDefaultStyles: React.FC<any> = ({ children }) => {
  const [defaultStyles, setDefaultStyles] = useState([]);
  const [userDefaultStyleString, setUserDefaultStyleString] = useState('');
  const { user } = useAuth();
  const { serverURL } = useConfig();
  useEffect(() => {
    if (user !== undefined) {
      fetchUserDetail();
    }
  }, [user]);
  const fetchUserDetail = async () => {
    let apiEndpoint = `${serverURL}/api/users/${user.id}`;
    try {
      const res = await axios.get(apiEndpoint);
      const { defaultStyle } = res.data;
      // setDefaultStyles(defaultStyle);
      // let allStyle = '';
      // let styleString = '';
      // for (const [tagname, styleObj] of Object.entries(defaultStyle)) {
      //   for (const [key, value] of Object.entries(styleObj)) {
      //     styleString += `${key} : ${value};`;
      //   }
      //   let final = `${tagname} {${styleString}}`;
      //   allStyle += final;
      // }
      // setUserDefaultStyleString(allStyle);
      console.log('defaultStyle', defaultStyle);
      setDefaultStyles(defaultStyle);
    } catch (error) {
      console.error(error);
      return error;
    }
  };
  const getStyle = (name: string) => {
    const filteredStyle = defaultStyles.filter((el) => el.name === name);
    let styleString = '';
    if (filteredStyle.length > 0) {
      const { name, style } = filteredStyle[0];
      let styleString = '';
      for (const [key, value] of Object.entries(style)) {
        styleString += `${key} : ${value};`;
      }
      let final = `${name} {${styleString}}`;
      // console.log('final', final);
      return (styleString = final);
    }
    return styleString;
  };
  const value = {
    userDefaultStyleString,
    getStyle,
    defaultStyles,
  };
  return (
    <StyleContext.Provider value={value}>{children}</StyleContext.Provider>
  );
};
export default GetDefaultStyles;
export const useCustom = () => useContext(StyleContext);

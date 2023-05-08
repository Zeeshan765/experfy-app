//@ts-ignore
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useConfig, useAuth } from 'payload/components/utilities';
import axios from 'axios';
export const UserContext = createContext({} as any);
const GetUserData: React.FC<any> = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const { user } = useAuth();
  const { serverURL } = useConfig();

  useEffect(() => {
    if (user?.id !== undefined) {
      fetchUserDetail();
    }
  }, [user?.id]);

  const fetchUserDetail = async () => {
    try {
      let apiEndpoint = `${serverURL}/api/users/${user.id}`;
      const res = await axios.get(apiEndpoint);
      const { data } = res;
      console.log('data', data)
      setUserData(data);
    } catch (error) {
      console.error(error);
      return error;
    }
  };
  useEffect(() => {
    console.log('user', user);
    if (user?.id !== undefined) {
      fetchUserDetail();
    }
  }, [user?.id]);


  

  const value = {
    userData,
    setUserData,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
export default GetUserData;
export const useCustom = () => useContext(UserContext);

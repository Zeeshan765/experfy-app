//@ts-ignore
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useConfig } from 'payload/components/utilities';
import axios from 'axios';
export const DataContext = createContext({} as any);
const GetSectionData: React.FC<any> = ({ children }) => {
  const [sectionData, setSectionData] = useState([]);
  const [filtered,setFiltered] = useState("");
  const { serverURL } = useConfig();

  useEffect(() => {
    fetchSections();
  }, []);

  const fetchSections = async () => {
    try {
      let apiEndpoint = `${serverURL}/api/section-save`;
      const res = await axios.get(apiEndpoint);
      const { docs } = res.data;
      console.log('hello world', docs);
      setSectionData(docs);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSectionDetail = (parem) => {
 
    const filtered = sectionData.filter((el) => el.sectionTitle === parem);
    setFiltered(filtered?.sectionTitle)
    

    let res = {};
    if (filtered.length > 0) {
      res = {
        found: true,
        data: {...filtered[0]},
        filtering: filtered[0],
      };
    } else {
      res = {
        found: false,
        data: null,
        filtering: {},
      };
    }
    return res;
  };

  const value = {
    fetchSectionDetail,
    sectionData,

  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
export default GetSectionData;
export const useCustom = () => useContext(DataContext);

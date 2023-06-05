//@ts-ignore
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useConfig } from 'payload/components/utilities';
import axios from 'axios';
import { apiEndPoint } from '../services';
export const HeaderContext = createContext({} as any);
const GetHeaderData: React.FC<any> = ({ children }) => {
  const [headerNav, setHeaderNav] = useState('');
  const { serverURL } = useConfig();

  useEffect(() => {
    fetchHeaderBlock();
  }, []);


  const fetchHeaderBlock = async () => {
    axios
      .get(`${serverURL}/api/mega-menu`)
      .then((response) => {
        const { docs } = response.data;
        const blockId = 'header';
        const headerLinksItem = docs.filter(
          (el: { menu_section: string }) => el.menu_section === blockId
        );
        if (headerLinksItem.length > 0) {
          let headerLinks = headerLinksItem[0];
          const { nav } = headerLinks;
          console.log('nav', nav);
          const filteredNav = nav.filter((el) => el.link.type === 'page');
          setHeaderNav(filteredNav);

         
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchPageDetails = async (pageId) => {
   
    const res = await axios({
      method: 'get',
      url: `${apiEndPoint}/pages/${pageId}`,
    });
    const { pageCode } = res.data;

    if (pageCode) {
      return pageCode;
    }
  };

  const fetchHeaderId = async (param) => {
    console.log('param', param);

    console.log('headerNav', headerNav);
    const filtered = headerNav.filter(({ link }) => link.label === param);
    console.log('filtered', filtered);
    
    if (filtered.length > 0) {
      const { id } = filtered[0].link.page;
      return fetchPageDetails(id);
    } else {
      return false;
    }
  };

  const value = {
    fetchHeaderId,
  };
  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
};
export default GetHeaderData;
export const useCustom = () => useContext(HeaderContext);

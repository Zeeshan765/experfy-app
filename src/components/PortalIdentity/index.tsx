import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Link, Tab, Tabs, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import BasicInformation from './BasicInformation';
import SeoSettings from './SeoSettings';
import { useParams } from 'react-router-dom';
// import PortalSidebar from "./PortalSidebar";
// import { useLocation } from 'react-router-dom';
import { Context } from '../../MyProvider';
import { DefaultTemplate } from 'payload/components/templates';
import { Eyebrow } from 'payload/components/elements';

const useStyles = makeStyles({
  mainTabs: {
    color: '#000',
    borderBottom: '1px solid #d1dbe3',
    padding: '1.5rem 2rem 0',
    uppercase: 'false',
  },
  
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const PortalIdentity: React.FC = (props) => {



    const {
        adminPortal,
        setAdminPortal,
        brands,
        setBrands,
        seo_setting,
        setSeo_Setting,
    } = useContext(Context);

  const { id } = useParams();
  const [propsdata, setPropsdata] = useState('');

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const breadcrumbs = [
    <Link key="1">Pepsi Careers</Link>,
    <Typography key="2">Portal Identity</Typography>,
  ];

  const getUserData = async () => {
    try {
      const res = await fetch(
        'http://localhost:3000/api/basic-portal-identity'
      );
      const data = await res.json();

      const newdata = data.docs.filter((el) => el.id === id)[0];
      setPropsdata(newdata);
    } catch (e) {
      console.error(e);
    }
  };

  console.log('propsdata', propsdata);

  useEffect(() => {
    id?.length > 0 && getUserData();
  }, [id]);

  return (
    <DefaultTemplate>
      <Eyebrow />
      <div className="main__content">
        <Box>
          <Box className={classes.mainTabs}>
            <Tabs value={value} onChange={handleChange} aria-label="tabs">
              <Tab
                style={{ fontWeight: '600', fontSize: '1rem' }}
                label="Basic Information"
                
                {...a11yProps(0)}
              />
              <Tab
                style={{ fontWeight: '600', fontSize: '1rem' }}
                label="SEO Settings"
                
                {...a11yProps(1)}
              />
              <Tab
                style={{ fontWeight: '600', fontSize: '1rem' }}
                label="Brands"
                
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <BasicInformation
              adminPortal={adminPortal}
              setAdminPortal={setAdminPortal}
              propsdata={propsdata}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <SeoSettings
              adminPortal={adminPortal}
              setAdminPortal={setAdminPortal}
              setSeo_Setting={setSeo_Setting}
              propsdata={propsdata}
            />
          </TabPanel>
          {/* <TabPanel value={value} index={2}>
            <Brands
              adminPortal={adminPortal}
              setAdminPortal={setAdminPortal}
              setBrands={setBrands}
              brands={brands}
            />
          </TabPanel> */}
        </Box>
      </div>
    </DefaultTemplate>
  );
}
export default PortalIdentity;

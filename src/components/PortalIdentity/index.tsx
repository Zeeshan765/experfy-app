import React, { useEffect, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Link, Tab, Tabs, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import BasicInformation from './BasicInformation';
import SeoSettings from './SeoSettings';
import Brands from './Brands';
import { useParams } from 'react-router-dom';
import { Context } from '../../MyProvider';
import { DefaultTemplate } from 'payload/components/templates';
import { Eyebrow } from 'payload/components/elements';
import '../../styles/scss/index.scss';
import axios from 'axios';

const useStyles = makeStyles({
  mainTabs: {
    color: '#000',
    borderBottom: '1px solid #d1dbe3',
    padding: '1.5rem 2rem 0',
    uppercase: 'false',
  },
  tabList: {
    '& .MuiTab-root': {
      fontSize: '18px',
      fontWeight: 500,
      fontFamily: 'proxima-nova',
      textTransform: 'none',
      paddingLeft: 0,
      paddingRight: 0,
      marginRight: '48px',
      minWidth: '60px',
      maxWidth: '360px',
      color: '#4ba4da',
      '&.Mui-selected': {
        color: '#4a5162',
      },
    },
    '& .MuiTabs-indicator': {
      height: '4px',
      borderRadius: '2px',
      backgroundColor: '#4a5162',
    },
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

  const [propsdata, setPropsdata] = useState({ brands: [] });

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const getUserData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/brand');
      const { docs } = res.data;
      // const data = await res.json();
      console.log('respnse-------------> ', res);
      console.log('data-------------> ', docs);
      const newdata = docs.filter((el) => el.id === id)[0];
      setPropsdata(newdata);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    id?.length > 0 && getUserData();
  }, [id]);

  return (
    <DefaultTemplate>
      <Eyebrow />
      <div className="main__content">
        <Box>
          <Box className={classes.mainTabs}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="tabs"
              className={classes.tabList}
            >
              <Tab disableRipple label="Basic Information" {...a11yProps(0)} />
              <Tab disableRipple label="SEO Settings" {...a11yProps(1)} />
              <Tab disableRipple label="Brands" {...a11yProps(2)} />
            </Tabs>
          </Box>
          {value === 0 && (
            <TabPanel value={value} index={0}>
              <BasicInformation propsdata={propsdata} />
            </TabPanel>
          )}
          {value === 1 && (
            <TabPanel value={value} index={1}>
              <SeoSettings propsdata={propsdata} />
            </TabPanel>
          )}
          {value === 2 && (
            <TabPanel value={value} index={2}>
              <Brands
                adminPortal={adminPortal}
                setAdminPortal={setAdminPortal}
                setBrands={setBrands}
                propsdata={propsdata}
              />
            </TabPanel>
          )}
        </Box>
      </div>
    </DefaultTemplate>
  );
};
export default PortalIdentity;

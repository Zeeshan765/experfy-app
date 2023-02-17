import { Box, Tab, Tabs, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import axios from 'axios';
import { Eyebrow } from 'payload/components/elements';
import { DefaultTemplate } from 'payload/components/templates';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/scss/index.scss';
import { BasicInformation } from './BasicInformation';
import Brands from './Brands';
import SeoSettings from './SeoSettings';

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
  const { id } = useParams();

  const [propsData, setPropsdata] = useState({ brands: [] });

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  const getUserData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/brand');
      const { docs } = res.data;

      const newdata = docs.filter((el) => el.id === id)[0];
      console.log('newdata', newdata);
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
              <BasicInformation propsData={propsData} />
            </TabPanel>
          )}
          {value === 1 && (
            <TabPanel value={value} index={1}>
              <SeoSettings propsData={propsData} />
            </TabPanel>
          )}
          {value === 2 && (
            <TabPanel value={value} index={2}>
              <Brands propsData={propsData} />
            </TabPanel>
          )}
        </Box>
      </div>
    </DefaultTemplate>
  );
};
export default PortalIdentity;

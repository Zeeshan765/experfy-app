import { Box, Grid, Tab, Tabs, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Eyebrow } from 'payload/components/elements';
import { DefaultTemplate } from 'payload/components/templates';
import PropTypes from 'prop-types';
import React from 'react';
import FormSelect from '../../blocks/FormSelect';
import TextInput from '../../blocks/TextInput';
import PageTemplate from '../PageTemplate';
import SectionTemplate from '../SectionTemplate';

const useStyles = makeStyles({
  mainTabs: {
    color: '#000',
    borderBottom: '1px solid #d1dbe3',
    padding: '24px 32px 0',
    uppercase: 'false',
  },
  tabList: {
    '& .MuiTab-root': {
      fontSize: '20px',
      fontWeight: 500,
      fontFamily: 'proxima-nova',
      letterSpacing: '.1px',
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
      <Box p={4}>{children}</Box>
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

const TemplatesLibrary = () => {
  const [template, setTemplate] = React.useState('Pages');

  const classes = useStyles();
  const [touched, setTouched] = React.useState('');
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

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
              <Tab disableRipple label="My Templates" {...a11yProps(0)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6}>
                <TextInput
                  path={''}
                  label="Search Template"
                  placeHolder="Search or tag name of Icon"
                  setTouched={setTouched}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <FormSelect
                  path={'page_type'}
                  label="Template Library"
                  setTouched={setTouched}
                  name={'page_type'}
                  type={'select'}
                  options={['Pages', 'Section']}
                />
              </Grid>
            </Grid>
            {template === 'Pages' && <PageTemplate />}
            {template === 'Section' && <SectionTemplate />}
          </TabPanel>
        </Box>
      </div>
    </DefaultTemplate>
  );
};

export default TemplatesLibrary;

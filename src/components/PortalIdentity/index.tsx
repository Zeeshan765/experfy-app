import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Box, Link, Tab, Tabs, Typography, } from "@mui/material";
import { makeStyles } from "@mui/styles";
import BasicInformation from "./BasicInformation";
import SeoSettings from "./SeoSettings";
// import PortalSidebar from "./PortalSidebar";
// import { useLocation } from 'react-router-dom';
import { Context } from "../../MyProvider";
import { DefaultTemplate } from "payload/components/templates";
import { Eyebrow } from "payload/components/elements";

const useStyles = makeStyles({
    mainTabs: {
        borderBottom: "1px solid #d1dbe3",
        padding: "1.5rem 2rem 0",
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
        "aria-controls": `tabpanel-${index}`,
    };
}

export default function PortalIdentity(props) {


    const {
        adminPortal,
        setAdminPortal,
        brands,
        setBrands,
        seo_setting,
        setSeo_Setting,
    } = useContext(Context);

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    const breadcrumbs = [
        <Link key="1">Pepsi Careers</Link>,
        <Typography key="2">Portal Identity</Typography>,
    ];

    return (
        <DefaultTemplate>
            {/* <div className="template-default__wrap"> */}
            {/*<Box className={classes.mainHeader}>
                    <Stack spacing={1}>
                        <Breadcrumbs
                            separator={<ChevronRightIcon/>}
                            aria-label="breadcrumb"
                            className={classes.mainHeaderBreadcrumbs}
                        >
                            {breadcrumbs}
                        </Breadcrumbs>
                    </Stack>
                </Box>*/}
            <Eyebrow />
            <div className="main__content">
                {/* <PortalSidebar hasHeader={true} isBrandCreated={true} /> */}
                <Box>
                    <Box className={classes.mainTabs}>
                        <Tabs value={value} onChange={handleChange} aria-label="tabs">
                            <Tab label="Basic Information" disableRipple {...a11yProps(0)} />
                            <Tab label="SEO Settings" disableRipple {...a11yProps(1)} />
                            <Tab label="Brands" disableRipple {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        <BasicInformation
                            adminPortal={adminPortal}
                            setAdminPortal={setAdminPortal}
                        />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <SeoSettings

                            adminPortal={adminPortal}
                            setAdminPortal={setAdminPortal}
                            setSeo_Setting={setSeo_Setting}
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
            {/* </div> */}

        </DefaultTemplate>
    );
}

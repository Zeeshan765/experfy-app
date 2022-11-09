import React from "react";
import {
  Box,
  Stack,
} from '@mui/material';
import LinkTag from '@mui/material/Link';
import LogoImage from '../../assets/images/experfy_logo.svg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useStyles} from "./css";




const Navbar:React.FC=()=> {
  const classes = useStyles();

  return (
    <nav className={classes.nav}>
      <Box className={classes.navBrand}>
        <img src={LogoImage} alt="Experfy" />
      </Box>
      <Box className={classes.navContent}>
        <Stack 
          className={classes.navLinks}
          direction="row">
          <LinkTag className={classes.navLinksItem}>
            Opportunities
            <ExpandMoreIcon />
          </LinkTag>
          <LinkTag className={classes.navLinksItem}>
            Talent
            <ExpandMoreIcon />
          </LinkTag>
          <LinkTag className={classes.navLinksItem}>
            TalentClouds
            <ExpandMoreIcon />
          </LinkTag>
          <LinkTag className={classes.navLinksItem}>
            Candidates
            <ExpandMoreIcon />
          </LinkTag>
          <LinkTag className={classes.navLinksItem}>
            Settings
            <ExpandMoreIcon />
          </LinkTag>
          <LinkTag className={classes.navLinksItem}>
            Analytics
            <ExpandMoreIcon />
          </LinkTag>
        </Stack>
      </Box>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { Box, Stack} from '@mui/material';
import LinkTag from '@mui/material/Link';
import { makeStyles } from '@mui/styles';
import LogoImage from '../../assets/images/experfy_logo.svg';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const useStyles = makeStyles({
    nav: {
        display: 'flex',
        height: '3.5rem',
        backgroundColor: '#222e43',
    },
    navBrand: {
        width: '13.75rem',
        height: '100%',
        padding: '0.75rem 2.5rem 0.5rem 1.5rem',
    },
    navContent: {
        flex: '1',
        display: 'flex',
        justifyContent: 'space-between',
        height: '100%',
        padding: '0 1.5rem 0 0',
        '& img': {
            display: 'block',
            height: '100%',
            width: 'auto',
            maxHeight: '2.25rem',
            maxWidth: '100%',
        }
    },
    navLinksItem: {
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        fontSize: '0.9375rem',
        fontWeight: 500,
        textTransform: 'uppercase',
        color: '#f7f7f7 !important',
        cursor: 'pointer',
        padding: '0.125rem 0 0 0',
        marginRight: '2rem !important',
        '& svg': {
            fill: '#4ba4da',
            marginTop: '-.125rem',
        }
    }
});

const ExperfyNavbar: React.FC = () => {
    const classes = useStyles();

    return (
        <nav className={classes.nav}>
            <Box className={classes.navBrand}>
                <img src={LogoImage} alt="Experfy" />
            </Box>
            <Box className={classes.navContent}>
                <Stack
                    className={classes.navLinksItem}
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

export default ExperfyNavbar;
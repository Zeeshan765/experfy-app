import React, { useEffect } from 'react';
// import { BrowserRouter as Router, useNavigate, redirect } from 'react-router-dom'; 
import { DefaultTemplate } from 'payload/components/templates';
import { Button, Eyebrow } from 'payload/components/elements';
import { AdminView } from 'payload/config';
import { useStepNav } from 'payload/components/hooks';
import { Meta, useConfig } from 'payload/components/utilities';
import AddIcon from "@mui/icons-material/Add";
// import { Link } from "react-router-dom";
import { useStyles } from "./css";
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  List,
  ListItem,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Tooltip as FormTip
} from "@mui/material";



const CustomDefaultRoute: AdminView = ({ user, canAccessAdmin }) => {
    const { routes: { admin: adminRoute } } = useConfig();
    const { setStepNav } = useStepNav();
    const classes = useStyles();
    // This effect will only run one time and will allow us
    // to set the step nav to display our custom route name
  
    useEffect(() => {
      setStepNav([
        {
          label: 'Nav ',
          url: '/nav',
        },
      ]);
    }, [setStepNav]);
  
    // If an unauthorized user tries to navigate straight to this page,
    // Boot 'em out
    if (!user || (user && !canAccessAdmin)) {
      return (<></>
        // <Redirect to={`${adminRoute}/unauthorized`} />
      );
    }
  
    return (
      <DefaultTemplate>
        <Meta
          title="Custom Route with Default Template"
          description="Building custom routes into Payload is easy."
          keywords="Custom React Components, Payload, CMS"
        />
        <Eyebrow />
        <h1>Custom Route</h1>
        <p>Here is a custom route that was added in the Payload config. It uses the Default Template, so the sidebar is rendered.</p>
        <Button
          el="link"
          to={`${adminRoute}`}
          buttonStyle="secondary"
        >
          Go to Dashboard
        </Button>


      <div className="main__content">
        <Box sx={{ p: 4 }}>
          <Grid container spacing={4} alignItems="stretch">
            <Grid item xs={12}>
              <Card className={classes.portalBanner}>
                <CardContent>
                  <Typography component="span">Welcome to</Typography>
                  <Typography component="h1" variant="h1">
                    <Typography component="span">Experfy</Typography> Studio
                  </Typography>
                  <Typography>
                    Experfy Studio is a recruitment suite specifically developed
                    for talent sourcing, pipelining, and hiring. It comes with the
                    drag and drop website editor, widgets, and prebuilt modules
                    like job listing, TalentClouds and Practice Areas that are
                    needed for recruitment Marketing and pipelining of talent.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card className={classes.portalCard}>
                <CardContent
                  className={`${classes.portalCardContent}`}
                >
                  <Typography component="h3" variant="h3">
                    External TalentCloud Career Portal
                  </Typography>
                  <List sx={{ color: "#4a5162" }}>
                    <ListItem disableGutters>
                      Initiate the creation and enter basic information
                    </ListItem>
                    <ListItem disableGutters>Confige the Portal</ListItem>
                    <ListItem disableGutters>
                      Configure theme(s) for your portal
                    </ListItem>
                    <ListItem disableGutters>
                      Add pages and create custom content through pre-configured
                      sections and elements.
                    </ListItem>
                    <ListItem disableGutters>
                      Publish the portal to start pipelining and recruiting talent
                      from external channels.
                    </ListItem>
                  </List>
                </CardContent>
                <CardActions>
                <Button
            el="link"
            to={`${adminRoute}/collections/tags`}
            buttonStyle="primary"
            className='dashboard-home-page-btn'
          >
            Configure
          </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <Card className={classes.portalCard}>
                <CardContent
                  
                >
                  <Typography component="h3" variant="h3">
                    Inner Mobility through Internal TalentCloud Marketplace
                  </Typography>
                  <Typography variant="body1">
                    Mapping and discovery of internal talent through TalentCloud
                    enables Managers to easily identify the resources that are
                    needed for roles, projects and gigs. Fully brand and customize
                    your internal opportunity marketplace and provide your
                    employees a way to engage with new opportunities within your
                    organization.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button buttonStyle='secondary'>
                    Create New
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </div>

      </DefaultTemplate>
    );
  };
  
  export default CustomDefaultRoute;
  
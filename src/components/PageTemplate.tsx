import React from 'react';
import browse_jobs from "../assets/images/templates/browse_jobs.png";
// import browse_jobs from "../../assets/images/templates/browse_jobs.png";
import category from "../assets/images/templates/category.png";
import error_404 from "../assets/images/templates/error_404.png";
import home from "../assets/images/templates/home.png";
import job_overview from "../assets/images/templates/job_overview.png";
import join from "../assets/images/templates/join.png";
import tc_overview from "../assets/images/templates/tc_overview.png";
import FaceLessModel from "./Model";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography
} from '@mui/material';
import LinkTag from '@mui/material/Link';
import { makeStyles } from '@mui/styles';
import '../styles/scss/index.scss';

const useStyles = makeStyles({
  templateCardGrid: {
    width: 'calc(100% + 36px)',
    marginTop: '-32px !important'
  },
  templateCard: {
    backgroundColor: 'transparent!important',
    boxShadow: 'none!important',
    '& .MuiCardHeader-root': {
      padding: '0 0 .5rem',
      '& .MuiTypography-root': {
        fontFamily: 'proxima-nova',
        fontWeight: 500,
        color: '#4a5162 !important'
      },
      '& .MuiCardHeader-action': {
        display: 'inline-flex',
        alignItems: 'center',
        '& button': {
          marginTop: '8px'
        }
      }
    }
  }
})  

const PageTemplate=()=>{
  const classes = useStyles();
  const pageList = [
    {
      id: 1,
      image: browse_jobs,
      link: "/admin",
      name: "Browse Jobs",
    },
    {
      id: 2,
      image: category,
      link: "/admin",
      name: "Category",
    },
    {
      id: 3,
      image: error_404,
      link: "/admin",
      name: "Error 404",
    },
    {
      id: 4,
      image: home,
      link: "/admin",
      name: "Home",
    },
    {
      id: 5,
      image: job_overview,
      link: "/admin",
      name: "Job Overview",
    },
    {
      id: 6,
      image: join,
      link: "/admin",
      name: "Join",
    },
    {
      id: 7,
      image: tc_overview,
      link: "/admin",
      name: "TC Overview",
    },
  ];
return(
  <>
    <Grid container spacing={8} className={classes.templateCardGrid}>
      {pageList.map(({ id, image, name, link }) => (
        <Grid 
          item 
          xs={12} sm={6} md={4} 
          key={id}
        >
          <Card 
            className={classes.templateCard}>
            <CardHeader
              action={
                <FaceLessModel data={{ id, image, name }} />
              }
              title={name}>
            </CardHeader>
            <CardMedia
              component="img"
              image={image}
              alt={name}>
            </CardMedia>
          </Card>
        </Grid>
      ))}
    </Grid>  
  </>
)}

export default PageTemplate;

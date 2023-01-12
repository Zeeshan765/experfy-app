import React from "react";
import browse_jobs from "../assets/images/templates/browse_jobs.png";
// import browse_jobs from "../../assets/images/templates/browse_jobs.png";
import { Card, CardHeader, CardMedia, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import category from '../assets/images/templates/category.png';
import error_404 from '../assets/images/templates/error_404.png';
import home from '../assets/images/templates/home.png';
import job_overview from '../assets/images/templates/job_overview.png';
import join from '../assets/images/templates/join.png';
import tc_overview from '../assets/images/templates/tc_overview.png';
import { MinimalTemplate } from 'payload/components/templates';
import FaceLessModel from './Model';

const useStyles = makeStyles({
  templateCardGrid: {
    width: 'calc(100% + 36px)',
    marginTop: '-32px !important',
  },
  templateCard: {
    backgroundColor: 'transparent!important',
    boxShadow: 'none!important',
    '& .MuiCardHeader-root': {
      padding: '0 0 .5rem',
      '& .MuiTypography-root': {
        fontFamily: 'proxima-nova',
        fontWeight: 500,
        color: '#4a5162 !important',
      },
      '& .MuiCardHeader-action': {
        display: 'inline-flex',
        alignItems: 'center',
        '& button': {
          marginTop: '8px',
        },
      },
    },
  },
});

const PageTemplate: React.FC = ({ search }) => {
  const classes = useStyles();
  const pageList = [
    {
      id: 1,
      image: browse_jobs,
      link: '/admin',
      name: 'Browse Jobs',
    },
    {
      id: 2,
      image: category,
      link: '/admin',
      name: 'Category',
    },
    {
      id: 3,
      image: error_404,
      link: '/admin',
      name: 'Error 404',
    },
    {
      id: 4,
      image: home,
      link: '/admin',
      name: 'Home',
    },
    {
      id: 5,
      image: job_overview,
      link: '/admin',
      name: 'Job Overview',
    },
    {
      id: 6,
      image: join,
      link: '/admin',
      name: 'Join',
    },
    {
      id: 7,
      image: tc_overview,
      link: '/admin',
      name: 'TC Overview',
    },
  ];
  return (
    <>
      <Grid container spacing={2} style={{ margin: "auto", width: "95%" }}>
        {pageList.map(({ id, image, name, link }) => (
          <>
            {search === "" && (
              <Grid
                item
                sm={3}
                alignItems="center"
                key={id}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  // boxShadow:'0px 1px 3px 0px #000000',
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  {" "}
                  <p
                    style={{
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1.2rem",
                      margin: "0px",
                    }}
                  >
                    {name}
                  </p>
                  <FaceLessModel data={{ id, image, name }} />
                </div>
                <img
                  src={image}
                  alt={name}
                  style={{
                    width: "100%",
                    borderRadius: "4px",
                    boxShadow: "0px 0.5px 2px -1px #000000",
                    background: "#f0f0f0",
                  }}
                />
              </Grid>
            )}
            {search && name?.toLowerCase().includes(search.toLowerCase()) ? (
              <Grid
                item
                sm={3}
                alignItems="center"
                key={id}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  // boxShadow:'0px 1px 3px 0px #000000',
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  {" "}
                  <p
                    style={{
                      color: "#000",
                      fontWeight: "500",
                      fontSize: "1.2rem",
                      margin: "0px",
                    }}
                  >
                    {name}
                  </p>
                  <FaceLessModel data={{ id, image, name }} />
                </div>
                <img
                  src={image}
                  alt={name}
                  style={{
                    width: "100%",
                    borderRadius: "4px",
                    boxShadow: "0px 0.5px 2px -1px #000000",
                    background: "#f0f0f0",
                  }}
                />
              </Grid>
            ) : (
              ""
            )}
            {/* {
              (
                <p>oop!not found anything's</p>
              )
            } */}
          </>
        ))}
      </Grid>
    </>
  );
};
export default PageTemplate;

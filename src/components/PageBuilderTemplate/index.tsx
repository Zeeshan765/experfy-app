import { Dialog, DialogTitle } from '@mui/material';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import browse_jobs from '../../assets/images/templates/browse_jobs.png';
import category from '../../assets/images/templates/category.png';
import error_404 from '../../assets/images/templates/error_404.png';
import home from '../../assets/images/templates/home.png';
import job_overview from '../../assets/images/templates/job_overview.png';
import join from '../../assets/images/templates/join.png';
import tc_overview from '../../assets/images/templates/tc_overview.png';
import FaceLessModel from '../Model';
import { Grid } from '@material-ui/core';
import PageTemplate from '../PageBuilder/NewSectionTemplate/PageTemplate';
const PageTheme = () => {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const themeList = [
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
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    handleOpen();
  }, []);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      maxWidth="lg"
      fullWidth={true}
    >
      <DialogTitle
        sx={{ boxShadow: 3 }}
        style={{
          borderBottom: '1px solid #000',
          boxShadow: '0px 1px 4px 1px #000',
          padding: '.75rem 3rem',
        }}
      >
        <div
          style={{
            // padding: "16px",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <p style={{ font: '16px', fontWeight: '600', margin: '0px' }}>
            Plase select your template for your page{' '}
          </p>
          <p
            onClick={handleClose}
            style={{
              font: '16px',
              fontWeight: '600',
              margin: '0px',
              cursor: 'pointer',
            }}
          >
            X
          </p>
        </div>
      </DialogTitle>
      <div style={{ background: '#fff' }}>
        <div
          style={{
            padding: '16px 3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <div>
            <label
              htmlFor="type"
              style={{ display: 'block', fontWeight: '600', fontSize: '1rem' }}
            >
              Page Template Type
            </label>
            <select
              name="type"
              title="Template Type"
              placeholder="Default templates"
            >
              <option>Default templates</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="search"
              style={{
                display: 'block',
                fontWeight: '600',
                margin: '0px',
                fontSize: '1rem',
              }}
            >
              Search Page
            </label>
            <input
              type="text"
              name="search"
              placeholder="Search Page"
              style={{
                width: '350px',
                lineHeight: '2rem',
                border: '1px solid gray',
                boxShadow: '1px 1px 3px 0px #000',
                color: 'gray',
                background: '#fff',
                borderRadius: '4px',
              }}
            />{' '}
          </div>
        </div>
        <PageTemplate />
      </div>
    </Dialog>
  );
};

export default PageTheme;

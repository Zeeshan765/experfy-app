import CloseIcon from '@mui/icons-material/Close';
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
import { SelectInput, TextInput } from 'payload/components/forms';
import PageTemplate from '../PageTemplate';
const PageTheme = ({ fromScratch }) => {
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const history = useHistory();


  // const themeList = [
  //   {
  //     id: 1,
  //     image: browse_jobs,
  //     link: '/admin',
  //     name: 'Browse Jobs',
  //   },
  //   {
  //     id: 2,
  //     image: category,
  //     link: '/admin',
  //     name: 'Category',
  //   },
  //   {
  //     id: 3,
  //     image: error_404,
  //     link: '/admin',
  //     name: 'Error 404',
  //   },
  //   {
  //     id: 4,
  //     image: home,
  //     link: '/admin',
  //     name: 'Home',
  //   },
  //   {
  //     id: 5,
  //     image: job_overview,
  //     link: '/admin',
  //     name: 'Job Overview',
  //   },
  //   {
  //     id: 6,
  //     image: join,
  //     link: '/admin',
  //     name: 'Join',
  //   },
  //   {
  //     id: 7,
  //     image: tc_overview,
  //     link: '/admin',
  //     name: 'TC Overview',
  //   },
  // ];
  // ======Methods===== //
 
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSeach = (e) => {
    const { value } = e.target;
    setSearch(value);
  };
  useEffect(() => {
    handleOpen();
  }, []);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='customized-dialog-title'
      maxWidth='lg'
      fullWidth={true}
    >
      <DialogTitle className='model-title'>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          Please select your template for your page
          <a onClick={handleClose} style={{ color: '#000', padding: '8px' }}>
            <CloseIcon />
          </a>
        </div>
      </DialogTitle>
      <div className='model-body' style={{ background: '#fff' }}>
        <div
          style={{
            display: 'flex',
            gap: '2rem',
          }}
        >
          <TextInput
            name='search'
            path='search'
            label={'Search Page'}
            width={'50%'}
            onChange={handleSeach}
            value={search}
          />
          <SelectInput
            name={'template_type'}
            label={'Template Type'}
            width={'25%'}
            defaultValue={'Default templates'}
            options={[
              {
                label: 'Default templates',
                value: 'default-templates',
              },
            ]}
            path={'template_type'}
          />
        </div>
        <PageTemplate
          search={search}
          fromScratch={fromScratch}
          templateModelClose={handleClose}
        />
      </div>
    </Dialog>
  );
};

export default PageTheme;

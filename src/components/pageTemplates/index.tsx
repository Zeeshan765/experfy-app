import React, { useContext, useEffect, useState } from 'react';
import { Eyebrow } from 'payload/components/elements';
import FormSelect from '../../blocks/FormSelect';
import TextInput from '../../blocks/TextInput';
import PageTheme from '../PageBuilderTemplate';
import { Context } from '../../Providers/MyProvider';
import { useConfig } from 'payload/components/utilities';
import { Form } from 'payload/components/forms';
import { toast } from 'react-toastify';
import { Route, useHistory, useParams } from 'react-router-dom';
import { Box, Button } from '@material-ui/core';
import axios from 'axios';
import { Dialog, DialogTitle } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { log } from 'console';

const PageTemplates = () => {
  const { selectedPageCode, setPageCreateFromScratch } = useContext(Context);

  const history = useHistory();
  let { id } = useParams();
  const [pageData, setPageData] = useState({  });
  const [open, setOpen] = React.useState(false);
  const {
    admin: { user: userSlug },
    collections,
    serverURL,
    routes: { admin, api },
  } = useConfig();

  const From_scratch = 'From_scratch';
  const Template = 'Template';
  // const buttonTitle = id ? "Update" : "Create Page";
  // ==============Methods================

  const closeModel = () => {
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
    history.goBack();
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleEditPage = () => {
    closeModel();
    history.replace({
      pathname: `/admin/collections/page-builder/${id}`,
      state: { id },
    });
  };

  const handelChange = (e) => {
    const { name, value } = e.target;
    setPageData((pre) => ({ ...pre, [name]: value }));
  };

  // get page on load screen
  const getSinglePage = () => {
    axios({
      method: `get`,
      url: `${serverURL}${api}/page-Template/${id}`,
    })
      .then((res) => {
        const { data } = res;
        setPageData({ ...data });
        setPageCreateFromScratch({ ...data });
      })
      .catch((err) => {
        console.log('err', err);
      });
  };
  // create page
  const createTemplate = () => {
    axios({
      method: 'post',
      url: `${serverURL}${api}/page-Template`,
      data: pageData,
    })
      .then((res) => {
        const { doc, message } = res.data;
          toast.success('create a new page with page builder');
          closeModel();
          history.push(`/admin/collections/page-builder/${doc.id}`);
       
      })
      .catch((err) => {
        console.log('err', err);
      });
  };
  const updateTemplate = () => {
    axios({
      method: 'patch',
      url: `${serverURL}${api}/page-Template/${id}`,
      data: pageData,
    })
      .then((res) => {
        const { doc, message } = res.data;
        closeModel();
          toast.success('create a new page with page builder');
          history.push(`/admin/collections/page-builder/${doc.id}`);
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  const deletePage = () => {
    axios({
      method: `delete`,
      url: `${serverURL}${api}/page-Template/${id}`,
    })
      .then((res) => {
        console.log('res', res);
        toast.success('Delete page successfuly');
        handleClose();
      })
      .catch((err) => {
        console.log('err', err);
      });
  };
  // component life cycle method
  useEffect(() => {
    handleOpen();
    if (id) {
      getSinglePage();
    }
    if (selectedPageCode)
      setPageData((pre) => ({ ...pre, pageCode: selectedPageCode }));
  }, [selectedPageCode, id]);


  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='customized-dialog-title'
      maxWidth='md'
      fullWidth={true}
      sx={{ boxShadow: 1 }}
    >
      {' '}
      <DialogTitle className='model-title'>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <span className='page-title'>
            {' '}
            {id ? 'Update Page Template' : 'Create New Page Template'}{' '}
          </span>
          <a onClick={handleClose} style={{ color: '#000', padding: '8px' }}>
            <CloseIcon />
          </a>
        </div>
      </DialogTitle>
      <div className='model-body'>
        <Form onSubmit={() => (id ? updateTemplate() : createTemplate())}>
          <div style={{ marginBottom: '1rem' }}>
            <TextInput
              label={'*Page Name'}
              onChange={handelChange}
              value={pageData['title']}
              name='title'
              className='page-name'
            />
          </div>
         {!id && <div>
            <TextInput
            type='file'
              label={'Page Thumnail'}
              onChange={handelChange}
              value={id?'':pageData['pageThumnail']}
              name='pageThumnail'
              className='page-name'
            />
          </div>}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
              marginTop: '2rem',
            }}
          >
            <button type='submit' className='submit-btn'>
              {id ? 'Update' : 'Create Page'}
            </button>
            {id && (
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button className='edit-btn' onClick={handleEditPage}>
                  <OpenInNewIcon style={{ fontSize: '2rem' }} />
                </button>
                <button className='delete-btn' onClick={deletePage}>
                  <DeleteOutlineTwoToneIcon style={{ fontSize: '2rem' }} />
                </button>
              </div>
            )}
          </div>
        </Form>
      </div>
    </Dialog>
  );
};

export default PageTemplates;

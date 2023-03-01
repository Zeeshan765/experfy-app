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

const Pages = () => {
  const { selectedPageCode, setPageCreateFromScratch } = useContext(Context);

  const history = useHistory();
  let { id } = useParams();
  const [pageData, setPageData] = useState({ pageType: '' });
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
      url: `${serverURL}${api}/pages/${id}`,
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
  const createPage = () => {
    axios({
      method: 'post',
      url: `${serverURL}${api}/pages`,
      data: pageData,
    })
      .then((res) => {
        const { doc, message } = res.data;
        const { pageType } = pageData;
        if (pageType === From_scratch) {
          toast.success('create a new page with page builder');
          closeModel();
          history.push(`/admin/collections/page-builder/${doc.id}`);
        } else {
          setPageCreateFromScratch('');
          toast.success(message);
          closeModel();
          history.push('/admin/collections/templates-library');
        }
      })
      .catch((err) => {
        console.log('err', err);
      });
  };
  //
  const updatePage = () => {
    axios({
      method: 'patch',
      url: `${serverURL}${api}/pages/${id}`,
      data: pageData,
    })
      .then((res) => {
        const { doc, message } = res.data;
        const { pageType } = pageData;
        closeModel();
        if (pageType === From_scratch) {
          toast.success('create a new page with page builder');
          history.push(`/admin/collections/page-builder/${doc.id}`);
        }
        //  else {
        //   setPageCreateFromScratch("");
        //   toast.success(message);
        //   handleClose();
        //   history.push("/admin/collections/pages");
        // }
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  const deletePage = () => {
    axios({
      method: `delete`,
      url: `${serverURL}${api}/pages/${id}`,
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
    if (selectedPageCode && pageData?.pageType === Template)
      setPageData((pre) => ({ ...pre, pageId: selectedPageCode }));
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
            {id ? 'Update Page' : 'Create New Page'}{' '}
          </span>
          <a onClick={handleClose} style={{ color: '#000', padding: '8px' }}>
            <CloseIcon />
          </a>
        </div>
      </DialogTitle>
      <div className='model-body'>
        <Form onSubmit={() => (id ? updatePage() : createPage())}>
          <div style={{ marginBottom: '1rem' }}>
            <TextInput
              label={'*Page Name'}
              onChange={handelChange}
              value={pageData['title']}
              name='title'
              className='page-name'
            />
          </div>
          <span className='select-radio-title'>*Choose the page type</span>
          <span className='page-radio-selection'>
            <input
              type='radio'
              name='pageType'
              disabled={id}
              checked={pageData['pageType'] === Template}
              value={Template}
              onChange={handelChange}
            />
            &nbsp;&nbsp; Create Page from Template
          </span>
          <span className='page-radio-selection'>
            <input
              type='radio'
              name='pageType'
              disabled={id}
              checked={pageData['pageType'] === From_scratch}
              value={From_scratch}
              onChange={handelChange}
            />
            &nbsp;&nbsp; Create Page from Scratch
          </span>

          {!id && pageData?.pageType === Template && (
            <>
              <PageTheme fromScratch='fromScratch' />
            </>
          )}
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

export default Pages;

import { Box, Grid } from '@mui/material';
import { Button, Eyebrow } from 'payload/components/elements';
import { useConfig } from 'payload/components/utilities';
import React, { useState } from 'react';
import TextInput from '../../../blocks/TextInput';
import { Form } from 'payload/components/forms';

export default function SeoSettings(props) {
  const { propsdata } = props;

  const {
    admin: { user: userSlug },
    collections,
    serverURL,
    routes: { admin, api },
  } = useConfig();

  return (
    <Box sx={{ p: 1 }}>
      <Form
        method={propsdata?.id ? 'patch' : 'post'}
        action={`${serverURL}${api}/basic-portal-identity/${
          propsdata?.id ?? ''
        }`}
      >
        <div className="row">
          <div className="col-md-8">
            <TextInput
              label="Page Title"
              path={'page_title'}
              display={propsdata?.page_title}
              required={false}
              placeHolder="Add Page Title of your career portal"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <TextInput
              path={'meta_keywords'}
              label="Meta Keywords"
              display={propsdata?.meta_keywords}
              required={false}
              placeHolder="Add keywords separated by commas"
            />
          </div>
        </div>

        <Grid item xs={8}></Grid>

        <div className="row">
          <div className="col-md-8">
            <TextInput
              path={'meta_description'}
              label="Meta Description"
              display={propsdata?.meta_description}
              required={false}
              placeHolder="Provide Description of your career Portal"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <Button type="submit" buttonStyle="primary" className='btn-hover color-9'>
              
              Submit
            </Button>
          </div>
        </div>
      </Form>
    </Box>
  );
}

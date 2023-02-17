import { Box, Grid } from '@mui/material';
import { Button, Eyebrow } from 'payload/components/elements';
import { useConfig } from 'payload/components/utilities';
import React, { useState } from 'react';
import TextInput from '../../../blocks/TextInput';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function SeoSettings(props) {
  const { propsData } = props;
  console.log('propsdata', props)

  const {
    admin: { user: userSlug },
    collections,
    serverURL,
    routes: { admin, api },
  } = useConfig();

  const {
    control,
    handleSubmit,
    reset,
    getValues,
    watch,
    formState: { errors },
  } = useForm({});


  React.useEffect(() => {
    reset({ ...propsData });
  }, [propsData]);


  const onSubmit = async (data) => {
    if (propsData.id) {
      let apiEndpoint = `${serverURL}${api}/brand/${propsData.id}`;
      try {
        const formData = new FormData();
        formData.append('_payload', JSON.stringify(data));
        const res = await axios.patch(apiEndpoint, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
         console.log('res', res.data);
        toast.success('Portal Identitty Updated successfully');
      } catch (error) {
        console.error(error);
        return error;
      }
    }
  };

  return (
    <Box sx={{ p: 1 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-8">
            <Controller
              render={({ field }) => (
                <TextInput
                  label="Page Title"
                  {...field}
                  id={'page_title'}
                  placeholder="Add Page Title to your career portal "
                />
              )}
              name="page_title"
              control={control}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <Controller
              render={({ field }) => (
                <TextInput
                  label="Meta Keywords"
                  {...field}
                  id={'meta_keywords'}
                  placeholder="Add Keywords seperated by commas"
                />
              )}
              name="meta_keywords"
              control={control}
            />
          </div>
        </div>

        <Grid item xs={8}></Grid>

        <div className="row">
          <div className="col-md-8">
            <Controller
              render={({ field }) => (
                <TextInput
                  label="Meta Description"
                  {...field}
                  id={'meta_description'}
                  placeholder="Provide description for your career portal"
                />
              )}
              name="meta_description"
              control={control}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
          <button className="btn btn--style-primary" type="submit">
            Save
          </button>
          </div>
        </div>
      </form>
    </Box>
  );
}

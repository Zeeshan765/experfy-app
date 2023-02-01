import { Box, Grid } from '@mui/material';
import { Button, Eyebrow } from 'payload/components/elements';
import { useConfig } from 'payload/components/utilities';
import React, { useEffect, useState } from 'react';
import FormSelect from '../../../blocks/FormSelect';
import TextInput from '../../../blocks/TextInput';
import { useForm, Controller, useFieldArray } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
export default function BasicInformation(props) {
  const { propsdata } = props;
  const {
    admin: { user: userSlug },
    collections,
    serverURL,
    routes: { admin, api },
  } = useConfig();

  const userConfig = collections.find(
    (collection) => collection.slug === userSlug
  );
  const {
    control,
    handleSubmit,
    reset,
    getValues,
    setValue,
    watch,
    formState: { errors },
  } = useForm({});


  useEffect(() => {
    reset({ ...propsdata });
  }, [propsdata]);

  const onSubmit = async (data) => {
    if (propsdata.id) {
      let apiEndpoint = `${serverURL}${api}/brand/${propsdata.id}`;
      try {
        const formData = new FormData();
        formData.append('_payload', JSON.stringify(data));
        const res = await axios.patch(apiEndpoint, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        toast.success('Portal Identitty Updated successfully');
      } catch (error) {
        console.error(error);
        return error;
      }
    } 
  };

  return (
    <Box sx={{ p: 1 }}>
      <form
        //@ts-ignore
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="row">
          <div className="col-md-8">
            <Controller
              render={({ field }) => (
                <TextInput
                  disabled={false}
                  label="Portal Name"
                  {...field}
                  id={'career_portal_name'}
                />
              )}
              name="career_portal_name"
              control={control}
            />
          </div>

          {/* <div className="col-md-4">
            <div className="tip-wrapper">
              {touched === 'career_portal_name' && (
                <FormTip text={'The go-to-market name of the career portal'} />
              )}
            </div>
          </div> */}
        </div>

        <div className="row">
          <div className="col-md-8">
            <Controller
              render={({ field }) => (
                <TextInput
                  disabled={false}
                  label="Portal ID"
                  {...field}
                  id={'portal_id'}
                />
              )}
              name="portal_id"
              control={control}
            />
          </div>

          {/* <div className="col-md-4">
            <div className="tip-wrapper">
              {touched === 'portal_id' && (
                <FormTip text={'The read only filed displays the Portal ID'} />
              )}
            </div>
          </div> */}
        </div>

        <div className="row">
          <div className="col-md-8">
            <Controller
              render={({ field }) => (
                <TextInput
                  disabled={false}
                  label="Portal URL"
                  {...field}
                  id={'portal_url'}
                />
              )}
              name="portal_url"
              control={control}
            />
          </div>

          {/* <div className="col-md-4">
            <div className="tip-wrapper">
              {touched === 'portal_url' && (
                <FormTip
                  text={
                    'Access your career portal using this domain. This is thee single main domain upon which all applications in your external career portal are based. Don’t include “http” or “https” in easily identify the URL'
                  }
                />
              )}
            </div>
          </div> */}
        </div>

        <div className="row">
          <div className="col-md-8">
            <Controller
              render={({ field }) => (
                <TextInput
                  disabled={false}
                  label="Company Name"
                  {...field}
                  id={'company_name'}
                />
              )}
              name="company_name"
              control={control}
            />
          </div>

          {/* <div className="col-md-4">
            <div className="tip-wrapper">
              {touched === 'company_name' && (
                <FormTip
                  text={
                    'The company of your career Portal. This can be a shortened version of Portal.'
                  }
                />
              )}
            </div>
          </div> */}
        </div>

        <div className="row">
          <div className="col-md-8">
            <Controller
              render={({ field }) => {
                return (
                  <FormSelect
                    {...field}
                    options={[{ value: 'English', label: 'English' }]}
                    label="Default Language"
                    id={'default_language'}
                  />
                );
              }}
              name="default_language"
              control={control}
            />
          </div>

          {/* <div className="col-md-4">
            <div className="tip-wrapper">
              {touched === 'default_language' && (
                <FormTip
                  text={
                    'The company of your career Portal. This can be a shortened version of Portal.'
                  }
                />
              )}
            </div>
          </div> */}
        </div>

        <div className="row">
          <div className="col-md-8">
            <Controller
              render={({ field }) => (
                <FormSelect
                  {...field}
                  options={[{ value: 'US', label: 'United States' }]}
                  label="Default Locale"
                  id={'default_locale'}
                />
              )}
              name="default_locale"
              control={control}
            />
          </div>

          {/* <div className="col-md-4">
            <div className="tip-wrapper">
              {touched === 'default_locale' && (
                <FormTip
                  text={
                    'The company of your career Portal. This can be a shortened version of Portal.'
                  }
                />
              )}
            </div>
          </div> */}
        </div>

        <div className="row">
          <div className="col-md-8">
            <Controller
              render={({ field }) => (
                <TextInput
                  disabled={false}
                  label="Google Manager Tag ID"
                  {...field}
                  id={'google_id'}
                />
              )}
              name="google_id"
              control={control}
            />
          </div>

          {/* <div className="col-md-4">
            <div className="tip-wrapper">
              {touched === 'google_id' && (
                <FormTip
                  text={
                    'After you obtain the Google Tag Manager ID from Google and add it in this field, Experfy Studio Incorporates the necessary code in your career portal for you to use Google Tag Manager. This field only enables Google Tag Manager for your Portal; it doesn’t manage the tags or perform any'
                  }
                />
              )}
            </div>
          </div> */}
        </div>

        <div className="row">
          <div className="col-md-8">
            <Controller
              render={({ field }) => (
                <TextInput
                  disabled={false}
                  label="Google Analytics ID"
                  {...field}
                  id={'google_analytics'}
                />
              )}
              name="google_analytics"
              control={control}
            />
          </div>

          {/* <div className="col-md-4">
            <div className="tip-wrapper">
              {touched === 'google_analytics' && (
                <FormTip
                  text={
                    'To connect Google Analytics with your Advanced careers portal, fill in below your tracking ID. It can take up to 24 hours for your metrics to show. A Google Analytics ID is a string like “UA-000000-2”'
                  }
                />
              )}
            </div>
          </div> */}
        </div>

        <div className="row">
          <div className="col-md-8">
            <Controller
              render={({ field }) => (
                <TextInput
                  disabled={false}
                  label="Google Webmaster ID"
                  {...field}
                  id={'google_webmaster'}
                />
              )}
              name="google_webmaster"
              control={control}
            />
          </div>

          {/* <div className="col-md-4">
            <div className="tip-wrapper">
              {touched === 'google_webmaster' && (
                <FormTip text={'The Google Webmaster account.'} />
              )}
            </div>
          </div> */}
        </div>

        <div className="row">
          <div className="col-md-8">
            <Controller
              render={({ field }) => (
                <TextInput
                  disabled={false}
                  label="BING Webmaster ID"
                  {...field}
                  id={'bing_webmaster'}
                />
              )}
              name="bing_webmaster"
              control={control}
            />
          </div>

          {/* <div className="col-md-4">
            <div className="tip-wrapper">
              {touched === 'bing_webmaster' && (
                <FormTip text={'The Bing Webmaster Tools account.'} />
              )}
            </div>
          </div> */}
        </div>

        <div className="row">
          <div className="col-md-8">
            <Controller
              render={({ field }) => (
                <TextInput
                  disabled={false}
                  label="Tracking Pixel"
                  {...field}
                  id={'tracking_pixel'}
                />
              )}
              name="tracking_pixel"
              control={control}
            />
          </div>

          {/* <div className="col-md-4">
            <div className="tip-wrapper">
              {touched === 'tracking_pixel' && (
                <FormTip
                  text={
                    'Track your successful candidate conversions by adding a third-party tracking pixel to your career pages. When a candidate successfully applies (or “converts”), a pixel can be used to track the success of your job advertising campaigns. Tracking pixels are available through third party platforms like Indeed and Facebook. A tracking pixel must be an image.'
                  }
                />
              )}
            </div>
          </div> */}
        </div>

        <div className="row">
          <div className="col-md-4">
            <button type="submit">Save</button>
          </div>
        </div>
      </form>
    </Box>
  );
}

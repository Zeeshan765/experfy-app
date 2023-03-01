import { InputAdornment } from '@material-ui/core';
import { Box } from '@mui/material';
import axios from 'axios';
import { useConfig } from 'payload/components/utilities';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import FormSelect from '../../../blocks/FormSelect';
import FormTip from '../../../blocks/FormTip';
import TextInput from '../../../blocks/TextInput';

export const BasicInformation: React.FC = (props: any) => {
  const { propsData } = props;
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
    
  } = useForm();

  useEffect(() => {
    reset({ ...propsData });
  }, [propsData]);

  const [touched, setFocused] = useState('');

  const onSubmit = async (data) => {
    console.log('data', data);
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

        toast.success('Portal Identity Updated successfully');
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
                  {...field}
                  label="Portal Name*"
                  required={true}
                  id={'career_portal_name'}
                  name={'career_portal_name'}
                  onFocus={() => setFocused('career_portal_name')}
                  onBlur={() => setFocused('')}
                  
                />
              )}
              name="career_portal_name"
              control={control}
            />
          </div>

          {
            <div className="col-md-4">
              <div className="tip-wrapper">
                {touched === 'career_portal_name' && (
                  <FormTip
                    text={'The go-to market name for the career portal.'}
                  />
                )}
              </div>
            </div>
          }
        </div>

        <div className="row">
          <div className="col-md-8">
            <Controller
              render={({ field }) => (
                <TextInput
                  {...field}
                  name="portal_id"
                  readOnly={true}
                  label="Portal ID*"
                  defaultValue={'CP-' + Math.random().toString(9).substr(2, 9)}
                  id={'portal_id'}
                  onFocus={() => setFocused('portal_id')}
                  onBlur={() => setFocused('')}
                />
              )}
              name="portal_id"
              control={control}
            />
          </div>

          <div className="col-md-4">
            <div className="tip-wrapper">
              {touched === 'portal_id' && (
                <FormTip text={'The read only filed displays the Portal ID'} />
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <Controller
              render={({ field }) => (
                <TextInput
                  {...field}
                  label="Portal URL"
                  id={'portal_url'}
                  name="portal_url"
                  onFocus={() => setFocused('portal_url')}
                  onAbort={() => setFocused('')}
                  startAdornment={
                    <InputAdornment position="start">https://</InputAdornment>
                  }
                />
              )}
              name="portal_url"
              control={control}
            />
          </div>

          <div className="col-md-4">
            <div className="tip-wrapper">
              {touched === 'portal_url' && (
                <FormTip
                  text={
                    'Access your career portal using this domain. This is thee single main domain upon which all applications in your external career portal are based. Don’t include “http” or “https” in easily identify the URL'
                  }
                />
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <Controller
              render={({ field }) => (
                <TextInput
                  {...field}
                  disabled={false}
                  label="Company Name"
                  id={'company_name'}
                  name="company_name"
                  onFocus={() => setFocused('company_name')}
                  onBlur={() => setFocused('')}
                />
              )}
              name="company_name"
              control={control}
            />
          </div>

          <div className="col-md-4">
            <div className="tip-wrapper">
              {touched === 'company_name' && (
                <FormTip
                  text={
                    'The company of your career Portal. This can be a shortened version of Portal.'
                  }
                />
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <Controller
              render={({ field }) => {
                return (
                  <FormSelect
                    {...field}
                    options={[
                      { value: 'en', label: 'English' },
                      { value: 'es', label: 'Spanish' },
                    ]}
                    label="Default Language"
                    id={'default_language'}
                    name={'default_language'}
                    onFocus={() => setFocused('default_language')}
                    onBlur={() => setFocused('')}
                    defaultValue={'en'}
                  ></FormSelect>
                );
              }}
              name={'default_language'}
              control={control}
            />
          </div>

          <div className="col-md-4">
            <div className="tip-wrapper">
              {touched === 'default_language' && (
                <FormTip
                  text={
                    'The company of your career Portal. This can be a shortened version of Portal.'
                  }
                />
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <Controller
              render={({ field }) => (
                <FormSelect
                  {...field}
                  options={[
                    { value: 'en_US', label: 'es_US' },
                    { value: 'es_ES', label: 'es_ES' },
                  ]}
                  label="Default Locale"
                  id={'default_locale'}
                  name={'default_locale'}
                  onFocus={() => setFocused('default_locale')}
                  onBlur={() => setFocused('')}
                  defaultValue={'en_US'}
                ></FormSelect>
              )}
              name={'default_locale'}
              control={control}
            />
          </div>

          <div className="col-md-4">
            <div className="tip-wrapper">
              {touched === 'default_locale' && (
                <FormTip
                  text={
                    'The company of your career Portal. This can be a shortened version of Portal.'
                  }
                />
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <Controller
              render={({ field }) => (
                <TextInput
                  {...field}
                  disabled={false}
                  label="Google Manager Tag ID"
                  id={'google_id'}
                  name="google_id"
                  onFocus={() => setFocused('google_id')}
                  onBlur={() => setFocused('')}
                />
              )}
              name="google_id"
              control={control}
            />
          </div>

          <div className="col-md-4">
            <div className="tip-wrapper">
              {touched === 'google_id' && (
                <FormTip
                  text={
                    'After you obtain the Google Tag Manager ID from Google and add it in this field, Experfy Studio Incorporates the necessary code in your career portal for you to use Google Tag Manager. This field only enables Google Tag Manager for your Portal; it doesn’t manage the tags or perform any'
                  }
                />
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <Controller
              render={({ field }) => (
                <TextInput
                  {...field}
                  disabled={false}
                  label="Google Analytics ID"
                  id={'google_analytics'}
                  name={'google_analytics'}
                  onFocus={() => setFocused('google_analytics')}
                  onBlur={() => setFocused('')}
                />
              )}
              name="google_analytics"
              control={control}
            />
          </div>

          <div className="col-md-4">
            <div className="tip-wrapper">
              {touched === 'google_analytics' && (
                <FormTip
                  text={
                    'To connect Google Analytics with your Advanced careers portal, fill in below your tracking ID. It can take up to 24 hours for your metrics to show. A Google Analytics ID is a string like “UA-000000-2”'
                  }
                />
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <Controller
              render={({ field }) => (
                <TextInput
                  {...field}
                  disabled={false}
                  label="Google Webmaster ID"
                  id={'google_webmaster'}
                  name={'google_webmaster'}
                  onFocus={() => setFocused('google_webmaster')}
                  onBlur={() => setFocused('')}
                />
              )}
              name="google_webmaster"
              control={control}
            />
          </div>

          <div className="col-md-4">
            <div className="tip-wrapper">
              {touched === 'google_webmaster' && (
                <FormTip text={'The Google Webmaster account.'} />
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <Controller
              render={({ field }) => (
                <TextInput
                  {...field}
                  disabled={false}
                  label="BING Webmaster ID"
                  id={'bing_webmaster'}
                  name={'bing_webmaster'}
                  onFocus={() => setFocused('bing_webmaster')}
                  onBlur={() => setFocused('')}
                />
              )}
              name="bing_webmaster"
              control={control}
            />
          </div>

          <div className="col-md-4">
            <div className="tip-wrapper">
              {touched === 'bing_webmaster' && (
                <FormTip text={'The Bing Webmaster Tools account.'} />
              )}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <Controller
              render={({ field }) => (
                <TextInput
                  {...field}
                  disabled={false}
                  label="Tracking Pixel"
                  id={'tracking_pixel'}
                  name={'tracking_pixel'}
                  onFocus={() => setFocused('tracking_pixel')}
                  onBlur={() => setFocused('')}
                />
              )}
              name="tracking_pixel"
              control={control}
            />
          </div>

          <div className="col-md-4">
            <div className="tip-wrapper">
              {touched === 'tracking_pixel' && (
                <FormTip
                  text={
                    'Track your successful candidate conversions by adding a third-party tracking pixel to your career pages. When a candidate successfully applies (or “converts”), a pixel can be used to track the success of your job advertising campaigns. Tracking pixels are available through third party platforms like Indeed and Facebook. A tracking pixel must be an image.'
                  }
                />
              )}
            </div>
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
};

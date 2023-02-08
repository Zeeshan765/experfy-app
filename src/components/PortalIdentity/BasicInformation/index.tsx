import { Box } from '@mui/material';
import axios from 'axios';
import { useConfig } from 'payload/components/utilities';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import FormSelect from '../../../blocks/FormSelect';
import FormTip from '../../../blocks/FormTip';
import TextInput from '../../../blocks/TextInput';
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

  const watchAllFields = watch();
  const [touched, setFocused] = useState('');

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

        toast.success('Portal Identity Updated successfully');
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
                  disabled={false}
                  label="Portal ID"
                  {...field}
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
                  disabled={false}
                  label="Portal URL"
                  {...field}
                  id={'portal_url'}
                  onFocus={() => setFocused('portal_url')}
                  onBlur={() => setFocused('')}
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
                  disabled={false}
                  label="Company Name"
                  {...field}
                  id={'company_name'}
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
                    options={[{ value: 'English', label: 'English' }]}
                    label="Default Language"
                    id={'default_language'}
                    onFocus={() => setFocused('default_language')}
                    onBlur={() => setFocused('')}
                  />
                );
              }}
              name="default_language"
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
                  options={[{ value: 'US', label: 'United States' }]}
                  label="Default Locale"
                  id={'default_locale'}
                  onFocus={() => setFocused('default_locale')}
                  onBlur={() => setFocused('')}
                />
              )}
              name="default_locale"
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
                  disabled={false}
                  label="Google Manager Tag ID"
                  {...field}
                  id={'google_id'}
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
                  disabled={false}
                  label="Google Analytics ID"
                  {...field}
                  id={'google_analytics'}
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
                  disabled={false}
                  label="Google Webmaster ID"
                  {...field}
                  id={'google_webmaster'}
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
                  disabled={false}
                  label="BING Webmaster ID"
                  {...field}
                  id={'bing_webmaster'}
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
                  disabled={false}
                  label="Tracking Pixel"
                  {...field}
                  id={'tracking_pixel'}
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
}

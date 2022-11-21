import { Box, Grid } from '@mui/material';
import { Button, Eyebrow } from 'payload/components/elements';
import { Form } from 'payload/components/forms';
import { useConfig } from 'payload/components/utilities';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import FormSelect from '../../../blocks/FormSelect';
import FormTip from '../../../blocks/FormTip';
import TextInput from '../../../blocks/TextInput';
import { getToolTipApi } from '../apiPortal-Identity';

export default function BasicInformation(props) {
  const { adminPortal, setAdminPortal } = props;
  const {
    admin: { user: userSlug },
    collections,
    serverURL,
    routes: { admin, api },
  } = useConfig();

  const userConfig = collections.find(
    (collection) => collection.slug === userSlug
  );

  const defaultValues = {
    default_language: props.adminPortal.default_language,
    default_locale: 'US',
  };
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
  });
  const [toolTip, setToolTip] = useState<any>();
  const [toolTipVisible, setToolTipVisible] = useState(null);

 

  useEffect(() => {
    getToolTipApi(setToolTip, setLoading);
  }, []);

  useEffect(() => {}, [props]);

  const [touched, setTouched] = useState('');

  return (
    <Box sx={{ p: 1 }}>
      <Form method="post" action={`${serverURL}${api}/basic-portal-identity`}>
        <Grid container>
          <Grid item xs={8}>
            <TextInput
              label={'Portal Name'}
              path={'career_portal_name'}
              minLength={3}
              required={true}
              placeHolder={'Company Career Portal'}
              setTouched={setTouched}
            />
          </Grid>
          <Grid item xs={4}>
            {touched === 'career_portal_name' && (
              <FormTip text={'The go-to-market name of the career portal'} />
            )}
          </Grid>
          <Grid item xs={8}>
            <TextInput
              path={'portal_id'}
              label="Portal ID"
              required={true}
              placeHolder="CP-ID798998989"
              setTouched={setTouched}
            />
          </Grid>
          <Grid item xs={4}>
            {touched === 'portal_id' && (
              <FormTip text={'The read only filed displays the Portal ID'} />
            )}
          </Grid>
          <Grid item xs={8}>
            <TextInput
              path={'portal_url'}
              label="Portal URL"
              required={true}
              placeHolder="www.experfy.com/career-portal"
              setTouched={setTouched}
            />
          </Grid>
          <Grid item xs={4}>
            {touched === 'portal_url' && (
              <FormTip
                text={
                  'Access your career portal using this domain. This is thee single main domain upon which all applications in your external career portal are based. Don’t include “http” or “https” in easily identify the URL'
                }
              />
            )}
          </Grid>
          <Grid item xs={8}>
            <TextInput
              path={'company_name'}
              label="Company Name"
              placeHolder="Company Name"
              setTouched={setTouched}
            />
          </Grid>
          <Grid item xs={4}>
            {touched === 'company_name' && (
              <FormTip
                text={
                  'The company of your career Portal. This can be a shortened version of Portal.'
                }
              />
            )}
          </Grid>
          <Grid item xs={8}>
            <FormSelect
              type={'select'}
              options={['English', 'Spanish']}
              label="Default Language"
              name={'default_language'}
              path={'default_language'}
              defaultValue="English"
            />
          </Grid>
          <Grid item xs={4}>
            <FormTip text="Set the default language of your career portal for your visitors" />
          </Grid>
          <Grid item xs={8}>
            <FormSelect
              options={['US', 'ES']}
              label="Default Locale"
              name={'default_locale'}
              path={'default_locale'}
              defaultValue="US"
              type={'select'}
            />
          </Grid>
          <Grid item xs={4}>
            <FormTip text="Set the default locale of your career portal for your visitors" />
          </Grid>{' '}
          <Grid item xs={8}>
            <TextInput
              path={'google_id'}
              label="Google Manager Tag ID"
              placeHolder="Add Google Manager Tag Id"
              setTouched={setTouched}
            />
          </Grid>
          <Grid item xs={4}>
            {touched === 'google_id' && (
              <FormTip
                text={
                  'After you obtain the Google Tag Manager ID from Google and add it in this field, Experfy Studio Incorporates the necessary code in your career portal for you to use Google Tag Manager. This field only enables Google Tag Manager for your Portal; it doesn’t manage the tags or perform any'
                }
              />
            )}
          </Grid>
          <Grid item xs={8}>
            <TextInput
              path={'google_analytics'}
              label="Google Analytics ID"
              placeHolder="Add Google Analytics ID"
              setTouched={setTouched}
            />
          </Grid>
          <Grid item xs={4}>
            {touched === 'google_analytics' && (
              <FormTip
                text={
                  'To connect Google Analytics with your Advanced careers portal, fill in below your tracking ID. It can take up to 24 hours for your metrics to show. A Google Analytics ID is a string like “UA-000000-2”'
                }
              />
            )}
          </Grid>
          <Grid item xs={8}>
            <TextInput
              path={'google_webmaster'}
              label="Google Webmaster Id"
              placeHolder="Add Google Webmaster ID"
              setTouched={setTouched}
            />
          </Grid>
          <Grid item xs={4}>
            {touched === 'google_webmaster' && (
              <FormTip text={'The Google Webmaster account.'} />
            )}
          </Grid>
          <Grid item xs={8}>
            <TextInput
              path={'bing_webmaster'}
              label="Bing Webmaster Id"
              placeHolder="Add Bing Webmaster ID"
              setTouched={setTouched}
            />
          </Grid>
          <Grid item xs={4}>
            {touched === 'bing_webmaster' && (
              <FormTip text={'The Bing Webmaster Tools account.'} />
            )}
          </Grid>
          <Grid item xs={8}>
            <TextInput
              path={'tracking_pixel'}
              label="Tracking Pixel"
              placeHolder="Add Tracking Pixel"
              setTouched={setTouched}
            />
          </Grid>
          <Grid item xs={4}>
            {touched === 'tracking_pixel' && (
              <FormTip
                text={
                  'Track your successful candidate conversions by adding a third-party tracking pixel to your career pages. When a candidate successfully applies (or “converts”), a pixel can be used to track the success of your job advertising campaigns. Tracking pixels are available through third party platforms like Indeed and Facebook. A tracking pixel must be an image.'
                }
              />
            )}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" className="primary-btn-style">
           
            Save{' '}
          </Button>
        </Grid>
      </Form>
    </Box>
  );
}
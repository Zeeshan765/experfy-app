import { Box, Button, Grid } from '@mui/material';
import { Form } from 'payload/components/forms';
import { useConfig } from 'payload/components/utilities';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import FormSelect from '../../../blocks/FormSelect';
import FormTip from '../../../blocks/FormTip';
import TextInput from '../../../blocks/TextInput/Component';
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
  console.log('asda8127938****', collections);
  console.log('8988885656475464756', userConfig);

  console.log('info', props);

  // const [adminPortal, setAdminPortal] = useState({});

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

  console.log('adminPortal', adminPortal);

  useEffect(() => {
    getToolTipApi(setToolTip, setLoading);
  }, []);

  // useEffect(() => {

  useEffect(() => {
    // setValue("portal_id", adminPortal.portal_id);
    // setValue("portal_name", adminPortal.portal_name);
    // setValue("portal_url", adminPortal.portal_url);
    // setValue("company_name", adminPortal.company_name);
    // setValue("google_tag_manager_id", adminPortal.google_tag_manager_id);
    // setValue("google_analytics_id", adminPortal.google_analytics_id);
    // setValue("google_webmaster_id", adminPortal.google_webmaster_id);
    // setValue("bing_webmaster_id", adminPortal.bing_webmaster_id);
    // setValue("tracking_pixel", adminPortal.tracking_pixel);
  }, [props]);

  // const onSubmit = (data) => {
  //   const deleteProps = [
  //     'portal_name',
  //     'portal_id',
  //     'portal_url',
  //     'company_name',
  //     'default_language',
  //     'default_locale',
  //     'google_analytics_id',
  //     'google_tag_manager_id',
  //     'bing_webmaster_id',
  //     'tracking_pixel',
  //   ].forEach((element) => {
  //     if (data[element] == '') {
  //       delete data[element];
  //     }
  //   });
  //   basicInformationAPI(
  //     data,
  //     adminPortal,
  //     setAdminPortal,
  //     setLoading,
  //     setSuccessMessage,
  //     setSuccess,
  //     setErrorMessage,
  //     setError
  //   );
  // };

  const [touched, setTouched] = useState('');

  return (
    <Box sx={{ p: 1 }}>
      <Form method="post" action={`${serverURL}${api}/landing`}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <TextInput
              label={'Portal Name'}
              path={'career_portal_name'}
              minLength={3}
              required={true}
              placeHolder={'Company Career Portal'}
              // onChange={e => { setValue((e) => { e.target.value }); console.log("test onChange", e.target.value) }}
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
              options={[
                { value: 'English', label: 'English' },
                { value: 'Spanish', label: 'Spanish' },
              ]}
              label="Default Language"
              name={'default_language'}
              path={'default_language'}
              defaultValue="English"
            />
          </Grid>
          <Grid item xs={4}>
            {touched === 'default_language' && (
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
              options={[{ value: 'US', label: 'United States' }]}
              label="Default Locale"
              name={'default_locale'}
              path={'default_locale'}
              defaultValue="US"
            />
          </Grid>
          <Grid item xs={4}>
            {touched === 'default_locale' && (
              <FormTip
                text={
                  'The company of your career Portal. This can be a shortened version of Portal.'
                }
              />
            )}
          </Grid>

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
            {touched === 'bring_webmaster' && (
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
          <Button variant="contained" color="primary" type="submit">
            Save
          </Button>
        </Grid>
      </Form>
    </Box>
  );
}

{
  /* //   <form onSubmit={handleSubmit(onSubmit)}>
    //     {success ? ( */
}
//       <Grid>
//         <DescriptionAlerts
//           successMessage={successMessage}
//           setSuccess={setSuccess}
//           success={success}
//           title={"Congratulations"}
//         />
//       </Grid>
//     ) : (
//       ``
//     )}
//     {error ? (
//       <Grid>
//         <DescriptionAlerts
//           errorMessage={errorMessage}
//           setError={setError}
//           error={error}
//           title="Following fields are either taken or blank"
//         />
//       </Grid>
//     ) : (
//       ``
//     )}

//     <Grid container spacing={3}>
//       <Grid item xs={8}>
//         <Controller
//           render={({ field }) => (
//             <TextInput
//               {...field}
//               id={"portal_name"}
//               label="Career Portal Name"
//               setToolTipVisible={setToolTipVisible}
//             />
//           )}
//           name="portal_name"
//           control={control}
//           rules={{
//             required: "Field required",
//             pattern: {
//               value: /[^-\s]/i,
//               message: "Remove any whitespace", // JS only: <p>error message</p> TS only support string
//             },
//           }}
//         />
//         <ErrorMessage
//           errors={errors}
//           name="portal_name"
//           render={({ message }) => (
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "start",
//                 color: "#bf1650",
//                 alignItems: "center",
//               }}
//             >
//               <span>⚠ </span> &nbsp;
//               <p>{message}</p>
//             </div>
//           )}
//         />
//       </Grid>
//       {toolTipVisible == "portal_name" && (
//         <Grid item xs={4}>
//           <FormTip text={toolTip?.portal_name} />
//         </Grid>
//       )}
//       <Grid item xs={8}>
//         <Controller
//           render={({ field }) => (
//             <TextInput
//               {...field}
//               label="Portal ID"
//               disabled={true}
//               id={"portal_id"}
//               setToolTipVisible={setToolTipVisible}
//             />
//           )}
//           name="portal_id"
//           control={control}
//         />
//       </Grid>
//       {toolTipVisible == "portal_id" && (
//         <Grid item xs={4}>
//           <FormTip text="The read only field displays the Portal ID" />
//         </Grid>
//       )}
//       <Grid item xs={8}>
//         <Controller
//           render={({ field }) => (
//             <TextInput
//               {...field}
//               id={"portal_url"}
//               label="Portal URL"
//               placeHolder="www.experfydemo/career-portal-experfy.com"
//               setToolTipVisible={setToolTipVisible}
//             />
//           )}
//           name="portal_url"
//           control={control}
//           rules={{
//             required: "Field required",
//             pattern: {
//               value: /[^-\s]/i,
//               message: "Remove any whitespace", // JS only: <p>error message</p> TS only support string
//             },
//           }}
//         />
//         <ErrorMessage
//           errors={errors}
//           name="portal_url"
//           render={({ message }) => (
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "start",
//                 color: "#bf1650",
//                 alignItems: "center",
//               }}
//             >
//               <span>⚠ </span> &nbsp;
//               <p>{message}</p>
//             </div>
//           )}
//         />
//       </Grid>
//       {toolTipVisible == "portal_url" && (
//         <Grid item xs={4}>
//           <FormTip text={toolTip?.portal_url} />
//         </Grid>
//       )}
//       <Grid item xs={8}>
//         <Controller
//           render={({ field }) => (
//             <TextInput
//               disabled={true}
//               {...field}
//               id={"company_name"}
//               label="Company Name"
//               setToolTipVisible={setToolTipVisible}
//             />
//           )}
//           name="company_name"
//           control={control}
//         />
//       </Grid>
//       {toolTipVisible == "company_name" && (
//         <Grid item xs={4}>
//           <FormTip text={toolTip?.company_name} />
//         </Grid>
//       )}
//       <Grid item xs={8}>
//         <Controller
//           render={({ field }) => (
//             <FormSelect
//               {...field}
//               options={[
//                 { value: "English", label: "English" },
//                 { value: "Persian", label: "Persian" },
//               ]}
//               label="Default Language"
//               id={"default_language"}
//               setToolTipVisible={setToolTipVisible}
//             />
//           )}
//           name="default_language"
//           control={control}
//         />
//       </Grid>
//       { }
//       {toolTipVisible == "default_language" && (
//         <Grid item xs={4}>
//           <FormTip text={toolTip?.default_language} />
//         </Grid>
//       )}
//       <Grid item xs={8}>
//         <Controller
//           render={({ field }) => (
//             <FormSelect
//               {...field}
//               options={[{ value: "US", label: "United States" }]}
//               label="Default Locale"
//               id={"default_locale"}
//               setToolTipVisible={setToolTipVisible}
//             />
//           )}
//           name="default_locale"
//           control={control}
//         />
//       </Grid>
//       {toolTipVisible == "default_locale" && (
//         <Grid item xs={4}>
//           <FormTip text={toolTip?.default_locale} />
//         </Grid>
//       )}
//       <Grid item xs={8}>
//         <Controller
//           render={({ field }) => (
//             <TextInput
//               {...field}
//               label="Google Tag Manager ID"
//               placeHolder="Add Google Tag Manager ID"
//               id={"google_tag_manager_id"}
//               setToolTipVisible={setToolTipVisible}
//             />
//           )}
//           name="google_tag_manager_id"
//           control={control}
//         />
//       </Grid>
//       {toolTipVisible == "google_tag_manager_id" && (
//         <Grid item xs={4}>
//           <FormTip text={toolTip?.google_tag_manager_id} />
//         </Grid>
//       )}
//       <Grid item xs={8}>
//         <Controller
//           render={({ field }) => (
//             <TextInput
//               {...field}
//               label="Google Analytics ID"
//               placeHolder="Add Google Analytics ID"
//               id={"google_analytics_id"}
//               setToolTipVisible={setToolTipVisible}
//             />
//           )}
//           name="google_analytics_id"
//           control={control}
//         />
//       </Grid>
//       {toolTipVisible == "google_analytics_id" && (
//         <Grid item xs={4}>
//           <FormTip text={toolTip?.google_analytics_id} />
//         </Grid>
//       )}
//       <Grid item xs={8}>
//         <Controller
//           render={({ field }) => (
//             <TextInput
//               {...field}
//               label="Google Webmaster ID"
//               placeHolder="Add Google Webmaster ID"
//               id={"google_webmaster_id"}
//               setToolTipVisible={setToolTipVisible}
//             />
//           )}
//           name="google_webmaster_id"
//           control={control}
//         />
//       </Grid>
//       {toolTipVisible == "google_webmaster_id" && (
//         <Grid item xs={4}>
//           <FormTip text={toolTip?.google_webmaster_id} />
//         </Grid>
//       )}
//       <Grid item xs={8}>
//         <Controller
//           render={({ field }) => (
//             <TextInput
//               {...field}
//               label="Bing Webmaster ID"
//               placeHolder="Add Bing Webmaster ID"
//               id={"bing_webmaster_id"}
//               setToolTipVisible={setToolTipVisible}
//             />
//           )}
//           name="bing_webmaster_id"
//           control={control}
//         />
//       </Grid>
//       {toolTipVisible == "bing_webmaster_id" && (
//         <Grid item xs={4}>
//           <FormTip text={toolTip?.bing_webmaster_id} />
//         </Grid>
//       )}
//       <Grid item xs={8}>
//         <Controller
//           render={({ field }) => (
//             <TextInput
//               {...field}
//               label="Tracking Pixel"
//               placeHolder="URL to tracking pixel"
//               id={"tracking_pixel"}
//               setToolTipVisible={setToolTipVisible}
//             />
//           )}
//           name="tracking_pixel"
//           control={control}
//         />
//       </Grid>
//       {toolTipVisible == "tracking_pixel" && (
//         <Grid item xs={4}>
//           <FormTip text={toolTip?.tracking_pixel} />
//         </Grid>
//       )}
//       <Grid item xs={12}>
//         <Button variant="contained" color="primary" type="submit">
//           Save
//         </Button>
//       </Grid>
//     </Grid>
//   </form>
// </Box>
// );
// }

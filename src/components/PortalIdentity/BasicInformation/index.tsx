import { Box, Grid } from "@mui/material";
import { Button, Eyebrow } from 'payload/components/elements';
import { Form } from "payload/components/forms";
import { useConfig } from "payload/components/utilities";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FormSelect from "../../../blocks/FormSelect";
import FormTip from "../../../blocks/FormTip";
import TextInput from "../../../blocks/TextInput";
import { getToolTipApi } from "../apiPortal-Identity";

export default function BasicInformation(props) {
  const { adminPortal, setAdminPortal, propsdata } = props;
  console.log('propsdata', propsdata ?? '');
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
    default_locale: "US",
  };
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiMethod, setApiMethod] = useState('post');
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

  useEffect(() => {
    if (propsdata?.id) {
      setApiMethod('patch');
    } else {
      setApiMethod('post');
    }
  }, [propsdata]);

  // let method=propsdata?.id?.length > 0 ? "patch" : "post";
  const [touched, setTouched] = useState('');
  // console.log('propsdata?.id', propsdata?.id,serverURL,api);
  return (
    <Box sx={{ p: 1 }}>
      <Form
        method={apiMethod}
        action={`${serverURL}${api}/basic-portal-identity/${
          propsdata?.id ?? ''
        }`}
      >
        <div className="row">
          <div className="col-md-8">
            <TextInput
              label={"Portal Name"}
              path={"career_portal_name"}
              minLength={3}
              required={true}
              display={propsdata?.career_portal_name}
              // placeHolder={'Company Career Portal'}
              placeHolder={"Company Career Portal"}
              // onChange={e => { setValue((e) => { e.target.value }); console.log("test onChange", e.target.value) }}
              setTouched={setTouched}
            />
          </div>

          <div className="col-md-4">
            {touched === "career_portal_name" && (
              <FormTip text={"The go-to-market name of the career portal"} />
            )}
          </div>
        </div>

        {/* <Grid item xs={8}>
          
          </Grid>
          <Grid item xs={4}>
           
          </Grid> */}

        <div className="row">
          <div className="col-md-8">
            <TextInput
              path={"portal_id"}
              label="Portal ID"
              required={true}
              display={propsdata?.portal_id}
              // placeHolder="CP-ID798998989"
              setTouched={setTouched}
            />
          </div>

          <div className="col-md-4">
            {touched === "portal_id" && (
              <FormTip text={"The read only filed displays the Portal ID"} />
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <TextInput
              path={"portal_url"}
              label="Portal URL"
              required={true}
              display={propsdata?.portal_url}
              // placeHolder="www.experfy.com/career-portal"
              setTouched={setTouched}
            />
          </div>

          <div className="col-md-4">
            {touched === "portal_url" && (
              <FormTip
                text={
                  "Access your career portal using this domain. This is thee single main domain upon which all applications in your external career portal are based. Don’t include “http” or “https” in easily identify the URL"
                }
              />
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <TextInput
              path={"company_name"}
              label="Company Name"
              display={propsdata?.company_name}
              // placeHolder="Company Name"
              setTouched={setTouched}
            />
          </div>

          <div className="col-md-4">
            {touched === "company_name" && (
              <FormTip
                text={
                  "The company of your career Portal. This can be a shortened version of Portal."
                }
              />
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <FormSelect
              type={'select'}
              options={['English', 'Spanish']}
              label="Default Language"
              name={'default_language'}
              path={'default_language'}
              display={propsdata?.default_language}
              defaultValue="English"
              setTouched={setTouched}
            />
          </div>

          <div className="col-md-4">
            {touched === "default_language" && (
              <FormTip
                text={
                  "The company of your career Portal. This can be a shortened version of Portal."
                }
              />
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <FormSelect
              options={['US', 'ES']}
              label="Default Locale"
              name={'default_locale'}
              path={'default_locale'}
              display={propsdata?.default_locale}
              defaultValue="US"
              type={'select'}
              setTouched={setTouched}
            />
          </div>

          <div className="col-md-4">
            {touched === "default_locale" && (
              <FormTip
                text={
                  "The company of your career Portal. This can be a shortened version of Portal."
                }
              />
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <TextInput
              path={"google_id"}
              label="Google Manager Tag ID"
              // placeHolder="Add Google Manager Tag Id"
              display={propsdata?.google_id}
              setTouched={setTouched}
            />
          </div>

          <div className="col-md-4">
            {touched === "google_id" && (
              <FormTip
                text={
                  "After you obtain the Google Tag Manager ID from Google and add it in this field, Experfy Studio Incorporates the necessary code in your career portal for you to use Google Tag Manager. This field only enables Google Tag Manager for your Portal; it doesn’t manage the tags or perform any"
                }
              />
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <TextInput
              path={"google_analytics"}
              label="Google Analytics ID"
              display={propsdata?.google_analytics}
              // placeHolder="Add Google Analytics ID"
              setTouched={setTouched}
            />
          </div>

          <div className="col-md-4">
            {touched === "google_analytics" && (
              <FormTip
                text={
                  "To connect Google Analytics with your Advanced careers portal, fill in below your tracking ID. It can take up to 24 hours for your metrics to show. A Google Analytics ID is a string like “UA-000000-2”"
                }
              />
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <TextInput
              path={"google_webmaster"}
              label="Google Webmaster Id"
              // placeHolder="Add Google Webmaster ID"
              display={propsdata?.google_webmaster}
              setTouched={setTouched}
            />
          </div>

          <div className="col-md-4">
            {touched === "google_webmaster" && (
              <FormTip text={"The Google Webmaster account."} />
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <TextInput
              path={"bing_webmaster"}
              label="Bing Webmaster Id"
              display={propsdata?.bing_webmaster}
              // placeHolder="Add Bing Webmaster ID"
              setTouched={setTouched}
            />
          </div>

          <div className="col-md-4">
            {touched === "bring_webmaster" && (
              <FormTip text={"The Bing Webmaster Tools account."} />
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <TextInput
              path={"tracking_pixel"}
              label="Tracking Pixel"
              display={propsdata?.tracking_pixel}
              // placeHolder="Add Tracking Pixel"
              setTouched={setTouched}
            />
          </div>

          <div className="col-md-4">
            {touched === "tracking_pixel" && (
              <FormTip
                text={
                  "Track your successful candidate conversions by adding a third-party tracking pixel to your career pages. When a candidate successfully applies (or “converts”), a pixel can be used to track the success of your job advertising campaigns. Tracking pixels are available through third party platforms like Indeed and Facebook. A tracking pixel must be an image."
                }
              />
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            {/* <Button variant="contained" color="primary" >
             
            </Button> */}
            <Button type="submit"  buttonStyle="primary">Save</Button>
          </div>
        </div>
      </Form>
    </Box>
  );
}

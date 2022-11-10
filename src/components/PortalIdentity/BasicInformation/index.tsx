import React, { useState, useEffect } from "react";
import { Box, Button, Grid } from "@mui/material";
import TextInput from "../../../blocks/TextInput/Component";
import FormSelect from "../../../blocks/FormSelect";
import FormTip from "../../../blocks/FormTip";
import { useForm, Controller, useFieldArray } from "react-hook-form";
import { basicInformationAPI } from "../apiPortal-Identity";
import DescriptionAlerts from "../../../blocks/Messages";
import { getToolTipApi } from "../apiPortal-Identity";
import { ErrorMessage } from "@hookform/error-message";

export default function BasicInformation(props) {
  const { adminPortal, setAdminPortal } = props;


  console.log("info", props)

  // const [adminPortal, setAdminPortal] = useState({});

  const defaultValues = {
    default_language: props.adminPortal.default_language,
    default_locale: "US",
  };
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
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
  const [toolTip, setToolTip] = useState();
  const [toolTipVisible, setToolTipVisible] = useState(null);



  console.log("adminPortal", adminPortal)









  useEffect(() => {
    getToolTipApi(setToolTip, setLoading);
  }, []);






  useEffect(() => {

    setValue("portal_id", adminPortal.portal_id);
    setValue("portal_name", adminPortal.portal_name);
    setValue("portal_url", adminPortal.portal_url);
    setValue("company_name", adminPortal.company_name);
    setValue("google_tag_manager_id", adminPortal.google_tag_manager_id);
    setValue("google_analytics_id", adminPortal.google_analytics_id);
    setValue("google_webmaster_id", adminPortal.google_webmaster_id);
    setValue("bing_webmaster_id", adminPortal.bing_webmaster_id);
    setValue("tracking_pixel", adminPortal.tracking_pixel);
  }, [props]);

  const onSubmit = (data) => {
    const deleteProps = [
      "portal_name",
      "portal_id",
      "portal_url",
      "company_name",
      "default_language",
      "default_locale",
      "google_analytics_id",
      "google_tag_manager_id",
      "bing_webmaster_id",
      "tracking_pixel",
    ].forEach((element) => {
      if (data[element] == "") {
        delete data[element];
      }
    });
    basicInformationAPI(
      data,
      adminPortal,
      setAdminPortal,
      setLoading,
      setSuccessMessage,
      setSuccess,
      setErrorMessage,
      setError
    );
  };

  return (
    <Box sx={{ p: 1 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {success ? (
          <Grid>
            <DescriptionAlerts
              successMessage={successMessage}
              setSuccess={setSuccess}
              success={success}
              title={"Congratulations"}
            />
          </Grid>
        ) : (
          ``
        )}
        {error ? (
          <Grid>
            <DescriptionAlerts
              errorMessage={errorMessage}
              setError={setError}
              error={error}
              title="Following fields are either taken or blank"
            />
          </Grid>
        ) : (
          ``
        )}

        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Controller
              render={({ field }) => (
                <TextInput
                  {...field}
                  id={"portal_name"}
                  label="Career Portal Name"
                  setToolTipVisible={setToolTipVisible}
                />
              )}
              name="portal_name"
              control={control}
              rules={{
                required: "Field required",
                pattern: {
                  value: /[^-\s]/i,
                  message: "Remove any whitespace", // JS only: <p>error message</p> TS only support string
                },
              }}
            />
            <ErrorMessage
              errors={errors}
              name="portal_name"
              render={({ message }) => (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    color: "#bf1650",
                    alignItems: "center",
                  }}
                >
                  <span>⚠ </span> &nbsp;
                  <p>{message}</p>
                </div>
              )}
            />
          </Grid>
          {toolTipVisible == "portal_name" && (
            <Grid item xs={4}>
              <FormTip text={toolTip?.portal_name} />
            </Grid>
          )}
          <Grid item xs={8}>
            <Controller
              render={({ field }) => (
                <TextInput
                  {...field}
                  label="Portal ID"
                  disabled={true}
                  id={"portal_id"}
                  setToolTipVisible={setToolTipVisible}
                />
              )}
              name="portal_id"
              control={control}
            />
          </Grid>
          {toolTipVisible == "portal_id" && (
            <Grid item xs={4}>
              <FormTip text="The read only field displays the Portal ID" />
            </Grid>
          )}
          <Grid item xs={8}>
            <Controller
              render={({ field }) => (
                <TextInput
                  {...field}
                  id={"portal_url"}
                  label="Portal URL"
                  placeholder="www.experfydemo/career-portal-experfy.com"
                  setToolTipVisible={setToolTipVisible}
                />
              )}
              name="portal_url"
              control={control}
              rules={{
                required: "Field required",
                pattern: {
                  value: /[^-\s]/i,
                  message: "Remove any whitespace", // JS only: <p>error message</p> TS only support string
                },
              }}
            />
            <ErrorMessage
              errors={errors}
              name="portal_url"
              render={({ message }) => (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "start",
                    color: "#bf1650",
                    alignItems: "center",
                  }}
                >
                  <span>⚠ </span> &nbsp;
                  <p>{message}</p>
                </div>
              )}
            />
          </Grid>
          {toolTipVisible == "portal_url" && (
            <Grid item xs={4}>
              <FormTip text={toolTip?.portal_url} />
            </Grid>
          )}
          <Grid item xs={8}>
            <Controller
              render={({ field }) => (
                <TextInput
                  disabled={true}
                  {...field}
                  id={"company_name"}
                  label="Company Name"
                  setToolTipVisible={setToolTipVisible}
                />
              )}
              name="company_name"
              control={control}
            />
          </Grid>
          {toolTipVisible == "company_name" && (
            <Grid item xs={4}>
              <FormTip text={toolTip?.company_name} />
            </Grid>
          )}
          <Grid item xs={8}>
            <Controller
              render={({ field }) => (
                <FormSelect
                  {...field}
                  options={[
                    { value: "English", label: "English" },
                    { value: "Persian", label: "Persian" },
                  ]}
                  label="Default Language"
                  id={"default_language"}
                  setToolTipVisible={setToolTipVisible}
                />
              )}
              name="default_language"
              control={control}
            />
          </Grid>
          { }
          {toolTipVisible == "default_language" && (
            <Grid item xs={4}>
              <FormTip text={toolTip?.default_language} />
            </Grid>
          )}
          <Grid item xs={8}>
            <Controller
              render={({ field }) => (
                <FormSelect
                  {...field}
                  options={[{ value: "US", label: "United States" }]}
                  label="Default Locale"
                  id={"default_locale"}
                  setToolTipVisible={setToolTipVisible}
                />
              )}
              name="default_locale"
              control={control}
            />
          </Grid>
          {toolTipVisible == "default_locale" && (
            <Grid item xs={4}>
              <FormTip text={toolTip?.default_locale} />
            </Grid>
          )}
          <Grid item xs={8}>
            <Controller
              render={({ field }) => (
                <TextInput
                  {...field}
                  label="Google Tag Manager ID"
                  placeholder="Add Google Tag Manager ID"
                  id={"google_tag_manager_id"}
                  setToolTipVisible={setToolTipVisible}
                />
              )}
              name="google_tag_manager_id"
              control={control}
            />
          </Grid>
          {toolTipVisible == "google_tag_manager_id" && (
            <Grid item xs={4}>
              <FormTip text={toolTip?.google_tag_manager_id} />
            </Grid>
          )}
          <Grid item xs={8}>
            <Controller
              render={({ field }) => (
                <TextInput
                  {...field}
                  label="Google Analytics ID"
                  placeholder="Add Google Analytics ID"
                  id={"google_analytics_id"}
                  setToolTipVisible={setToolTipVisible}
                />
              )}
              name="google_analytics_id"
              control={control}
            />
          </Grid>
          {toolTipVisible == "google_analytics_id" && (
            <Grid item xs={4}>
              <FormTip text={toolTip?.google_analytics_id} />
            </Grid>
          )}
          <Grid item xs={8}>
            <Controller
              render={({ field }) => (
                <TextInput
                  {...field}
                  label="Google Webmaster ID"
                  placeholder="Add Google Webmaster ID"
                  id={"google_webmaster_id"}
                  setToolTipVisible={setToolTipVisible}
                />
              )}
              name="google_webmaster_id"
              control={control}
            />
          </Grid>
          {toolTipVisible == "google_webmaster_id" && (
            <Grid item xs={4}>
              <FormTip text={toolTip?.google_webmaster_id} />
            </Grid>
          )}
          <Grid item xs={8}>
            <Controller
              render={({ field }) => (
                <TextInput
                  {...field}
                  label="Bing Webmaster ID"
                  placeholder="Add Bing Webmaster ID"
                  id={"bing_webmaster_id"}
                  setToolTipVisible={setToolTipVisible}
                />
              )}
              name="bing_webmaster_id"
              control={control}
            />
          </Grid>
          {toolTipVisible == "bing_webmaster_id" && (
            <Grid item xs={4}>
              <FormTip text={toolTip?.bing_webmaster_id} />
            </Grid>
          )}
          <Grid item xs={8}>
            <Controller
              render={({ field }) => (
                <TextInput
                  {...field}
                  label="Tracking Pixel"
                  placeholder="URL to tracking pixel"
                  id={"tracking_pixel"}
                  setToolTipVisible={setToolTipVisible}
                />
              )}
              name="tracking_pixel"
              control={control}
            />
          </Grid>
          {toolTipVisible == "tracking_pixel" && (
            <Grid item xs={4}>
              <FormTip text={toolTip?.tracking_pixel} />
            </Grid>
          )}
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

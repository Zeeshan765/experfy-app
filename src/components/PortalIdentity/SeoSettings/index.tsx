import { Box, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import DescriptionAlerts from "../../../blocks/Messages";
import TextInput from "../../../blocks/TextInput/Component";
import { seoSettingApi } from "../apiPortal-Identity";

// import TextArea from '../../components/TextArea';

export default function SeoSettings(props) {
  const { control, handleSubmit, register } = useForm({});
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const onSubmit = (data) => {
    seoSettingApi(
      data,
      props.adminPortal,
      props.setSeo_Setting,
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
              // setSuccess={setSuccess}
              success={success}
              title={"Seo-Settings"}
            />
          </Grid>
        ) : (
          ``
        )}
        {error ? (
          <Grid>
            <DescriptionAlerts
              // errorMessage={errorMessage}
              // setError={setError}
              // error={error}
              title="Please Check the following"
            />
          </Grid>
        ) : (
          ``
        )}

        <Grid container spacing={3}>
          <Grid item xs={8}>
            {/* <Controller
              render={({ field }) => (
                // <TextInput
                //   {...field}
                //   label="Page Title"
                //   // placeholder="Add Page title to your career portal"
                // />
              )}
              name="title"
              control={control}
            /> */}
          </Grid>
          <Grid item xs={8}>
            {/* <Controller
              render={({ field }) => (
                // <TextInput
                //   {...field}
                //   label="Meta Keywords"
                //   // placeholder="Add keywords separated by commas"
                // />
              )}
              name="keyword"
              control={control}
            /> */}
          </Grid>
          <Grid item xs={8}>
            {/* <Controller
              render={({ field }) => (
                // <TextInput
                //   {...field}
                //   label="Meta Description"
                //   placeholder="Provide description of your career portal"
                // />
              )}
              name="description"
              control={control}
            /> */}

            {/* <TextArea label="Meta Description" placeholder="Provide description of your career portal" rows={5} /> */}
          </Grid>
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

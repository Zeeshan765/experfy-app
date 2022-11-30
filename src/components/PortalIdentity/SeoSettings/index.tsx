import { Box, Grid } from "@mui/material";
import { Button, Eyebrow } from 'payload/components/elements';
import { useConfig } from "payload/components/utilities";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../../../blocks/TextInput";
import { seoSettingApi } from "../apiPortal-Identity";
// import TextArea from '../../components/TextArea';
import { Form } from "payload/components/forms";

export default function SeoSettings(props) {
  const { propsdata } = props;
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

  const {
    admin: { user: userSlug },
    collections,
    serverURL,
    routes: { admin, api },
  } = useConfig();

  // useEffect(() => {
  //   if (propsdata?.id) {
  //     setApiMethod('patch');
  //   } else {
  //     setApiMethod('post');
  //   }
  // }, [propsdata]);

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
              path={"meta_description"}
              label="Meta Description"
              display={propsdata?.meta_description}
              required={false}
              placeHolder="Provide Description of your career Portal"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <button type="submit" className="btn btn--style-primary"> Submit </button>
          </div>
        </div>
      </Form>
    </Box>
  );
}

import React, { useState } from "react";

import {
  Card,
  Box,
  CardContent,
  CardActions,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  List,
  ListItem,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  CircularProgress,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import FormSelect from "../FormSelect";
import TextInput from "../TextInput/Component";











const FormOne: React.FC<any> = (props) => {
  const { handleClose, setFormData } = props;













  const onChangeHandlear = (e) => {
    const { name, value } = e.target;
    setFormData(pre => ({ ...pre, [name]: value }));
  }




  return (
    <>
      <DialogTitle>
        <Grid container justifyContent="space-between" alignItems="center">
          <Typography variant="h2">Portal Identity</Typography>
          <IconButton onClick={() => handleClose()}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </DialogTitle>

      <DialogContent>
        <Typography variant="h5" mb={2}>
          Fill in the information below and you will be on your way to creating
          your Career portal
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <TextInput
              label="Career Portal Name"
              placeHolder="Company Career Portal"
              path={"portal_name"}
              required={true}
            />
          </Grid>

          <Grid item xs={8}>
            <TextInput
              label="Portal ID"
              placeHolder="CP-ID798998989"
              path="portal_id"
            />
          </Grid>




          <Grid item xs={8}>
            <TextInput
              label="Portal URL"
              path="portal_url"
              placeHolder="www.experfydemo/career-portal-experfy.com"

            />
          </Grid>

          <Grid item xs={8}>
            <TextInput
              label="Company Name"
              path="company_name"
            />
          </Grid>




        </Grid>
      </DialogContent>
    </>
  );
};

export default FormOne;



{/* <Grid item xs={8}>
            <FormSelect
              options={[{ value: "English", label: "English" }]}
              label="Default Language"
              id={"default_language"}
              helpertext= 
              "Set the default language of your career portal for your visitors"

            />
          </Grid>

          <Grid item xs={8}>
            <FormSelect
              options={[{ value: "US", label: "United States" }]}
              label="Default Locale"
              id={"default_locale"}
              helpertext="Set the default Locale of your career portal for your visitors"


            />
          </Grid>
       */}
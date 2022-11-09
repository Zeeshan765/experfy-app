import React ,{useState}from "react";

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
import TextInput from "../TextInput1";
import FormSelect from "../FormSelect";











const FormOne: React.FC<any> = (props) => {
  const { handleClose ,setFormData} = props;













const onChangeHandlear=(e)=>{
    const {name,value}=e.target;
    setFormData(pre=>({...pre,[name]:value})); 
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
              placeholder="Company Career Portal"
              id={"portal_name"}
              required={true}
              name="portal_name"
              onChange={onChangeHandlear}
              helpertext="The go-to-market name of the career portal"
            />
          </Grid>

          <Grid item xs={8}>
            <TextInput
              disabled={false}
              label="Portal ID"
              placeholder="CP-ID798998989"
              id={"portal_id"}
              name="portal_id"
              onChange={
                onChangeHandlear
                }
              helpertext=
              "The read only filed displays the Portal ID"
            />
          </Grid>


          

           <Grid item xs={8}>
            <TextInput 
              label="Portal URL"
              name = "portal_url"
              placeholder="www.experfydemo/career-portal-experfy.com"
              id={"portal_url"}
              onChange={onChangeHandlear}
              helpertext=
              "Access your career portal using this domain. This is thee single main domain upon which all applications in your external career portal are based. Don’t include “http” or “https” in easily identify the URL"
              
            />
          </Grid>

          <Grid item xs={8}>
            <TextInput
              disabled={false}
              label="Company Name"
              name="company_name"
              id={"company_name"}
              onChange={onChangeHandlear}
              helpertext="The company of your career Portal. This can be a shortened version of Portal."
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
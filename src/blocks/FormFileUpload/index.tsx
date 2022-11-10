import React from "react";
import { Box, Button, FormControl, Typography } from "@mui/material";
import { styled } from "@mui/styles";
import UploadIcon from "@mui/icons-material/CloudUpload";

import { useStyles } from "./css";

const Input = styled("input")({
  display: "none",
});


interface FormFileUploadProps{
  size?:number,
  label?:string,
  labelRegular?:boolean,
  note:string,
}



const FormFileUpload :React.FC<FormFileUploadProps>=({ size, label, labelRegular, note, changeHandlerImage }) =>{
  const classes = useStyles();

  return (
    <FormControl fullWidth className={classes.fileUpload}>
      <Typography 
        className={`${classes.fileUploadLabel} ${labelRegular ? "is-regular" : ""}`}>
        {label}
      </Typography>
      {note && (
        <Typography className={classes.fileUploadNote}>
          {note}
        </Typography>
      )}
      <Box className={classes.fileUploadBox}>
        <UploadIcon className={classes.fileUploadBoxIcon} />
        <Typography className={classes.fileUploadBoxText}>
          Drop file here or
          <label htmlFor="button-file">
            <input
              accept="image/*"
              id="button-file"
              multiple
              type="file"
              onChange={(event) => changeHandlerImage(event)}
              webkitdirectory
            />

            <Button className={classes.fileUploadBoxButton} component="span">
              Browse
            </Button>
          </label>
          to add your attachment
        </Typography>
        {size && (
          <Typography className={classes.fileUploadBoxText} variant="span">
            Recommended Dimensions: {size} pixel
          </Typography>
        )}
      </Box>
    </FormControl>
  );
}

export default FormFileUpload;

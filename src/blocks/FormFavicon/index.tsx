import React from "react";
import { Box, FormControl, Typography } from "@mui/material";
import FaviconIcon from "../../assets//images/favicon_logo.svg";
import { useStyles } from "./css";

interface FormFaviconProps {
  label?: string;
  note?: string;
  size?: number;
}

const FormFavicon: React.FC<FormFaviconProps> = (props) => {
  const classes = useStyles();

  return (
    <FormControl fullWidth className={classes.fileUpload}>
      <Typography className={classes.fileUploadLabel} variant="span">
        {props.label}
      </Typography>
      <Typography className={classes.fileUploadNote} variant="span">
        {props.note}
      </Typography>
      <Box className={classes.fileUploadBox}>
        <img
          className={classes.fileUploadBoxIcon}
          src={FaviconIcon}
          alt="Favicon"
        />
        <Typography className={classes.fileUploadBoxText} variant="span">
          Currently Experfy Logo is your default Favicon.
        </Typography>
        <Typography className={classes.fileUploadBoxText} variant="span">
          Replace it by dragging and dropping your file here.
        </Typography>
        <Typography className={classes.fileUploadBoxText} variant="span">
          Recommended Dimensions: {props.size} pixel
        </Typography>
      </Box>
    </FormControl>
  );
};

export default FormFavicon;

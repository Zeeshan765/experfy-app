import React from "react";
import { Box, FormControl, Link, IconButton, Popover, TextField, Typography } from "@mui/material";

import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ActionsGroup from "../ActionsGroup";
import {useStyles} from "./css";




interface FormGradientProps{
  label?:string,
}





const FormGradientColorInput:React.FC<FormGradientProps>=(props)=> {
  const classes = useStyles();
  const [isActive, setActive] = React.useState(false);

  const toggleMenu = () => {
    setActive(!isActive);
  };


  return (
    <FormControl fullWidth className={classes.formGradientColor}>
      {props.label &&
        <Typography>{props.label}</Typography>
      }
      <Box className={classes.formGradientColorGroup}>
        <Box className={classes.formGradientColorControls}>
          <Link onClick={toggleMenu}>
            Color #00a6d8
          </Link>
          <IconButton disableRipple>
            <ContentCopyIcon />
          </IconButton>
          <IconButton disableRipple>
            <CloseIcon />
          </IconButton>
        </Box>
        {isActive &&
          <Box className={classes.formGradientColorMenu}>
            <Box className={classes.formGradientColorMenuInner}>
              <Typography>Add Color</Typography>
              <ActionsGroup hasLanguage={true} hasColorPicker={true} />
            </Box>
          </Box>
        }  
      </Box>  
    </FormControl>
  );
}

export default FormGradientColorInput;

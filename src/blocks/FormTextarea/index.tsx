import React from "react";
import { Box, FormControl, IconButton, TextField, Typography } from "@mui/material";
import DataIcon from '../../assets/images/global-theme-settings/data.svg';
import {useStyles} from "./css";



declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    span: true;
  }
}



interface FormTextareaProps{

  label?: string,
  showTags?: boolean,
  placeholder?:string,
  defaultValue?: string,
}


const FormTextarea : React.FC<FormTextareaProps>=(props)=> {
  const classes = useStyles();
  const [showTags, setShowTags] = React.useState(true)

  const handleShowTags = () => {
    setShowTags(true);
  };
  const handleHideTags = () => {
    setShowTags(false);
  };

  return (
    <FormControl 
      fullWidth 
      className={classes.formTextarea}>
      {props.label &&
        <Typography variant="span">{props.label}</Typography>
      }
      <Box className={classes.formTextareaGroup}>
        <TextField
          {...props}
          fullWidth
          label={""}
          multiline
          minRows={3}
          variant="outlined"
          onFocus={handleHideTags}
          onBlur={handleShowTags}
          placeholder={props.placeholder}
          defaultValue={props?.defaultValue || ""}
        />
        {showTags &&
          <Box className={classes.formTextareaTags}>
            <IconButton>
              <img src={DataIcon} alt='Dynamic Tags' /> 
            </IconButton>
          </Box>
        }  
      </Box>  
    </FormControl>
  );
}

export default FormTextarea;

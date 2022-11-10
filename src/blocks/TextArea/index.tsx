import React from "react";
import { FormControl, TextField, Typography } from "@mui/material";
import {useStyles} from "./css";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    span: true;
  }
}

interface TextAreaProps {
  label?: string;
  placeholder?: string;
  rows?: number;
}

const TextArea:React.FC<TextAreaProps>=(props) =>{
  const classes = useStyles();

  return (
    <FormControl fullWidth className={classes.textInput}>
      <Typography variant="span">{props.label}</Typography>
      <TextField
        fullWidth
        variant="outlined"
        multiline
        minRows={props.rows}
        placeholder={props.placeholder}
      />
    </FormControl>
  );
}

export default TextArea;

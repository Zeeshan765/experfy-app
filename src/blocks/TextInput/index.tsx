// import { Label, useField } from 'payload/components/forms';
// import React, { useEffect, useState } from 'react';
// import text from '../../utilities/text';
// import './index.scss';
// type CustomTextField = {
//   path: string;
//   helperText?: string;
//   placeHolder?: string;
//   setTouched?: React.Dispatch<React.SetStateAction<string>>;
//   required?: boolean;
//   label?: any;
//   readOnly?: boolean;
//   style?: any;
//   width?: any;
//   validate?: any;
//   minLength?: number;
//   maxLength?: number;
//   display?: unknown;
//   name?: string;
//   index?: number;
//   brand?: string;
// };

// const TextInput: React.FC<CustomTextField> = ({
//   validate = text,
//   path,
//   label,
//   required = false,
//   placeHolder,
//   minLength,
//   maxLength,
//   display,
//   setTouched,
//   name,
//   index,
//   brand,
//   ...rest
// }) => {
//   const [error, setError] = useState();

//   const { value, showError, setValue, errorMessage } = useField<string>({
//     path,
//   });
//   const classes = [
//     'field-type text',
//     showError && 'error',
//     rest.readOnly && 'read-only',
//   ]
//     .filter(Boolean)
//     .join(' ');

//   useEffect(() => {
//     if (display) {
//       setValue(display);
//     }
//   }, [display]);
//   // useEffect(() => {
//   //   if (defaultValue) {
//   //     setValue(defaultValue);
//   //   }
//   // }, [defaultValue]);
  
//   return (
//     <div className={classes}>
//       <Label htmlFor={`field-${path}`} label={label} required={required} />
//       <input
//         name={path}
//         required={required}
//         value={value}
//         placeholder={placeHolder}
//         readOnly={rest?.readOnly}
//         onChange={onchange}
//         showError={showError}
//         errormessage={errorMessage}
//         onFocus={() => setTouched(path)}
//         onBlur={() => setTouched('')}
//       />
//     </div>
//   );
// };

// export default TextInput;




// import { Label, useField } from 'payload/components/forms';
// import React, { useEffect, useState } from 'react';
// import text from '../../utilities/text';
// import './index.scss';
// type CustomTextField = {
//   path: string;
//   helperText?: string;
//   placeHolder?: string;
//   setTouched?: React.Dispatch<React.SetStateAction<string>>;
//   required?: boolean;
//   label?: any;
//   readOnly?: boolean;
//   style?: any;
//   width?: any;
//   validate?: any;
//   minLength?: number;
//   maxLength?: number;
//   display?: unknown;
//   name?: string;
//   index?: number;
//   brand?: string;
// };

// const TextInput: React.FC<CustomTextField> = ({
//   validate = text,
//   path,
//   label,
//   required = false,
//   placeHolder,
//   minLength,
//   maxLength,
//   display,
//   setTouched,
//   name,
//   index,
//   brand,
//   ...rest
// }) => {
//   const [error, setError] = useState();

//   const { value, showError, setValue, errorMessage } = useField<string>({
//     path,
//   });
//   const classes = [
//     'field-type text',
//     showError && 'error',
//     rest.readOnly && 'read-only',
//   ]
//     .filter(Boolean)
//     .join(' ');

//   useEffect(() => {
//     if (display) {
//       setValue(display);
//     }
//   }, [display]);

//   return (
//     <div className={classes}>
//       <Label htmlFor={`field-${path}`} label={label} required={required} />
//       <input
//         name={path}
//         required={required}
//         value={value}
//         placeholder={placeHolder}
//         readOnly={rest?.readOnly}
//         onChange={setValue}
//         // @ts-ignore
//         showError={'showError'}
//         error={error}
//         errormessage={errorMessage}
//         onFocus={() => setTouched(path)}
//         onBlur={() => setTouched('')}
//       />
//     </div>
//   );
// };

// export default TextInput;














import React from "react";
import { FormControl, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  textInput: {
    "& span": {
      display: "inline-block",
      fontSize: "1.0625rem",
      fontWeight: 500,
      padding: "0 0 .125rem",
      color: "#4a5162",
    },
  },
});
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    span: true;
  }
}

function TextInput(props) {
  const classes = useStyles();

 
  

  return (
    <FormControl fullWidth className={classes.textInput}>
      {props.label &&
        <Typography variant="span">{props.label}</Typography>
      }
      <TextField
        {...props}
        fullWidth
        label={""}
        variant="outlined"
        onFocus={() => props.setToolTipVisible(props.id)}
        onBlur={() => props.setToolTipVisible(null)}
        placeholder={props.placeholder}
        defaultValue={props?.defaultValue || ""}
      />
    </FormControl>
  );
}

export default TextInput;












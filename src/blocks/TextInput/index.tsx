// import { Label, useField } from 'payload/components/forms';
// import React, { useEffect, useState } from 'react';
// import text from '../../utilities/text';

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

import {
  FormControl,
  OutlinedInputProps,
  OutlinedInput,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles({
  textInput: {
    '& span': {
      display: 'inline-block',
      fontSize: '1.0625rem',
      fontWeight: 500,
      padding: '0 0 .125rem',
      color: '#4a5162',
    },
    '& .MuiOutlinedInput-root': {
      marginBottom: '.5rem',
      backgroundColor: '#fff',
      '& fieldset': {
        border: '1px solid #d2dbe2',
      },
      '&:hover fieldset': {
        border: '1px solid #4ba4da',
      },
      '&.Mui-focused fieldset': {
        border: '1px solid #4ba4da',
      },
    },
  },
});
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    span: true;
  }
}

function TextInput(props: OutlinedInputProps) {
  const classes = useStyles();
  

  return (
    <FormControl fullWidth className={classes.textInput}>
      {props.label && <Typography variant="span">{props.label}</Typography>}
      <OutlinedInput
        {...props}
        fullWidth
        required={props.required}
        value={props.value}
        onError={props.onError}
        readOnly={props.readOnly}
        label={''}
        startAdornment={props.startAdornment}
        autoComplete="off"
        onAbort={props.onAbort}
        onFocus={props.onFocus} 
        placeholder={props.placeholder}
        defaultValue={props?.defaultValue || ''}
      />
    </FormControl>
  );
}

export default TextInput;

import { TextField, Typography } from '@mui/material';
import { Props } from 'payload/components/fields/Text';
import { Label, useField } from 'payload/components/forms';
import Error from 'payload/dist/admin/components/forms/Error';
import React, { useCallback, useState } from 'react';
import { useStyles } from './css';
import FormTip from '../FormTip';


declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    span: true;
  }
}

type CustomTextField = Props & {
  path: string
  helperText?: string
  defaultValue?: string
}


const TextInput: React.FC<CustomTextField> = ({ path, label, required, validate, helperText, defaultValue }) => {

  const classes = useStyles();
  const [show, setShow] = useState(false)

  const showToolTip = () => {
    setShow(true);
  };

  const removeToolTip = () => {
    setShow(false);
  }

  const memoizedValidate = useCallback(
    (value: string, options: any) => {
      if (validate) {
        return validate(value, { ...options, required })
      }
      return true
    },
    [validate, required]
  )
  const field = useField<string>({ path, validate: memoizedValidate })
  const { value, showError, setValue, errorMessage } = field

  return (
    <div className={classes.textInput} >
      <Error showError={showError} message={errorMessage} />
      <Typography variant="span"> <Label htmlFor={path} label={label} required={required} /> </Typography>
      <TextField
        value={value}
        defaultValue={defaultValue}
        onChange={setValue}
        onTouchStart={showToolTip}
        onAbort={removeToolTip}
        {...show && <FormTip text={helperText ? helperText : 'Please provide the required details'} />}
      />
    </div>
  );
}

export default TextInput;




import { Label, useField } from 'payload/components/forms';
import React, { useCallback, useEffect, useState } from 'react';
import text from '../../utilities/text';
import './index.scss';

// declare module '@mui/material/Typography' {
//   interface TypographyPropsVariantOverrides {
//     span: true;
//   }
// }

type CustomTextField = {
  path: string;
  helperText?: string;
  placeHolder?: string;
  setTouched?: any;
  required?: boolean;
  label?: any;
  readOnly?: boolean;
  style?: any;
  width?: any;
  validate?: any;
  minLength?: number;
  maxLength?: number;
  display?: any;
  name?: string;
  index?: number;
  brand?: string;
};

const TextInput: React.FC<CustomTextField> = ({
  validate = text,
  path,
  label,
  required = false,
  placeHolder,
  minLength,
  maxLength,
  display,
  setTouched,
  name,
  index,
  brand,
  ...rest
}) => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState();
  const showToolTip = () => {
    setShow(true);
  };

  const removeToolTip = () => {
    setShow(false);
  };

  const memoizedValidate = useCallback(
    (value, options) => {
      return validate(value, { ...options, minLength, maxLength, required });
    },
    [validate, minLength, maxLength, required]
  );

  const { value, showError, setValue, errorMessage } = useField<string>({
    path,
    // validate: memoizedValidate,
  });
  const classes = [
    'field-type text',
    showError && 'error',
    rest.readOnly && 'read-only',
  ]
    .filter(Boolean)
    .join(' ');

  useEffect(() => {
    if (display) {
      setValue(display);
    }
  }, [display]);
  console.log('path====', path);

  // const newPath= index && brands?`b`
  return (
    <div className={classes}>
      <Label htmlFor={`field-${path}`} label={label} required={required} />
      <input
        name={path}
        required={required}
        value={value}
        placeholder={placeHolder}
        readOnly={rest?.readOnly}
        onChange={setValue}
        // @ts-ignore
        // onWheel={(e) => {
        //   e.target.blur();
        // }}
        // @ts-ignore
        showError={'showError'}
        error={error}
        errormessage={errorMessage}
        onFocus={() => setTouched(path)}
        onBlur={() => setTouched('')}
      />
    </div>
  );
};

export default TextInput;

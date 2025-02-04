import { Label, useField } from 'payload/components/forms';
import React, { useEffect, useState } from 'react';
import text from '../../utilities/text';
import './index.scss';

type CustomTextArea = {
  path: string;
  helperText?: string;
  placeHolder?: string;
  setTouched?: React.Dispatch<React.SetStateAction<string>>;
  required?: boolean;
  label?: any;
  readOnly?: boolean;
  style?: any;
  width?: any;
  validate?: any;
  minLength?: number;
  maxLength?: number;
  display?: unknown;
  name?: string;
  index?: number;
  brand?: string;
  rows?: number;
};

const TextArea: React.FC<CustomTextArea> = ({
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
  rows,
  ...rest
}) => {
  const [error, setError] = useState();

  const { value, showError, setValue, errorMessage } = useField<string>({
    path,
  });
  const classes = [
    'field-type textarea',
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

  return (
    <div className={classes}>
      <Label htmlFor={`field-${path}`} label={label} required={required} />
      <textarea
        name={path}
        rows={rows}
        required={required}
        value={value}
        placeholder={placeHolder}
        readOnly={rest?.readOnly}
        onChange={setValue}
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

export default TextArea;

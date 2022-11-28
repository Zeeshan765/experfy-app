import React, { useEffect, useRef } from 'react';
import { Label, Select, useField } from 'payload/components/forms';
import { SelectField as Props } from 'payload/types';
import './index.scss';

type CustomField = Props & {
  path: string;
  type?: string;
  helperText?: string;
  required?: boolean;
  label?: any;
  style?: any;
  width?: any;
  display?: unknown;
  setTouched?: React.Dispatch<React.SetStateAction<string>>;
};
const FormSelect: React.FC<CustomField> = ({
  options = [],
  path,
  label,
  display,
  setTouched,

  required = false,
}) => {
  const field = useField({ path });
  const { value, showError, setValue, errorMessage } = field;

  const classes = ['field-type select', showError && 'error']
    .filter(Boolean)
    .join(' ');

  useEffect(() => {
    if (display) {
      setValue(display);
    }
  }, [display]);

  const focusHandler = () => {
    setTouched(path);
  };
  const blurHandler = () => {
    setTouched('');
  };

  const ref = useRef('');

  return (
    <div className={classes} onFocus={focusHandler} onBlur={blurHandler}>
      <Label htmlFor={'field-${path}'} label={label} required={required} />
      <Select
        // @ts-ignore
        ref={ref}
        name={path}
        options={options}
        value={value}
        required={required}
      />
    </div>
  );
};
export default FormSelect;

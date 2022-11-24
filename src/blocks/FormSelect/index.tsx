import React, { useEffect, useRef } from 'react';
import { Label, Select, useField } from 'payload/components/forms';
import { SelectField as Props } from 'payload/types';
import './index.scss';

// export type Type = {
//   id?: string
//   fullWidth?: boolean
//   options?: Array<any>
//   label?: string
//   size?: Size
//   onchange?: any
//   handleChangeBT?: any
//   change?: string
//   setToolTipVisible?: any
//   placeholder?: string
//   value?: string

// }
type CustomField = Props & {
  path: string;
  type?: string;
  helperText?: string;
  required?: boolean;
  label?: any;
  style?: any;
  width?: any;
  display?: any;
  setTouched?: any;
};
const FormSelect: React.FC<CustomField> = ({
  options = [],
  path,
  label,
  display,
  setTouched,

  required = false,
}) => {
  // const [selectedOption, setSelectedOption] = React.useState();

  function handleChange(event: {
    target: { value: (prevState: undefined) => undefined };
  }) {
    // setSelectedOption(event.target.value);
  }
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
    console.log("test work");

    setTouched(path);
  };
  const blurHandler=() => {
    console.log('log blur');
    setTouched('');
  }

  const ref = useRef('');

  const handleClick = () => {
    console.log('ref.current', ref.current);
  };

  return (
    <div className={classes} onFocus={focusHandler}
    onBlur={blurHandler}
 >
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

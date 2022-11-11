import { Label, Select, useField } from 'payload/components/forms';
import React from 'react';
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
};
const FormSelect: React.FC<CustomField> = ({
  options = [],
  type = 'select',
  path,
  label,
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

  const classes = [
    'field-type select',
    showError && 'error',
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <Label htmlFor={'field-${path}'} label={label} required={required} />
      <Select
        name={path}
        options={options}
        required={required}
      />
    </div>
  );
};
export default FormSelect;

//

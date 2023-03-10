// import React, { useEffect, useRef } from 'react';
// import { Label, Select, useField } from 'payload/components/forms';
// import { SelectField as Props } from 'payload/types';
// import './index.scss';

// type CustomField = Props & {
//   path: string;
//   type?: string;
//   helperText?: string;
//   required?: boolean;
//   label?: any;
//   style?: any;
//   width?: any;
//   display?: unknown;

//   setTouched?: React.Dispatch<React.SetStateAction<string>>;
// };
// const FormSelect: React.FC<CustomField> = ({
//   options = [],
//   path,
//   label,
//   display,
//   setTouched,

//   required = false,
// }) => {
//   const field = useField({ path });
//   const { value, showError, setValue, errorMessage } = field;

//   const classes = ['field-type select', showError && 'error']
//     .filter(Boolean)
//     .join(' ');

//   useEffect(() => {
//     if (display) {
//       setValue(display);
//     }
//   }, [display]);

//   const focusHandler = () => {
//     setTouched(path);
//   };
//   const blurHandler = () => {
//     setTouched('');
//   };

//   const ref = useRef('');

//   return (
//     <div className={classes} onFocus={focusHandler} onBlur={blurHandler}>
//       <Label htmlFor={'field-${path}'} label={label} required={required} />
//       <Select
//         // @ts-ignore
//         ref={ref}
//         name={path}
//         options={options}
//         value={value}
//         required={required}
//       />
//     </div>
//   );
// };
// export default FormSelect;
import React from 'react';
import { FormControl, MenuItem, Select, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import './index.scss';

const useStyles = makeStyles({
  selectInput: {
    marginBottom: '16px !important',
    '& > span': {
      display: 'inline-block',
      fontSize: '16px',
      fontWeight: 500,
      margin: '0 0 2px',
      color: '#4a5162',
      fontFamily: '"proxima-nova", sans-serif',
      '&.is-regular': {
        fontWeight: 400,
      },
    },
    '& legend': {
      '& span': {
        display: 'none',
      },
    },
    '& .MuiSelect-select': {
      backgroundColor: '#fff',
      border: '1px solid #d2dbe2',
      fontSize: '1.25rem',
      padding: '15.75px 14px 15px',
      '&:focus': {
        border: '1px solid #4ba4da',
      },
    },
    // '& .MuiOutlinedInput-notchedOutline': {
    //   display: 'none',
    // },
  },
});
// interface formSelectProps {
//   options: Array<{ label: string; value: string }>;
//   onChange?: any;
//   props?: any;
// }

// required as a props  array of object which contain two properties label and value
function FormSelect({ options = [], onChange, ...props }: any) {
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = React.useState();

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <FormControl
      fullWidth={props.fullwidth === false ? false : true}
      className={classes.selectInput}
    >
      {props.label && (
        <Typography
          variant="span"
          className={props.labelRegular ? 'is-regular' : ''}
        >
          {props.label}
        </Typography>
      )}
      <Select
        fullWidth
        value={selectedOption}
        className="selectField"
        onChange={onChange}
        // props.change == "use-react-hook-onChange"
        //   ? (props.onChange = (event) =>
        //       props.handleChangeBT(event, props.record))
        //   : handleChange

        displayEmpty
        size={props.size === 'small' ? 'small' : 'medium'}
        inputProps={{ 'aria-label': 'Without label' }}
        {...props}
        // onOpen={() => {
        //   if (props.id) {
        //     props.setToolTipVisible(props.id);
        //   }
        // }}
        // onClose={() => {
        //   if (props.id) {
        //     props.setToolTipVisible(null);
        //   }
        // }}
      >
        <MenuItem disabled value="">
          {props.placeholder}
        </MenuItem>

        {options.map((i) => (
          <MenuItem value={i.value}>{i.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default FormSelect;

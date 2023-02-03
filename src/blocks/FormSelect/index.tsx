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
    '& > span': {
      display: 'inline-block',
      fontSize: '1.0625rem',
      fontWeight: 500,
      margin: '0 0 .125rem',

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
      marginBottom: '.5rem',
      border: '1px solid #d2dbe2',

      '&:focus': {
        border: '1px solid #4ba4da',
      },
    },
    '& .MuiOutlinedInput-notchedOutline': {
      display: 'none',
    },
  },
});

function FormSelect({ options = [], ...props }) {
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
        // onChange={
        //   props.change == 'use-react-hook-onChange'
        //     ? (props.onChange = (event) =>
        //         props.handleChangeBT(event, props.record))
        //     : handleChange
        // }
        displayEmpty
        size={props.size === 'small' ? 'small' : 'medium'}
        inputProps={{ 'aria-label': 'Without label' }}
        {...props}
        onOpen={() => {
          if (props.id) {
            props.setToolTipVisible(props.id);
          }
        }}
        onClose={() => {
          if (props.id) {
            props.setToolTipVisible(null);
          }
        }}
      >
        <MenuItem disabled value="">
          {props.placeholder}
        </MenuItem>

        {options.map((i) => {
          return <MenuItem value={i.value}>{i.value}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
}

export default FormSelect;

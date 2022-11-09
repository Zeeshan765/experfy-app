// import React, { useState } from "react";
// import { FormControl, TextField, Typography } from "@mui/material";
// import { useStyles } from "./css";
// import {Text} from "payload/components/forms";

// // import Text from "payload/components/fields/Text"

// declare module "@mui/material/Typography" {
//   interface TypographyPropsVariantOverrides {
//     span: true;
//   }
// }

// // export type Type = {
// //   label?: string;
// //   placeholder?: string;
// //   defaultValue?: string;
// //   disabled?: boolean;
// //   id?: string;
// //   setToolTipVisible?: any;
// //   required?: boolean;
// // };

// const TextInput: React.FC<Text> = ({ ...props }) => {
//   const classes = useStyles();
// // console.log("textinput",props)
//   const [touched, setTouched] = useState(false);
// console.log("touch",touched)
//   const handleTouch = () => {
//    setTouched(true);
//   };

//   const handleChange = () => {
//     setTouched(false);
//   }

// // console.log("form test of",props.onChange('sdfsdfsd'));



//   return (
//     <FormControl fullWidth className={classes.textInput}>
//       {props?.label && <Typography variant="span">{props?.label}</Typography>}
//       <TextField
//         {...props}
//         required={props?.required}
//         fullWidth
//        name={props.name}
//         onFocus={handleTouch}
//         onBlur ={handleChange}


        
//         helperText={touched &&  props?.helpertext}
//         disabled={ props?.disabled}
//         variant="outlined"
//         // onChange={(e)=>props.onChange(e.target)}
//         placeholder={props?.placeholder}
//         defaultValue={props?.defaultValue || ""}
      
//       />

      
//     </FormControl>
//   );
// };

// export default TextInput;

import React,{useState} from "react";
import {
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  TextField,
  Typography
} from '@mui/material';
import LinkIcon from '../../assets/images/global-theme-settings/link.svg'
import { Controller } from "react-hook-form";
import {useStyles} from "./css";



declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    span: true;
  }
}

interface FourSidedProps{
  text?: string,
  text1?: string,
}




const FourSideInput: React.FC<FourSidedProps> =({ text, text1, setValue, control, ...props }) =>{
  const classes = useStyles();
 
 

  const [makeEqual, setMakeEqual] = useState(false);
  const equalWidth = (event, data) => {
    const { value } = event.target

    if (makeEqual) {
      setValue(`${text}TopRight${text1}`, value);
      setValue(`${text}BottomRight${text1}`, value);
      setValue(`${text}TopLeft${text1}`, value);
      setValue(`${text}BottomLeft${text1}`, value);
    } else if (!makeEqual) {
      if (data == `${text1}-top`) {
        setValue(`${text}TopRight${text1}`, value);

      }
      if (data == `${text1}-right`) {
        setValue(`${text}BottomRight${text1}`, value);
      }
      if (data == `${text1}-left`) {
        setValue(`${text}TopLeft${text1}`, value);
      }
      if (data == `${text1}-bottom`) {
        setValue(`${text}BottomLeft${text1}`, value);
      }
    }
  };

  return (
    <FormControl
      className={`${classes.fourSideInput} ${props.moveTop? 'move-top' : ''} ${props.inRows? 'in-rows' : ''}`}>
      <FormGroup 
        className={`${classes.fourSideInputFields} ${props.inRows? 'in-rows' : ''}`}>
        <Controller
          render={({ field: { onChange, value, name } }) => (
            <TextField
              name={`${text}TopRight${text1}`}
              value={value}
              variant="outlined"
              size="small"
              onChange={
                (onChange = (event) => equalWidth(event, `${text1}-top`))
              }
            />
          )}
          name={`${text}TopRight${text1}`}
          control={control}
        />
        <Controller
          render={({ field: { onChange, value, name } }) => (
            <TextField
              name={`${text}TopRight${text1}`}
              value={value}
              variant="outlined"
              size="small"
              onChange={
                (onChange = (event) => equalWidth(event, `${text1}-right`))
              }
            />
          )}
          name={`${text}TopRight${text1}`}
          control={control}
        />
        <Controller
          render={({ field: { onChange, value, name } }) => (
            <TextField
              name={`${text}TopLeft${text1}`}
              value={value}
              variant="outlined"
              size="small"
              onChange={
                (onChange = (event) => equalWidth(event, `${text1}-left`))
              }
            />
          )}
          name={`${text}TopLeft${text1}`}
          control={control}
        />
        <Controller
          render={({ field: { onChange, value, name } }) => (
            <TextField
              name={`${text}BottomLeft${text1}`}
              value={value}
              variant="outlined"
              size="small"
              onChange={
                (onChange = (event) => equalWidth(event, `${text1}-bottom`))
              }
            />
          )}
          name={`${text}BottomLeft${text1}`}
          control={control}
        />
        <Button
          variant="contained"
          color={makeEqual ? "primary" : "info"}
          onClick={() => {
            setMakeEqual((prev) => (prev = !prev));
          }}
        >
          <img src={LinkIcon} alt="Link" />
        </Button>
      </FormGroup>
      <FormLabel className={`${classes.fourSideInputLabels} ${props.inRows? 'in-rows' : ''}`}>
        <Typography variant="span">Top</Typography>
        <Typography variant="span">Right</Typography>
        <Typography variant="span">Bottom</Typography>
        <Typography variant="span">Left</Typography>
      </FormLabel>
    </FormControl>
  );
}

export default FourSideInput;

import React from "react";
import {
  Box,
  Checkbox,
  IconButton,
  FormControl,
  FormControlLabel,
  FormGroup,
  Stack,
  TextField,
  Typography
} from '@mui/material';

import CogIcon from '../assets/images/global-theme-settings/cog.svg';
import DataIcon from '../assets/images/global-theme-settings/data.svg';
import {useStyles} from "./css";

const  FormInputWithOptions = (props) =>{
  const classes = useStyles();
  const [visibleSettings, setVisibleSettings] = React.useState(false);
  
  // if (props?.setTest !== undefined) {
  //   props?.setTest(Math.floor(Math.random() * 1000000000));
  // }
  const handleToggleSettings = () => {
    setVisibleSettings(!visibleSettings)
  }

  return (
    <FormControl 
      fullWidth
      className={classes.formInput}>
      <Typography variant="span" className={classes.formInputLabel}>
        {props.label}
      </Typography>
      <Stack direction="row" className={classes.formInputInput}>
        <TextField {...props}
          fullWidth
          variant="outlined"
          size={props.inputSize === 'small' ? 'small' : 'medium'}
          placeholder={props.inputPlaceholder} />
        {props.hasSettings &&
          <IconButton disableRipple onClick={handleToggleSettings}>
            <img src={CogIcon} alt='Link Options' />  
          </IconButton> 
        }  
        {props.hasTags && 
          <IconButton disableRipple>
            <img src={DataIcon} alt='Dynamic Tags' /> 
          </IconButton>
        }
      </Stack>
      {props.hasSettings &&
        <>
          {visibleSettings && 
            <Box className={classes.formInputCheckboxes}>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Open in new window" />
              </FormGroup>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Add nofollow" />
              </FormGroup>
            </Box>
          }  
        </>    
      }  
      {props.hasCustomAttributes &&
        <>
          {visibleSettings && 
            <Box className={classes.formInputCustomAttributes}>
              <TextField 
                fullWidth
                variant="outlined"
                size="small"
                placeholder="key|value" />
              <Typography>
                Set custom attributes for the link element. Separate attribute keys from 
                values using the | (pipe) character. Separate key-value pairs with a comma
              </Typography>  
            </Box>
          }  
        </>
      }
    </FormControl>
  );
}

export default FormInputWithOptions;

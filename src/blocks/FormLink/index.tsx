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

import CogIcon from '../../assets/images/global-theme-settings/cog.svg';
import DataIcon from '../../assets/images/global-theme-settings/data.svg';
import {useStyles} from "./css"




declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    span: true;
  }
}




interface FormLinkProps{
  inputSize?: string,
  label?: string,
  inputPlaceholder?: string,

}





const FormLink:React.FC<FormLinkProps>=(props)=> {
  const classes = useStyles();

  return (
    <FormControl 
      fullWidth
      className={classes.formLink}>
      <Typography variant="span" className={classes.formLinkLabel}>
        {props.label}
      </Typography>
      <Stack direction="row" className={classes.formLinkInput}>
        <TextField 
          fullWidth
          variant="outlined"
          size={props.inputSize === 'small' ? 'small' : 'medium'}
          placeholder={props.inputPlaceholder} />
        <IconButton disableRipple>
          <img src={CogIcon} alt='Link Options' />  
        </IconButton>  
        <IconButton disableRipple>
          <img src={DataIcon} alt='Dynamic Tags' /> 
        </IconButton>
      </Stack>
      <Box className={classes.formLinkCheckboxes}>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Open in new window" />
        </FormGroup>
        <FormGroup>
          <FormControlLabel control={<Checkbox />} label="Add nofollow" />
        </FormGroup>
      </Box>
    </FormControl>
  );
}

export default FormLink;

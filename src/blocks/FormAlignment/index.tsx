import * as React from 'react';
import {
  FormControl,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from '@mui/material';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import {useStyles} from "./css";


declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    span: true;
  }
}


interface FormAlignmentProps{
  label?: string,
}













const FormAlignment: React.FC<FormAlignmentProps>=(props)=> {
  const classes = useStyles();
  const [alignment, setAlignment] = React.useState('left');

  // const { handler} = props;

  // props?.setTest(Math.floor(Math.random() * 1000000000))


  // const handleAlignment = (event, newAlignment) => {
  //   setAlignment(newAlignment);
  //   handler({ [props.name] : newAlignment });

  //   // handler({"footer-heading-alignment": newAlignment })
  // }

  return (
    <FormControl
      fullWidth
      className={classes.alignmentGroup}>
    
      <Typography 
        variant='span'
        className={classes.alignmentGroupLabel}>
        {props.label ? props.label : 'Alignment'}
      </Typography>
      <ToggleButtonGroup
        className={classes.alignmentGroupButtons}
        value={alignment}
        exclusive
        // onChange={handleAlignment}
        aria-label="background"
       
      >
        <ToggleButton  value="left" aria-label="left aligned">
          <FormatAlignLeftIcon />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <FormatAlignCenterIcon />
        </ToggleButton>
        <ToggleButton  value="right" aria-label="right aligned">
          <FormatAlignRightIcon />
        </ToggleButton>
      </ToggleButtonGroup>  
    </FormControl>
  );
}

export default FormAlignment;

import * as React from 'react';
import {
  FormControl,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from '@mui/material';



import TopAlignIcon from '../../assets/images/global-theme-settings/aligment/top.svg';
import CenterAlignIcon from '../../assets/images/global-theme-settings/aligment/center.svg';
import BottomAlignIcon from '../../assets/images/global-theme-settings/aligment/bottom.svg';
import { useStyles } from "./css";


declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    span: true;
  }
}



interface FormContentProps {
  label?: string,
}



const FormContentPosition: React.FC<FormContentProps> = (props) => {
  const classes = useStyles();
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <FormControl
      fullWidth
      className={classes.alignmentGroup}>
      <Typography
        variant='span'
        className={classes.alignmentGroupLabel}>
        {props.label}
      </Typography>
      <ToggleButtonGroup
        className={classes.alignmentGroupButtons}
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="background"
      >
        <ToggleButton value="left" aria-label="top aligned">
          <img src={TopAlignIcon} alt='Top' />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <img src={CenterAlignIcon} alt='Center' />
        </ToggleButton>
        <ToggleButton value="right" aria-label="bottom aligned">
          <img src={BottomAlignIcon} alt='Bottom' />
        </ToggleButton>
      </ToggleButtonGroup>
    </FormControl>
  );
}

export default FormContentPosition;

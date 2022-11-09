import * as React from 'react';
import {
  Box,
  FormControl,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography
} from '@mui/material';
import {useStyles} from "./css"





declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    span: true;
  }
}




interface FormPositionProps{
  label?: string,
}




const  FormPosition : React.FC<FormPositionProps> = (props)=> {
  const classes = useStyles();
  const [position, setPosition] = React.useState('top-left');

  const handlePosition = (event) => {
    setPosition(position);
  };

  return (
    <FormControl 
      fullWidth
      className={classes.positionGroup}>
      <Typography 
        className={classes.positionGroupLabel}
        variant='span'>
        {props.label}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ToggleButtonGroup
            className={classes.positionGroupButtons}
            value={position}
            exclusive
            onChange={handlePosition}
            aria-label="position"
          >
            <ToggleButton value="top-left" aria-label="Top Left"></ToggleButton>
            <ToggleButton value="top-center" aria-label="Top Center"></ToggleButton>
            <ToggleButton value="top-right" aria-label="Top Right"></ToggleButton>
            <ToggleButton value="center-left" aria-label="Center Left"></ToggleButton>
            <ToggleButton value="center-center" aria-label="Center Center"></ToggleButton>
            <ToggleButton value="center-right" aria-label="Center Right"></ToggleButton>
            <ToggleButton value="bottom-left" aria-label="Bottom Left"></ToggleButton>
            <ToggleButton value="bottom-center" aria-label="Bottom Center"></ToggleButton>
            <ToggleButton value="bottom-right" aria-label="Bottom Right"></ToggleButton>
          </ToggleButtonGroup>  
        </Grid>
        <Grid item xs={6}>
          <Typography 
            className={classes.positionGroupCurrent}
            variant='span'>
            Top Left - Default
          </Typography>
        </Grid>
      </Grid> 
    </FormControl>
  );
}

export default FormPosition;

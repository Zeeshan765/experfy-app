import * as React from 'react';
import {
  FormControl,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import {useStyles} from "./css";



const FormPosition: React.FC=(props)=> {
  const classes = useStyles();
  const [structure, setStructure] = React.useState('top-left');

  const handleStructure = (event, newStructure) => {
    setStructure(newStructure);
  };

  return (
    <FormControl 
      fullWidth
      className={classes.structureGroup}>
      <ToggleButtonGroup
        className={classes.structureGroupButtons}
        value={structure}
        exclusive
        onChange={handleStructure}
        aria-label="structure"
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
        <ToggleButton value="bottom-right" aria-label="Bottom Right"></ToggleButton>
      </ToggleButtonGroup>  
    </FormControl>
  );
}

export default FormPosition;

import React from "react";
import {
  Box,
  Grid,
  FormControl,
  Slider,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useStyles } from "./css";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    span: true;
  }
}

interface FormSliderRangeProps {
  label?: string;
}

const FormSliderRange: React.FC<FormSliderRangeProps> = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 100]);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <FormControl fullWidth className={classes.formSlider}>
      <Box className={classes.formSliderHeader}>
        <Typography variant="span">{props.label}</Typography>
      </Box>
      <Box className={classes.formSliderPosition}>
        <Typography>Bottom</Typography>
        <Typography>Top</Typography>
      </Box>
      <Slider
        value={value}
        onChange={handleSliderChange}
        step={1}
        valueLabelDisplay="auto"
        {...props}
      />
    </FormControl>
  );
};

export default FormSliderRange;

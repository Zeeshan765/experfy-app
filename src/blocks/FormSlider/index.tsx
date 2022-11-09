import React from "react";
import {
  Box,
  Grid,
  FormControl,
  Slider,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useStyles } from "./css";

export type Type = {
  label?: string;
  hasUnits?: boolean;
}

const FormSlider: React.FC<Type> = ({ ...props }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [unit, setUnit] = React.useState("px");

  const handleUnit = () => {
    setUnit(unit);
  };

  const handleSliderChange = (newValue) => {
    setValue(newValue);
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <FormControl fullWidth className={classes.formSlider}>
      <Box className={classes.formSliderHeader}>
        <Typography variant="span">{props.label}</Typography>
        {props.hasUnits && (
          <ToggleButtonGroup
            value={unit}
            exclusive
            onChange={handleUnit}
            aria-label="units"
          >
            <ToggleButton value="px" aria-label="px">
              PX
            </ToggleButton>
            <ToggleButton value="em" aria-label="em">
              EM
            </ToggleButton>
            <ToggleButton value="rem" aria-label="rem">
              REM
            </ToggleButton>
            <ToggleButton value="vh" aria-label="vh">
              VH
            </ToggleButton>
            <ToggleButton value="%" aria-label="percentage">
              %
            </ToggleButton>
          </ToggleButtonGroup>
        )}
      </Box>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={typeof value === "number" ? value : 0}
            onChange={handleSliderChange}
            {...props} />
        </Grid>
        <Grid item>
          <TextField
            value={value}
            size="small"
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: "number",
            }}
            InputLabelProps={{ shrink: true }}
            {...props} />
        </Grid>
      </Grid>
    </FormControl>
  );
}

export default FormSlider;

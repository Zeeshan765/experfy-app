import React from "react";
import { Box, FormControl, Link, TextField, Typography } from "@mui/material";
import DataIcon from "../../assets/images/global-theme-settings/data.svg";
import { useStyles } from "./css";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    span: true;
  }
}

interface FormLocationInputProps {
  inputSize?: string;
  label?: string;
  inputPlaceholder?: string;
  isDynamic?: boolean;
}

const FormLocationInput: React.FC<FormLocationInputProps> = (props) => {
  const classes = useStyles();
  // const [visibleSettings, setVisibleSettings] = React.useState(false);

  // const handleToggleSettings = () => {
  //   setVisibleSettings(!visibleSettings)
  // }

  return (
    <FormControl fullWidth className={classes.formLocationInput}>
      <Box className={classes.formLocationHeader}>
        <Typography variant="span" className={classes.formLocationInputLabel}>
          {props.label}
        </Typography>
        {props.isDynamic && (
          <Link className={classes.formLocationInputToggle}>
            Dynamic
            <img src={DataIcon} alt="Dynamic" />
          </Link>
        )}
      </Box>
      <TextField
        fullWidth
        variant="outlined"
        size={props.inputSize === "small" ? "small" : "medium"}
        placeholder={props.inputPlaceholder}
      />
    </FormControl>
  );
};

export default FormLocationInput;

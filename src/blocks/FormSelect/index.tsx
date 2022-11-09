import { Size } from "@material-ui/core";
import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./css";


export type Type = {
  id?: string
  fullWidth?: boolean
  options?: Array<any>
  label?: string
  size?: Size
  onchange?: any
  handleChangeBT?: any
  change?: string
  setToolTipVisible?: any
  placeholder?: string
  value?: string

}

const FormSelect: React.FC<Type> = ({ options = [], ...props }) => {
  const classes = useStyles();
  
  const [selectedOption, setSelectedOption] = React.useState();

  function handleChange(event: { target: { value: (prevState: undefined) => undefined; }; }) {
    setSelectedOption(event.target.value);
  }

  return (
    <FormControl
      fullWidth={props.fullWidth === false ? false : true}
      className={classes.selectInput}
    >
      <Typography component="span">{props.label}</Typography>
      <Select
        fullWidth
        value={selectedOption}
        onChange={
          props.change == "use-react-hook-onChange"
            ? (props.onchange = (event: any) => props.handleChangeBT(event))
            : handleChange
        }
        displayEmpty
        size={props.size === "small" ? "small" : "medium"}
        inputProps={{ "aria-label": "Without label" }}
        {...props}
        onOpen={() => {
          if (props.id) {
            props.setToolTipVisible(props.id);
          }
        }}
        onClose={() => {
          if (props.id) {
            props.setToolTipVisible(null);
          }
        }}
      >
        <MenuItem disabled value="">
          {props.placeholder}
        </MenuItem>

        {options.map((label, i) => {
          return <MenuItem value={i}>{label.value}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
}

export default FormSelect;

//

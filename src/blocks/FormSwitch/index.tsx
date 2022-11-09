import FormGroup from "@mui/material/FormGroup";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import { AntSwitch } from "./css";


export type Type = {
  label: string
  checked: boolean 
}

const ClassSwitch: React.FC<Type> = ({ ...props }) => {
  const [brandSwitch, setBrandSwitch] = React.useState(true);
  const handleSwitchChange = () => {
    if (props.checked) {
      setBrandSwitch(false);
    } else {
      setBrandSwitch(true);
    }
  };

  return (
    <FormGroup>
      <Stack direction="row" spacing={1} alignItems="center">
        <AntSwitch
          checked={props.checked}
          onChange={handleSwitchChange}
          defaultChecked
          inputProps={{ "aria-label": "ant design" }} />
        <Typography sx={{ fontSize: "1.0625rem" }}>{props.label}</Typography>
      </Stack>
    </FormGroup>
  );
}
export default ClassSwitch;
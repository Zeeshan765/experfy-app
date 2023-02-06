// import FormGroup from "@mui/material/FormGroup";
// import Stack from "@mui/material/Stack";
// import Typography from "@mui/material/Typography";
// import React from "react";
// import { AntSwitch } from "./css";
// import '../../styles/scss/index.scss';

// export type Type = {
//   label: string;
//   checked: boolean;
//   handleSwitchChange?: any;
//   setBrandSwitch?: any;
// };

// const ClassSwitch: React.FC<Type> = ({ ...props }) => {
//   const { setBrandSwitch } = props;
//   // const [brandSwitch, setBrandSwitch] = React.useState(true);
//   const handleSwitchChange = () => {
//     if (props.checked) {
//       setBrandSwitch(false);
//     } else {
//       setBrandSwitch(true);
//     }
//   };

//   return (
//     <FormGroup>
//       <Stack direction="row" spacing={1} alignItems="center">
//         <AntSwitch
//           checked={props.checked}
//           onChange={handleSwitchChange}
//           defaultChecked
//           inputProps={{ "aria-label": "ant design" }} />
//         <Typography 
//           sx={{
//             fontSize: '16px !important',
//             fontFamily: "proxima-nova",
//           }}>
//           {props.label}
//         </Typography>
//       </Stack>
//     </FormGroup>
//   );
// }

// export default ClassSwitch;


import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 36,
  height: 20,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 16,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#50ae81" : "#3ba773",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 16,
    height: 16,
    borderRadius: 8,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

export default function FormSwitch(props) {
  return (
    <FormGroup>
      <Stack direction="row" spacing={1} alignItems="center">
        <AntSwitch
          checked={props.brandSwitch}
          onChange={props.handleSwitchChange}
          defaultChecked
          inputProps={{ "aria-label": "ant design" }}
        />
        <Typography sx={{ fontSize: "1.0625rem", lineHeight: '1.375' }}>{props.label}</Typography>
      </Stack>
    </FormGroup>
  );
}

import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./css";

export type Type = {
  label?: string
  text: string
}

const FormTip: React.FC<Type> = (props) => {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event: { currentTarget: any; }) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Grid item xs={12}>
      <Box className={classes.formTip}>
        <div
          style={{
            display: "flex",
          }}
        >
          <Typography
            component="span"
            aria-owns={open ? "popover" : undefined}
            aria-haspopup="true"
          >
            Tip
          </Typography>

          <Typography className={classes.formTipContentText}>
            {props.text}
          </Typography>
        </div>
      </Box>
    </Grid>
  );
}
export default FormTip;

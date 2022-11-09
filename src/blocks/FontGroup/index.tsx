import React from "react";
import {
  Box,
  ButtonGroup,
  IconButton,
  Popover,
  Typography,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import FormSelect from "../FormSelect";
import FormSlider from "../FormSlider";
import { useStyles } from "./css";

interface FontGroupProps {
  label?: string;
}

const FontGroup: React.FC<FontGroupProps> = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleEditOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleEditClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Box className={classes.settingsOption}>
        <Typography>{props.label}</Typography>
        {/* <ActionsGroup
          handleEditOpen={handleEditOpen}
          hasEdit={true} /> */}
        <ButtonGroup className={classes.actionGroup} aria-label="actions group">
          <IconButton aria-label="edit" onClick={handleEditOpen}>
            <EditIcon />
          </IconButton>
        </ButtonGroup>
      </Box>
      <Popover
        className={classes.editPopover}
        open={open}
        anchorEl={anchorEl}
        onClose={handleEditClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box sx={{ p: 3 }}>
          <Typography className={classes.editPopoverLabel}>
            Typography
          </Typography>
          <Box className={classes.settingsOption}>
            <Typography>FontFamily</Typography>
            <FormSelect fullwidth={false} size="small" />
          </Box>
          <Box className={classes.settingsSlider}>
            <FormSlider label="Font Size" />
          </Box>
          <Box className={classes.settingsOption}>
            <Typography>Weight</Typography>
            <FormSelect fullwidth={false} size="small" />
          </Box>
          <Box className={classes.settingsOption}>
            <Typography>Font Style</Typography>
            <FormSelect fullwidth={false} size="small" />
          </Box>
          <Box className={classes.settingsOption}>
            <Typography>Transform</Typography>
            <FormSelect fullwidth={false} size="small" />
          </Box>
          <Box className={classes.settingsSlider}>
            <FormSlider label="Letter Spacing" />
          </Box>
          <Box className={classes.settingsSlider}>
            <FormSlider label="Line Height" />
          </Box>
          <Box className={classes.settingsSlider}>
            <FormSlider label="Paragraph spacing" />
          </Box>
        </Box>
      </Popover>
    </>
  );
};

export default FontGroup;

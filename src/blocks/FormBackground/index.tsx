import * as React from "react";
import { useState } from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Popover,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

import GradientIcon from '@mui/icons-material/Gradient';
import ColorIcon from "../../assets/images/global-theme-settings/background/color.svg";
import ColorActiveIcon from "../../assets/images/global-theme-settings/background/color_active.svg";
import ImageIcon from "../../assets/images/global-theme-settings/background/image.svg";
import ImageActiveIcon from "../../assets/images/global-theme-settings/background/image_active.svg";
import SliderIcon from "../../assets/images/global-theme-settings/background/slider.svg";
import SliderActiveIcon from "../../assets/images/global-theme-settings/background/slider_active.svg";
import VideoIcon from "../../assets/images/global-theme-settings/background/video.svg";
import VideoActiveIcon from "../../assets/images/global-theme-settings/background/video_active.svg";
import FormFileUpload from "../FormFileUpload";
import FormPosition from "../FormPosition";
import ActionsGroup from "../ActionsGroup";
import FormSwitch from "../FormSwitch";
import FormSlider from "../FormSlider";
import FormSelect from "../FormSelect";
import TextInput from "../TextInput";
import FormSliderRange from "../FormSliderRange";
import {useStyles} from "./css";

function FormBackground(
//   {
//   control,
//   Controller,
//   changeHandlerImage,
//   setBackgroundColorToggle,
//   backgroundColor,
//   backgroundColorToggle,
//   setBackgroundColor,
// }

) {
  const classes = useStyles();
  const [background, setBackground] = React.useState("color");

  const handleBackground = (event, newBackground) => {
    setBackground(newBackground);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <FormControl fullWidth className={classes.backgroundGroup}>
          <Typography variant="span" className={classes.backgroundGroupLabel}>
            Background Type
          </Typography>
          <ToggleButtonGroup
            className={classes.backgroundGroupButtons}
            value={background}
            exclusive
            onChange={handleBackground}
            aria-label="background"
          >
            <ToggleButton
              value="color"
              // style={
              //   backgroundColorToggle 
              //     ? { borderColor: "#4ba4da" }
              //     : null
              // }
              // aria-label="color"
              // onClick={() => setBackgroundColorToggle((prev) => (prev = !prev))}
            >
              <img src={ColorIcon} alt="Color" />
            </ToggleButton>
            <ToggleButton
              value="image"
              aria-label="image"
              style={
                 background == "image"
                  ? { borderColor: "#4ba4da" }
                  : null
              }
              // onClick={() => setBackgroundColorToggle(false)}

            >
              <img src={ImageIcon} alt="Image" />
            </ToggleButton>
            <ToggleButton
              value="slider"
              aria-label="slider"
              style={
                 background == "slider"
                  ? { borderColor: "#4ba4da" }
                  : null
              }
              // onClick={() => setBackgroundColorToggle(false)}

            >
              <img src={SliderIcon} alt="Slider" />
            </ToggleButton>
            <ToggleButton
              value="video"
              aria-label="video"
              style={
                 background == "video"
                  ? { borderColor: "#4ba4da" }
                  : null
              }
              // onClick={() => setBackgroundColorToggle(false)}

            >
              <img src={VideoIcon} alt="Video" />
            </ToggleButton>
          </ToggleButtonGroup>
        </FormControl>
      </Grid>
      {/* {backgroundColorToggle ? (
        <Grid item xs={12}>
          <Box className={classes.settingsOption}>
            <Typography>Background Color</Typography>
            <ActionsGroup
              hasColorPickerHeaderBackground={true}
              backgroundColor={backgroundColor}
              setBackgroundColor={setBackgroundColor}
            />
          </Box>
        </Grid>
      ) : null} */}

      <Grid item xs={12}>
        {/* <FormFileUpload label="Upload Image"  changeHandlerImage={changeHandlerImage} /> */}
      </Grid>
      {/* <Grid item xs={12}>
        <FormPosition label="Image Position" />
      </Grid> */}
    </Grid>
  );
}

export default FormBackground;

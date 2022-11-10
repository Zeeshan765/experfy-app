import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";

import SettingsIcon from "@mui/icons-material/Settings";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useStyles } from "./css";



interface VideoCardProps {
title?: string,
image?: string,
}


declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    span: true;
   
  }
}


const VideoCard:React.FC<VideoCardProps>= (props) =>{
  const classes = useStyles();

  return (
    <Card className={classes.videoCard}>
      <CardHeader
        avatar={<Checkbox />}
        action={
          <IconButton aria-label="settings">
            <SettingsIcon />
          </IconButton>
        }
      ></CardHeader>
      <CardContent>
        <Box
          className={classes.videoCardImage}
          sx={{
            backgroundImage: `url(${props.image})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Typography variant="span" className={classes.videoCardImageIcon}>
            <PlayArrowIcon />
          </Typography>
        </Box>
        <Tooltip title={props.title}>
          <Typography variant="span" className={classes.videoCardTitle}>
            {props.title}
          </Typography>
        </Tooltip>
      </CardContent>
    </Card>
  );
}

export default VideoCard;

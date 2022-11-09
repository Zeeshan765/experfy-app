import React from "react";
import { Box } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import {useStyles} from "./css";


interface VideoCardProps {
  image?: string;
}

const VideoCard: React.FC<VideoCardProps> = (props) => {
  const classes = useStyles();

  return (
    <Box
      className={classes.videoItem}
      sx={{
        backgroundImage: `url(${props.image})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box className={classes.videoItemInner}>
        <PlayCircleIcon />
      </Box>
    </Box>
  );
};

export default VideoCard;

import React from "react";
import {
  Box,
} from '@mui/material';
import {useStyles} from "./css";


interface ImageItem {
  image?: string,
}

const ImageItem : React.FC<ImageItem> =(props)=> {
  const classes = useStyles();

  return (
    <Box 
      className={classes.imageItem}>
      <Box 
        className={classes.imageItemInner}
        sx = {{
          backgroundImage: `url(${props.image})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>    
      </Box>
    </Box>  
  );
}

export default ImageItem;

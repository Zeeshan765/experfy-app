import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  IconButton,
  Tooltip,
  Typography
} from '@mui/material';

import SettingsIcon from '@mui/icons-material/Settings';
import {useStyles} from "./css";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    span: true;
  }
}




interface ImageCardprops{
  title?:string,
  image?: string,
}






const ImageCard : React.FC<ImageCardprops> = (props) =>{
  const classes = useStyles();

  return (
    <Card 
      className={classes.imageCard}>
      <CardHeader
        avatar={
          <Checkbox />
        }
        action={
          <IconButton aria-label="settings">
            <SettingsIcon />
          </IconButton>
        }>
      </CardHeader>
      <CardContent>
        <Box 
          className={classes.imageCardImage}
          sx = {{
            backgroundImage: `url(${props.image})`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>    
        </Box>
        <Tooltip title={props.title}>
          <Typography 
            variant="span"
            className={classes.imageCardTitle}>
            {props.title}
          </Typography>
        </Tooltip>  
      </CardContent>
    </Card>
  );
}

export default ImageCard;

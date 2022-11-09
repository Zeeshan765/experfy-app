import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  IconButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import {useStyles} from "./css";




interface TemplateCardProps {
  title?: string,
  image?: string,
  alt?: string,
  remove?:boolean,
}




const  TemplateCard:React.FC<TemplateCardProps>  = (props)=> {
  const classes = useStyles();

  return (
    <Card 
      className={classes.templateCard}>
      <CardHeader
        action={props.remove &&
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        }
        title={props.title}>
      </CardHeader>
      <CardMedia
        component="img"
        image={props.image}
        alt={props.alt}>
      </CardMedia>
    </Card>
  );
}

export default TemplateCard;

import React from "react";
// import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import LinkTag from "@mui/material/Link";
import {useStyles} from "./css"

interface SectionCardProps {
  link?: string;
  title?: string;
  image: string;
  text: string;
  alt: string;
}

const SectionCard: React.FC<SectionCardProps> = (props) => {
  const classes = useStyles();

  return (
    <LinkTag  href={props.link}>
      <Card className={classes.sectionCard}>
        <CardHeader title={props.title}></CardHeader>
        {props.text && (
          <CardMedia
            component="img"
            image={props.image}
            alt={props.alt}
          ></CardMedia>
        )}
        <CardContent>
          {props.text && <Typography>{props.text}</Typography>}
        </CardContent>
      </Card>
    </LinkTag>
  );
};

export default SectionCard;

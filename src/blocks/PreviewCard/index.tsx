import React from "react";
import { Box, Card, CardContent, CardHeader, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useStyles } from "./css";



interface PreviewCardProps {
  image?:string,
}

const PreviewCard: React.FC<PreviewCardProps> = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.previewCard}>
      <CardContent>
        <Box
          className={classes.previewCardImage}
          sx={{
            backgroundImage: `url(${props.image})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
      </CardContent>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <AddCircleIcon />
          </IconButton>
        }
      ></CardHeader>
    </Card>
  );
};

export default PreviewCard;

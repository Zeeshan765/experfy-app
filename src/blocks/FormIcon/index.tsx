import * as React from "react";
import {
  Box,
  FormControl,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";

import NoneIcon from "../../assets/images/icon_none.svg";
import UploadIcon from "../../assets/images/icon_upload.svg";
import CollectionIcon from "../../assets/images/icon_collection.svg";
import { useStyles } from "./css";

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    span: true;
  }
}

const FormIcon: React.FC<any> = (props) => {
  const classes = useStyles();

  return (
    <FormControl fullWidth className={classes.iconGroup}>
      <Typography variant="span" className={classes.iconGroupLabel}>
        Icon
      </Typography>
      <Box className={classes.iconGroupButtons}>
        <Tooltip title="None" placement="bottom">
          <IconButton disableRipple>
            <img src={NoneIcon} alt="None" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Upload" placement="bottom">
          <IconButton disableRipple>
            <img src={UploadIcon} alt="Upload" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Collection" placement="bottom">
          <IconButton disableRipple>
            <img src={CollectionIcon} alt="Collection" />
          </IconButton>
        </Tooltip>
      </Box>
    </FormControl>
  );
};

export default FormIcon;

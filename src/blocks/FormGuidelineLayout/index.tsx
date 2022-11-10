import * as React from 'react';
import {
  FormControl,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography
} from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {useStyles} from "./css";






declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    span: true;
  }
}







const FormGuidelineLayout:React.FC<any>=(props)=> {
  const classes = useStyles();
  const [layout, setLayout] = React.useState('default');

  const handleLayout = (event, newLayout) => {
    setLayout(newLayout);
  };

  return (
    <FormControl
      fullWidth
      className={classes.layoutGroup}>
      <Typography 
        variant='span'
        className={classes.layoutGroupLabel}>
        Layout
      </Typography>
      <ToggleButtonGroup
        className={classes.layoutGroupButtons}
        value={layout}
        exclusive
        onChange={handleLayout}
        aria-label="background"
      >
        <Tooltip title="Default">
          <ToggleButton value="default" aria-label="default">
            <ListIcon />
          </ToggleButton>
        </Tooltip> 
        <Tooltip title="In-line"> 
          <ToggleButton value="inline" aria-label="inline">
            <MoreHorizIcon />
          </ToggleButton>
        </Tooltip>
      </ToggleButtonGroup>  
    </FormControl>
  );
}

export default FormGuidelineLayout;

import EditIcon from '@mui/icons-material/Edit';
import LanguageIcon from '@mui/icons-material/Language';
import SettingIcon from '@mui/icons-material/Settings';
import {
  Box,
  ButtonGroup, IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Popover, Typography
} from '@mui/material';
import React, { ReactEventHandler } from 'react';
import FormSlider from '../FormSlider';
import { useStyles } from './css';


export type Type = {
  label?: string;
}

function TypographyGroup(props: any): JSX.Element {
  const classes = useStyles();
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleEditOpen: ReactEventHandler = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleEditClose = () => {
    setAnchorEl1(null);
  };

  const handleFontsOpen: ReactEventHandler = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleFontsClose = () => {
    setAnchorEl2(null);
  };

  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);

  return (
    <React.Fragment>
      <Box className={classes.settingsOption}>
        <Typography>{props.label}</Typography>
        <ButtonGroup
          className={classes.actionGroup}
          aria-label="actions group"
        >
          <IconButton
            aria-label="language"
            onClick={handleFontsOpen}
          >
            <LanguageIcon />
          </IconButton>
          <IconButton
            aria-label="edit"
            onClick={handleEditOpen}
          >
            <EditIcon />
          </IconButton>
        </ButtonGroup>
      </Box>
      <Popover
        className={classes.editPopover}
        open={open1}
        anchorEl={anchorEl1}
        onClose={handleEditClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box sx={{ p: 3 }}>
          <Typography className={classes.editPopoverLabel}>
            Typography
          </Typography>
          <Box className={classes.settingsOption}>
            <Typography>FontFamily</Typography>

          </Box>
          <Box className={classes.settingsSlider}>
            <FormSlider label="Font Size" />
          </Box>
          <Box className={classes.settingsOption}>
            <Typography>Weight</Typography>
          </Box>
          <Box className={classes.settingsOption}>
            <Typography>Font Style</Typography>

          </Box>
          <Box className={classes.settingsOption}>
            <Typography>Transform</Typography>

          </Box>
          <Box className={classes.settingsSlider}>
            <FormSlider label="Letter Spacing" />
          </Box>
          <Box className={classes.settingsSlider}>
            <FormSlider label="Line Height" />
          </Box>
          <Box className={classes.settingsSlider}>
            <FormSlider label="Paragraph spacing" />
          </Box>
        </Box>
      </Popover>
      <Popover
        className={classes.optionPopover}
        open={open2}
        anchorEl={anchorEl2}
        onClose={handleFontsClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box>
          <Typography className={classes.optionPopoverLabel}>
            Global Fonts Collection
            <SettingIcon />
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Primary" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Secondary" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Text" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Accent" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Popover>
    </React.Fragment>
  );
}

export default TypographyGroup;

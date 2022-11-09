import React from "react";
import {
  Box,
  ButtonGroup,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Popover,
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import EditIcon from '@mui/icons-material/Edit';
import LanguageIcon from '@mui/icons-material/Language';
import SettingIcon from '@mui/icons-material/Settings';
// import FormSelect from "./FormSelect";
// import FormSlider from "./FormSlider";

const useStyles = makeStyles({
  settingsOption: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 0',
    '& p': {
      fontSize: '1.0625rem',
    },
    '& .MuiFormControl-root': {
      minWidth: '11.25rem',
    }
  },
  actionGroup: {
    border: '1px solid #d1dbe3',
    borderRadius: '.25rem',
    '& .ColorPicker-MuiButton-root': {
      minWidth: '0 !important',
      width: '1.25rem !important',
      height: '1.25rem !important',
      margin: '0 !important',
      boxShadow: 'none',
      border: '1px solid #d1dbe3',
      borderRadius: '.25rem !important',
    },
    '& .MuiButtonBase-root': {
      padding: '.25rem .5rem',
      borderRadius: '0',
      borderRight: '1px solid #d1dbe3',
      '&:first-child': {
        borderRadius: '.25rem 0 0 .25rem',
      },
      '&:last-child': {
        borderRight: 'none',
        borderRadius: '0 .25rem .25rem 0',
      },
      '&:hover': {
        color: '#fff',
        backgroundColor: '#4ba4da',

        '& .ColorPicker-MuiButton-root': {
          borderColor: '#fff',
        }
      }
    }
  },
  editPopover: {
    '& .MuiPaper-root': {
      width: '21rem !important',
      border: '1px solid #d1dbe3',
      margin: '.25rem 0 0 !important',
    }
  },
  editPopoverLabel: {
    fontSize: '1rem',
    fontWeight: 500,
    textTransform: 'uppercase',
    color: '#90959f',
    marginBottom: '.5rem'
  },
  optionPopover: {
    '& .MuiPaper-root': {
      width: '21rem !important',
      border: '1px solid #d1dbe3',
      margin: '.25rem 0 0 !important',
    }
  },
  optionPopoverLabel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '1.125rem',
    fontWeight: 500,
    color: '#3a4152',
    padding: '1rem 1.5rem',
    borderBottom: '1px solid #d1dbe3',
  }
}); 

function TypographyGroup(props: any) : JSX.Element {
  const classes = useStyles();
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);

  const handleEditOpen = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleEditClose = () => {
    setAnchorEl1(null);
  };

  const handleFontsOpen = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleFontsClose = () => {
    setAnchorEl2(null);
  };

  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);

  return (
    <>
      <Box className={classes.settingsOption}>
        <Typography>
          {props.label}
        </Typography>
        <ButtonGroup 
          className={classes.actionGroup}
          aria-label="actions group">
          <IconButton aria-label="language" onClick={handleFontsOpen}>
            <LanguageIcon />
          </IconButton>  
          <IconButton aria-label="edit" onClick={handleEditOpen}>
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
            <Typography>
              FontFamily
            </Typography>
            {/* <FormSelect fullwidth={false} size="small" /> */}
          </Box>
          {/* <Box className={classes.settingsSlider}>     //TO-DO enable the slider later
            <FormSlider label='Font Size' />
          </Box>
          <Box className={classes.settingsOption}>
            <Typography>
              Weight
            </Typography>
            <FormSelect fullwidth={false} size="small" />
          </Box>
          <Box className={classes.settingsOption}>
            <Typography>
              Font Style
            </Typography>
            <FormSelect fullwidth={false} size="small" />
          </Box>
          <Box className={classes.settingsOption}>
            <Typography>
              Transform
            </Typography>
            <FormSelect fullwidth={false} size="small" />
          </Box> */}
          {/* <Box className={classes.settingsSlider}>
            <FormSlider label='Letter Spacing' />
          </Box>
          <Box className={classes.settingsSlider}>
            <FormSlider label='Line Height' />
          </Box>
          <Box className={classes.settingsSlider}>
            <FormSlider label='Paragraph spacing' />
          </Box> */}
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
    </>  
  );
}

export default TypographyGroup;

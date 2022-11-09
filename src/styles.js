import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  settingsSidebar: {
    position: "fixed",
    top: "8.5rem",
    left: "0",
    bottom: "0",
    backgroundColor: "#fff",
    borderRight: "1px solid #d1dbe3",
    width: "23.75rem",
  },
  settingsSidebarWrapper: {
    overflowY: "auto",
    height: "100%",
    "&::-webkit-scrollbar": {
      width: ".375rem",
    },
    "&::-webkit-scrollbar-track": {
      background: "#f1f3f5",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#a7afb9",
      "&:hover": {
        background: "#8a95a3",
      },
    },
  },
  settingsSidebarGroup: {
    borderBottom: "1px solid #d1dbe3",
  },
  settingsSidebarAccordion: {  
    boxShadow: "none !important",
    borderRadius: "0 !important",
    "& .MuiAccordionSummary-root": {
      padding: "0 1.25rem",
      "& p": {
        display: "inline-flex",
        alignItems: "center",
        fontSize: "1.125rem",
        fontWeight: 500,
        "& span": {
          display: "inline-flex",
          alignItems: "center",
          width: "2.5rem",
        },
      },
    },
    "& .MuiAccordionDetails-root": {
      padding: ".5rem 1.25rem 1rem",
    },
  },
  settingsSidebarGroupTitle: {
    display: "block",
    padding: ".5rem 1.25rem",
    fontSize: "1.0625rem",
    fontWeight: 500,
    textTransform: "uppercase",
    backgroundColor: "#f1f3f5",
  },
  settingsLabel: {
    textTransform: "uppercase",
    marginTop: "1rem !important",
    color: "#a1a5ad !important",
  },
  settingsLink: {
    display: "inline-flex",
    alignItems: "center",
    fontSize: "1rem",
    fontWeight: 500,
    margin: ".5rem 0 1.5rem",
  },
  settingsColorPicker: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: ".125rem 0",
    "& p": {
      fontSize: "1.0625rem",
    },
    "& .ColorPicker-MuiButton-root": {
      height: "2rem",
      minWidth: "2.25rem !important",
    },
  },
  settingsOption: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 0",
    "& p": {
      fontSize: "1.0625rem",
      marginRight: "1rem",
    },
    "& .MuiFormControl-root": {
      minWidth: "11.25rem",
    },
  },
  settingsOptionInput: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: ".5rem 0",
    "& p": {
      fontSize: "1.0625rem",
    },
    "& .MuiFormControl-root": {
      maxWidth: "6rem",
    },
  },
  settingsOptionNew: {
    display: "flex",
    alignItems: "center",
    flex: "1",
    '& .MuiIconButton-root': {
      margin: '0 .5rem',
      opacity: '.5',
      '&:hover': {
        opacity: '1',
      }
    }
  },
  settingsOptionNewLabel: {
    flex: "1",
    '& .MuiLink-root': {
      color: '#4a5162',
      fontSize: '1.0625rem'
    }
  },
  settingsTabs: {
    margin: "1rem 0",
    "& .MuiToggleButton-root": {
      fontSize: "1.0625rem",
      fontWeight: 500,
      color: "#2b3e5f",
    },
  },
  settingsSlider: {
    padding: ".5rem 0",
  },
  settingsAccordionSubgroups: {
    "& .MuiAccordion-root": {
      boxShadow: "none !important",
      borderRadius: "0 !important",
    },
    "& .MuiAccordionSummary-root": {
      padding: "0 !important",
    },
    "& .MuiAccordionDetails-root": {
      padding: ".5rem 0 1rem !important",
    },
  },
  settingsAreaTitle: {
    margin: '.75rem 0 .75rem'
  },
  settingsAreaNote: {
    fontSize: '.9375rem',
    color: "#a1a5ad"
  },
  editPopover: {
    "& .MuiPaper-root": {
      width: "21rem !important",
      border: "1px solid #d1dbe3",
      margin: ".25rem 0 0 !important",
    },
  },
  editPopoverLabel: {
    fontSize: "1rem",
    fontWeight: 500,
    textTransform: "uppercase",
    color: "#90959f",
    marginBottom: ".5rem",
  },
  optionPopover: {
    "& .MuiPaper-root": {
      width: "21rem !important",
      border: "1px solid #d1dbe3",
      margin: ".25rem 0 0 !important",
    },
  },
  optionPopoverLabel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "1.125rem",
    fontWeight: 500,
    color: "#3a4152",
    padding: "1rem 1.5rem",
    borderBottom: "1px solid #d1dbe3",
  },
  optionPopoverList: {
    "& .MuiListItemIcon-root": {
      minWidth: "1.5rem !important",
      height: "1.5rem",
      borderRadius: ".25rem !important",
      color: "#fff",
      marginRight: "1rem",
    },
    "& .MuiListItemText-root": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  cssEditor: {
    border: "1px solid #d1dbe3",
    "& .ace_editor": {
      width: "100% !important",
      minHeight: "12.5rem",
      resize: "vertical",
    },
  },
  fourSideInput: {
    paddingTop: "1rem !important",
  },
  fourSideInputFields: {
    flexDirection: "row !important",
    flexWrap: "nowrap !important",
    "& .MuiOutlinedInput-root": {
      width: "2.25rem",
      borderRadius: "0 !important",
    },
    "& .MuiOutlinedInput-input": {
      paddingLeft: ".25rem !important",
      paddingRight: ".25rem !important",
      textAlign: "center",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderRightColor: "transparent",
    },
    "& .MuiButton-root": {
      paddingLeft: ".5rem !important",
      paddingRight: ".5rem !important",
      width: "2.25rem",
      minWidth: "2.25rem",
      borderRadius: "0 .25rem .25rem 0 !important",
    },
    "& .MuiFormControl-root": {
      minWidth: "0 !important",
      "&:first-of-type .MuiOutlinedInput-root": {
        borderRadius: ".25rem 0 0 .25rem !important",
      },
    },
  },
  fourSideInputLabels: {
    display: "flex",
    "& span": {
      display: "inline-block",
      padding: ".125rem 0 0",
      fontSize: ".5625rem",
      fontWeight: 500,
      textAlign: "center",
      textTransform: "uppercase",
      color: "#a1a5ad",
      width: "2.25rem",
    },
  },
  colorPickerButton: {
    padding: "0.25rem 0.25rem !important",
    "& .MuiBox-root": {
      width: "2.125rem",
      height: "1.5rem",
      border: "1px solid #d1dbe3",
    },
  },
  colorPickerPopover: {
    "& .MuiPaper-root": {
      width: "14.0625rem !important",
    },
  },
  textInput: {
    "& span": {
      display: "inline-block",
      fontSize: "1.0625rem",
      fontWeight: 500,
      padding: "0 0 .125rem",
      color: "#4a5162",
    },
  },
  customColorPickerFrame:{
    border: "1px solid #d1dbe3",
    borderRadius: ".25rem",
    "& .ColorPicker-MuiButton-root": {
      minWidth: "0 !important",
      width: "1.5rem !important",
      height: "1.25rem !important",
      margin: "0 !important",
      boxShadow: "none",
      border: "1px solid #d1dbe3",
      borderRadius: ".25rem !important",
    },
    "& .MuiButtonBase-root": {
      padding: ".25rem .5rem",
      borderRadius: "0",
      borderRight: "1px solid #d1dbe3",
      minWidth: "2.625rem",
      "&:first-child": {
        borderRadius: ".25rem 0 0 .25rem",
      },
      "&:last-child": {
        borderRight: "none",
        borderRadius: "0 .25rem .25rem 0",
      },
    },
  },
  typography_Global: {
    "& .css-g1l76s-MuiButtonBase-root-MuiListItemButton-root.Mui-selected": {
      backgroundColor: "rgb(75 164 218)",
      " & .css-1ynr4te-MuiTypography-root ": {
        color: "#fff !important",
      },
    },
  },
});  

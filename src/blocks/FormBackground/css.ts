import { makeStyles } from "@mui/styles";



export const useStyles = makeStyles({
    backgroundGroup: {
      flexDirection: "row !important",
      justifyContent: "space-between !important",
      alignItems: "center !important",
    },
    backgroundGroupLabel: {
      display: "inline-block",
      fontSize: "1.0625rem",
      fontWeight: 400,
      color: "#4a5162",
    },
    backgroundGroupButtons: {
      "& .MuiToggleButton-root": {
        "&.Mui-selected": {
          backgroundColor: "#fff",
        },
      },
    },
    positionGroupCurrent: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    backgroundGroupColorpicker: {
      "& > div": {
        width: "100%",
      },
      "& .MuiTypography-root": {
        fontSize: "1.0625rem",
      },
    },
    settingsOption: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: ".5rem 0",
      "& p": {
        fontSize: "1.0625rem",
      },
      "& .MuiFormControl-root": {
        minWidth: "11.25rem",
        maxWidth: "11.25rem"
      },
    },
    editPopover: {
      "& .MuiPaper-root": {
        width: "21rem !important",
        border: "1px solid #d1dbe3",
        margin: ".25rem 0 0 !important",
      },
    },
  });
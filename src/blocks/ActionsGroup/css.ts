import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles({
    actionGroup: {
      // border: "1px solid #d1dbe3",
      // borderRadius: ".25rem",
      display: 'flex',
      alignItems: 'center', 
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
        borderTop: "1px solid #d1dbe3",
        borderBottom: "1px solid #d1dbe3",
        borderLeft: "1px solid #d1dbe3",
        minWidth: "2.625rem",
        "&:first-child": {
          borderTopLeftRadius: '.25rem',
          borderBottomLeftRadius: '.25rem',
        },
        "&:last-child": {
          borderRight: "1px solid #d1dbe3",
          borderTopRightRadius: '.25rem',
          borderBottomRightRadius: '.25rem',
        },
      },
      "& .MuiLink-root": {
        display: 'inline-flex',
        alignItems: 'center',
        marginRight: '.5rem',
        color: '#90959f !important',
        opacity: '.5 !important',
        userSelect: 'none',
        cursor: 'pointer',
        "&:hover": {
          opacity: '1 !important'
        },
        "& + .MuiButtonBase-root": {
          borderTopLeftRadius: '.25rem',
          borderBottomLeftRadius: '.25rem',
        }
      },
    },
    colorPickerButton: {
      padding: '0.25rem 0.25rem !important',
      '& .MuiBox-root': {
        width: '2.125rem',
        height: '1.5rem',
        border: '1px solid #d1dbe3',
      },
    },
    colorPickerPopover: {
      '& .MuiPaper-root': {
        width: '14.0625rem !important',
      },
    },
  });
  
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    formTextarea: {
      "& > span": {
        display: "inline-block",
        fontSize: "1.0625rem",
        padding: "0 0 .125rem",
        color: "#4a5162",
      },
    },
    formTextareaGroup: {
      position: 'relative'
    },
    formTextareaTags: {
      position: 'absolute',
      top: '1px',
      right: '1px',
      zIndex: '2',
      '& .MuiIconButton-root': {
        width: '2.25rem',
        height: '2.25rem',
        borderBottom: '1px solid #d1dbe3',
        borderLeft: '1px solid #d1dbe3',
        borderRadius: '0 .25rem 0 .25rem !important',
      }  
    }
  });
  
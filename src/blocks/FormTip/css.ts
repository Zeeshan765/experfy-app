import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    formTip: {
      "& span": {
        display: "inline-block",
        fontSize: ".9375rem",
        fontWeight: 500,
        textTransform: "uppercase",
        color: "#ffffff",
        padding: ".25rem .75rem .125rem",
        backgroundColor: "#37a1d9",
        borderRadius: ".25rem",
        marginTop: "1.75rem",
        cursor: "pointer",
        maxHeight:'30px'
      },
    },
    formTipContent: {
      marginLeft: ".5rem",
    },
    formTipContentText: {
      fontSize: ".9375rem !important",
      padding: "1.5rem 16px",
    },
  });
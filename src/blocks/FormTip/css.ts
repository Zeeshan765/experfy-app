import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    formTip: {
      "& span": {
        fontSize: ".9375rem",
        fontWeight: 500,
        textTransform: "uppercase",
        color: "#ffffff",
        padding: ".25rem .75rem .125rem",
        backgroundColor: "#37a1d9",
        borderRadius: ".25rem",
        // marginTop: "2rem",
        cursor: "pointer",
        maxHeight:'30px'
      },
    },
    formTipContentText: {
      fontSize: "1rem !important",
      margin: "0px 0px 0px 15px",
      fontWeight: 300,
    },
  });
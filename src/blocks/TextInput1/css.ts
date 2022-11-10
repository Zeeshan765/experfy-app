import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  textInput: {
    "& span": {
      display: "inline-block",
      fontSize: "1.0625rem",
      fontWeight: 500,
      padding: "0 0 .125rem",
      color: "#4a5162",
    },
  },

  formTipContentText: {
    fontSize: ".9375rem !important",
    padding: "1.5rem 16px",
  },
});
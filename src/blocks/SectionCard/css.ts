import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  sectionCard: {
    boxShadow: "0 3px 6px rgba(0 0 0 / 16%) !important",
    border: "1px solid #d1dbe3",
    padding: "0 .75rem",
    height: "100%",
    "& .MuiCardHeader-root": {
      textAlign: "center",
      padding: ".75rem 0",
    },
    "& .MuiCardContent-root": {
      padding: ".75rem 0 1rem !important",
      "& p": {
        fontSize: ".75rem",
      },
    },
  },
});

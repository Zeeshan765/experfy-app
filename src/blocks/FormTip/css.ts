import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    formTip: {
      "& span": {
        position: 'absolute',
        left: 0,
        top: 0,
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
    formTipInner: {
      position: "relative",
      paddingLeft: '50px'
    },
    formTipContentText: {
      position: 'absolute',
      top: '2px',
      left: '50px',
      fontSize: "1rem !important",
      fontWeight: 400,
      zIndex: '2',
    },
  });

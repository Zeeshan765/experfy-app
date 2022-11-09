import { makeStyles } from "@mui/styles";
import Banner from "../../assets/images/portal/banner.png";
import IconOne from "../../assets/images/portal/icon_configure.svg";
import IconTwo from "../../assets/images/portal/icon_mobility.svg";

export const useStyles = makeStyles({
  portalBanner: {
    background: `#32293b url(${Banner}) right center / cover no-repeat scroll`,
    padding: "2rem 1.5rem",
    minHeight: "20rem",
    borderRadius: ".75rem !important",
    boxShadow: "none",
    "& span": {
      color: "#ffffff",
      fontSize: "2rem",
    },
    "& h1": {
      color: "#ffffff",
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: "1",
      textTransform: "uppercase",
      margin: "0 0 1.5rem",
      "& span": {
        color: "#61a7db",
        fontSize: "2.5rem",
        fontWeight: 700,
        lineHeight: "1",
        textTransform: "uppercase",
      },
    },
    "& p": {
      fontSize: "1.25rem",
      fontWeight: 500,
      color: "#edf0f5",
      maxWidth: "57.5rem",
    },
  },
  portalCard: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f1f3f5 !important",
    border: "1px solid #d3dbe3",
    borderRadius: ".5rem !important",
    padding: "1.5rem 1.5rem",
    boxShadow: "none !important",
    height: "100%",
    "& h3": {
      fontWeight: 700,
      margin: "0 0 1rem",
    },
    "& ul": {
      margin: "0",
      padding: "0",
      "& li": {
        position: "relative",
        paddingTop: "0",
        paddingBottom: ".25rem",
      },
    },
  },
  portalCardContent: {
    flex: 1,
    width: "100%",
    paddingLeft: "8rem !important",
  },
  portalCardIconOne: {
    background: `url(${IconOne}) left 1rem top .25rem no-repeat scroll`,
  },
  portalCardIconTwo: {
    background: `url(${IconTwo}) left 1rem top 1rem no-repeat scroll`,
  },
  radioExample: {
    "& p": {
      fontSize: "1.0625rem",
    },
    "& span": {
      fontSize: ".9375rem",
      backgroundColor: "#ebebed",
      padding: ".25rem .5rem",
      borderRadius: ".25rem",
      display: "inline-block",
    },
  },
});
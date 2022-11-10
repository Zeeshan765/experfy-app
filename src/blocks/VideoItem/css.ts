import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    videoItem: {
      backgroundColor: "#2f3d55",
      width: "100%",
      paddingTop: "56.25%",
      position: "relative",
    },
    videoItemInner: {
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      backgroundColor: "#2f3d55",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& .MuiSvgIcon-root": {
        fontSize: "2.5rem",
        color: "#fff",
      },
    },
  });
  
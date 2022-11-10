import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  errorMessages: {
    position: "fixed",
    zIndex: "1111",
  },
});

export default function DescriptionAlerts(props: any) {
  const classes = useStyles();
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <div style={{ width: "300px", margin: "20px auto" }}>
        {props.success ? (
          <Alert
            severity="success"
            className={classes.errorMessages}
            onClose={() => {
              props.setSuccess(false);
            }}
          >
            <AlertTitle>{props.title}</AlertTitle>
            {props.successMessage}
          </Alert>
        ) : (
          <Alert
            severity="error"
            className={classes.errorMessages}
            onClose={() => {
              props.setError(false);
            }}
          >
            <AlertTitle>{props.title}</AlertTitle>
            {props.errorMessage &&
              props.errorMessage.map((i) => (
                <li key={i}>
                  <strong>{i}</strong>
                </li>
              ))}
          </Alert>
        )}
      </div>
    </Stack>
  );
}

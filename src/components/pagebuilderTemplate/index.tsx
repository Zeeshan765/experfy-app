import { DialogTitle } from "@material-ui/core";
import { Button, Dialog } from "@mui/material";
import React, { useCallback, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import PageTemplate from "../PageTemplate";

const PageTheme = () => {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();


  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    handleOpen();
  }, []);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      maxWidth="lg"
      fullWidth={true}
    >
      {/* <DialogTitle>
        <div
          style={{
            padding: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <p>hello test</p>
          <p onClick={handleClose} style={{cursor:'pointer'}}>X</p>
        </div>
      </DialogTitle> */}
      <div style={{ background: "#fff" }}>
        <div
          style={{
            padding: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div>
            <label htmlFor="type" style={{ display: "block" }}>
              Page Templete Type
            </label>
            <select name="type">
              <option value="test of"></option>
            </select>
          </div>

          <div>
            <label htmlFor="search" style={{ display: "block" }}>
              Search Page
            </label>
            <input
              type="text"
              name="search"
              placeholder="Search Page"
              style={{
                width: "300px",
                border: "1px solid gray",
                boxShadow: "1px 1px 3px 0px #000",
                background: "#fff",
                borderRadius: "8px",
              }}
            />{" "}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
         <PageTemplate />
        </div>
      </div>
    </Dialog>
  );
};

export default PageTheme;

import { DialogTitle } from "@material-ui/core";
import { Button, Dialog } from "@mui/material";
import React, { useCallback, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import browse_jobs from "../../assets/images/templates/browse_jobs.png";
import category from "../../assets/images/templates/category.png";
import error_404 from "../../assets/images/templates/error_404.png";
import home from "../../assets/images/templates/home.png";
import job_overview from "../../assets/images/templates/job_overview.png";
import join from "../../assets/images/templates/join.png";
import tc_overview from "../../assets/images/templates/tc_overview.png";
import FaceLessModel from "../Model";
const PageTheme = () => {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const themeList = [
    {
      id: 1,
      image: browse_jobs,
      link: "/admin",
      name: "Browse Jobs",
    },
    {
      id: 2,
      image: category,
      link: "/admin",
      name: "Category",
    },
    {
      id: 3,
      image: error_404,
      link: "/admin",
      name: "Error 404",
    },
    {
      id: 4,
      image: home,
      link: "/admin",
      name: "Home",
    },
    {
      id: 5,
      image: job_overview,
      link: "/admin",
      name: "Job Overview",
    },
    {
      id: 6,
      image: join,
      link: "/admin",
      name: "Join",
    },
    {
      id: 7,
      image: tc_overview,
      link: "/admin",
      name: "TC Overview",
    },
  ];
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
          {themeList.map(({ id, image, name, link }) => (
            <div
              key={id}
              style={{
                width: "300px",
                height: "250px",
                margin: "16px 8px ",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                padding: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                {" "}
                <h5 style={{ color: "#000" }}>{name}</h5>
                <FaceLessModel
                  data={{ id, image, name }}
                />
              </div>
              <img src={image} alt={name} style={{ width: "100%" }} />
            </div>
          ))}
        </div>
      </div>
    </Dialog>
  );
};

export default PageTheme;

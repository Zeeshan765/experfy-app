import React, { useContext } from "react";
import browse_jobs from "../assets/images/templates/browse_jobs.png";
// import browse_jobs from "../../assets/images/templates/browse_jobs.png";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import category from "../assets/images/templates/category.png";
import error_404 from "../assets/images/templates/error_404.png";
import home from "../assets/images/templates/home.png";
import job_overview from "../assets/images/templates/job_overview.png";
import join from "../assets/images/templates/join.png";
import tc_overview from "../assets/images/templates/tc_overview.png";
import FaceLessModel from "./Model";
import { Context } from "../Providers/MyProvider";

const useStyles = makeStyles({
  templateCardGrid: {
    width: "calc(100% + 40px)",
    marginTop: "-32px !important",
  },
  templateCard: {
    backgroundColor: "transparent!important",
    boxShadow: "none!important",
    "& .MuiCardHeader-root": {
      padding: "0 0 .5rem",
      "& .MuiTypography-root": {
        fontFamily: "proxima-nova",
        fontWeight: 500,
        color: "#4a5162 !important",
      },
      "& .MuiCardHeader-action": {
        display: "inline-flex",
        alignItems: "center",
        "& button": {
          marginTop: "8px",
        },
      },
    },
  },
});
type Props = {
  search?: string;
  templateModelClose?: () => void;
  fromScratch?:any;
};
const PageTemplate: React.FC<Props> = ({
  search,
  templateModelClose,
  fromScratch,
}) => {
  const classes = useStyles();
  const { setSelectedPageCode } = useContext(Context);
  const pageList = [
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

  const createPageHandler = (id) => {
    setSelectedPageCode(id);
    templateModelClose();
  };
  return (

      <Grid container spacing={2} mt={2}>
        {pageList.map(({ id, image, name, link }) => (
          <>
            {search === "" && (
              <Grid
                item
                sm={3}
                key={id}
              >
                <div className="card-page-template">
                  <div className="card-page-template__header">
                    {" "}
                    <h4 className="card-page-template__title">
                      {name}
                    </h4>
                    <div className="card-page-template__actions">
                      <FaceLessModel
                        data={{ id, image, name }}
                        templateModelClose={templateModelClose}
                      />
                    </div>  
                  </div>
                  <div className="card-page-template__body">
                    {fromScratch && (
                      <button
                        className="template-select-button"
                        onClick={() => createPageHandler(id)}
                      >
                        Select
                      </button>
                    )}
                    <img
                      src={image}
                      alt={name}

                    />
                  </div>
                </div>
              </Grid>
            )}
            {search && name?.toLowerCase().includes(search.toLowerCase()) ? (
              <Grid
                item
                sm={3}
                key={id}
              >
                <div className="card-page-template">
                  <div className="card-page-template__header">
                    {" "}
                    <h4 className="card-page-template__title">
                      {name}
                    </h4>
                    <div className="card-page-template__actions">
                      <button onClick={() => createPageHandler(id)}>Select</button>
                      <FaceLessModel
                        data={{ id, image, name }}
                        templateModelClose={templateModelClose}
                      />
                    </div>
                  </div>  
                  <div className="card-page-template__body">
                    {fromScratch && (
                      <button
                        className="template-select-button"
                        onClick={() => createPageHandler(id)}
                      >
                        Select
                      </button>
                    )}
                    <img
                      src={image}
                      alt={name}
                    />
                  </div>
                </div>  
              </Grid>
            ) : (
              ""
            )}
            {/* {
              (
                <p>oop!not found anything's</p>
              )
            } */}
          </>
        ))}
      </Grid>
  );
};
export default PageTemplate;

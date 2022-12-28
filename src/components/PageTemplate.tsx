import React from 'react';
import browse_jobs from "../assets/images/templates/browse_jobs.png";
// import browse_jobs from "../../assets/images/templates/browse_jobs.png";
import category from "../assets/images/templates/category.png";
import error_404 from "../assets/images/templates/error_404.png";
import home from "../assets/images/templates/home.png";
import job_overview from "../assets/images/templates/job_overview.png";
import join from "../assets/images/templates/join.png";
import tc_overview from "../assets/images/templates/tc_overview.png";
import FaceLessModel from "./Model";
import { Grid } from "@material-ui/core";

const PageTemplate=()=>{
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
return(<>
 <Grid
         container spacing={2} 
         style={{margin:'auto',width:'95%'}}
          // sx={{
          //   margin: "2rem",
          // }}
        >
          {pageList.map(({ id, image, name, link }) => (
            <Grid item sm={3} alignItems="center" 
              key={id}
              style={{
                width: "100%",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                // boxShadow:'0px 1px 3px 0px #000000',
                flexDirection: "column",
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
                <p
                  style={{
                    color: "#000",
                    fontWeight: "500",
                    fontSize: "1.2rem",
                    margin: "0px",
                  }}
                >
                  {name}
                </p>
                <FaceLessModel data={{ id, image, name }} />
              </div>
              <img
                src={image}
                alt={name}
                style={{ width: "100%", borderRadius: "4px",boxShadow: "0px 0.5px 2px -1px #000000",background:'#f0f0f0' }}
                // #e6f1e682
              />
            </Grid>
          ))}
        </Grid>
     </>
    // <Grid container spacing={2}
    //       // style={{
    //       //   display: "flex",
    //       //   flexWrap: "wrap",
    //       //   alignItems:'center',
    //       //   justifyContent: "center",
    //       // }}
    //     >
    //       {pageList.map(({ id, image, name, link }) => (
    //         <Grid item md={3} 
    //           // key={id}
    //           style={{
    //             width: "100%",
    //             // height: "250px",
    //             margin: "16px 8px ",
    //             borderRadius: "8px",
    //             display: "flex",
    //             alignItems: "center",
    //             flexDirection: "column",
    //             padding: "8px",
    //           }}
    //         >
    //           <div
    //             style={{
    //               display: "flex",
    //               alignItems: "center",
    //               justifyContent: "space-between",
    //               width: "100%",
    //             }}
    //           >
    //             {" "}
    //             <h5 style={{ color: "#000" }}>{name}</h5>
    //             <FaceLessModel
    //               data={{ id, image, name }}
    //             />
    //           </div>
    //           <img src={image} alt={name} style={{ width: "100%" }} />
    //         </Grid>
    //       ))}
    //     </Grid>
)
}
export default PageTemplate;
import { Dialog, DialogTitle } from "@mui/material";
import React, { useEffect,useContext } from "react";
import { useHistory,Redirect } from "react-router-dom";
import browse_jobs from "../../assets/images/templates/browse_jobs.png";
import category from "../../assets/images/templates/category.png";
import error_404 from "../../assets/images/templates/error_404.png";
import home from "../../assets/images/templates/home.png";
import job_overview from "../../assets/images/templates/job_overview.png";
import join from "../../assets/images/templates/join.png";
import tc_overview from "../../assets/images/templates/tc_overview.png";
import FaceLessModel from "../Model";
import { Grid } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import PageTemplate from "../PageTemplate";
import NewPageBuilder from "../NewPageBuilder";
import { Context } from "../../MyProvider";
const NewPageBuilderModel = () => {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const {pageAttributes }=useContext(Context);

  

  // ======Methods===== //
  // const handleOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };
  // const handleSeach = (e) => {
  //   const { value } = e.target;
  //   setSearch(value);
  // };
  // useEffect(() => {
  //   handleOpen();
  // }, []);

  // Redirect to new page builder when build from scratch button clicked
  useEffect(()=>{
  console.log("hello ********* developer=======", pageAttributes);
    // history.push('/admin/collections/new-page-builder');
  },[])
  return (
    <>
    </>
//     <Dialog
//       open={open}
//       onClose={handleClose}
//       aria-labelledby="customized-dialog-title"
//       maxWidth="lg"
// style={{width:'100vw',height:'100vh'}}
//       fullWidth={true}
//     >
//       <DialogTitle
//         sx={{ boxShadow: 3 }}
//         style={{
//           borderBottom: "1px solid #000",
//           boxShadow: "0px 1px 4px 1px #000",
//           padding: ".75rem 3rem",
//         }}
//       >
//         <div
//           style={{
//             // padding: "16px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             width: "100%",
//           }}
//         >
//           <p style={{ font: "16px", fontWeight: "600", margin: "0px" }}>
//             create page from scratch
//           </p>
//           <a
//                 onClick={handleClose}
//                 style={{color:'#fff', backgroundColor:'#dfdfdf',padding:'8px',borderRadius:'15%' }}
//               >
//                 <CloseIcon  />
//               </a>
//               </div>
//       </DialogTitle>
//       <NewPageBuilder handleClose={handleClose} status="NewFromPage" />
//     </Dialog>
  );
};

export default NewPageBuilderModel;

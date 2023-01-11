import React, { memo, useEffect } from "react";
import { useModal } from "@faceless-ui/modal";
import { Modal, ModalToggler } from "@faceless-ui/modal";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CloseIcon from '@mui/icons-material/Close';
import { useStyles } from './style';
import { Button } from 'payload/components/elements';

const FaceLessModel = ({ data }) => {
  const { id, name, image } = data??{}; 

  const [subModelopen, setSubModelOpen] = React.useState(false);
  const [htmlCode, setHtmlCode] = React.useState('<h1>hello</h1>');
  const { toggleModal } = useModal();

  const handleOpen = () => {
    setSubModelOpen(true);
  };
  const handleClose = () => {
    setSubModelOpen(false);
  };
   const createPageHandler = () => {
    handleClose();
   }

  return (
    <div>
      {/* <input name="htmlCode" value={htmlCode}/> */}
      <Dialog
        open={subModelopen}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        maxWidth="md"
        fullWidth={true}
        className={classes.previewModal}
      >
        <DialogTitle sx={{boxShadow: 3}}
         >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "95%",
              margin: "0px auto",
            }}
          >
            <p
              onClick={handleClose}
              style={{
                cursor: "pointer",
                margin: "0px",
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              <ArrowBackIosIcon />
              Back to page
            </p>
            <div style={{display:"flex",gap:'1rem'}}>
              <button
              onClick={createPageHandler}
                style={{
                  background: "skyblue",
                  color: "#fff",
                  padding: "0.5rem 1rem",
                  border: "0px",
                  borderRadius: "6px",
                  lineHeight:'normal' ,
                }}
              >
                <ArrowBackIosIcon />
                Back to page
              </a>
            </div>  
            <div className={classes.previewModalHeaderActions}>
              <Button
                type="button"
                buttonStyle="primary">
                Create Page
              </Button>
              <a
                onClick={handleClose}
                className={classes.previewModalHeaderClose}
              >
                <CloseIcon />
              </a>
            </div>
          </div>
        </DialogTitle>
        {/* <Modal slug="my-modal" > */}
        <DialogContent>
          <div 
            className={classes.previewModalContent}
            key={id}>
            <img
              src={image}
              alt={name}
            />
            {/* <div style={{width:'100%', display: "flex", alignItems: "center",justifyContent:'right' }}>
              {" "}
              <button
                style={{
                  color: "green",
                  border: "none",
                  background: "none",
                  fontWeight: 600,
                }}
                onClick={handleClose}
              >
                Select
              </button>
              <button
                style={{
                  color: "red",
                  border: "none",
                  background: "none",
                  fontWeight: 600,
                }}
                onClick={handleClose}
              >
                cancle
              </button>
            </div> */}
          </div>
        </DialogContent>  
      </Dialog>
      {/* </Modal> */}
      {/* <ModalToggler slug="my-modal">Toggle</ModalToggler> */}
      <button
        onClick={handleOpen}
        type="button"
        className={classes.previewButton}
      >
      </button>
    </>
  );
};

export default memo(FaceLessModel);

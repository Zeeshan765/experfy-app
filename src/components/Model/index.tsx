import React, { memo, useEffect } from "react";
import { useModal } from "@faceless-ui/modal";
import { Modal, ModalToggler } from "@faceless-ui/modal";
import { Dialog, DialogTitle } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const FaceLessModel = ({ data }) => {
  const { id, name, image } = data;

  const [subModelopen, setSubModelOpen] = React.useState(false);
  const { toggleModal } = useModal();

  const handleOpen = () => {
    setSubModelOpen(true);
  };
  const handleClose = () => {
    setSubModelOpen(false);
  };

  return (
    <div>
      <Dialog
        open={subModelopen}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        maxWidth="md"
        fullWidth={true}
        style={{ background: "#fff" }}
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
                style={{
                  background: "skyblue",
                  color: "#fff",
                  padding: "0.5rem 1rem",
                  border: "0px",
                  borderRadius: "6px",
                  lineHeight:'normal' ,
                }}
              >
                Create Page
              </button>
              <p
                onClick={handleClose}
                style={{
                  cursor: "pointer",
                  margin: "0px",
                  fontSize: "1.5rem",
                  alignmentBaseline:'central',
                  fontWeight: "600",
                }}
              >
                X
              </p>
            </div>
          </div>
        </DialogTitle>
        {/* <Modal slug="my-modal" > */}
        <div key={id} style={{ width: "90%", margin: "2rem auto" }}>
          <img
            src={image}
            style={{
              width: "100%",
              height:'450px',
              objectFit: "contain",
              boxShadow: "0px 1px 3px 0px #000",
              marginBottom: "16px",
              borderRadius: "4px",
            }}
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
      </Dialog>
      {/* </Modal> */}
      {/* <ModalToggler slug="my-modal">Toggle</ModalToggler> */}
      <button
        style={{
          color: "blue",
          border: "none",
          background: "none",
          fontWeight: 500,
          fontSize:'1rem',
          padding:'4px 0px'
        }}
        onClick={handleOpen}
        type="button"
      >
        Preview
      </button>
    </div>
  );
};

export default memo(FaceLessModel);

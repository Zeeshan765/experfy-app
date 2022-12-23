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
        <DialogTitle>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              margin: "0px",
            }}
          >
            <p
              onClick={handleClose}
              style={{ cursor: "pointer", margin: "0px" }}
            >
              <ArrowBackIosIcon />
              Back to page
            </p>
            <p
              onClick={handleClose}
              style={{ cursor: "pointer", margin: "0px" }}
            >
              X
            </p>
          </div>
        </DialogTitle>
        {/* <Modal slug="my-modal" > */}
        <div key={id} style={{ width: "60%", margin: "auto" }}>
          <img
            src={image}
            style={{
              width: "100%",
              objectFit: "contain",
              boxShadow: "1px 1px 3px 0px #000",
              marginBottom: "16px",
              borderRadius: "8px",
            }}
            alt={name}
          />
          <div style={{width:'100%', display: "flex", alignItems: "center",justifyContent:'right' }}>
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
          </div>
        </div>
      </Dialog>
      {/* </Modal> */}
      {/* <ModalToggler slug="my-modal">Toggle</ModalToggler> */}
      <button
        style={{
          color: "blue",
          border: "none",
          background: "none",
          fontWeight: 600,
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

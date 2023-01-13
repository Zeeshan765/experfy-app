// @ts-ignore
import React, { memo, useState, useEffect, useContext } from "react";
import { useModal } from "@faceless-ui/modal";
import { Modal, ModalToggler } from "@faceless-ui/modal";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CloseIcon from "@mui/icons-material/Close";
import { useStyles } from "./style";
import { Button } from "payload/components/elements";
import { Context } from "../../MyProvider";

const FaceLessModel = ({ data, templateModelClose }) => {
  const classes = useStyles();
  const { id, name, image } = data;
  const { setSelectedPageId } = useContext(Context);

  const [subModelopen, setSubModelOpen] = useState(false);
  const { toggleModal } = useModal();
  const handleOpen = () => {
    setSubModelOpen(true);
  };
  const handleClose = () => {
    setSubModelOpen(false);
  };
  const createPageHandler = () => {
    setSelectedPageId(id);
    handleClose();
    templateModelClose();
  };

  return (
    <>
      <Dialog
        open={subModelopen}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        maxWidth="md"
        fullWidth={true}
        className={classes.previewModal}
      >
        <DialogTitle sx={{ boxShadow: 3 }}>
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
            <div className={classes.previewModalHeaderActions}>
              <Button
                type="button"
                onClick={createPageHandler}
                buttonStyle="primary"
              >
                Create Page
              </Button>
              <a
                onClick={handleClose}
                className={classes.previewModalHeaderClose}
                style={{color:'#fff', backgroundColor:'#dfdfdf',padding:'8px',borderRadius:'15%' }}
              >
                <CloseIcon  />
              </a>
            </div>
          </div>
        </DialogTitle>
        {/* <Modal slug="my-modal" > */}
        <DialogContent>
          <div className={classes.previewModalContent} key={id}>
            <img src={image} alt={name} />
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
      ></button>
    </>
  );
};

export default memo(FaceLessModel);

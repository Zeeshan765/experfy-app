// @ts-ignore
import React, { memo, useState, useEffect, useContext } from 'react';
import { useModal } from '@faceless-ui/modal';
import { Modal, ModalToggler } from '@faceless-ui/modal';
import { Dialog, DialogContent, DialogTitle, Divider, IconButton, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import { useStyles } from './style';
import { Button } from 'payload/components/elements';
import { Context } from '../../Providers/MyProvider';
import { Redirect, useHistory } from 'react-router-dom';

const FaceLessModel = ({ data, templateModelClose }) => {
  const classes = useStyles();
  const { id, name, pageThumnail,pageCode } = data;
  const { setSelectedPageCode } = useContext(Context);
  const history = useHistory();

  const [subModelopen, setSubModelOpen] = useState(false);
  const { toggleModal } = useModal();
  const handleOpen = () => {
    setSubModelOpen(true);
  };
  const handleClose = () => {
    setSubModelOpen(false);
  };
  const createPageHandler = () => {
    history.replace(`page-builder/${id}`);
    setSelectedPageCode(pageCode);
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
        <DialogTitle sx={{ boxShadow: 3 }} className={classes.previewModalHeader}> 
          <Typography variant='h4'
            onClick={handleClose}
          >
            <ArrowBackIosIcon />
            Back to page
          </Typography>
          <div className={classes.previewModalHeaderActions}>
            <Button
              type="button"
              onClick={createPageHandler}
              buttonStyle="primary"
            >
              Create Page
            </Button>
            <Divider orientation="vertical" flexItem />
            <IconButton
              onClick={handleClose}
              className={classes.previewModalHeaderClose}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent>
          <div className={classes.previewModalContent} key={id}>
            <img src={pageThumnail} alt={name} />
          </div>
        </DialogContent>
      </Dialog>
      <button
        onClick={handleOpen}
        type="button"
        className={classes.previewButton}
      ></button>
    </>
  );
};

export default memo(FaceLessModel);

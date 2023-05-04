// @ts-ignore
import React, { memo, useState, useEffect, useContext } from 'react';
import { useModal } from '@faceless-ui/modal';
import { Modal, ModalToggler } from '@faceless-ui/modal';
import { Dialog, DialogContent, DialogTitle, Divider, IconButton, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CloseIcon from '@mui/icons-material/Close';
import { useStyles } from './style';


const SectionModel = (
    { modelIsOPen,setName,handleScratchSave}
    ) => {
  const classes = useStyles();


  const [subModelopen, setSubModelOpen] = useState(false);
 
  const { toggleModal } = useModal();
  const handleOpen = () => {
    setSubModelOpen(true);
  };
  const handleClose = () => {
    setSubModelOpen(false);
  };
  const createPageHandler = () => {
    // setSelectedPageCode(pageCode);
    handleClose();
    // templateModelClose();
  };
  useEffect(()=>{
    if(modelIsOPen){    
        setSubModelOpen(true);}
  },[modelIsOPen])

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
          
          <div className={classes.previewModalHeaderActions}>
            <label htmlFor="">Enter Section Name</label>
            
            <input type="text"  onChange={e => setName(e.target.value)} />
            
          </div>
          <button onClick={handleScratchSave}>Save</button>
        </DialogTitle>
        
        {/* <DialogContent>
          <div className={classes.previewModalContent} key={id}>
            <img src={pageThumnail} alt={name} />
          </div>
        </DialogContent> */}
      </Dialog>
     
    </>
  );
};

export default memo(SectionModel);

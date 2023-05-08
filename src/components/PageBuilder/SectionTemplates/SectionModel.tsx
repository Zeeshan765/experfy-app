// // @ts-ignore
// import React, { memo, useState, useEffect, useContext } from 'react';
// import { useModal } from '@faceless-ui/modal';
// import { Modal, ModalToggler } from '@faceless-ui/modal';
// import { Dialog, DialogContent, DialogTitle, Divider, IconButton, Typography } from '@mui/material';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import CloseIcon from '@mui/icons-material/Close';
// import { useStyles } from './style';


// const SectionModel = (
//     { modelIsOPen,setName,handleScratchSave}
//     ) => {
//   const classes = useStyles();


//   const [subModelopen, setSubModelOpen] = useState(false);
 
//   const { toggleModal } = useModal();
//   const handleOpen = () => {
//     setSubModelOpen(true);
//   };
//   const handleClose = () => {
//     setSubModelOpen(false);
//   };
//   const createPageHandler = () => {
//     // setSelectedPageCode(pageCode);
//     handleClose();
//     // templateModelClose();
//   };
//   useEffect(()=>{
//     if(modelIsOPen){    
//         setSubModelOpen(true);}
//   },[modelIsOPen])

//   return (
//     <>
//       <Dialog
//         open={subModelopen}
//         onClose={handleClose}
//         aria-labelledby="customized-dialog-title"
//         maxWidth="md"
//         fullWidth={true}
//         className={classes.previewModal}
//       >
//         <DialogTitle sx={{ boxShadow: 3 }} className={classes.previewModalHeader}> 
          
//           <div className={classes.previewModalHeaderActions}>
//             <label htmlFor="">Enter Section Name</label>
            
//             <input type="text"  onChange={e => setName(e.target.value)} />
            
//           </div>
//           <div><button onClick={handleScratchSave}>Save</button></div>
          
//         </DialogTitle>
        
//         {/* <DialogContent>
//           <div className={classes.previewModalContent} key={id}>
//             <img src={pageThumnail} alt={name} />
//           </div>
//         </DialogContent> */}
//       </Dialog>
     
//     </>
//   );
// };

// export default memo(SectionModel);























import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./style.css";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function SectionModel({modelIsOPen,handleScratchSave,setName}) {
 
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <div>
     
      <Modal
        open={modelIsOPen}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div  className="main-input-div">
          <label className="label">Enter Section Name</label><br/>
            
            <input type="text"  onChange={e => setName(e.target.value)} />
          </div>
                  
        <div className="btn-div"><button onClick={handleScratchSave}>Save</button></div>
        </Box>
      </Modal>
    </div>
  );
}












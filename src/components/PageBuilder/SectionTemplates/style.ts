import { makeStyles } from '@mui/styles';
// import PreviewIcon from '../../assets/images/preview.svg';
// import '../../styles/scss/index.scss';

export const useStyles = makeStyles({
  previewButton: {
    display: 'inline-block',
    border: 'none',
    boxShadow: 'none',
    width: '32px',
    height: '24px',
    padding: 0,
    // backgroundImage: `url(${PreviewIcon})`,
    backgroundPosition: 'left center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
  },
  previewModal: {
    '& .MuiBackdrop-root': {
      // backgroundColor: 'rgba(33, 52, 86, .8) !important',
    },
    '& .MuiDialogTitle-root': {
      borderBottom: '1px solid #d1dbe3',
    },
    '& .MuiDialogContent-root': {
      backgroundColor: '#f9f9f9',
    },
  },
  previewModalHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& .MuiTypography-h4': {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'proxima-nova',
      fontWeight: 500,
      fontSize: '18px',
      color: '#4a5162 !important',
      cursor: 'pointer',
      userSelect: 'none',
    }
  },
  previewModalHeaderContent: {
    flex: 1,
  },
  previewModalHeaderActions: {
    display: 'flex',
    alignItems: 'center',
    '& button': {
      margin: '0 1rem',
    },
    '& > *': {
      '&:last-child': {
        marginRight: '0 !important',
        marginLeft: '.5rem'
      }
    }
  },
  previewModalHeaderBack: {
    display: 'flex',
    alignItems: 'center',
    fontFamily: 'proxima-nova',
    fontWeight: 500,
    fontSize: '18px',
    color: '#4a5162 !important',
    textDecoration: 'none !important',
    cursor: 'pointer',
    userSelect: 'none',
  },
  previewModalHeaderClose: {
    display: 'inline-block',
    textDecoration: 'none',
    cursor: 'pointer',
    userSelect: 'none',
  },
  previewModalContent: {
    padding: '24px 0 4px',
    '& img': {
      width: '100%',
    },
  },
});

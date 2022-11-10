import { makeStyles } from '@mui/styles';




export const useStyles = makeStyles({
    fileUploadLabel: {
      display: 'inline-block',
      fontSize: '1.0625rem',
      fontWeight: 500,
      padding: '0 0 .5rem',
      color: '#4a5162',
    },  
    fileUploadNote: {
      display: 'block',
      fontSize: '.9375rem',
      padding: '0 0 .5rem',
    },
    fileUploadBox: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      border: '2px dashed #4ba4da',
      borderRadius: '.25rem',
      padding: '1rem .5rem',
      minHeight: '7.5rem',
    },
    fileUploadBoxIcon: {
      marginBottom: '.5rem',
    },
    fileUploadBoxText: {
      fontSize: '.875rem',
      color: '#a1a5ad',
      textAlign: 'center',
      '& .MuiButton-root': {
        fontSize: '.875rem',
        padding: '0 .1875rem',
        minWidth: '0',
      }
    },
  })
  
import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles({
    settingsOption: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '.5rem 0',
      '& p': {
        fontSize: '1.0625rem',
      },
      '& .MuiFormControl-root': {
        minWidth: '11.25rem',
      }
    },
    actionGroup: {
      border: '1px solid #d1dbe3',
      borderRadius: '.25rem',
      '& .ColorPicker-MuiButton-root': {
        minWidth: '0 !important',
        width: '1.25rem !important',
        height: '1.25rem !important',
        margin: '0 !important',
        boxShadow: 'none',
        border: '1px solid #d1dbe3',
        borderRadius: '.25rem !important',
      },
      '& .MuiButtonBase-root': {
        padding: '.25rem .5rem',
        borderRadius: '0',
        borderRight: '1px solid #d1dbe3',
        '&:first-child': {
          borderRadius: '.25rem 0 0 .25rem',
        },
        '&:last-child': {
          borderRight: 'none',
          borderRadius: '0 .25rem .25rem 0',
        },
        '&:hover': {
          color: '#fff',
          backgroundColor: '#4ba4da',
  
          '& .ColorPicker-MuiButton-root': {
            borderColor: '#fff',
          }
        }
      }
    },
    editPopover: {
      '& .MuiPaper-root': {
        width: '21rem !important',
        border: '1px solid #d1dbe3',
        margin: '.25rem 0 0 !important',
      }
    },
    editPopoverLabel: {
      fontSize: '1rem',
      fontWeight: 500,
      textTransform: 'uppercase',
      color: '#90959f',
      marginBottom: '.5rem'
    }
  }); 
  
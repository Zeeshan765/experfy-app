import { makeStyles } from '@mui/styles';



export const useStyles = makeStyles({
    formInput: {
      margin: '.25rem 0 !important',
    },
    formInputLabel: {  
      display: 'inline-block',
      fontSize: '1.0625rem',
      fontWeight: 400,
      padding: '0 0 .125rem',
      color: '#4a5162',
    }, 
    formInputInput: {
      '& .MuiOutlinedInput-root': {
        borderRadius: '.25rem 0 0 .25rem !important'
      },
      '& .MuiIconButton-root': {
        width: '2.25rem',
        borderTop: '1px solid #d1dbe3',
        borderBottom: '1px solid #d1dbe3',
        borderRight: '1px solid #d1dbe3',
        borderRadius: '0 !important',
        '&:last-child': {
          borderRadius: '0 .25rem .25rem 0 !important'
        }
      }
    },
    formInputCheckboxes: {
      padding: '.5rem 0' 
    },
    formInputCustomAttributes: {
      '& .MuiTypography-root': {
        fontSize: '.875rem !important',
        fontStyle: 'italic !important',
        marginTop: '.75rem !important',
        color: '#90959f !important',
        lineHeight: '1.25 !important'
      }  
    }
  })
  
import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles({
    formLink: {
      margin: '.75rem 0 !important',
    },
    formLinkLabel: {  
      display: 'inline-block',
      fontSize: '1.0625rem',
      fontWeight: 400,
      padding: '0 0 .125rem',
      color: '#4a5162',
    }, 
    formLinkInput: {
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
    formLinkCheckboxes: {
      padding: '.5rem 0' 
    }
  })
  
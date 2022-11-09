import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles({
    formLocationInput: {
      margin: '.25rem 0 !important',
    },
    formLocationHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    formLocationInputLabel: {  
      display: 'inline-block',
      fontSize: '1.0625rem',
      fontWeight: 400,
      padding: '0 0 .125rem',
      color: '#4a5162',
    },
    formLocationInputToggle: {
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: '.75rem',
      fontWeight: 500,
      textTransform: 'uppercase',
      color: '#7c8189',
      cursor: 'pointer',
      userSelect: 'none',
      '& img': {
        marginLeft: '.25rem'
      }
    }
  })
  
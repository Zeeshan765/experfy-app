import { makeStyles } from '@mui/styles';



export const useStyles = makeStyles({
    iconGroup: {
      flexDirection: 'row !important',
      justifyContent: 'space-between !important',
      alignItems: 'center !important',
      margin: '.375rem 0 !important',
    },
    iconGroupLabel: {  
      display: 'inline-block',
      fontSize: '1.0625rem',
      fontWeight: 400,
      color: '#4a5162',
    },  
    iconGroupButtons: {
      display: 'flex',
      alignItems: 'center',
      width: '11.25rem',
      '& .MuiIconButton-root': {
        flex: 1,
        borderTop: '1px solid #d1dbe3',
        borderBottom: '1px solid #d1dbe3',
        borderLeft: '1px solid #d1dbe3',
        borderRadius: '0 !important',
        height: '2.75rem',
        '&:first-child': {
          borderTopLeftRadius: '.25rem !important',
          borderBottomLeftRadius: '.25rem !important',
        },
        '&:last-child': {
          borderTopRightRadius: '.25rem !important',
          borderBottomRightRadius: '.25rem !important',
          borderRight: '1px solid #d1dbe3'
        }
      }
    },
  })
  
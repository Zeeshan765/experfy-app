import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles({
    layoutGroup: {
      flexDirection: 'row !important',
      justifyContent: 'space-between !important',
      alignItems: 'center !important',
      margin: '.375rem 0 !important',
    },
    layoutGroupLabel: {  
      display: 'inline-block',
      fontSize: '1.0625rem',
      fontWeight: 400,
      color: '#4a5162',
    },
    layoutGroupButtons: {
      width: '7.5rem',
      '& .MuiToggleButton-root': {
        flex: '1',
        padding: '.5625rem .6875rem',
        '& .MuiSvgIcon-root': {
          fontSize: '1.5rem',
        },
        '&.Mui-selected': {
          alignmentColor: '#fff',
        }
      }
    },
  })
  



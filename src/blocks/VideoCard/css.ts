import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles({
    videoCard: {
      boxShadow: '0 3px 6px rgba(0 0 0 / 16%) !important',
      overflow: 'visible !important',
      border: '1px solid #d1dbe3',
      '& .MuiCardHeader-root': {
        padding: '.75rem .75rem .375rem',
      },
      '& .MuiCardContent-root': {
        padding: '.375rem .75rem .75rem !important',
      },
      '& .MuiCheckbox-root': {
        padding: '0 !important'
      }
    },
    videoCardImage: {
      backgroundColor: '#2f3d55',
      width: '100%',
      paddingTop: '50%',
      position: 'relative',
      marginBottom: '.75rem',
    },
    videoCardImageIcon: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: '-1.375rem !important',
      marginLeft: '-1.375rem !important',
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '2.75rem',
      height: '2.75rem',
      backgroundColor: '#fff',
      borderRadius: '50%',
      color: '#2f3d55',
    },
    videoCardTitle: {
      display: 'block',
      textAlign: 'center',
      width: '100%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }
  })
  
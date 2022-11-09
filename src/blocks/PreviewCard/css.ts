import { makeStyles } from '@mui/styles';



export const useStyles = makeStyles({
    previewCard: {
      boxShadow: '0 3px 6px rgba(0 0 0 / 16%) !important',
      overflow: 'visible !important',
      border: '1px solid #d1dbe3',
      '& .MuiCardHeader-root': {
        padding: '.75rem .75rem .375rem',
      },
      '& .MuiCardContent-root': {
        padding: '.375rem .75rem .75rem !important',
      },
    },
    previewCardImage: {
      backgroundColor: '#2f3d55',
      width: '100%',
      paddingTop: '50%',
      position: 'relative',
      marginBottom: '.75rem',
    },
    previewCardTitle: {
      display: 'block',
      textAlign: 'center',
      width: '100%',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }
  })
  
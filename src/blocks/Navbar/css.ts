import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles({
    nav: {
      display: 'flex',
      height: '3.5rem',
      backgroundColor: '#222e43',
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      zIndex: '1000'
    },
    navBrand: {
      width: '13.75rem',
      height: '100%',
      padding: '0.75rem 2.5rem 0.5rem 1.5rem',
    },
    navContent: {
      flex: '1',
      display: 'flex',
      justifyContent: 'space-between',
      height: '100%',
      padding: '0 1.5rem 0 0',
      '& img': {
        display: 'block',
        height: '100%',
        width: 'auto',
        maxHeight: '2.25rem',
        maxWidth: '100%',
      }
    },
    navLinksItem: {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      fontSize: '0.9375rem',
      fontWeight: 500,
      textTransform: 'uppercase',
      color: '#f7f7f7 !important',
      cursor: 'pointer',
      padding: '0.125rem 0 0 0',
      marginRight: '2rem !important',
      '& svg': {
        fill: '#4ba4da',
        marginTop: '-.125rem',
      }
    }
  });
  
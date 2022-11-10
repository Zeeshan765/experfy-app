import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  formSlider: {
    '& .MuiOutlinedInput-root': {
      width: '6rem'
    },
    '& .MuiInputLabel-root': {
      display: 'none !important'
    },
    '& legend': {
      display: 'none !important'
    }
  },
  formSliderHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 0 .125rem',
    '& .MuiTypography-root': {
      display: 'inline-block',
      fontSize: '1.0625rem',
      color: '#4a5162',
    },
  },
  formSliderPosition: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& .MuiTypography-root': {
      fontSize: '.675rem !important',
      fontWeight: '500 !important',
      textTransform: 'uppercase',
      opacity: '.5 !important'
    }  
  }  
})

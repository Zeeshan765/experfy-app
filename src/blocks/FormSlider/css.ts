import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  formSlider: {
    '& .MuiOutlinedInput-root': {
      width: '6rem',
    },
    '& .MuiInputLabel-root': {
      display: 'none !important',
    },
    '& legend': {
      display: 'none !important',
    },
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
    '& .MuiToggleButton-root': {
      border: 'none !important',
      padding: '0 .25rem',
      fontSize: '.75rem',
      color: '#a1a5ad',
      '&:hover': {
        color: '#868b95',
        backgroundColor: '#fff',
      },
      '&.Mui-selected': {
        color: '#4a5162',
        backgroundColor: '#fff',
        '&:hover': {
          backgroundColor: '#fff',
        },
      },
    },
  },
});

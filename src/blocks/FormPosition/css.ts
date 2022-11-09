import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  positionGroupLabel: {  
    display: 'inline-block',
    fontSize: '1.0625rem',
    fontWeight: 500,
    padding: '0 0 .25rem',
    color: '#4a5162',
  },  
  positionGroupButtons: {
    width: '100%',
    display: 'grid !important',
    gridTemplateColumns: '1fr 1fr 1fr',
    columnGap: '.375rem',
    rowGap: '.375rem',
    '& .MuiToggleButton-root': {
      border: 'none',
      width: '100%',
      height: '.875rem !important',
      backgroundColor: '#ebebed !important',
      borderRadius: '.25rem !important',
      padding: '0 !important',
      '&.Mui-selected': {
        backgroundColor: '#4ba4da !important'
      }
    }
  },
  positionGroupCurrent: {
    fontSize: '1rem',
    fontWeight: 500
  }
})

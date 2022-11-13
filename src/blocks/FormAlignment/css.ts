import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles({
  alignmentGroup: {
    justifyContent: 'space-between !important',
    alignItems: 'center !important',
    margin: '.375rem 0 !important',
  },
  alignmentGroupLabel: {
    display: 'inline-block',
    fontSize: '1.0625rem',
    fontWeight: 400,
    color: '#4a5162',
  },
  alignmentGroupButtons: {
    width: '11.25rem',
    '& .MuiToggleButton-root': {
      flex: '1',
      '& .MuiSvgIcon-root': {
        fontSize: '1.25rem',
      },
      '&.Mui-selected': {
        alignmentColor: '#fff',
      }
    }
  },
})

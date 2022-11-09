import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles({
    fourSideInput: {
      paddingTop: '1rem !important',
      '&.move-top': {
        marginTop: '-1rem'
      },
      '&.in-rows': {
        paddingTop: '.25rem !important',
      }
    }, 
    fourSideInputFields: {
      flexDirection: 'row !important',
      flexWrap: 'nowrap !important',
      '& .MuiOutlinedInput-root': {
        width: '2.25rem',
        borderRadius: '0 !important',
        '&.Mui-disabled': {
          backgroundColor: '#f1f3f5 !important'
        }
      },
      '& .MuiOutlinedInput-input': {
        paddingLeft: '.25rem !important',
        paddingRight: '.25rem !important',
        textAlign: 'center',
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderRightColor: 'transparent',
      },
      '& .MuiButton-root': {
        paddingLeft: '.5rem !important',
        paddingRight: '.5rem !important',
        width: '2.25rem',
        minWidth: '2.25rem',
        borderRadius: '0 .25rem .25rem 0 !important',
      },
      '& .MuiFormControl-root': {
        minWidth: '0 !important',
        '&:first-of-type .MuiOutlinedInput-root': {
          borderRadius: '.25rem 0 0 .25rem !important',
        }
      }, 
      '&.in-rows': {
        '& .MuiOutlinedInput-root': {
          width: 'auto',
          flex: '1',
          borderRadius: '0 !important',
        },
      } 
    },
    fourSideInputLabels: {
      display: 'flex',
      '& span': {
        display: 'inline-block',
        padding: '.125rem 0 0',
        fontSize: '.5625rem',
        fontWeight: 500,
        textAlign: 'center',
        textTransform: 'uppercase',
        color: '#a1a5ad',
        width: '2.25rem'
      },
      '&.in-rows': {
        paddingRight: '2.25rem',
        '& span': {
          width: 'auto',
          flex: '1',
        },
      } 
    } 
  })
  
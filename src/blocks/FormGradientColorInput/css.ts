import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    formGradientColor: {
      position: 'relative',
      margin: '.75rem 0 0',
      "& p": {
        display: "inline-block",
        fontSize: "1.0625rem",
        fontWeight: 500,
        padding: "0 0 .25rem",
        color: "#4a5162",
      },
    },
    formGradientColorGroup: {
      margin: '0 0 .75rem'
    },
    formGradientColorControls: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      '& .MuiLink-root': {
        flex: '1',
        display: 'inline-flex',
        alignItems: 'center',
        border: '1px solid rgba(0, 0, 0, 0.23)',
        padding: '.5rem .75rem',
        height: '2.5rem',
        color: '#4a5162',
        cursor: 'pointer',
        userSelect: 'none'
      },
      '& .MuiIconButton-root': {
        borderRight: '1px solid rgba(0, 0, 0, 0.23)',
        borderTop: '1px solid rgba(0, 0, 0, 0.23)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.23)',
        borderRadius: '0',
        height: '2.5rem',
        width: '2.75rem',
        '& .MuiSvgIcon-root': {
          fontSize: '1.25rem'
        }
      }
    },
    formGradientColorMenu: {
      padding: '.25rem .5rem',
      borderBottom: '1px solid rgba(0, 0, 0, 0.23)',
      borderRight: '1px solid rgba(0, 0, 0, 0.23)',
      borderLeft: '1px solid rgba(0, 0, 0, 0.23)',
    },
    formGradientColorMenuInner: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '.5rem 0',
      '& p': {
        fontSize: '.9375rem',
        fontWeight: '400',
        flex: '1'
      },
    },
  });
  
import { createTheme } from '@mui/material/styles';
import ProximaNovaBoldTff from './assets/fonts/proxima-nova/proximanova-bold-webfont.ttf';
import ProximaNovaSemiboldTff from './assets/fonts/proxima-nova/proximanova-semibold-webfont.ttf';
import ProximaNovaTff from'./assets/fonts/proxima-nova/proximanova-regular-webfont.ttf';

const theme = createTheme({
  palette: {
    info: {
      main: '#a0a8b7',
      color: '#ffffff',
    },
    primary: {
      main: '#4ba4da',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#ebebed',
      color: '#222e43',
    },
    success: {
      main: '#50ae81',
      contrastText: '#ffffff'
    }
  },
  typography: {
    fontFamily: [
      'ProximaNova',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 700,
      fontSize: '2rem',
      color: '#4a5162',
    },
    h2: {
      fontWeight: 700,
      fontSize: '1.75rem',
      color: '#4a5162'
    },
    h3: {
      fontWeight: 500,
      fontSize: '1.5rem',
      color: '#4a5162',
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.25rem',
      color: '#4a5162',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.125rem',
      color: '#4a5162',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
      color: '#4a5162',
    },
    body1: {
      color: '#4a5162',
    },
    button: {
      fontSize: '1.125rem',
      textTransform: 'none',
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'ProximaNova';
          font-style: normal;
          font-weight: 400;
          src: url(${ProximaNovaTff}) format('truetype');
        }
        
        @font-face {
          font-family: 'ProximaNova';
          font-style: normal;
          font-weight: 500;
          src: url(${ProximaNovaSemiboldTff}) format('truetype');
        }

        @font-face {
          font-family: 'ProximaNova';
          font-style: normal;
          font-weight: 700;
          src: url(${ProximaNovaBoldTff}) format('truetype');
        }
        `,
        html: {
          outerHeight: '100%',
          boxSizing: 'border-box',
        },
        body: {
          outerHeight: '100%',
          margin: '0',
          padding: '0',
          overflow: 'auto',
          backgroundColor: '#F9F9F9',
          fontWeight: 400,
        },
        root: {
          outerHeight: '100%',
        },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: '7.5rem',
          boxShadow: 'none',
        },
        outlined: {
          padding: '7px 23px',
        },
        contained: {
          padding: '8px 24px',
        },
        outlinedInfo: {
          color: '#4a5162',
        }
      }
    },  
    MuiCheckbox: {
      styleOverrides: {
        root: {

        }
      }  
    }, 
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: '16px 24px 16px 32px',
        }
      }  
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '20px 32px',
        }
      }
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: '20px 32px',
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          fontSize: '1.0625rem',
        }
      }  
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#90959f',
        }
      }    
    },
    // MuiInputBase: {
    //   styleOverrides: {
    //     sizeSmall: {
    //       padding: '10.5px 12px',
    //     }
    //   }    
    // },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none'
        }
      }  
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          // padding: '12.5px 14px',
        }
      }    
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          width: '20rem !important',
          boxShadow: '0 3px 6px rgba(0, 0, 0, .15)',
        }
      }  
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
        }
      }  
    },
    MuiSlider: {
      styleOverrides: {
        rail: {
          backgroundColor: '#d1dbe3 !important',
          opacity: '1 !important'
        }
      }  
    },
    MuiTableCell: {
      styleOverrides: {
        body: {
          fontSize: '1rem',
        },
      }  
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          border: '1px solid #d1dbe3',
          borderRadius: '.25rem',
        }
      }  
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: '1.25rem',
          paddingLeft: '0',
          paddingRight: '0',
          marginRight: '3rem',
          minWidth: '4rem',
          color: '#4ba4da',
          '&.Mui-selected': {
            color: '#4a5162',
          }
        },

      }    
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: '.25rem',
          borderRadius: '.125rem',
          backgroundColor: '#4a5162',
        }
      }  
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-body': {
            backgroundColor: '#fff',
          }
        }  
      }  
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-head': {
            backgroundColor: '#f1f3f5',
            textTransform: 'uppercase',
          }
        }  
      }  
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
        }
      }    
    },
  }
});

export default theme;

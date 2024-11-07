// ** MUI Imports 
import { Theme } from '@mui/material/styles' 
 
const form = (theme: Theme) => { 
  return { 
    MuiFormControlLabel: { 
      styleOverrides: { 
        root: { 
          margin: 0, 
          '.MuiFormControlLabel-label': { 
            fontSize: '1.2rem', 
            color: theme.palette.primary.main, 
          }, 
        }, 
      }, 
    }, 
    MuiFormHelperText: { 
      styleOverrides: { 
        root: { 
          fontSize: '12px', 
          lineHeight: '1.5em', 
        }, 
      }, 
    }, 
  } 
} 
 
export default form
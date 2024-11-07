import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3D4B5C',
      light: '#4F5E71',
      dark: '#2C3A4B',
    },
    secondary: {
      main: '#2B2F35',
      light: '#383E46',
      dark: '#1E2227',
    },
    background: {
      default: '#1C1F24',
      paper: '#2B2F35',
    },
    text: {
      primary: '#E0E3E7',
      secondary: '#B0B8C1',
    },
    success: {
      main: '#4CAF50',
      light: '#81C784',
    },
    error: {
      main: '#EF5350',
      light: '#E57373',
    },
  },
}); 
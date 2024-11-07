import { createTheme } from '@mui/material/styles';

// Using Reaxy's BLUE_DARK theme
const themeColors = {
  primary: '#0277bd',
  primaryLight: '#58A7D4',
  primaryDark: '#00539B',
  secondary: '#EF6C00',
  secondaryLight: '#FF9800',
  secondaryDark: '#9E4B00',
  paper: '#2F3349',
  default: '#25293C',
  stroke: '#0277bd',
};

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: themeColors.primary,
      light: themeColors.primaryLight,
      dark: themeColors.primaryDark,
    },
    secondary: {
      main: themeColors.secondary,
      light: themeColors.secondaryLight,
      dark: themeColors.secondaryDark,
    },
    background: {
      paper: themeColors.paper,
      default: themeColors.default,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)',
        },
      },
    },
  },
}); 
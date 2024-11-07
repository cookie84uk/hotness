import { Box, styled } from '@mui/material';

const MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: themeConfig.dark.default,
  minHeight: '100vh',
  padding: theme.spacing(2),
})); 
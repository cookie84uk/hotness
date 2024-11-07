import { Box, Typography, styled } from '@mui/material';

// Styled components based on Reaxy's design
const TokenCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1.5),
  backgroundColor: themeConfig.dark.paper,
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&:hover': {
    backgroundColor: themeConfig.dark.default,
  },
}));

const TokenName = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  fontWeight: 700,
  color: '#FFFFFF',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
})); 
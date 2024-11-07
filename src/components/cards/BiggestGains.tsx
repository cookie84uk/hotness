import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const BiggestGains = () => {
  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <TrendingUpIcon sx={{ color: 'success.main', mr: 1 }} />
        <Typography variant="h6">Biggest Gains</Typography>
      </Box>
      <Typography variant="body2" color="text.secondary">
        24h Change
      </Typography>
    </Paper>
  );
};

export default BiggestGains; 
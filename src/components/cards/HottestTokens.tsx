import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

const HottestTokens = () => {
  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <LocalFireDepartmentIcon sx={{ color: 'error.main', mr: 1 }} />
        <Typography variant="h6">Hottest Tokens</Typography>
      </Box>
      <Typography variant="body2" color="text.secondary">
        Last 24 hours
      </Typography>
    </Paper>
  );
};

export default HottestTokens; 
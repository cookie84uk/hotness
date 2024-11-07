import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

const NewestTokens = () => {
  return (
    <Paper sx={{ p: 2, height: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <NewReleasesIcon sx={{ color: 'primary.main', mr: 1 }} />
        <Typography variant="h6">Newest Tokens</Typography>
      </Box>
      <Typography variant="body2" color="text.secondary">
        Recently listed
      </Typography>
    </Paper>
  );
};

export default NewestTokens; 
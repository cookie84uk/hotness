import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { TrendingUp, TrendingDown, ShowChart, Assessment } from '@mui/icons-material';

export const MarketOverview = () => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Market Overview
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
            <TrendingUp sx={{ mr: 2, color: 'success.main' }} />
            <Box>
              <Typography variant="body2" color="text.secondary">
                Top Gainer
              </Typography>
              <Typography variant="h6">
                BONK +125%
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
            <TrendingDown sx={{ mr: 2, color: 'error.main' }} />
            <Box>
              <Typography variant="body2" color="text.secondary">
                Top Loser
              </Typography>
              <Typography variant="h6">
                DUST -45%
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
            <ShowChart sx={{ mr: 2, color: 'info.main' }} />
            <Box>
              <Typography variant="body2" color="text.secondary">
                24h Volume
              </Typography>
              <Typography variant="h6">
                $1.2M
              </Typography>
            </Box>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
            <Assessment sx={{ mr: 2, color: 'warning.main' }} />
            <Box>
              <Typography variant="body2" color="text.secondary">
                Hot Tokens
              </Typography>
              <Typography variant="h6">
                12
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}; 
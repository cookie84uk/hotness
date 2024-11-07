import React from 'react';
import { Grid } from '@mui/material';
import MainCard from 'components/MainCard';
import { HeatMap, SignalList, ScoreGauge } from 'your-components';

const HotnessDashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <MainCard>
          <ScoreGauge />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={8}>
        <MainCard>
          <HeatMap />
        </MainCard>
      </Grid>
      <Grid item xs={12}>
        <MainCard>
          <SignalList />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default HotnessDashboard; 
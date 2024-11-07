import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import MainCard from 'components/MainCard';
import HeatMap from '../../../components/visualizations/HeatMap';
import SignalList from '../../../components/visualizations/SignalList';
import ScoreGauge from '../../../components/visualizations/ScoreGauge';
import socketService from '../../../services/socketService';
import { Signal } from '../../../types/Signal';

const HotnessDashboard = () => {
  const [signals, setSignals] = useState<Signal[]>([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    socketService.subscribe('newSignal', (data: Signal) => {
      setSignals(prev => [...prev, data].slice(-50));
    });

    socketService.subscribe('scoreUpdate', (newScore: number) => {
      setScore(newScore);
    });

    return () => {
      socketService.unsubscribe('newSignal', () => {});
      socketService.unsubscribe('scoreUpdate', () => {});
    };
  }, []);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <MainCard title="Score">
          <ScoreGauge score={score} />
        </MainCard>
      </Grid>
      <Grid item xs={12} md={8}>
        <MainCard title="Heat Map">
          <HeatMap signals={signals} />
        </MainCard>
      </Grid>
      <Grid item xs={12}>
        <MainCard title="Signal List">
          <SignalList signals={signals} />
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default HotnessDashboard; 
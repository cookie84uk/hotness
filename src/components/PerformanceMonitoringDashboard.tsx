import { useState, useEffect } from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { PerformanceChart } from './PerformanceChart';
import { TradeHistory } from './TradeHistory';
import { PerformanceMetrics } from '../types/common';

export const PerformanceMonitoringDashboard = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    totalTrades: 0,
    winRate: 0,
    profitLoss: 0,
    averageReturn: 0,
    sharpeRatio: 0,
    maxDrawdown: 0
  });

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Portfolio Value',
        data: [],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      }
    ]
  });

  const [trades, setTrades] = useState([]);

  useEffect(() => {
    // Fetch performance data
    const fetchPerformanceData = async () => {
      try {
        // Implement API calls here
        // For now using placeholder data
        setMetrics({
          totalTrades: 150,
          winRate: 65.5,
          profitLoss: 28.4,
          averageReturn: 1.8,
          sharpeRatio: 2.1,
          maxDrawdown: -12.3
        });
      } catch (error) {
        console.error('Error fetching performance data:', error);
      }
    };

    fetchPerformanceData();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid container spacing={3}>
        {/* Metrics Cards */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Total Trades</Typography>
            <Typography variant="h4">{metrics.totalTrades}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Win Rate</Typography>
            <Typography variant="h4">{metrics.winRate}%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Total P/L</Typography>
            <Typography 
              variant="h4" 
              color={metrics.profitLoss >= 0 ? 'success.main' : 'error.main'}
            >
              {metrics.profitLoss >= 0 ? '+' : ''}{metrics.profitLoss}%
            </Typography>
          </Paper>
        </Grid>

        {/* Performance Chart */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <PerformanceChart data={chartData} />
          </Paper>
        </Grid>

        {/* Trade History */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <TradeHistory trades={trades} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}; 
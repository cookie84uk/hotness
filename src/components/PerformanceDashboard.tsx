import { useEffect, useState } from 'react';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Tabs,
  Tab
} from '@mui/material';
import { Line } from 'react-chartjs-2';
import { paperTradingService } from '../services/paperTrading/PaperTradingService';
import { PerformanceTracker } from '../services/analytics/PerformanceTracker';

const performanceTracker = new PerformanceTracker();

export const PerformanceDashboard = () => {
  const [timeframe, setTimeframe] = useState<'hourly' | 'daily' | 'weekly'>('daily');
  const [metrics, setMetrics] = useState<TimeBasedMetrics | null>(null);
  const [trades, setTrades] = useState<PaperTrade[]>([]);

  useEffect(() => {
    // Initial load
    const allTrades = paperTradingService.getAllTrades();
    setTrades(allTrades);
    setMetrics(performanceTracker.calculateMetrics(allTrades));

    // Subscribe to updates
    return paperTradingService.addListener((trade) => {
      setTrades(prev => [...prev, trade]);
      setMetrics(performanceTracker.calculateMetrics([...trades, trade]));
    });
  }, []);

  const currentMetrics = metrics?.[timeframe];

  return (
    <Grid container spacing={3}>
      {/* Timeframe Selection */}
      <Grid item xs={12}>
        <Tabs
          value={timeframe}
          onChange={(_, newValue) => setTimeframe(newValue)}
          centered
        >
          <Tab label="Hourly" value="hourly" />
          <Tab label="Daily" value="daily" />
          <Tab label="Weekly" value="weekly" />
        </Tabs>
      </Grid>

      {/* Key Metrics */}
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Win Rate
            </Typography>
            <Typography variant="h4">
              {(currentMetrics?.winRate * 100).toFixed(1)}%
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Average Profit
            </Typography>
            <Typography variant="h4">
              {currentMetrics?.averageProfit.toFixed(3)} SOL
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={4}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Total Trades
            </Typography>
            <Typography variant="h4">
              {currentMetrics?.totalTrades}
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Performance Chart */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Cumulative Performance
            </Typography>
            <Box height={300}>
              <PerformanceChart trades={trades} timeframe={timeframe} />
            </Box>
          </CardContent>
        </Card>
      </Grid>

      {/* Recent Trades */}
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Recent Trades
            </Typography>
            <TradeHistory trades={trades.slice(0, 10)} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}; 
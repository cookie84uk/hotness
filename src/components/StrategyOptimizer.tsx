import { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Tooltip
} from '@mui/material';
import {
  Save as SaveIcon,
  PlayArrow as PlayIcon,
  Stop as StopIcon,
  Timeline as TimelineIcon
} from '@mui/icons-material';
import { Line } from 'react-chartjs-2';
import { strategyOptimizer } from '../services/optimization/StrategyOptimizer';

export const StrategyOptimizer = () => {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<OptimizationResult[]>([]);
  const [selectedResult, setSelectedResult] = useState<OptimizationResult | null>(null);

  const parameters: OptimizationParameter[] = [
    {
      name: 'entryThreshold',
      min: 70,
      max: 95,
      step: 1,
      current: 80
    },
    {
      name: 'stopLossPercent',
      min: 1,
      max: 10,
      step: 0.5,
      current: 5
    },
    {
      name: 'takeProfitPercent',
      min: 2,
      max: 20,
      step: 0.5,
      current: 10
    },
    {
      name: 'positionSizePercent',
      min: 1,
      max: 10,
      step: 0.5,
      current: 2
    },
    {
      name: 'maxConcurrentTrades',
      min: 1,
      max: 5,
      step: 1,
      current: 3
    }
  ];

  const handleStartOptimization = async () => {
    setIsOptimizing(true);
    setProgress(0);
    setResults([]);

    try {
      const optimizationResults = await strategyOptimizer.optimizeStrategy(
        parameters,
        async (params) => {
          // Evaluation function that returns fitness score
          const backtest = await backtestService.runBacktest({
            ...params,
            startTime: Date.now() - (30 * 24 * 60 * 60 * 1000), // Last 30 days
            endTime: Date.now()
          });

          // Calculate fitness score based on multiple metrics
          return (
            backtest.totalProfit * 0.4 +
            (1 - backtest.maxDrawdown) * 0.3 +
            backtest.sharpeRatio * 0.3
          );
        },
        50, // generations
        30  // population size
      );

      setResults(optimizationResults);
    } catch (error) {
      console.error('Optimization failed:', error);
    }

    setIsOptimizing(false);
  };

  const handleSaveStrategy = async (result: OptimizationResult) => {
    try {
      await strategyService.saveStrategy({
        name: `Optimized Strategy ${new Date().toISOString()}`,
        parameters: result.parameters,
        metrics: result.metrics
      });
    } catch (error) {
      console.error('Failed to save strategy:', error);
    }
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5">Strategy Optimizer</Typography>
        <Button
          variant="contained"
          startIcon={isOptimizing ? <StopIcon /> : <PlayIcon />}
          onClick={handleStartOptimization}
          disabled={isOptimizing}
        >
          {isOptimizing ? 'Optimizing...' : 'Start Optimization'}
        </Button>
      </Box>

      <Grid container spacing={3}>
        {/* Parameters Configuration */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Parameters</Typography>
              <Table size="small">
                <TableBody>
                  {parameters.map((param) => (
                    <TableRow key={param.name}>
                      <TableCell>{param.name}</TableCell>
                      <TableCell align="right">
                        {param.min} - {param.max} (step: {param.step})
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grid>

        {/* Results */}
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Optimization Results</Typography>
              {isOptimizing ? (
                <Box display="flex" alignItems="center" gap={2}>
                  <CircularProgress size={24} />
                  <Typography>
                    Progress: {progress.toFixed(1)}%
                  </Typography>
                </Box>
              ) : results.length > 0 ? (
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Generation</TableCell>
                      <TableCell>Expected Value</TableCell>
                      <TableCell>Sharpe Ratio</TableCell>
                      <TableCell>Max Drawdown</TableCell>
                      <TableCell>Win Rate</TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {results.map((result, index) => (
                      <TableRow 
                        key={index}
                        selected={selectedResult === result}
                        onClick={() => setSelectedResult(result)}
                        sx={{ cursor: 'pointer' }}
                      >
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{result.metrics.expectedValue.toFixed(2)}</TableCell>
                        <TableCell>{result.metrics.sharpeRatio.toFixed(2)}</TableCell>
                        <TableCell>{(result.metrics.maxDrawdown * 100).toFixed(1)}%</TableCell>
                        <TableCell>{(result.metrics.winRate * 100).toFixed(1)}%</TableCell>
                        <TableCell>
                          <IconButton onClick={() => handleSaveStrategy(result)}>
                            <SaveIcon />
                          </IconButton>
                          <IconButton onClick={() => setSelectedResult(result)}>
                            <TimelineIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <Typography color="textSecondary">
                  No optimization results yet. Click "Start Optimization" to begin.
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* Selected Result Details */}
        {selectedResult && (
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>Strategy Details</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle1" gutterBottom>Parameters</Typography>
                    {Object.entries(selectedResult.parameters).map(([key, value]) => (
                      <Box key={key} display="flex" justifyContent="space-between" mb={1}>
                        <Typography>{key}:</Typography>
                        <Typography>{value}</Typography>
                      </Box>
                    ))}
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography variant="subtitle1" gutterBottom>Performance Metrics</Typography>
                    <Box display="flex" flexWrap="wrap" gap={1}>
                      {Object.entries(selectedResult.metrics).map(([key, value]) => (
                        <Chip
                          key={key}
                          label={`${key}: ${typeof value === 'number' ? value.toFixed(2) : value}`}
                          color="primary"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}; 
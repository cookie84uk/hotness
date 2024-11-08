import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Slider,
  TextField,
  Button,
  CircularProgress
} from '@mui/material';
import { Line } from 'react-chartjs-2';
import { monteCarloSimulation } from '../services/simulation/MonteCarloSimulation';

export const MonteCarloSimulator = () => {
  const [config, setConfig] = useState({
    initialBalance: 100,
    numSimulations: 1000,
    numTrades: 100,
    winRate: 0.55,
    averageWin: 0.02,
    averageLoss: 0.01,
    maxDrawdown: 0.25,
    positionSizing: 0.02
  });

  const [results, setResults] = useState<SimulationResult | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const handleSimulate = async () => {
    setIsSimulating(true);
    try {
      const simResults = await monteCarloSimulation.runSimulation(config);
      setResults(simResults);
    } catch (error) {
      console.error('Simulation failed:', error);
    }
    setIsSimulating(false);
  };

  const getChartData = () => {
    if (!results) return null;

    const sortedBalances = [...results.finalBalances].sort((a, b) => a - b);
    const percentiles = sortedBalances.map((_, index) => 
      (index / sortedBalances.length) * 100
    );

    return {
      labels: percentiles,
      datasets: [{
        label: 'Final Balance Distribution',
        data: sortedBalances,
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false
      }]
    };
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>Monte Carlo Simulator</Typography>

      <Grid container spacing={3}>
        {/* Configuration Panel */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Simulation Parameters</Typography>

              <Box mb={2}>
                <Typography gutterBottom>Initial Balance (SOL)</Typography>
                <TextField
                  type="number"
                  value={config.initialBalance}
                  onChange={(e) => setConfig({
                    ...config,
                    initialBalance: Number(e.target.value)
                  })}
                  fullWidth
                />
              </Box>

              <Box mb={2}>
                <Typography gutterBottom>Win Rate (%)</Typography>
                <Slider
                  value={config.winRate * 100}
                  onChange={(_, value) => setConfig({
                    ...config,
                    winRate: Number(value) / 100
                  })}
                  min={30}
                  max={70}
                  step={1}
                  valueLabelDisplay="auto"
                />
              </Box>

              <Box mb={2}>
                <Typography gutterBottom>Average Win (%)</Typography>
                <Slider
                  value={config.averageWin * 100}
                  onChange={(_, value) => setConfig({
                    ...config,
                    averageWin: Number(value) / 100
                  })}
                  min={0.5}
                  max={5}
                  step={0.1}
                  valueLabelDisplay="auto"
                />
              </Box>

              <Box mb={2}>
                <Typography gutterBottom>Average Loss (%)</Typography>
                <Slider
                  value={config.averageLoss * 100}
                  onChange={(_, value) => setConfig({
                    ...config,
                    averageLoss: Number(value) / 100
                  })}
                  min={0.5}
                  max={5}
                  step={0.1}
                  valueLabelDisplay="auto"
                />
              </Box>

              <Box mb={2}>
                <Typography gutterBottom>Position Size (%)</Typography>
                <Slider
                  value={config.positionSizing * 100}
                  onChange={(_, value) => setConfig({
                    ...config,
                    positionSizing: Number(value) / 100
                  })}
                  min={1}
                  max={10}
                  step={0.5}
                  valueLabelDisplay="auto"
                />
              </Box>

              <Button
                variant="contained"
                onClick={handleSimulate}
                disabled={isSimulating}
                fullWidth
              >
                {isSimulating ? <CircularProgress size={24} /> : 'Run Simulation'}
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Results Panel */}
        <Grid item xs={12} md={8}>
          {results && (
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>Results Distribution</Typography>
                    <Box height={300}>
                      <Line
                        data={getChartData()!}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          scales: {
                            y: {
                              beginAtZero: true,
                              title: {
                                display: true,
                                text: 'Final Balance (SOL)'
                              }
                            },
                            x: {
                              title: {
                                display: true,
                                text: 'Percentile'
                              }
                            }
                          }
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>Key Metrics</Typography>
                    <Typography>
                      Expected Value: {results.metrics.expectedValue.toFixed(2)} SOL
                    </Typography>
                    <Typography>
                      95% Confidence: {results.metrics.confidence95[0].toFixed(2)} - {results.metrics.confidence95[1].toFixed(2)} SOL
                    </Typography>
                    <Typography>
                      Max Drawdown: {(results.metrics.maxDrawdown * 100).toFixed(1)}%
                    </Typography>
                    <Typography>
                      Success Rate: {(results.metrics.successRate * 100).toFixed(1)}%
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>Risk Analysis</Typography>
                    <Typography>
                      Profit Factor: {results.profitFactors[Math.floor(results.profitFactors.length * 0.5)].toFixed(2)}
                    </Typography>
                    <Typography>
                      Actual Win Rate: {(results.winRates[Math.floor(results.winRates.length * 0.5)] * 100).toFixed(1)}%
                    </Typography>
                    <Typography>
                      Risk of Ruin: {(results.finalBalances.filter(b => b <= 0).length / results.finalBalances.length * 100).toFixed(2)}%
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}; 
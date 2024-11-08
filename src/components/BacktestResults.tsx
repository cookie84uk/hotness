import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { BacktestResult } from '../types/backtest';
import { calculateEquityCurve, calculateMonthlyReturns } from '../utils/backtestCalculations';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { TradeList } from './TradeList';

interface BacktestResultsProps {
    results: BacktestResult;
}

const BacktestResults: React.FC<BacktestResultsProps> = ({ results }) => {
    const equityCurve = calculateEquityCurve(results);
    const monthlyReturns = calculateMonthlyReturns(results);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h4">Backtest Results</Typography>
            </Grid>

            <Grid item xs={12} md={6}>
                <Paper sx={{ p: 2 }}>
                    <Typography variant="h6">Performance Metrics</Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Typography>Total Trades: {results.metrics.totalTrades}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>Win Rate: {(results.metrics.winRate * 100).toFixed(2)}%</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>Profit Factor: {results.metrics.profitFactor.toFixed(2)}</Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography>Net Profit: ${results.metrics.netProfit.toFixed(2)}</Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
                <Paper sx={{ p: 2, height: '100%' }}>
                    <Typography variant="h6">Equity Curve</Typography>
                    <LineChart width={500} height={300} data={equityCurve}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="timestamp" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#8884d8" />
                    </LineChart>
                </Paper>
            </Grid>

            <Grid item xs={12}>
                <Paper sx={{ p: 2 }}>
                    <Typography variant="h6">Trade List</Typography>
                    <TradeList trades={results.trades} />
                </Paper>
            </Grid>
        </Grid>
    );
};

export default BacktestResults; 
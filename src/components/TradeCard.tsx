import React from 'react';
import { Box, Typography, Paper, Button, Stack } from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShowChartIcon from '@mui/icons-material/ShowChart';

interface TradeCardProps {
  trade: any;
  onBuy: () => void;
  simulatedBalance: number;
  hotness?: number; // 0-100 score
  showHotness?: boolean;
}

const TradeCard = ({ trade, onBuy, simulatedBalance, hotness, showHotness = false }: TradeCardProps) => {
  const price = trade.sol_amount / trade.token_amount;
  
  // Calculate hotness color
  const getHotnessColor = (score: number) => {
    if (score > 80) return '#ff4444';
    if (score > 60) return '#ff8c00';
    if (score > 40) return '#ffd700';
    return '#a0a0a0';
  };

  return (
    <Paper sx={{ p: 2, mb: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Stack spacing={1}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="h6">
              {trade.name} (${trade.symbol})
            </Typography>
            {showHotness && hotness && (
              <LocalFireDepartmentIcon 
                sx={{ 
                  color: getHotnessColor(hotness),
                  fontSize: '1.2rem'
                }} 
              />
            )}
          </Box>

          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Typography variant="body2">
              Price: {price.toFixed(8)} SOL
            </Typography>
            <Typography variant="body2">
              Vol: {(trade.sol_amount / 1e9).toFixed(2)} SOL
            </Typography>
            <Typography variant="body2">
              MCap: ${(trade.usd_market_cap / 1000).toFixed(1)}k
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button 
              variant="contained" 
              size="small"
              onClick={onBuy}
              disabled={simulatedBalance < 1}
              startIcon={<ShowChartIcon />}
            >
              Paper Buy
            </Button>
            <Button 
              variant="outlined" 
              size="small"
              disabled={true} // Enable in future
              startIcon={<TrendingUpIcon />}
            >
              Real Buy (Soon)
            </Button>
          </Box>
        </Stack>

        {hotness && (
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            ml: 2 
          }}>
            <Typography 
              variant="h6" 
              sx={{ 
                color: getHotnessColor(hotness),
                fontWeight: 'bold'
              }}
            >
              {hotness}°
            </Typography>
            <Typography variant="caption">
              Heat
            </Typography>
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default TradeCard; 
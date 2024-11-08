import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Alert
} from '@mui/material';
import { useTokenData } from '../hooks/useTokenData';

interface Props {
  mint?: string;
}

export const TradingPanel: React.FC<Props> = ({ mint }) => {
  const { tokenData } = useTokenData(mint);
  const token = tokenData[0];

  const [amount, setAmount] = useState('');
  const [orderType, setOrderType] = useState('market');
  const [stopLoss, setStopLoss] = useState('');
  const [takeProfit, setTakeProfit] = useState('');

  const handleTrade = (type: 'buy' | 'sell') => {
    // Implement trade execution logic
    console.log('Executing trade:', {
      type,
      token: token?.symbol,
      amount,
      orderType,
      stopLoss,
      takeProfit
    });
  };

  if (!token) {
    return (
      <Box>
        <Typography variant="h6" gutterBottom>
          Trading Panel
        </Typography>
        <Alert severity="info">Select a token to start trading</Alert>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Trading Panel
      </Typography>
      
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1">
          {token.symbol} - ${token.price.toFixed(4)}
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Order Type</InputLabel>
            <Select
              value={orderType}
              onChange={(e) => setOrderType(e.target.value)}
              label="Order Type"
            >
              <MenuItem value="market">Market</MenuItem>
              <MenuItem value="limit">Limit</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Stop Loss"
            type="number"
            value={stopLoss}
            onChange={(e) => setStopLoss(e.target.value)}
          />
        </Grid>

        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Take Profit"
            type="number"
            value={takeProfit}
            onChange={(e) => setTakeProfit(e.target.value)}
          />
        </Grid>

        <Grid item xs={6}>
          <Button
            fullWidth
            variant="contained"
            color="success"
            onClick={() => handleTrade('buy')}
          >
            Buy
          </Button>
        </Grid>

        <Grid item xs={6}>
          <Button
            fullWidth
            variant="contained"
            color="error"
            onClick={() => handleTrade('sell')}
          >
            Sell
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}; 
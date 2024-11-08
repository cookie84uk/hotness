import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  Box
} from '@mui/material';
import { TokenData } from '../types';
import { paperTradingService } from '../services/paperTrading/PaperTradingService';
import { toast } from 'react-toastify';

interface PaperTradeModalProps {
  token: TokenData;
  open: boolean;
  onClose: () => void;
}

export const PaperTradeModal = ({ token, open, onClose }: PaperTradeModalProps) => {
  const [amount, setAmount] = useState('');

  const handleTrade = () => {
    const trade = paperTradingService.executeTrade(token, Number(amount));
    onClose();
    
    toast.success(`Paper trade executed: ${amount} SOL at $${token.price}`, {
      position: "bottom-right"
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Paper Trade {token.symbol}</DialogTitle>
      <DialogContent>
        <Box my={2}>
          <Typography variant="body2" color="textSecondary">
            Current Price: ${token.price}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Hotness Score: {token.hotness}
          </Typography>
        </Box>

        <TextField
          autoFocus
          label="Amount (SOL)"
          type="number"
          fullWidth
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button 
          onClick={handleTrade}
          variant="contained"
          disabled={!amount || Number(amount) <= 0}
        >
          Execute Trade
        </Button>
      </DialogActions>
    </Dialog>
  );
}; 
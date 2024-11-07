import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Chip,
  Paper,
  Tooltip
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

interface PaperTrade {
  symbol: string;
  amount: number;
  entryPrice: number;
  currentPrice: number;
  timestamp: number;
}

interface TradingSidebarProps {
  open: boolean;
  onClose: () => void;
  paperBalance: number;
  trades: PaperTrade[];
  isMinimized: boolean;
  onToggleMinimize: () => void;
  onCloseTrade?: (index: number) => void;
}

const TradingSidebar = ({ 
  open, 
  onClose, 
  paperBalance, 
  trades, 
  isMinimized, 
  onToggleMinimize,
  onCloseTrade 
}: TradingSidebarProps) => {
  
  // Calculate P/L for a single trade
  const calculateTradePL = (trade: PaperTrade) => {
    const initialValue = trade.amount * trade.entryPrice;
    const currentValue = trade.amount * trade.currentPrice;
    return currentValue - initialValue;
  };

  // Calculate percentage P/L
  const calculateTradePercentage = (trade: PaperTrade) => {
    return ((trade.currentPrice - trade.entryPrice) / trade.entryPrice) * 100;
  };

  // Calculate total P/L
  const totalPL = trades.reduce((total, trade) => total + calculateTradePL(trade), 0);

  return (
    <Drawer
      anchor="right"
      open={open}
      variant="persistent"
      sx={{
        width: isMinimized ? 120 : 280,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: isMinimized ? 120 : 280,
          background: 'linear-gradient(180deg, #141B2D 0%, #0A0E17 100%)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '-4px 0 15px rgba(0, 0, 0, 0.3)',
          boxSizing: 'border-box',
          transition: 'width 0.2s ease-in-out'
        },
      }}
    >
      <Box sx={{ p: isMinimized ? 1 : 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          {!isMinimized && <Typography variant="subtitle1">Paper Trading</Typography>}
          <Box>
            <IconButton onClick={onToggleMinimize} size="small">
              {isMinimized ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
            <IconButton onClick={onClose} size="small">
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>

        <Paper sx={{ p: 1.5, mb: 2, background: 'rgba(255, 255, 255, 0.05)' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body2">Balance:</Typography>
            <Typography variant="body2" fontWeight="bold">
              {paperBalance.toFixed(3)} SOL
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="body2">Total P/L:</Typography>
            <Typography 
              variant="body2" 
              fontWeight="bold"
              color={totalPL >= 0 ? 'success.main' : 'error.main'}
            >
              ${totalPL.toFixed(3)}
            </Typography>
          </Box>
        </Paper>

        {!isMinimized && (
          <List sx={{ maxHeight: 'calc(100vh - 200px)', overflow: 'auto' }}>
            {trades.map((trade, index) => {
              const pl = calculateTradePL(trade);
              const plPercentage = calculateTradePercentage(trade);
              
              return (
                <Paper key={index} sx={{ p: 1.5, mb: 1, background: 'rgba(255, 255, 255, 0.03)' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="subtitle2">{trade.symbol}</Typography>
                    <Typography 
                      variant="subtitle2"
                      color={pl >= 0 ? 'success.main' : 'error.main'}
                    >
                      ${pl.toFixed(3)}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="caption">
                      Entry: ${trade.entryPrice.toFixed(6)}
                    </Typography>
                    <Typography variant="caption">
                      Current: ${trade.currentPrice.toFixed(6)}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="caption">
                      {trade.amount} SOL
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography 
                        variant="caption"
                        color={pl >= 0 ? 'success.main' : 'error.main'}
                      >
                        {plPercentage >= 0 ? '+' : ''}{plPercentage.toFixed(1)}%
                      </Typography>
                      {onCloseTrade && (
                        <IconButton 
                          size="small" 
                          onClick={() => onCloseTrade(index)}
                        >
                          <CloseIcon fontSize="small" />
                        </IconButton>
                      )}
                    </Box>
                  </Box>
                </Paper>
              );
            })}
          </List>
        )}
      </Box>
    </Drawer>
  );
};

export default TradingSidebar; 
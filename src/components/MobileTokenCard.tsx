import React from 'react';
import { 
  Box, 
  Typography, 
  Chip, 
  Paper,
  alpha,
  useTheme 
} from '@mui/material';
import MiniLineChart from './visualizations/MiniLineChart';

interface MobileTokenCardProps {
  token: {
    symbol: string;
    name: string;
    price: number;
    change24h: number;
    hotness: number;
    priceHistory: number[];
  };
}

const MobileTokenCard: React.FC<MobileTokenCardProps> = ({ token }) => {
  const theme = useTheme();

  const formatPrice = (price: number) => {
    if (price < 0.00001) {
      return price.toExponential(4);
    }
    return price.toFixed(Math.min(6, price.toString().split('.')[1]?.length || 0));
  };

  return (
    <Paper
      elevation={2}
      sx={{
        mb: 1,
        p: 1.5,
        background: `linear-gradient(135deg, 
          ${theme.palette.background.paper} 0%, 
          ${alpha(theme.palette.primary.main, 0.1)} 100%)`,
        border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
        borderRadius: 2,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
        <Box>
          <Typography variant="body1" fontWeight="bold">
            {token.symbol}
          </Typography>
          <Typography variant="caption" color="text.secondary" noWrap>
            {token.name}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <Chip
            label={`${token.change24h > 0 ? '+' : ''}${token.change24h.toFixed(1)}%`}
            size="small"
            color={token.change24h > 0 ? 'success' : 'error'}
            sx={{ mb: 0.5 }}
          />
          <Chip
            label={`🔥 ${token.hotness}`}
            size="small"
            color={token.hotness > 70 ? 'error' : 'default'}
          />
        </Box>
      </Box>
      
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography 
          variant="body2" 
          sx={{ 
            fontFamily: 'monospace',
            whiteSpace: 'nowrap'
          }}
        >
          ${formatPrice(token.price)}
        </Typography>
        <Box sx={{ flexGrow: 1, height: '30px' }}>
          <MiniLineChart
            data={token.priceHistory}
            color={token.change24h > 0 ? '#4caf50' : '#f44336'}
            height={30}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default MobileTokenCard; 
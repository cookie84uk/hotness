import { TableRow, TableCell, Box, Typography, LinearProgress, IconButton } from '@mui/material';
import { TrendingUp } from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionTableRow = motion(TableRow);

interface AnimatedTableRowProps {
  token: {
    name: string;
    symbol: string;
    price: number;
    change24h: number;
    volume: number;
    hotness: number;
  };
  index: number;
}

export const AnimatedTableRow = ({ token, index }: AnimatedTableRowProps) => {
  return (
    <MotionTableRow
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      sx={{ 
        '&:hover': { 
          backgroundColor: 'action.hover',
          cursor: 'pointer',
          '& .hotness-progress': {
            transform: 'scaleX(1.02)',
            transition: 'transform 0.2s ease-in-out',
          }
        }
      }}
    >
      <TableCell>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1">{token.name}</Typography>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ ml: 1 }}
          >
            {token.symbol}
          </Typography>
        </Box>
      </TableCell>
      <TableCell align="right">
        ${token.price.toFixed(4)}
      </TableCell>
      <TableCell 
        align="right"
        sx={{ 
          color: token.change24h >= 0 ? 'success.main' : 'error.main'
        }}
      >
        {token.change24h}%
      </TableCell>
      <TableCell align="right">
        ${token.volume.toLocaleString()}
      </TableCell>
      <TableCell align="right">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <LinearProgress 
            className="hotness-progress"
            variant="determinate" 
            value={token.hotness}
            sx={{ 
              flexGrow: 1,
              height: 8,
              borderRadius: 1,
              transition: 'transform 0.2s ease-in-out'
            }}
          />
          <Typography variant="body2">
            {token.hotness}
          </Typography>
        </Box>
      </TableCell>
      <TableCell align="right">
        <IconButton 
          size="small" 
          color="primary"
          component={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <TrendingUp />
        </IconButton>
      </TableCell>
    </MotionTableRow>
  );
}; 
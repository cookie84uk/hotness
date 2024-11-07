import { 
  Box, 
  Typography,
  Stack,
  Paper,
  Chip,
  Link,
  Tooltip
} from '@mui/material';
import { CustomCard } from '../../common/Card';
import { WhatshotRounded, LaunchRounded } from '@mui/icons-material';
import { useTokenContext } from '../../../context/TokenContext';
import { motion, AnimatePresence } from 'framer-motion';
import { SolanaIcon } from '../../common/SolanaIcon';

const getTimeDiff = (timestamp: number): string => {
  const now = Date.now();
  const diff = now - timestamp;
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (seconds < 60) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  return `${hours}h ${minutes % 60}m ago`;
};

const WhaleBuyItem = ({ buy }: { buy: any }) => (
  <Paper
    component={motion.div}
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
    sx={{ 
      p: 2, 
      bgcolor: 'background.paper',
      '&:hover': { bgcolor: 'action.hover' },
      cursor: 'pointer'
    }}
  >
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <SolanaIcon size={20} />
          <Typography variant="subtitle1">
            {buy.amount.toLocaleString()}
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              backgroundColor: 'primary.dark',
              color: 'white',
              px: 1,
              py: 0.5,
              borderRadius: 1,
              fontWeight: 'bold'
            }}
          >
            {buy.token}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
          <Typography variant="body2" color="text.secondary">
            {getTimeDiff(buy.timestamp)}
          </Typography>
          <Tooltip title="View on Solana Explorer">
            <Link 
              href={`https://explorer.solana.com/tx/${buy.txHash}`}
              target="_blank"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <LaunchRounded sx={{ fontSize: 16 }} />
            </Link>
          </Tooltip>
        </Box>
      </Box>
      <Box sx={{ textAlign: 'right' }}>
        <Typography 
          variant="h6" 
          color="success.main"
          sx={{ fontWeight: 'bold' }}
        >
          ${buy.total.toLocaleString()}
        </Typography>
        {buy.isPaperTrade && (
          <Chip 
            label="PAPER"
            size="small"
            sx={{ 
              height: 20,
              backgroundColor: 'info.dark',
              opacity: 0.7,
              '& .MuiChip-label': {
                px: 1,
                fontSize: '0.65rem',
                fontWeight: 'bold'
              }
            }}
          />
        )}
      </Box>
    </Box>
  </Paper>
);

export const WhaleBuys = () => {
  const { whaleBuys } = useTokenContext();

  return (
    <CustomCard 
      title={
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <SolanaIcon size={24} />
          <span>Whale Buys (&gt;3)</span>
        </Box>
      }
      action={
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Chip 
            label="PAPER TRADE" 
            size="small"
            color="info"
            sx={{ height: 24 }}
          />
          <Chip 
            icon={<WhatshotRounded />} 
            label="Live" 
            color="error"
            size="small"
          />
        </Box>
      }
    >
      <Stack spacing={2} sx={{ maxHeight: '600px', overflow: 'auto' }}>
        <AnimatePresence initial={false}>
          {whaleBuys.map((buy) => (
            <WhaleBuyItem key={buy.id} buy={buy} />
          ))}
        </AnimatePresence>
      </Stack>
    </CustomCard>
  );
}; 
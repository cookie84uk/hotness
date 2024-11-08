import { Grid } from '@mui/material';
import { TokenCard } from './TokenCard';
import { TokenData } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const MotionGrid = motion(Grid);

interface TokenGridProps {
  tokens: TokenData[];
  onPaperTrade?: (token: TokenData) => void;
}

export const TokenGrid = ({ tokens, onPaperTrade }: TokenGridProps) => {
  const sortedTokens = [...tokens].sort((a, b) => b.hotness - a.hotness);

  return (
    <Grid container spacing={3}>
      <AnimatePresence>
        {sortedTokens.map((token) => (
          <MotionGrid 
            item 
            xs={12} 
            sm={6} 
            md={4} 
            key={token.mint}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <TokenCard 
              token={token} 
              onPaperTrade={() => onPaperTrade?.(token)} 
            />
          </MotionGrid>
        ))}
      </AnimatePresence>
    </Grid>
  );
}; 
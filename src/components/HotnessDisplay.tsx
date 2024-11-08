import { Box, Typography, CircularProgress } from '@mui/material';
import { motion } from 'framer-motion';
import { TokenData } from '../types';

const MotionBox = motion(Box);

interface HotnessDisplayProps {
  token: TokenData;
  size?: 'small' | 'medium' | 'large';
}

export const HotnessDisplay = ({ token, size = 'medium' }: HotnessDisplayProps) => {
  const getColor = (score: number) => {
    if (score >= 80) return '#ff0000';  // Hot red
    if (score >= 60) return '#ff6b00';  // Orange
    if (score >= 40) return '#ffd700';  // Gold
    return '#666666';  // Cool gray
  };

  const dimensions = {
    small: { width: 40, fontSize: 12 },
    medium: { width: 60, fontSize: 16 },
    large: { width: 80, fontSize: 20 },
  }[size];

  return (
    <MotionBox
      initial={{ scale: 0.8 }}
      animate={{ 
        scale: token.hotness >= 80 ? [1, 1.1, 1] : 1,
      }}
      transition={{ 
        duration: 0.5,
        repeat: token.hotness >= 80 ? Infinity : 0,
      }}
    >
      <Box position="relative" display="inline-flex">
        <CircularProgress
          variant="determinate"
          value={token.hotness}
          size={dimensions.width}
          thickness={5}
          sx={{ color: getColor(token.hotness) }}
        />
        <Box
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
          width={dimensions.width}
          height={dimensions.width}
        >
          <Typography
            variant="caption"
            fontSize={dimensions.fontSize}
            color="textSecondary"
          >
            {Math.round(token.hotness)}
          </Typography>
        </Box>
      </Box>
    </MotionBox>
  );
}; 
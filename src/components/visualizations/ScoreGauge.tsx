import React from 'react';
import { Box, Typography } from '@mui/material';

interface Props {
  score: number;
}

export default function ScoreGauge({ score }: Props) {
  return (
    <Box>
      <Typography variant="h6">Current Score</Typography>
      <Typography variant="h2" align="center">
        {score.toFixed(1)}
      </Typography>
    </Box>
  );
} 
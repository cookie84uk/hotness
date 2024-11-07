import React from 'react';
import { Box, Typography } from '@mui/material';
import { Signal } from '../../types/Signal';

interface Props {
  signals: Signal[];
}

export default function HeatMap({ signals }: Props) {
  return (
    <Box>
      <Typography variant="h6">Signal Heat Map</Typography>
      {/* Add your heat map visualization here */}
    </Box>
  );
} 
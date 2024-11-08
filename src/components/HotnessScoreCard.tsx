import React from 'react';
import { Box, Paper, Typography, CircularProgress } from '@mui/material';
import { useTokenData } from '../hooks/useTokenData';

interface Props {
  mint?: string;
}

export const HotnessScoreCard: React.FC<Props> = ({ mint }) => {
  const { tokenData, loading } = useTokenData(mint);
  const token = tokenData[0];

  const getScoreColor = (score: number) => {
    if (score >= 80) return '#ff4444';
    if (score >= 60) return '#ff8c00';
    if (score >= 40) return '#ffd700';
    return '#4caf50';
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Hotness Score
      </Typography>
      
      {loading ? (
        <Box display="flex" justifyContent="center">
          <CircularProgress />
        </Box>
      ) : token ? (
        <Box>
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              justifyContent: 'center',
              p: 2
            }}
          >
            <Typography 
              variant="h2" 
              sx={{ 
                color: getScoreColor(token.hotnessScore),
                fontWeight: 'bold'
              }}
            >
              {token.hotnessScore.toFixed(1)}
            </Typography>
          </Box>
          
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Volume: ${token.volume.toLocaleString()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              24h Change: {token.change24h.toFixed(2)}%
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Holders: {token.holders?.toLocaleString() || 'N/A'}
            </Typography>
          </Box>
        </Box>
      ) : (
        <Typography color="text.secondary">
          Select a token to view hotness score
        </Typography>
      )}
    </Box>
  );
}; 
import React from 'react';
import { Box, Paper, Typography, Tooltip } from '@mui/material';
import { keyframes } from '@mui/system';

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

interface HotMeterProps {
  score: number;
  risk: number;
  signals: string[];
  confidence: number;
  creatorScore?: number;
  earlyBuyerScore?: number;
  socialScore?: number;
  timeFromCreation?: number;
}

export default function HotMeter({ score, risk, signals, confidence, creatorScore, earlyBuyerScore, socialScore, timeFromCreation }: HotMeterProps) {
  const getColor = () => {
    if (score >= 80) return '#ff0000'; // Super Hot
    if (score >= 60) return '#ff6b00'; // Hot
    if (score >= 40) return '#ffd700'; // Warm
    return '#00ff00'; // Cold
  };

  const getRiskColor = () => {
    if (risk >= 80) return '#ff0000';
    if (risk >= 60) return '#ff6b00';
    if (risk >= 40) return '#ffd700';
    return '#00ff00';
  };

  return (
    <Paper 
      elevation={3}
      sx={{
        p: 2,
        background: `linear-gradient(45deg, ${getColor()}22, ${getRiskColor()}22)`,
        animation: score > 70 ? `${pulse} 2s infinite` : 'none'
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <Typography variant="h4" sx={{ color: getColor() }}>
          {score >= 80 ? '🔥 SUPER HOT' :
           score >= 60 ? '🌶️ HOT' :
           score >= 40 ? '😐 WARM' :
           '❄️ COLD'}
        </Typography>
        <Tooltip title="Higher risk = More potential but more dangerous">
          <Typography variant="h6" sx={{ color: getRiskColor() }}>
            Risk: {risk}% {risk >= 70 ? '💀' : risk >= 50 ? '⚠️' : '✅'}
          </Typography>
        </Tooltip>
      </Box>

      <Box sx={{ mb: 1 }}>
        {signals.map((signal, index) => (
          <Typography key={index} variant="body2" sx={{ mb: 0.5 }}>
            {signal}
          </Typography>
        ))}
      </Box>

      <Typography variant="caption" color="textSecondary">
        Confidence: {confidence}% {confidence >= 80 ? '✅' : '⚠️'}
      </Typography>
    </Paper>
  );
} 
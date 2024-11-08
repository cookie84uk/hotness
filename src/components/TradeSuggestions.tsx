import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Button,
  LinearProgress
} from '@mui/material';
import { suggestionEngine } from '../services/trading/SuggestionEngine';
import { TradeSuggestion } from '../types';

export const TradeSuggestions = () => {
  const [suggestions, setSuggestions] = useState<TradeSuggestion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateSuggestions = async () => {
      setLoading(true);
      const newSuggestions = await suggestionEngine.generateSuggestions(tokens);
      setSuggestions(newSuggestions);
      setLoading(false);
    };

    updateSuggestions();
    const interval = setInterval(updateSuggestions, 30000); // Update every 30s

    return () => clearInterval(interval);
  }, []);

  const getRiskColor = (risk: 'low' | 'medium' | 'high') => {
    switch (risk) {
      case 'low': return 'success';
      case 'medium': return 'warning';
      case 'high': return 'error';
    }
  };

  if (loading) return <LinearProgress />;

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Trade Suggestions
      </Typography>
      
      {suggestions.map((suggestion) => (
        <Card key={suggestion.mint} sx={{ mb: 2 }}>
          <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h6">
                {suggestion.mint}
              </Typography>
              <Chip 
                label={`${(suggestion.confidence * 100).toFixed(0)}% Confidence`}
                color="primary"
                variant="outlined"
              />
            </Box>

            <Box mt={2}>
              <Chip 
                label={`Risk: ${suggestion.riskLevel}`}
                color={getRiskColor(suggestion.riskLevel)}
                size="small"
                sx={{ mr: 1 }}
              />
              <Chip 
                label={`${suggestion.suggestedAmount} SOL`}
                variant="outlined"
                size="small"
              />
            </Box>

            <Box mt={2}>
              {suggestion.reason.map((reason, index) => (
                <Typography key={index} variant="body2" color="textSecondary">
                  • {reason}
                </Typography>
              ))}
            </Box>

            <Box mt={2} display="flex" justifyContent="space-between">
              <Typography variant="body2">
                Stop Loss: ${suggestion.stopLoss.toFixed(6)}
              </Typography>
              <Typography variant="body2">
                Take Profit: ${suggestion.takeProfit.toFixed(6)}
              </Typography>
            </Box>

            <Box mt={2} display="flex" justifyContent="flex-end">
              <Button 
                variant="contained" 
                onClick={() => {/* Implement paper trade execution */}}
              >
                Paper Trade
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}; 
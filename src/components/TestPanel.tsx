import React, { useEffect, useState } from 'react';
import { 
  Box, 
  Paper, 
  Typography, 
  Button, 
  Stack,
  Alert,
  CircularProgress
} from '@mui/material';
import { getWebSocketService } from '../services/socketService';
import { mockTrade, mockAnalysis } from '../utils/testData';

type ConnectionStatus = 'connecting' | 'connected' | 'disconnected' | 'error';

export function TestPanel() {
  const [status, setStatus] = useState<ConnectionStatus>('disconnected');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const ws = getWebSocketService();
    
    // Add listeners
    const removeStatusListener = ws.addStatusListener((newStatus) => {
      setStatus(newStatus);
      setIsLoading(newStatus === 'connecting');
    });

    const removeErrorListener = ws.addErrorListener((wsError) => {
      setError(`${wsError.code}: ${wsError.message}`);
    });

    return () => {
      removeStatusListener();
      removeErrorListener();
    };
  }, []);

  const handleConnect = () => {
    const ws = getWebSocketService();
    ws.connect();
  };

  const handleDisconnect = () => {
    const ws = getWebSocketService();
    ws.disconnect();
  };

  const handleSimulateTrade = () => {
    const ws = getWebSocketService();
    ws.simulateTradeMessage(mockTrade);
  };

  const handleSimulateError = () => {
    const ws = getWebSocketService();
    ws.simulateError('TEST_ERROR', 'This is a test error message');
  };

  const getStatusColor = () => {
    switch (status) {
      case 'connected': return 'success.main';
      case 'connecting': return 'warning.main';
      case 'error': return 'error.main';
      default: return 'text.secondary';
    }
  };

  return (
    <Box>
      {/* Add your UI components here */}
    </Box>
  );
} 
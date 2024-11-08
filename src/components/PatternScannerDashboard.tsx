import { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  LinearProgress,
  IconButton,
  Tooltip,
  Alert
} from '@mui/material';
import {
  Refresh as RefreshIcon,
  PlayArrow as PlayIcon,
  Stop as StopIcon,
  Timeline as TimelineIcon
} from '@mui/icons-material';
import { patternScanner } from '../services/scanner/PatternScanner';
import { ScanResult, PatternPrediction, Signal } from '../types';

export const PatternScannerDashboard = () => {
  const [results, setResults] = useState<ScanResult[]>([]);
  const [selectedToken, setSelectedToken] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    const unsubscribe = patternScanner.addListener((newResults) => {
      setResults(newResults);
    });

    return unsubscribe;
  }, []);

  const handleStartScanning = () => {
    const tokens = tokenListService.getActiveTokens();
    patternScanner.startScanning(tokens);
    setIsScanning(true);
  };

  const handleStopScanning = () => {
    patternScanner.getActiveScans().forEach(mint => {
      patternScanner.stopScanning(mint);
    });
    setIsScanning(false);
  };

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5">Pattern Scanner</Typography>
        <Box>
          <Tooltip title="Refresh Results">
            <IconButton onClick={() => setResults(patternScanner.getCurrentResults())}>
              <RefreshIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={isScanning ? "Stop Scanning" : "Start Scanning"}>
            <IconButton onClick={isScanning ? handleStopScanning : handleStartScanning}>
              {isScanning ? <StopIcon /> : <PlayIcon />}
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* High Score Alerts */}
        {results.filter(r => r.score >= 80).map(result => (
          <Grid item xs={12} key={result.mint}>
            <Alert 
              severity="success"
              action={
                <IconButton
                  size="small"
                  onClick={() => setSelectedToken(result.mint)}
                >
                  <TimelineIcon />
                </IconButton>
              }
            >
              High probability pattern detected for {result.mint} (Score: {result.score.toFixed(1)})
            </Alert>
          </Grid>
        ))}

        {/* Pattern Results */}
        {results.map(result => (
          <Grid item xs={12} md={6} lg={4} key={result.mint}>
            <PatternCard result={result} onSelect={() => setSelectedToken(result.mint)} />
          </Grid>
        ))}
      </Grid>

      {selectedToken && (
        <PatternDetailModal
          mint={selectedToken}
          result={results.find(r => r.mint === selectedToken)!}
          onClose={() => setSelectedToken(null)}
        />
      )}
    </Box>
  );
};

const PatternCard = ({ result, onSelect }: { result: ScanResult; onSelect: () => void }) => {
  return (
    <Card onClick={onSelect} sx={{ cursor: 'pointer' }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6">{result.mint}</Typography>
          <Typography 
            variant="h6" 
            color={result.score >= 80 ? 'success.main' : 'text.primary'}
          >
            {result.score.toFixed(1)}
          </Typography>
        </Box>

        <Box mb={2}>
          <LinearProgress 
            variant="determinate" 
            value={result.score} 
            color={result.score >= 80 ? 'success' : 'primary'}
          />
        </Box>

        <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
          {result.patterns.map((pattern, index) => (
            <Chip
              key={index}
              label={`${pattern.pattern} (${(pattern.probability * 100).toFixed(1)}%)`}
              size="small"
              color={pattern.confidence > 0.8 ? 'success' : 'default'}
            />
          ))}
        </Box>

        <Box>
          {result.signals.map((signal, index) => (
            <Typography key={index} variant="body2" color="text.secondary">
              • {signal.description}
            </Typography>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}; 
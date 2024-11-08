import { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Slider,
  IconButton,
  ButtonGroup,
  Tooltip
} from '@mui/material';
import {
  PlayArrow,
  Pause,
  FastForward,
  FastRewind,
  Speed
} from '@mui/icons-material';
import { Line } from 'react-chartjs-2';
import { tradeReplayService } from '../services/replay/TradeReplayService';
import { ReplayFrame } from '../types';
import { format } from 'date-fns';

interface TradeReplayProps {
  sessionId: string;
}

export const TradeReplay = ({ sessionId }: TradeReplayProps) => {
  const [currentFrame, setCurrentFrame] = useState<ReplayFrame | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = tradeReplayService.addFrameListener(sessionId, (frame) => {
      setCurrentFrame(frame);
      updateChartData(frame);
    });

    return unsubscribe;
  }, [sessionId]);

  const updateChartData = (frame: ReplayFrame) => {
    // Update chart data with new frame
    setChartData(prevData => ({
      ...prevData,
      datasets: [
        {
          ...prevData?.datasets[0],
          data: [...(prevData?.datasets[0]?.data || []), frame.price]
        },
        {
          ...prevData?.datasets[1],
          data: [...(prevData?.datasets[1]?.data || []), frame.volume]
        },
        {
          ...prevData?.datasets[2],
          data: [...(prevData?.datasets[2]?.data || []), frame.hotness]
        }
      ]
    }));
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      tradeReplayService.pause(sessionId);
    } else {
      tradeReplayService.play(sessionId);
    }
    setIsPlaying(!isPlaying);
  };

  const handleSpeedChange = (newSpeed: number) => {
    tradeReplayService.setSpeed(sessionId, newSpeed);
    setSpeed(newSpeed);
  };

  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
          <Typography variant="h6">
            Trade Replay
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {currentFrame && format(currentFrame.timestamp, 'PPpp')}
          </Typography>
        </Box>

        <Box height={400} mb={2}>
          <Line
            data={chartData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: { beginAtZero: true }
              },
              animation: {
                duration: 0 // Disable animations for smoother replay
              }
            }}
          />
        </Box>

        <Box display="flex" alignItems="center" gap={2}>
          <ButtonGroup>
            <IconButton onClick={handlePlayPause}>
              {isPlaying ? <Pause /> : <PlayArrow />}
            </IconButton>
            <IconButton onClick={() => handleSpeedChange(speed / 2)}>
              <FastRewind />
            </IconButton>
            <IconButton onClick={() => handleSpeedChange(speed * 2)}>
              <FastForward />
            </IconButton>
          </ButtonGroup>

          <Tooltip title="Playback Speed">
            <Box display="flex" alignItems="center" gap={1}>
              <Speed />
              <Typography variant="body2">{speed}x</Typography>
            </Box>
          </Tooltip>
        </Box>

        {currentFrame && (
          <Box mt={2}>
            <Typography variant="body2">
              Price: {currentFrame.price} SOL
            </Typography>
            <Typography variant="body2">
              Volume: {currentFrame.volume} SOL
            </Typography>
            <Typography variant="body2">
              Hotness: {currentFrame.hotness}
            </Typography>
            <Typography variant="body2">
              Trades: {currentFrame.trades.length}
            </Typography>
            <Typography variant="body2">
              Whale Activities: {currentFrame.whaleActivity.length}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}; 
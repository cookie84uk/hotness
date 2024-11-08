import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Box, useTheme } from '@mui/material';
import { scoreManager } from '../services/scoring/ScoreManager';
import { formatDistance } from 'date-fns';

interface HotnessChartProps {
  mint: string;
  height?: number;
}

export const HotnessChart = ({ mint, height = 200 }: HotnessChartProps) => {
  const theme = useTheme();
  const [data, setData] = useState<{
    scores: number[];
    timestamps: number[];
  }>({ scores: [], timestamps: [] });

  useEffect(() => {
    const history = scoreManager.getScoreHistory(mint);
    setData({
      scores: history.scores,
      timestamps: history.timestamps
    });

    const unsubscribe = scoreManager.subscribeToScore(mint, (newScore) => {
      setData(prev => ({
        scores: [newScore, ...prev.scores].slice(0, 100),
        timestamps: [Date.now(), ...prev.timestamps].slice(0, 100)
      }));
    });

    return unsubscribe;
  }, [mint]);

  const chartData = {
    labels: data.timestamps.map(t => 
      formatDistance(t, Date.now(), { addSuffix: true })
    ),
    datasets: [
      {
        label: 'Hotness Score',
        data: data.scores,
        borderColor: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.light,
        fill: true,
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  };

  return (
    <Box height={height}>
      <Line data={chartData} options={options} />
    </Box>
  );
}; 
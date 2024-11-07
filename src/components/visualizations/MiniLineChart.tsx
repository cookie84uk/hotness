import React from 'react';
import { Box } from '@mui/material';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

interface MiniLineChartProps {
  data: number[];
  color: string;
  height?: number;
}

const MiniLineChart: React.FC<MiniLineChartProps> = ({ data, color, height = 50 }) => {
  const chartData = {
    labels: new Array(data.length).fill(''),
    datasets: [
      {
        data,
        borderColor: color,
        borderWidth: 1.5,
        fill: true,
        backgroundColor: `${color}20`,
        tension: 0.4,
        pointRadius: 0
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: false
      },
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    }
  };

  return (
    <Box sx={{ height }}>
      <Line data={chartData} options={options} />
    </Box>
  );
};

export default MiniLineChart; 
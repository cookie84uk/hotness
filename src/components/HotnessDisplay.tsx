import React from 'react';
import { useTokenData } from '../hooks/useTokenData';
import { HotMeter } from './HotMeter';

interface Props {
  mint: string;
}

export const HotnessDisplay: React.FC<Props> = ({ mint }) => {
  const { tokenData, loading } = useTokenData(mint);
  const token = tokenData[0]; // Since we're filtering by mint, there will only be one

  if (loading) return <div>Loading...</div>;
  if (!token) return <div>No data available</div>;

  return (
    <div>
      <HotMeter score={token.hotnessScore} />
      <div>
        <div>Price: ${token.price.toFixed(4)}</div>
        <div>24h Change: {token.change24h.toFixed(2)}%</div>
        <div>Volume: ${token.volume.toLocaleString()}</div>
      </div>
    </div>
  );
}; 
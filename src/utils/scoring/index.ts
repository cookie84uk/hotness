import { Trade } from '../../types';

const calculateMomentumScore = (trade: Trade, mode: 'degen' | 'normie'): number => {
  const baseScore = trade.is_buy ? 1 : -1;
  return mode === 'degen' ? baseScore * 1.5 : baseScore;
};

const calculateBuyersScore = (uniqueBuyers: number, mode: 'degen' | 'normie'): number => {
  const baseScore = Math.min(uniqueBuyers / 100, 1);
  return mode === 'degen' ? baseScore * 1.3 : baseScore;
};

const calculateVolumeScore = (solAmount: number, mode: 'degen' | 'normie'): number => {
  const baseScore = Math.min(solAmount / 1000, 1);
  return mode === 'degen' ? baseScore * 1.2 : baseScore;
};

export const calculateScore = (trade: Trade, mode: 'degen' | 'normie'): number => {
  const volumeScore = calculateVolumeScore(trade.sol_amount, mode);
  const momentumScore = calculateMomentumScore(trade, mode);
  const buyersScore = calculateBuyersScore(trade.uniqueBuyers || 0, mode);

  return (volumeScore + momentumScore + buyersScore) / 3;
};

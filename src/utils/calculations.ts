import { Trade, HotnessScore } from '../types';

const SOL_DECIMALS = 1e9;

export const calculateHotnessScore = (trade: Trade): HotnessScore => {
  if (!trade) return { volume: 0, marketCap: 0, trade: 0, total: 0 };

  // Convert lamports to SOL
  const solAmount = trade.sol_amount / SOL_DECIMALS;

  // Volume score (0-100 based on 24h volume)
  const volumeScore = Math.min(100, Math.log10(trade.volume_24h + 1) * 20);

  // Market cap score (inverse - smaller market cap = higher score)
  const marketCapScore = Math.max(0, 100 - Math.log10(trade.usd_market_cap + 1) * 10);

  // Trade amount score (0-100 based on the size of the trade)
  const tradeScore = Math.min(100, Math.log10(solAmount + 1) * 25);

  // Calculate total score (weighted average)
  const total = (volumeScore * 0.4 + marketCapScore * 0.3 + tradeScore * 0.3);

  return {
    volume: Math.round(volumeScore),
    marketCap: Math.round(marketCapScore),
    trade: Math.round(tradeScore),
    total: Math.round(total)
  };
};

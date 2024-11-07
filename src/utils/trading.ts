import { Position } from './types/trading';

export const calculatePnL = (position: Position, currentPrice: number) => {
  const currentValue = position.tokenAmount * currentPrice;
  const pnl = currentValue - position.solSpent;
  const pnlPercent = (pnl / position.solSpent) * 100;
  return { pnl, pnlPercent };
};

export const calculateTokenAmount = (solAmount: number, price: number) => {
  return solAmount / price;
};

export const calculateSolValue = (tokenAmount: number, price: number) => {
  return tokenAmount * price;
}; 
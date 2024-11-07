export interface Trade {
  symbol: string;
  name: string;
  sol_amount: number;
  token_amount: number;
  is_buy: boolean;
  timestamp: number;
  usd_market_cap: number;
}

export interface Position {
  symbol: string;
  name: string;
  tokenAmount: number;
  solSpent: number;
  entryPrice: number;
  timestamp: number;
  currentPrice?: number;
}

interface TradeHistory {
  symbol: string;
  buyPrice: number;
  sellPrice: number;
  profit: number;
  profitPercent: number;
  holdTime: number;  // in minutes
  mcapAtBuy: number;
  volumeAtBuy: number;
  timestamp: number;
}

interface TokenMetrics {
  symbol: string;
  successfulTrades: number;  // trades with profit > 20%
  totalTrades: number;
  avgHoldTime: number;
  bestTimeToBuy: number;    // hour of day (0-23)
  avgProfitPercent: number;
  mcapRange: {
    min: number;
    max: number;
    optimal: number;
  };
} 
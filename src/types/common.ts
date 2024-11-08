export interface TokenData {
  address: string;
  symbol: string;
  name: string;
  price: number;
  volume24h: number;
  marketCap: number;
  change24h: number;
  holders: number;
  createdAt: string;
}

export interface WhaleActivity {
  id: string;
  tokenAddress: string;
  tokenSymbol: string;
  amount: number;
  price: number;
  type: 'buy' | 'sell';
  timestamp: string;
  walletAddress: string;
}

export interface TradeSignal {
  tokenAddress: string;
  type: 'buy' | 'sell';
  confidence: number;
  timestamp: string;
  indicators: {
    name: string;
    value: number;
    weight: number;
  }[];
}

export interface RiskMetrics {
  volatility: number;
  liquidity: number;
  concentration: number;
  overallRisk: number;
}

export interface PerformanceMetrics {
  totalTrades: number;
  winRate: number;
  profitLoss: number;
  averageReturn: number;
  sharpeRatio: number;
  maxDrawdown: number;
}

export interface Trade {
  symbol: string;
  name: string;
  sol_amount: number;
  token_amount: number;
  is_buy: boolean;
  timestamp?: number;
  price?: number;
  usd_amount?: number;
} 
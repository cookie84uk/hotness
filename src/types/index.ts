export interface Trade {
  mint: string;
  price: number;
  volume_24h?: number;
  usd_market_cap?: number;
  uniqueBuyers?: number;
  timestamp: number;
  type: 'buy' | 'sell';
}

export interface TokenData {
  symbol: string;
  name: string;
  mint: string;
  price: number;
  change24h: number;
  volume: number;
  marketCap: number;
  hotnessScore: number;
}

export interface Analysis {
  score: number;
  signals: string[];
  risk: number;
  momentum: number;
  socialSignals: SocialSignals;
}

export interface SocialSignals {
  twitter: number;
  telegram: number;
  discord: number;
}

export interface TokenMetrics {
  price: number[];
  volume: number[];
  buyers: number[];
  timestamps: number[];
}

export interface HotnessScore {
  total: number;
  components: {
      volume: number;
      price: number;
      social: number;
      whales: number;
  };
}

export type TradeHistory = {
  price: number;
  volume: number;
  timestamp: number;
  type: 'buy' | 'sell';
};
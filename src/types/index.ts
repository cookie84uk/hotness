// Define all our interfaces/types
export interface Token {
  mint: string;
  name: string;
  price: number;
  sol_amount: number;
  usd_market_cap: number;
  score?: number;
}

export interface WhaleActivity {
  id: string;
  timestamp: number;
  type: 'buy' | 'sell';
  token: string;
  amount: number;
  price: number;
  wallet: string;
  value: number;
}

export interface TopCardsData {
  hottest: Token[];
  newest: Token[];
  biggestGains: Token[];
}

export interface TokenState {
  lastTrade?: number;
  volume_24h?: number;
}

export interface Trade {
  symbol: string;
  name: string;
  sol_amount: number;
  token_amount: number;
  is_buy: boolean;
  usd_market_cap?: number;
  volume_24h?: number;
  birdeye_price?: number;
  dexscreener_price?: number;
  timestamp: number;
}

// Add shared types
export interface TradeMode {
  type: 'degen' | 'normie';
  settings: {
    minMarketCap: number;
    maxRisk: number;
    timeWindow: number;
  };
}

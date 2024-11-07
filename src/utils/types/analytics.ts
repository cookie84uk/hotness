interface MarketMetrics {
  // Volume metrics
  volumeLast5m: number;
  volumeLast15m: number;
  volumeLast1h: number;
  volumeAcceleration: number;  // Rate of volume increase
  
  // Price metrics
  priceChange5m: number;
  priceChange15m: number;
  priceChange1h: number;
  volatility: number;
  
  // Trading patterns
  buyPressure: number;        // Ratio of buys to sells
  largeTransactions: number;  // Number of whale trades
  uniqueBuyers: number;       // Unique wallet addresses buying
  
  // Market context
  marketCap: number;
  liquidityDepth: number;     // Available liquidity in pools
  holdersCount: number;
  topHoldersConcentration: number;
}

interface TokenAnalytics {
  // Historical performance
  avgDailyVolume: number;
  priceATH: number;
  previousPumpPerformance: number[];
  recoveryTime: number[];     // Time to recover from dips
  
  // Holder behavior
  avgHoldTime: number;
  walletTurnover: number;     // Rate of new vs existing holders
  whaleActivity: number;      // Frequency of large holder movements
  
  // Market making
  spreadAverage: number;
  liquidityGrowth: number;
  orderBookDepth: number;
} 
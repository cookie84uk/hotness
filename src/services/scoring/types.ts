export interface ScoringWeights {
  volume: number;
  buyPressure: number;
  uniqueBuyers: number;
  whaleActivity: number;
  priceAction: number;
  paperTradeSuccess: number;
}

export interface HotnessMetrics {
  volumeScore: number;
  buyPressureScore: number;
  uniqueBuyersScore: number;
  whaleActivityScore: number;
  priceActionScore: number;
  paperTradeScore: number;
  timestamp: number;
}

export interface ScoringConfig {
  timeWindow: number;  // milliseconds to look back
  minVolume: number;   // minimum SOL volume
  minTrades: number;   // minimum number of trades
  weights: ScoringWeights;
} 
export interface HotnessFactors {
  // Volume-based factors
  volumeIntensity: number;      // How fast volume is increasing
  buyPressure: number;          // Buy vs Sell ratio
  volumeAcceleration: number;   // Rate of volume change

  // Price-based factors
  priceMovement: number;        // Price change velocity
  priceStability: number;       // Price holding at levels
  breakoutStrength: number;     // Breaking previous highs

  // Social/Trading factors
  uniqueBuyers: number;         // Number of different buyers
  whaleActivity: number;        // Large wallet participation
  repeatBuyers: number;         // Traders buying multiple times
  
  // Paper trading data
  paperTradeSuccess: number;    // Success rate of paper trades
  paperTradeVolume: number;     // Volume of paper trading
  paperTradeHolding: number;    // Average holding time
} 
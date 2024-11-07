interface TokenMetrics {
  // Core metrics that indicate "hotness"
  buyVolume: number;        // Buy volume in SOL
  numberOfTrades: number;   // Number of trades
  timeAlive: number;       // Time since creation in minutes
  uniqueBuyers: number;    // Number of unique buyers
  priceChange: number;     // Price change percentage
  recentVolume: number;    // Volume in last 5 minutes
}

export class HotnessCalculator {
  calculateHotnessScore(metrics: TokenMetrics): number {
    // Base score components (0-100 for each)
    const volumeScore = this.calculateVolumeScore(metrics.buyVolume);
    const momentumScore = this.calculateMomentumScore(metrics.recentVolume, metrics.buyVolume);
    const tradeScore = this.calculateTradeScore(metrics.numberOfTrades, metrics.timeAlive);
    const buyerScore = this.calculateBuyerScore(metrics.uniqueBuyers);
    const priceScore = this.calculatePriceScore(metrics.priceChange);

    // Weighted combination
    const hotnessScore = (
      volumeScore * 0.35 +      // Volume is important
      momentumScore * 0.25 +    // Recent activity matters
      tradeScore * 0.20 +       // Consistent trading
      buyerScore * 0.15 +       // Multiple buyers (not just one whale)
      priceScore * 0.05         // Price movement (small weight to avoid pump & dumps)
    );

    return Math.min(100, hotnessScore);
  }

  private calculateVolumeScore(volumeSOL: number): number {
    // Example: 0-10 SOL = 0-100 score
    return Math.min(100, (volumeSOL / 10) * 100);
  }

  private calculateMomentumScore(recentVolume: number, totalVolume: number): number {
    // High score if recent volume is a large portion of total volume
    const ratio = recentVolume / totalVolume;
    return Math.min(100, ratio * 100);
  }

  private calculateTradeScore(trades: number, timeAlive: number): number {
    // Trades per minute, capped at 100
    const tradesPerMinute = trades / Math.max(1, timeAlive);
    return Math.min(100, tradesPerMinute * 20); // 5 trades/min = 100 score
  }

  private calculateBuyerScore(uniqueBuyers: number): number {
    // Example: 0-20 unique buyers = 0-100 score
    return Math.min(100, (uniqueBuyers / 20) * 100);
  }

  private calculatePriceScore(priceChange: number): number {
    // Convert price change to a 0-100 score
    // Example: 50% price increase = 75 score, 100% = 100 score
    return Math.min(100, Math.abs(priceChange) * 0.75);
  }
} 
import { Trade, TokenData, WhaleActivity } from '../../types';
import { ScoringConfig, HotnessMetrics } from './types';
import { paperTradingService } from '../paperTrading';

export class ScoringEngine {
  private config: ScoringConfig = {
    timeWindow: 5 * 60 * 1000, // 5 minutes
    minVolume: 1, // 1 SOL
    minTrades: 3,
    weights: {
      volume: 0.25,
      buyPressure: 0.20,
      uniqueBuyers: 0.15,
      whaleActivity: 0.15,
      priceAction: 0.15,
      paperTradeSuccess: 0.10
    }
  };

  calculateHotness(
    token: TokenData,
    recentTrades: Trade[],
    whaleActivities: WhaleActivity[]
  ): number {
    const metrics = this.calculateMetrics(token, recentTrades, whaleActivities);
    return this.computeFinalScore(metrics);
  }

  private calculateMetrics(
    token: TokenData,
    trades: Trade[],
    whaleActivities: WhaleActivity[]
  ): HotnessMetrics {
    const recentTrades = this.filterRecentTrades(trades);
    
    return {
      volumeScore: this.calculateVolumeScore(recentTrades),
      buyPressureScore: this.calculateBuyPressure(recentTrades),
      uniqueBuyersScore: this.calculateUniqueBuyersScore(recentTrades),
      whaleActivityScore: this.calculateWhaleScore(whaleActivities),
      priceActionScore: this.calculatePriceAction(recentTrades),
      paperTradeScore: this.calculatePaperTradeScore(token.mint),
      timestamp: Date.now()
    };
  }

  private filterRecentTrades(trades: Trade[]): Trade[] {
    const cutoff = Date.now() - this.config.timeWindow;
    return trades.filter(t => t.timestamp > cutoff);
  }

  private calculateVolumeScore(trades: Trade[]): number {
    const totalVolume = trades.reduce((sum, t) => sum + t.sol_amount, 0);
    const volumeRate = totalVolume / (this.config.timeWindow / 1000); // SOL per second
    return Math.min(volumeRate * 10, 1); // Normalize to 0-1
  }

  private calculateBuyPressure(trades: Trade[]): number {
    if (trades.length === 0) return 0;
    const buys = trades.filter(t => t.is_buy).length;
    return buys / trades.length;
  }

  private calculateUniqueBuyersScore(trades: Trade[]): number {
    const uniqueBuyers = new Set(
      trades.filter(t => t.is_buy).map(t => t.mint)
    ).size;
    return Math.min(uniqueBuyers / 20, 1); // Normalize to 0-1, max at 20 unique buyers
  }

  private calculateWhaleScore(whaleActivities: WhaleActivity[]): number {
    if (whaleActivities.length === 0) return 0;
    const recentWhales = whaleActivities.filter(
      w => Date.now() - w.timestamp < this.config.timeWindow
    );
    return Math.min(recentWhales.length / 5, 1); // Normalize to 0-1, max at 5 whales
  }

  private calculatePriceAction(trades: Trade[]): number {
    if (trades.length < 2) return 0;
    const oldestPrice = trades[trades.length - 1].price;
    const currentPrice = trades[0].price;
    const priceChange = (currentPrice - oldestPrice) / oldestPrice;
    return Math.min(Math.max(priceChange, 0), 1); // Normalize to 0-1
  }

  private calculatePaperTradeScore(mint: string): number {
    const paperStats = paperTradingService.getTokenStats(mint);
    if (!paperStats) return 0;
    return Math.min(paperStats.successRate, 1); // Normalize to 0-1
  }

  private computeFinalScore(metrics: HotnessMetrics): number {
    const { weights } = this.config;
    
    const weightedScore = 
      metrics.volumeScore * weights.volume +
      metrics.buyPressureScore * weights.buyPressure +
      metrics.uniqueBuyersScore * weights.uniqueBuyers +
      metrics.whaleActivityScore * weights.whaleActivity +
      metrics.priceActionScore * weights.priceAction +
      metrics.paperTradeScore * weights.paperTradeSuccess;

    return Math.round(weightedScore * 100); // Convert to 0-100 scale
  }
}

export const scoringEngine = new ScoringEngine(); 
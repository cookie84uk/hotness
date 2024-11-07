import { formatDistanceToNow } from 'date-fns';

export class TradeAnalytics {
  private tradeHistory: TradeHistory[] = [];
  private tokenMetrics: Map<string, TokenMetrics> = new Map();

  constructor() {
    // Load from localStorage if available
    const savedHistory = localStorage.getItem('tradeHistory');
    if (savedHistory) {
      this.tradeHistory = JSON.parse(savedHistory);
      this.calculateMetrics();
    }
  }

  addTrade(trade: TradeHistory) {
    this.tradeHistory.push(trade);
    this.calculateMetrics();
    localStorage.setItem('tradeHistory', JSON.stringify(this.tradeHistory));
  }

  private calculateMetrics() {
    const metrics = new Map<string, TokenMetrics>();

    this.tradeHistory.forEach(trade => {
      const existing = metrics.get(trade.symbol) || {
        symbol: trade.symbol,
        successfulTrades: 0,
        totalTrades: 0,
        avgHoldTime: 0,
        bestTimeToBuy: 0,
        avgProfitPercent: 0,
        mcapRange: {
          min: Infinity,
          max: 0,
          optimal: 0
        }
      };

      // Update metrics
      existing.totalTrades++;
      if (trade.profitPercent > 20) {
        existing.successfulTrades++;
      }

      // Update mcap range
      existing.mcapRange.min = Math.min(existing.mcapRange.min, trade.mcapAtBuy);
      existing.mcapRange.max = Math.max(existing.mcapRange.max, trade.mcapAtBuy);
      
      // If this was a profitable trade, consider it for optimal mcap
      if (trade.profitPercent > 20) {
        existing.mcapRange.optimal = trade.mcapAtBuy;
      }

      // Update averages
      existing.avgHoldTime = (existing.avgHoldTime * (existing.totalTrades - 1) + trade.holdTime) / existing.totalTrades;
      existing.avgProfitPercent = (existing.avgProfitPercent * (existing.totalTrades - 1) + trade.profitPercent) / existing.totalTrades;

      metrics.set(trade.symbol, existing);
    });

    this.tokenMetrics = metrics;
  }

  calculateHotness(trade: any): number {
    let score = 0;
    const metrics = this.tokenMetrics.get(trade.symbol);
    
    // Volume Score (0-25 points)
    const volInSol = trade.sol_amount / 1e9;
    score += Math.min(25, volInSol * 2);

    // Market Cap Score (0-25 points)
    const mcapInK = trade.usd_market_cap / 1000;
    if (metrics) {
      // If we have historical data for this token
      const optimalMcap = metrics.mcapRange.optimal;
      const mcapDistance = Math.abs(mcapInK - optimalMcap) / optimalMcap;
      score += Math.min(25, 25 * (1 - mcapDistance));
    } else {
      // Default mcap scoring if no history
      if (mcapInK < 100) score += 25;
      else if (mcapInK < 500) score += 15;
      else if (mcapInK < 1000) score += 10;
    }

    // Historical Performance Score (0-25 points)
    if (metrics) {
      const successRate = metrics.successfulTrades / metrics.totalTrades;
      score += successRate * 25;
    }

    // Time-based Score (0-25 points)
    const hour = new Date().getHours();
    if (metrics && metrics.bestTimeToBuy === hour) {
      score += 25;
    } else {
      // Default time scoring
      const isActiveHours = hour >= 12 && hour <= 20;  // 12 PM to 8 PM UTC
      if (isActiveHours) score += 15;
    }

    return Math.round(score);
  }

  getTokenInsights(symbol: string) {
    const metrics = this.tokenMetrics.get(symbol);
    if (!metrics) return null;

    return {
      successRate: `${((metrics.successfulTrades / metrics.totalTrades) * 100).toFixed(1)}%`,
      avgProfit: `${metrics.avgProfitPercent.toFixed(1)}%`,
      avgHoldTime: `${Math.round(metrics.avgHoldTime)} minutes`,
      optimalMcap: `$${(metrics.mcapRange.optimal / 1000).toFixed(1)}k`,
      totalTrades: metrics.totalTrades
    };
  }
} 
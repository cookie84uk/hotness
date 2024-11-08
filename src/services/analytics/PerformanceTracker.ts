interface TradeMetrics {
  winRate: number;
  averageProfit: number;
  bestTrade: number;
  worstTrade: number;
  totalTrades: number;
  profitableTrades: number;
  averageHoldTime: number;
}

interface TimeBasedMetrics {
  hourly: TradeMetrics;
  daily: TradeMetrics;
  weekly: TradeMetrics;
}

export class PerformanceTracker {
  calculateMetrics(trades: PaperTrade[]): TimeBasedMetrics {
    return {
      hourly: this.getMetricsForPeriod(trades, 60 * 60 * 1000),
      daily: this.getMetricsForPeriod(trades, 24 * 60 * 60 * 1000),
      weekly: this.getMetricsForPeriod(trades, 7 * 24 * 60 * 60 * 1000)
    };
  }

  private getMetricsForPeriod(trades: PaperTrade[], period: number): TradeMetrics {
    const now = Date.now();
    const periodTrades = trades.filter(t => now - t.timestamp < period);
    const closedTrades = periodTrades.filter(t => t.status === 'closed');
    
    const profits = closedTrades.map(t => t.profit || 0);
    const profitableTrades = closedTrades.filter(t => (t.profit || 0) > 0);
    
    return {
      winRate: closedTrades.length > 0 ? profitableTrades.length / closedTrades.length : 0,
      averageProfit: profits.reduce((a, b) => a + b, 0) / profits.length || 0,
      bestTrade: Math.max(...profits, 0),
      worstTrade: Math.min(...profits, 0),
      totalTrades: periodTrades.length,
      profitableTrades: profitableTrades.length,
      averageHoldTime: this.calculateAverageHoldTime(closedTrades)
    };
  }

  private calculateAverageHoldTime(trades: PaperTrade[]): number {
    if (trades.length === 0) return 0;
    return trades.reduce((sum, trade) => 
      sum + ((trade.exitTimestamp || Date.now()) - trade.timestamp), 0
    ) / trades.length;
  }
} 
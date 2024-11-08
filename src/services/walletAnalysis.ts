import { Connection, PublicKey } from '@solana/web3.js';

export class WalletAnalyzer {
  private readonly RISK_FREE_RATE = 0.02; // 2% annual risk-free rate

  async analyzeWallet(): Promise<WalletStats> {
    const trades = await paperTradingService.getAllTrades();
    const metrics = this.calculateTradeMetrics(trades);
    
    const successRate = this.calculateSuccessRate(trades);
    const averageProfit = this.calculateAverageProfit(trades);
    const totalProfit = this.calculateTotalProfit(trades);
    const maxDrawdown = this.calculateMaxDrawdown(trades);
    const sharpeRatio = this.calculateSharpeRatio(metrics);
    const riskScore = this.calculateRiskScore({
      successRate,
      maxDrawdown,
      sharpeRatio
    });

    return {
      totalTrades: trades.length,
      successRate,
      averageProfit,
      totalProfit,
      maxDrawdown,
      sharpeRatio,
      riskScore
    };
  }

  private calculateTradeMetrics(trades: PaperTrade[]): TradeMetrics[] {
    return trades.map(trade => {
      const profit = trade.profit || 0;
      const duration = trade.exitPrice ? 
        (trade.timestamp - trade.timestamp) : 
        (Date.now() - trade.timestamp);
      const investment = trade.amount * trade.entryPrice;
      const roi = profit / investment;

      return { profit, duration, roi };
    });
  }

  private calculateSuccessRate(trades: PaperTrade[]): number {
    if (trades.length === 0) return 0;
    
    const profitableTrades = trades.filter(trade => (trade.profit || 0) > 0);
    return profitableTrades.length / trades.length;
  }

  private calculateAverageProfit(trades: PaperTrade[]): number {
    if (trades.length === 0) return 0;
    
    const totalProfit = trades.reduce((sum, trade) => sum + (trade.profit || 0), 0);
    return totalProfit / trades.length;
  }

  private calculateTotalProfit(trades: PaperTrade[]): number {
    return trades.reduce((sum, trade) => sum + (trade.profit || 0), 0);
  }

  private calculateMaxDrawdown(trades: PaperTrade[]): number {
    if (trades.length === 0) return 0;

    let peak = 0;
    let maxDrawdown = 0;
    let runningTotal = 0;

    trades.forEach(trade => {
      runningTotal += (trade.profit || 0);
      
      if (runningTotal > peak) {
        peak = runningTotal;
      }

      const drawdown = (peak - runningTotal) / peak;
      if (drawdown > maxDrawdown) {
        maxDrawdown = drawdown;
      }
    });

    return maxDrawdown;
  }

  private calculateSharpeRatio(metrics: TradeMetrics[]): number {
    if (metrics.length === 0) return 0;

    const returns = metrics.map(m => m.roi);
    const averageReturn = returns.reduce((sum, r) => sum + r, 0) / returns.length;
    
    // Calculate standard deviation
    const variance = returns.reduce((sum, r) => 
      sum + Math.pow(r - averageReturn, 2), 0
    ) / returns.length;
    const stdDev = Math.sqrt(variance);

    // Annualize the returns and standard deviation
    const annualizedReturn = averageReturn * 365;
    const annualizedStdDev = stdDev * Math.sqrt(365);

    return (annualizedReturn - this.RISK_FREE_RATE) / annualizedStdDev;
  }

  private calculateRiskScore(metrics: {
    successRate: number;
    maxDrawdown: number;
    sharpeRatio: number;
  }): number {
    // Convert metrics to 0-100 scale
    const successScore = metrics.successRate * 100;
    const drawdownScore = (1 - metrics.maxDrawdown) * 100;
    const sharpeScore = Math.min(Math.max(metrics.sharpeRatio * 20, 0), 100);

    // Weighted average
    return (
      successScore * 0.4 +
      drawdownScore * 0.3 +
      sharpeScore * 0.3
    );
  }

  async getTokenPerformance(mint: string): Promise<{
    trades: PaperTrade[];
    stats: WalletStats;
  }> {
    const allTrades = await paperTradingService.getAllTrades();
    const tokenTrades = allTrades.filter(trade => trade.mint === mint);
    
    const stats = {
      totalTrades: tokenTrades.length,
      successRate: this.calculateSuccessRate(tokenTrades),
      averageProfit: this.calculateAverageProfit(tokenTrades),
      totalProfit: this.calculateTotalProfit(tokenTrades),
      maxDrawdown: this.calculateMaxDrawdown(tokenTrades),
      sharpeRatio: this.calculateSharpeRatio(this.calculateTradeMetrics(tokenTrades)),
      riskScore: 0 // Will be calculated below
    };

    stats.riskScore = this.calculateRiskScore({
      successRate: stats.successRate,
      maxDrawdown: stats.maxDrawdown,
      sharpeRatio: stats.sharpeRatio
    });

    return { trades: tokenTrades, stats };
  }
}

export const walletAnalyzer = new WalletAnalyzer();
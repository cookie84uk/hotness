interface PerformanceMetrics {
  winRate: number;
  profitFactor: number;
  averageReturn: number;
  sharpeRatio: number;
  maxDrawdown: number;
  recoveryFactor: number;
  dailyStats: {
    date: string;
    trades: number;
    winRate: number;
    pnl: number;
  }[];
}

export class PerformanceMonitor {
  private metrics: PerformanceMetrics | null = null;
  private updateInterval: NodeJS.Timer | null = null;
  private listeners: Set<(metrics: PerformanceMetrics) => void> = new Set();

  startMonitoring(interval: number = 60000) {
    if (this.updateInterval) return;

    this.updateInterval = setInterval(() => {
      this.updateMetrics();
    }, interval);

    // Initial update
    this.updateMetrics();
  }

  stopMonitoring() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
      this.updateInterval = null;
    }
  }

  private async updateMetrics() {
    const trades = await paperTradingService.getAllTrades();
    const dailyTrades = this.groupTradesByDay(trades);

    const winningTrades = trades.filter(t => (t.profit || 0) > 0);
    const losingTrades = trades.filter(t => (t.profit || 0) < 0);

    const grossProfit = winningTrades.reduce((sum, t) => sum + (t.profit || 0), 0);
    const grossLoss = Math.abs(losingTrades.reduce((sum, t) => sum + (t.profit || 0), 0));

    this.metrics = {
      winRate: winningTrades.length / trades.length,
      profitFactor: grossLoss === 0 ? Infinity : grossProfit / grossLoss,
      averageReturn: trades.reduce((sum, t) => sum + (t.profit || 0), 0) / trades.length,
      sharpeRatio: this.calculateSharpeRatio(trades),
      maxDrawdown: this.calculateMaxDrawdown(trades),
      recoveryFactor: this.calculateRecoveryFactor(trades),
      dailyStats: this.calculateDailyStats(dailyTrades)
    };

    this.notifyListeners();
  }

  private groupTradesByDay(trades: PaperTrade[]): Map<string, PaperTrade[]> {
    const grouped = new Map<string, PaperTrade[]>();
    
    trades.forEach(trade => {
      const date = new Date(trade.timestamp).toISOString().split('T')[0];
      if (!grouped.has(date)) {
        grouped.set(date, []);
      }
      grouped.get(date)!.push(trade);
    });

    return grouped;
  }

  private calculateSharpeRatio(trades: PaperTrade[]): number {
    const returns = trades.map(t => (t.profit || 0) / (t.amount * t.entryPrice));
    const avgReturn = returns.reduce((sum, r) => sum + r, 0) / returns.length;
    const stdDev = Math.sqrt(
      returns.reduce((sum, r) => sum + Math.pow(r - avgReturn, 2), 0) / returns.length
    );

    return stdDev === 0 ? 0 : avgReturn / stdDev;
  }

  private calculateMaxDrawdown(trades: PaperTrade[]): number {
    let peak = 0;
    let maxDrawdown = 0;
    let runningPnL = 0;

    trades.forEach(trade => {
      runningPnL += (trade.profit || 0);
      peak = Math.max(peak, runningPnL);
      maxDrawdown = Math.max(maxDrawdown, (peak - runningPnL) / peak);
    });

    return maxDrawdown;
  }

  private calculateRecoveryFactor(trades: PaperTrade[]): number {
    const totalProfit = trades.reduce((sum, t) => sum + (t.profit || 0), 0);
    const maxDrawdown = this.calculateMaxDrawdown(trades);
    
    return maxDrawdown === 0 ? 0 : totalProfit / maxDrawdown;
  }

  private calculateDailyStats(dailyTrades: Map<string, PaperTrade[]>) {
    return Array.from(dailyTrades.entries()).map(([date, trades]) => ({
      date,
      trades: trades.length,
      winRate: trades.filter(t => (t.profit || 0) > 0).length / trades.length,
      pnl: trades.reduce((sum, t) => sum + (t.profit || 0), 0)
    }));
  }

  getMetrics(): PerformanceMetrics | null {
    return this.metrics;
  }

  addListener(callback: (metrics: PerformanceMetrics) => void) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  private notifyListeners() {
    if (this.metrics) {
      this.listeners.forEach(callback => callback(this.metrics!));
    }
  }
}

export const performanceMonitor = new PerformanceMonitor(); 
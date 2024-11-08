interface BacktestConfig {
  startTime: number;
  endTime: number;
  initialBalance: number;
  patterns: TradePattern[];
  riskPerTrade: number;
  maxConcurrentTrades: number;
  minConfidence: number;
}

interface BacktestResult {
  trades: PaperTrade[];
  finalBalance: number;
  totalProfit: number;
  winRate: number;
  maxDrawdown: number;
  sharpeRatio: number;
  patternPerformance: Map<string, {
    trades: number;
    winRate: number;
    averageReturn: number;
    profitFactor: number;
  }>;
}

export class BacktestService {
  async runBacktest(tokens: string[], config: BacktestConfig): Promise<BacktestResult> {
    const trades: PaperTrade[] = [];
    let balance = config.initialBalance;
    let maxBalance = balance;
    let maxDrawdown = 0;
    const returns: number[] = [];

    // Load historical data
    const historicalData = await this.loadHistoricalData(tokens, config);
    
    // Simulate trading through time
    for (let timestamp = config.startTime; timestamp <= config.endTime; timestamp += 60000) {
      // Update current positions
      const openTrades = trades.filter(t => t.status === 'open');
      for (const trade of openTrades) {
        const currentPrice = this.getCurrentPrice(historicalData, trade.mint, timestamp);
        
        // Check stop loss and take profit
        if (this.shouldCloseTrade(trade, currentPrice)) {
          this.closeTrade(trade, currentPrice, timestamp);
          balance += trade.profit!;
          maxBalance = Math.max(maxBalance, balance);
          maxDrawdown = Math.max(maxDrawdown, (maxBalance - balance) / maxBalance);
          returns.push(trade.profit! / trade.amount);
        }
      }

      // Look for new trading opportunities
      if (openTrades.length < config.maxConcurrentTrades) {
        const opportunities = await this.findOpportunities(
          historicalData,
          timestamp,
          config.patterns,
          config.minConfidence
        );

        for (const opp of opportunities) {
          if (openTrades.length >= config.maxConcurrentTrades) break;

          const positionSize = this.calculatePositionSize(
            balance,
            config.riskPerTrade,
            opp.risk
          );

          if (positionSize > 0) {
            const trade = this.openTrade(
              opp.mint,
              positionSize,
              opp.entry,
              opp.stopLoss,
              opp.takeProfit,
              timestamp
            );
            trades.push(trade);
            balance -= positionSize;
          }
        }
      }
    }

    // Close any remaining trades
    const finalTimestamp = config.endTime;
    for (const trade of trades.filter(t => t.status === 'open')) {
      const finalPrice = this.getCurrentPrice(historicalData, trade.mint, finalTimestamp);
      this.closeTrade(trade, finalPrice, finalTimestamp);
      balance += trade.profit!;
    }

    return {
      trades,
      finalBalance: balance,
      totalProfit: balance - config.initialBalance,
      winRate: this.calculateWinRate(trades),
      maxDrawdown,
      sharpeRatio: this.calculateSharpeRatio(returns),
      patternPerformance: this.analyzePatternPerformance(trades, config.patterns)
    };
  }

  private async loadHistoricalData(tokens: string[], config: BacktestConfig) {
    const data = new Map<string, {
      prices: [number, number][]; // [timestamp, price]
      volumes: [number, number][]; // [timestamp, volume]
      hotnessScores: [number, number][]; // [timestamp, score]
    }>();

    for (const mint of tokens) {
      data.set(mint, {
        prices: await priceHistoryService.getPrices(mint, config.startTime, config.endTime),
        volumes: await volumeHistoryService.getVolumes(mint, config.startTime, config.endTime),
        hotnessScores: await scoreManager.getHistoricalScores(mint, config.startTime, config.endTime)
      });
    }

    return data;
  }

  private async findOpportunities(
    historicalData: Map<string, any>,
    timestamp: number,
    patterns: TradePattern[],
    minConfidence: number
  ) {
    const opportunities = [];

    for (const [mint, data] of historicalData.entries()) {
      const currentPrice = this.getCurrentPrice(historicalData, mint, timestamp);
      const recentData = this.getRecentData(data, timestamp);

      for (const pattern of patterns) {
        const match = await this.matchPattern(pattern, recentData);
        if (match.confidence >= minConfidence) {
          opportunities.push({
            mint,
            pattern: pattern.pattern,
            confidence: match.confidence,
            entry: currentPrice,
            stopLoss: this.calculateStopLoss(currentPrice, pattern, recentData),
            takeProfit: this.calculateTakeProfit(currentPrice, pattern, recentData),
            risk: (currentPrice - this.calculateStopLoss(currentPrice, pattern, recentData)) / currentPrice
          });
        }
      }
    }

    return opportunities.sort((a, b) => b.confidence - a.confidence);
  }

  private calculateSharpeRatio(returns: number[]): number {
    if (returns.length === 0) return 0;
    const avgReturn = returns.reduce((a, b) => a + b, 0) / returns.length;
    const stdDev = Math.sqrt(
      returns.reduce((sum, ret) => sum + Math.pow(ret - avgReturn, 2), 0) / returns.length
    );
    return stdDev === 0 ? 0 : avgReturn / stdDev;
  }

  private analyzePatternPerformance(trades: PaperTrade[], patterns: TradePattern[]) {
    const performance = new Map<string, {
      trades: number;
      winRate: number;
      averageReturn: number;
      profitFactor: number;
    }>();

    for (const pattern of patterns) {
      const patternTrades = trades.filter(t => t.pattern === pattern.pattern);
      const wins = patternTrades.filter(t => (t.profit || 0) > 0).length;
      const grossProfit = patternTrades
        .filter(t => (t.profit || 0) > 0)
        .reduce((sum, t) => sum + (t.profit || 0), 0);
      const grossLoss = Math.abs(
        patternTrades
          .filter(t => (t.profit || 0) < 0)
          .reduce((sum, t) => sum + (t.profit || 0), 0)
      );

      performance.set(pattern.pattern, {
        trades: patternTrades.length,
        winRate: patternTrades.length > 0 ? wins / patternTrades.length : 0,
        averageReturn: patternTrades.length > 0 ?
          patternTrades.reduce((sum, t) => sum + (t.profit || 0), 0) / patternTrades.length : 0,
        profitFactor: grossLoss === 0 ? Infinity : grossProfit / grossLoss
      });
    }

    return performance;
  }
}

export const backtestService = new BacktestService(); 
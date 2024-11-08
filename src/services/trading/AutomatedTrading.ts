interface TradingStrategy {
  id: string;
  parameters: Record<string, number>;
  enabled: boolean;
}

interface ExecutionState {
  activeOrders: Map<string, PaperTrade>;
  lastCheck: number;
  errors: string[];
}

export class AutomatedTrading {
  private strategies: Map<string, TradingStrategy> = new Map();
  private executionState: ExecutionState = {
    activeOrders: new Map(),
    lastCheck: 0,
    errors: []
  };
  private isRunning: boolean = false;

  async start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.runTradingLoop();
  }

  stop() {
    this.isRunning = false;
  }

  private async runTradingLoop() {
    while (this.isRunning) {
      try {
        await this.checkAndExecuteTrades();
        await this.manageOpenPositions();
        await new Promise(resolve => setTimeout(resolve, 1000)); // 1-second delay
      } catch (error) {
        console.error('Trading loop error:', error);
        this.executionState.errors.push(error.message);
      }
    }
  }

  private async checkAndExecuteTrades() {
    const tokens = tokenListService.getActiveTokens();
    const enabledStrategies = Array.from(this.strategies.values())
      .filter(s => s.enabled);

    for (const strategy of enabledStrategies) {
      for (const mint of tokens) {
        if (this.shouldEnterTrade(mint, strategy)) {
          await this.executeEntry(mint, strategy);
        }
      }
    }
  }

  private async manageOpenPositions() {
    for (const [orderId, trade] of this.executionState.activeOrders) {
      const currentPrice = await priceService.getPrice(trade.mint);
      
      if (this.shouldExit(trade, currentPrice)) {
        await this.executeExit(trade, currentPrice);
        this.executionState.activeOrders.delete(orderId);
      }
    }
  }

  private shouldEnterTrade(mint: string, strategy: TradingStrategy): boolean {
    // Implement entry logic based on strategy parameters
    const score = scoreManager.getCurrentScore(mint);
    const volume = volumeService.getCurrentVolume(mint);
    
    return (
      score >= strategy.parameters.entryThreshold &&
      volume >= strategy.parameters.minVolume &&
      this.executionState.activeOrders.size < strategy.parameters.maxConcurrentTrades
    );
  }

  private shouldExit(trade: PaperTrade, currentPrice: number): boolean {
    const priceChange = (currentPrice - trade.entryPrice) / trade.entryPrice;
    
    return (
      priceChange <= -trade.stopLoss ||
      priceChange >= trade.takeProfit ||
      Date.now() - trade.timestamp >= trade.maxHoldTime
    );
  }

  private async executeEntry(mint: string, strategy: TradingStrategy) {
    try {
      const price = await priceService.getPrice(mint);
      const positionSize = this.calculatePositionSize(strategy, price);
      
      const trade = await paperTradingService.openTrade({
        mint,
        amount: positionSize,
        entryPrice: price,
        stopLoss: strategy.parameters.stopLossPercent / 100,
        takeProfit: strategy.parameters.takeProfitPercent / 100,
        maxHoldTime: strategy.parameters.maxHoldTime,
        strategyId: strategy.id
      });

      this.executionState.activeOrders.set(trade.id, trade);
    } catch (error) {
      console.error('Entry execution failed:', error);
      this.executionState.errors.push(`Entry failed for ${mint}: ${error.message}`);
    }
  }

  private async executeExit(trade: PaperTrade, currentPrice: number) {
    try {
      await paperTradingService.closeTrade(trade.id, currentPrice);
    } catch (error) {
      console.error('Exit execution failed:', error);
      this.executionState.errors.push(`Exit failed for ${trade.id}: ${error.message}`);
    }
  }

  private calculatePositionSize(strategy: TradingStrategy, price: number): number {
    const balance = paperTradingService.getBalance();
    return balance * (strategy.parameters.positionSizePercent / 100);
  }

  // Strategy management methods
  addStrategy(strategy: TradingStrategy) {
    this.strategies.set(strategy.id, strategy);
  }

  removeStrategy(strategyId: string) {
    this.strategies.delete(strategyId);
  }

  updateStrategy(strategyId: string, updates: Partial<TradingStrategy>) {
    const strategy = this.strategies.get(strategyId);
    if (strategy) {
      this.strategies.set(strategyId, { ...strategy, ...updates });
    }
  }

  getExecutionState(): ExecutionState {
    return { ...this.executionState };
  }
}

export const automatedTrading = new AutomatedTrading();
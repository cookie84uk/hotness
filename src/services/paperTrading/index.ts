import { PaperTrade, TokenData } from '../../types';

export class PaperTradingSystem {
  private trades: PaperTrade[] = [];

  addTrade(token: TokenData, amount: number, type: 'buy' | 'sell') {
    const trade: PaperTrade = {
      tokenMint: token.mint,
      amount,
      price: token.price,
      timestamp: Date.now(),
      type,
      success: null, // Will be calculated on sell
      holdingTime: 0
    };

    this.trades.push(trade);
    this.updateMetrics();
  }

  getTokenMetrics(mint: string) {
    const tokenTrades = this.trades.filter(t => t.tokenMint === mint);
    return {
      totalTrades: tokenTrades.length,
      successRate: this.calculateSuccessRate(tokenTrades),
      averageHoldTime: this.calculateAverageHoldTime(tokenTrades),
      profitLoss: this.calculateProfitLoss(tokenTrades)
    };
  }
} 
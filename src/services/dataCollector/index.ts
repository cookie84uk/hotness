import { socketService } from '../socketService';
import { Trade, TokenData } from '../../types';

export class DataCollector {
  private trades: Map<string, Trade[]> = new Map();
  private tokens: Map<string, TokenData> = new Map();
  private listeners: ((update: TokenData) => void)[] = [];

  constructor() {
    this.initializeWebSocket();
  }

  private initializeWebSocket() {
    socketService.addTradeListener((trade) => {
      this.processTrade(trade);
    });
  }

  private processTrade(trade: Trade) {
    // Get existing trades for this token
    const tokenTrades = this.trades.get(trade.mint) || [];
    
    // Add new trade and keep last 5 minutes of trades
    tokenTrades.unshift(trade);
    const fiveMinutesAgo = Date.now() - 5 * 60 * 1000;
    const recentTrades = tokenTrades.filter(t => t.timestamp > fiveMinutesAgo);
    
    this.trades.set(trade.mint, recentTrades);
    this.updateTokenMetrics(trade.mint);
  }

  private updateTokenMetrics(mint: string) {
    const trades = this.trades.get(mint) || [];
    const token = this.tokens.get(mint);
    
    if (!token) return;

    const updatedToken = {
      ...token,
      price: trades[0]?.price || token.price,
      volume24h: this.calculateVolume(trades),
      hotness: this.calculateHotness(trades)
    };

    this.tokens.set(mint, updatedToken);
    this.notifyListeners(updatedToken);
  }

  private calculateHotness(trades: Trade[]): number {
    if (trades.length === 0) return 0;

    const volumeScore = this.getVolumeScore(trades);
    const buyPressureScore = this.getBuyPressureScore(trades);
    const velocityScore = this.getVelocityScore(trades);
    const uniqueBuyersScore = this.getUniqueBuyersScore(trades);

    return (
      volumeScore * 0.3 +
      buyPressureScore * 0.3 +
      velocityScore * 0.2 +
      uniqueBuyersScore * 0.2
    ) * 100;
  }

  private getVolumeScore(trades: Trade[]): number {
    const totalVolume = trades.reduce((sum, t) => sum + t.sol_amount, 0);
    return Math.min(totalVolume / 100, 1); // Normalize to 0-1
  }

  private getBuyPressureScore(trades: Trade[]): number {
    const buys = trades.filter(t => t.is_buy).length;
    return trades.length > 0 ? buys / trades.length : 0;
  }

  private getVelocityScore(trades: Trade[]): number {
    if (trades.length < 2) return 0;
    const timeSpan = trades[0].timestamp - trades[trades.length - 1].timestamp;
    return Math.min(trades.length / (timeSpan / 1000) * 10, 1);
  }

  private getUniqueBuyersScore(trades: Trade[]): number {
    const uniqueBuyers = new Set(trades.map(t => t.mint)).size;
    return Math.min(uniqueBuyers / 20, 1);
  }

  addListener(callback: (update: TokenData) => void) {
    this.listeners.push(callback);
    return () => this.removeListener(callback);
  }

  removeListener(callback: (update: TokenData) => void) {
    this.listeners = this.listeners.filter(cb => cb !== callback);
  }

  private notifyListeners(token: TokenData) {
    this.listeners.forEach(callback => callback(token));
  }
}

export const dataCollector = new DataCollector(); 
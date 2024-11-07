interface TokenData {
  mint: string;
  name: string;
  symbol: string;
  createdAt: number;
  lastTrade: {
    price: number;
    timestamp: number;
    is_buy: boolean;
    sol_amount: number;
  };
  metrics: {
    volume5m: number;
    trades5m: number;
    highPrice5m: number;
    lowPrice5m: number;
  };
}

export class PumpFunService {
  private tokens: Map<string, TokenData> = new Map();
  private listeners: Set<(trade: any) => void> = new Set();

  private handleMessage(data: string) {
    if (data.startsWith('42["tradeCreated"')) {
      try {
        const [, trade] = JSON.parse(data.slice(2));
        
        // Emit real-time trade immediately
        this.listeners.forEach(listener => listener(trade));

        // Update our metrics in background
        this.updateMetrics(trade);
      } catch (error) {
        console.error('Error processing trade:', error);
      }
    }
  }

  private updateMetrics(trade: any) {
    const now = Date.now();
    const price = trade.sol_amount / trade.token_amount;

    let tokenData = this.tokens.get(trade.mint);
    
    if (!tokenData) {
      // New token
      tokenData = {
        mint: trade.mint,
        name: trade.name,
        symbol: trade.symbol,
        createdAt: trade.created_timestamp,
        lastTrade: {
          price,
          timestamp: now,
          is_buy: trade.is_buy,
          sol_amount: trade.sol_amount
        },
        metrics: {
          volume5m: trade.sol_amount,
          trades5m: 1,
          highPrice5m: price,
          lowPrice5m: price
        }
      };
    } else {
      // Update existing token
      tokenData.lastTrade = {
        price,
        timestamp: now,
        is_buy: trade.is_buy,
        sol_amount: trade.sol_amount
      };
      tokenData.metrics.volume5m += trade.sol_amount;
      tokenData.metrics.trades5m++;
      tokenData.metrics.highPrice5m = Math.max(tokenData.metrics.highPrice5m, price);
      tokenData.metrics.lowPrice5m = Math.min(tokenData.metrics.lowPrice5m, price);
    }

    this.tokens.set(trade.mint, tokenData);
  }

  // Subscribe to real-time trades
  public onTrade(callback: (trade: any) => void) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback); // Return unsubscribe function
  }

  // Get token metrics
  public getTokenMetrics(mint: string) {
    return this.tokens.get(mint);
  }

  // Get all active tokens sorted by recent activity
  public getActiveTokens() {
    const now = Date.now();
    const activeTokens = Array.from(this.tokens.values())
      .filter(token => now - token.lastTrade.timestamp < 5 * 60 * 1000) // Active in last 5 mins
      .sort((a, b) => b.lastTrade.timestamp - a.lastTrade.timestamp);
    return activeTokens;
  }

  // Get new launches (tokens created in last 5 minutes)
  public getNewLaunches() {
    const now = Date.now();
    return Array.from(this.tokens.values())
      .filter(token => now - token.createdAt < 5 * 60 * 1000)
      .sort((a, b) => b.createdAt - a.createdAt);
  }
} 
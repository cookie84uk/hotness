interface PaperTrade {
  id: string;
  timestamp: number;
  tokenMint: string;
  tokenName: string;
  tokenSymbol: string;
  buyPrice: number;
  sellPrice?: number;
  amountSOL: number;
  status: 'open' | 'closed';
  pnl?: number;          // Profit/Loss in SOL
  pnlPercent?: number;   // Profit/Loss percentage
  mode: 'degen' | 'normie';
  score: number;         // Hotness score at time of buy
  signals: string[];     // Signals that triggered buy
}

interface UserProfile {
  publicKey: string;
  paperTrades: PaperTrade[];
  stats: {
    totalTrades: number;
    winningTrades: number;
    totalPnL: number;
    avgPnL: number;
    bestTrade: number;
    worstTrade: number;
    degenWinRate: number;
    normieWinRate: number;
  };
  preferences: {
    mode: 'degen' | 'normie';
    notifications: boolean;
    autoClose: boolean;  // Auto close losing trades
    stopLoss: number;    // Default stop loss %
    takeProfit: number;  // Default take profit %
  };
} 
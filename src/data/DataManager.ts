import { Trade, TokenMetadata, Analysis } from './types';

export class DataManager {
  private static instance: DataManager;
  private tokenData: Map<string, TokenMetadata>;
  private tradeHistory: Map<string, Trade[]>;
  private analysisHistory: Map<string, Analysis[]>;

  private constructor() {
    this.tokenData = new Map();
    this.tradeHistory = new Map();
    this.analysisHistory = new Map();
  }

  static getInstance(): DataManager {
    if (!DataManager.instance) {
      DataManager.instance = new DataManager();
    }
    return DataManager.instance;
  }

  updateToken(symbol: string, trade: Trade) {
    // Update token data
    let metadata = this.tokenData.get(symbol) || {};
    this.tokenData.set(symbol, metadata);

    // Update trade history
    let history = this.tradeHistory.get(symbol) || [];
    history.push(trade);
    if (history.length > 1000) history.shift(); // Keep last 1000 trades
    this.tradeHistory.set(symbol, history);
  }

  getTokenMetadata(symbol: string): TokenMetadata | undefined {
    return this.tokenData.get(symbol);
  }

  addAnalysis(symbol: string, analysis: Analysis) {
    let history = this.analysisHistory.get(symbol) || [];
    history.push(analysis);
    if (history.length > 100) history.shift(); // Keep last 100 analyses
    this.analysisHistory.set(symbol, history);
  }

  getRecentAnalysis(symbol: string): Analysis | undefined {
    const history = this.analysisHistory.get(symbol);
    return history?.[history.length - 1];
  }
} 
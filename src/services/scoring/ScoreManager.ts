import { scoringEngine } from './engine';
import { socketService } from '../socketService';
import { TokenData, Trade, WhaleActivity } from '../../types';

interface TokenScoreData {
  scores: number[];
  timestamps: number[];
  trades: Trade[];
  whaleActivities: WhaleActivity[];
}

interface TokenScore {
  mint: string;
  score: number;
  lastUpdated: number;
}

export class ScoreManager {
  private tokenScores: Map<string, TokenScoreData> = new Map();
  private listeners: Map<string, Set<(score: number) => void>> = new Map();
  private scores: Map<string, TokenScore> = new Map();
  private readonly SCORE_TTL = 5 * 60 * 1000; // 5 minutes

  constructor() {
    this.initializeSocketListeners();
  }

  private initializeSocketListeners() {
    socketService.addTradeListener((trade) => {
      this.processTrade(trade);
    });

    socketService.addWhaleListener((activity) => {
      this.processWhaleActivity(activity);
    });
  }

  private processTrade(trade: Trade) {
    const scoreData = this.getOrCreateScoreData(trade.mint);
    scoreData.trades.unshift(trade);
    
    // Keep last 5 minutes of trades
    const fiveMinutesAgo = Date.now() - 5 * 60 * 1000;
    scoreData.trades = scoreData.trades.filter(t => t.timestamp > fiveMinutesAgo);
    
    this.updateScore(trade.mint);
  }

  private processWhaleActivity(activity: WhaleActivity) {
    const scoreData = this.getOrCreateScoreData(activity.mint);
    scoreData.whaleActivities.unshift(activity);
    
    // Keep last 5 minutes of whale activities
    const fiveMinutesAgo = Date.now() - 5 * 60 * 1000;
    scoreData.whaleActivities = scoreData.whaleActivities.filter(
      w => w.timestamp > fiveMinutesAgo
    );
    
    this.updateScore(activity.mint);
  }

  private getOrCreateScoreData(mint: string): TokenScoreData {
    if (!this.tokenScores.has(mint)) {
      this.tokenScores.set(mint, {
        scores: [],
        timestamps: [],
        trades: [],
        whaleActivities: []
      });
    }
    return this.tokenScores.get(mint)!;
  }

  private updateScore(mint: string) {
    const scoreData = this.tokenScores.get(mint)!;
    const token: TokenData = {
      mint,
      // ... other token data would come from your token service
    };

    const newScore = scoringEngine.calculateHotness(
      token,
      scoreData.trades,
      scoreData.whaleActivities
    );

    scoreData.scores.unshift(newScore);
    scoreData.timestamps.unshift(Date.now());

    // Keep last 100 scores
    if (scoreData.scores.length > 100) {
      scoreData.scores.pop();
      scoreData.timestamps.pop();
    }

    this.notifyListeners(mint, newScore);
  }

  subscribeToScore(mint: string, callback: (score: number) => void) {
    if (!this.listeners.has(mint)) {
      this.listeners.set(mint, new Set());
    }
    this.listeners.get(mint)!.add(callback);

    // Return unsubscribe function
    return () => {
      this.listeners.get(mint)?.delete(callback);
    };
  }

  private notifyListeners(mint: string, score: number) {
    this.listeners.get(mint)?.forEach(callback => callback(score));
  }

  getScoreHistory(mint: string) {
    return this.tokenScores.get(mint) || {
      scores: [],
      timestamps: [],
      trades: [],
      whaleActivities: []
    };
  }

  async getScore(mint: string): Promise<number> {
    const cached = this.scores.get(mint);
    if (cached && Date.now() - cached.lastUpdated < this.SCORE_TTL) {
      return cached.score;
    }

    const score = await this.calculateScore(mint);
    this.scores.set(mint, {
      mint,
      score,
      lastUpdated: Date.now()
    });

    return score;
  }

  private async calculateScore(mint: string): Promise<number> {
    // Implement your scoring logic here
    // This should include factors like:
    // - Volume trends
    // - Price stability
    // - Market cap
    // - Holder distribution
    // - Trading activity
    
    // Placeholder implementation
    return Math.random() * 100;
  }

  clearCache() {
    this.scores.clear();
  }

  invalidateScore(mint: string) {
    this.scores.delete(mint);
  }
}

export const scoreManager = new ScoreManager(); 
interface JournalEntry {
  id: string;
  tradeId: string;
  mint: string;
  entryPrice: number;
  exitPrice: number | null;
  amount: number;
  profit: number | null;
  strategy: string;
  emotions: 'calm' | 'excited' | 'fearful' | 'greedy' | 'neutral';
  notes: string;
  lessons: string[];
  screenshots: string[];
  timestamp: number;
  tags: string[];
}

export class TradeJournal {
  private entries: Map<string, JournalEntry> = new Map();

  addEntry(entry: Omit<JournalEntry, 'id'>) {
    const id = crypto.randomUUID();
    const newEntry = { ...entry, id };
    this.entries.set(id, newEntry);
    this.saveToStorage();
    return newEntry;
  }

  updateEntry(id: string, updates: Partial<JournalEntry>) {
    const entry = this.entries.get(id);
    if (!entry) return null;

    const updatedEntry = { ...entry, ...updates };
    this.entries.set(id, updatedEntry);
    this.saveToStorage();
    return updatedEntry;
  }

  getEntries(filters?: {
    mint?: string;
    dateRange?: { start: number; end: number };
    profitable?: boolean;
    strategy?: string;
    tags?: string[];
  }) {
    let filtered = Array.from(this.entries.values());

    if (filters) {
      if (filters.mint) {
        filtered = filtered.filter(e => e.mint === filters.mint);
      }
      if (filters.dateRange) {
        filtered = filtered.filter(e => 
          e.timestamp >= filters.dateRange!.start && 
          e.timestamp <= filters.dateRange!.end
        );
      }
      if (filters.profitable !== undefined) {
        filtered = filtered.filter(e => 
          filters.profitable ? (e.profit || 0) > 0 : (e.profit || 0) < 0
        );
      }
      if (filters.strategy) {
        filtered = filtered.filter(e => e.strategy === filters.strategy);
      }
      if (filters.tags) {
        filtered = filtered.filter(e => 
          filters.tags!.some(tag => e.tags.includes(tag))
        );
      }
    }

    return filtered.sort((a, b) => b.timestamp - a.timestamp);
  }

  analyzePerformance() {
    const entries = Array.from(this.entries.values());
    const completedTrades = entries.filter(e => e.exitPrice !== null);

    return {
      totalTrades: completedTrades.length,
      profitableTrades: completedTrades.filter(e => (e.profit || 0) > 0).length,
      totalProfit: completedTrades.reduce((sum, e) => sum + (e.profit || 0), 0),
      byStrategy: this.analyzeByStrategy(completedTrades),
      byEmotion: this.analyzeByEmotion(completedTrades),
      commonTags: this.analyzeCommonTags(completedTrades),
      learningPoints: this.extractLearningPoints(completedTrades)
    };
  }

  private analyzeByStrategy(trades: JournalEntry[]) {
    const strategies = new Map<string, {
      trades: number;
      profitableTrades: number;
      totalProfit: number;
    }>();

    trades.forEach(trade => {
      const stats = strategies.get(trade.strategy) || {
        trades: 0,
        profitableTrades: 0,
        totalProfit: 0
      };

      stats.trades++;
      if ((trade.profit || 0) > 0) stats.profitableTrades++;
      stats.totalProfit += trade.profit || 0;

      strategies.set(trade.strategy, stats);
    });

    return Object.fromEntries(strategies);
  }

  private analyzeByEmotion(trades: JournalEntry[]) {
    const emotions = new Map<string, {
      count: number;
      averageProfit: number;
    }>();

    trades.forEach(trade => {
      const stats = emotions.get(trade.emotions) || {
        count: 0,
        averageProfit: 0
      };

      stats.count++;
      stats.averageProfit = (
        (stats.averageProfit * (stats.count - 1) + (trade.profit || 0)) / 
        stats.count
      );

      emotions.set(trade.emotions, stats);
    });

    return Object.fromEntries(emotions);
  }

  private analyzeCommonTags(trades: JournalEntry[]) {
    const tagCounts = new Map<string, number>();

    trades.forEach(trade => {
      trade.tags.forEach(tag => {
        tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
      });
    });

    return Array.from(tagCounts.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);
  }

  private extractLearningPoints(trades: JournalEntry[]) {
    const lessons = new Set<string>();
    trades.forEach(trade => {
      trade.lessons.forEach(lesson => lessons.add(lesson));
    });
    return Array.from(lessons);
  }

  private saveToStorage() {
    localStorage.setItem('tradeJournal', 
      JSON.stringify(Array.from(this.entries.entries()))
    );
  }

  private loadFromStorage() {
    const stored = localStorage.getItem('tradeJournal');
    if (stored) {
      this.entries = new Map(JSON.parse(stored));
    }
  }
}

export const tradeJournal = new TradeJournal(); 
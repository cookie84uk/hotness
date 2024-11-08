interface TradePattern {
  pattern: string;
  confidence: number;
  profitProbability: number;
  averageReturn: number;
  occurrences: number;
}

export class PerformanceAnalytics {
  private readonly PATTERN_MIN_OCCURRENCES = 3;

  analyzePatterns(trades: PaperTrade[]): TradePattern[] {
    const patterns: TradePattern[] = [];
    
    // Time-based patterns
    patterns.push(...this.analyzeTimePatterns(trades));
    
    // Price action patterns
    patterns.push(...this.analyzePricePatterns(trades));
    
    // Volume patterns
    patterns.push(...this.analyzeVolumePatterns(trades));
    
    // Hotness score patterns
    patterns.push(...this.analyzeHotnessPatterns(trades));

    return patterns
      .filter(p => p.occurrences >= this.PATTERN_MIN_OCCURRENCES)
      .sort((a, b) => b.confidence - a.confidence);
  }

  private analyzeTimePatterns(trades: PaperTrade[]): TradePattern[] {
    const patterns: TradePattern[] = [];
    const timeSlots = new Map<string, {
      trades: number;
      profitable: number;
      totalReturn: number;
    }>();

    trades.forEach(trade => {
      const hour = new Date(trade.timestamp).getHours();
      const timeSlot = `${hour}:00-${hour}:59`;
      
      const stats = timeSlots.get(timeSlot) || {
        trades: 0,
        profitable: 0,
        totalReturn: 0
      };
      
      stats.trades++;
      if ((trade.profit || 0) > 0) stats.profitable++;
      stats.totalReturn += trade.profit || 0;
      
      timeSlots.set(timeSlot, stats);
    });

    timeSlots.forEach((stats, timeSlot) => {
      if (stats.trades >= this.PATTERN_MIN_OCCURRENCES) {
        patterns.push({
          pattern: `Time: ${timeSlot}`,
          confidence: stats.profitable / stats.trades,
          profitProbability: stats.profitable / stats.trades,
          averageReturn: stats.totalReturn / stats.trades,
          occurrences: stats.trades
        });
      }
    });

    return patterns;
  }

  private analyzePricePatterns(trades: PaperTrade[]): TradePattern[] {
    const patterns: TradePattern[] = [];
    
    // Analyze price movement before entry
    const priceMovements = new Map<string, {
      trades: number;
      profitable: number;
      totalReturn: number;
    }>();

    trades.forEach(trade => {
      const priceChange = this.calculatePriceChangeBeforeEntry(trade);
      const movement = this.categorizePriceMovement(priceChange);
      
      const stats = priceMovements.get(movement) || {
        trades: 0,
        profitable: 0,
        totalReturn: 0
      };
      
      stats.trades++;
      if ((trade.profit || 0) > 0) stats.profitable++;
      stats.totalReturn += trade.profit || 0;
      
      priceMovements.set(movement, stats);
    });

    priceMovements.forEach((stats, movement) => {
      patterns.push({
        pattern: `Price: ${movement}`,
        confidence: stats.profitable / stats.trades,
        profitProbability: stats.profitable / stats.trades,
        averageReturn: stats.totalReturn / stats.trades,
        occurrences: stats.trades
      });
    });

    return patterns;
  }

  private analyzeVolumePatterns(trades: PaperTrade[]): TradePattern[] {
    const patterns: TradePattern[] = [];
    
    // Analyze volume spikes
    const volumePatterns = new Map<string, {
      trades: number;
      profitable: number;
      totalReturn: number;
    }>();

    trades.forEach(trade => {
      const volumePattern = this.categorizeVolumePattern(trade);
      
      const stats = volumePatterns.get(volumePattern) || {
        trades: 0,
        profitable: 0,
        totalReturn: 0
      };
      
      stats.trades++;
      if ((trade.profit || 0) > 0) stats.profitable++;
      stats.totalReturn += trade.profit || 0;
      
      volumePatterns.set(volumePattern, stats);
    });

    volumePatterns.forEach((stats, pattern) => {
      patterns.push({
        pattern: `Volume: ${pattern}`,
        confidence: stats.profitable / stats.trades,
        profitProbability: stats.profitable / stats.trades,
        averageReturn: stats.totalReturn / stats.trades,
        occurrences: stats.trades
      });
    });

    return patterns;
  }

  private analyzeHotnessPatterns(trades: PaperTrade[]): TradePattern[] {
    const patterns: TradePattern[] = [];
    
    // Analyze hotness score ranges
    const hotnessRanges = new Map<string, {
      trades: number;
      profitable: number;
      totalReturn: number;
    }>();

    trades.forEach(trade => {
      const hotnessRange = this.categorizeHotnessScore(trade.hotnessScore);
      
      const stats = hotnessRanges.get(hotnessRange) || {
        trades: 0,
        profitable: 0,
        totalReturn: 0
      };
      
      stats.trades++;
      if ((trade.profit || 0) > 0) stats.profitable++;
      stats.totalReturn += trade.profit || 0;
      
      hotnessRanges.set(hotnessRange, stats);
    });

    hotnessRanges.forEach((stats, range) => {
      patterns.push({
        pattern: `Hotness: ${range}`,
        confidence: stats.profitable / stats.trades,
        profitProbability: stats.profitable / stats.trades,
        averageReturn: stats.totalReturn / stats.trades,
        occurrences: stats.trades
      });
    });

    return patterns;
  }

  private categorizePriceMovement(change: number): string {
    if (change > 0.1) return 'Strong Uptrend';
    if (change > 0.05) return 'Moderate Uptrend';
    if (change > 0) return 'Slight Uptrend';
    if (change < -0.1) return 'Strong Downtrend';
    if (change < -0.05) return 'Moderate Downtrend';
    return 'Slight Downtrend';
  }

  private categorizeVolumePattern(trade: PaperTrade): string {
    // Implementation depends on your volume data structure
    return 'Volume Spike'; // Placeholder
  }

  private categorizeHotnessScore(score: number): string {
    if (score >= 90) return 'Very Hot (90+)';
    if (score >= 80) return 'Hot (80-89)';
    if (score >= 70) return 'Warm (70-79)';
    if (score >= 60) return 'Lukewarm (60-69)';
    return 'Cool (<60)';
  }
}

export const performanceAnalytics = new PerformanceAnalytics(); 
import { TokenData, TradeSignal } from '../../types/common';

interface Pattern {
  name: string;
  description: string;
  confidence: number;
  timeframe: string;
}

export class PatternRecognition {
  private patterns: Map<string, Pattern> = new Map();

  analyzePrice(data: TokenData[]): Pattern[] {
    const detectedPatterns: Pattern[] = [];

    // Basic pattern detection logic
    if (data.length >= 2) {
      const latestPrice = data[data.length - 1].price;
      const previousPrice = data[data.length - 2].price;
      const priceChange = ((latestPrice - previousPrice) / previousPrice) * 100;

      // Sudden price increase
      if (priceChange > 5) {
        detectedPatterns.push({
          name: 'Rapid Price Increase',
          description: `Price increased by ${priceChange.toFixed(2)}% in short timeframe`,
          confidence: Math.min(priceChange / 10 * 100, 100),
          timeframe: '5m'
        });
      }

      // Sudden price decrease
      if (priceChange < -5) {
        detectedPatterns.push({
          name: 'Rapid Price Decrease',
          description: `Price decreased by ${Math.abs(priceChange).toFixed(2)}% in short timeframe`,
          confidence: Math.min(Math.abs(priceChange) / 10 * 100, 100),
          timeframe: '5m'
        });
      }
    }

    return detectedPatterns;
  }

  generateSignal(patterns: Pattern[]): TradeSignal | null {
    if (patterns.length === 0) return null;

    // Find the pattern with highest confidence
    const strongestPattern = patterns.reduce((prev, current) => 
      prev.confidence > current.confidence ? prev : current
    );

    return {
      tokenAddress: '', // This should be passed in from the calling context
      type: strongestPattern.confidence >= 70 ? 'buy' : 'sell',
      confidence: strongestPattern.confidence,
      timestamp: new Date().toISOString(),
      indicators: [{
        name: strongestPattern.name,
        value: strongestPattern.confidence,
        weight: 1
      }]
    };
  }
}

export const patternRecognition = new PatternRecognition(); 
import { Trade, Analysis, TokenMetadata, SignalStrength } from '../types';

export class AnalyticsEngine {
  private static instance: AnalyticsEngine;
  private analyzers: Map<string, (trade: Trade, metadata?: TokenMetadata) => SignalStrength>;

  private constructor() {
    this.analyzers = new Map();
    this.registerDefaultAnalyzers();
  }

  static getInstance(): AnalyticsEngine {
    if (!AnalyticsEngine.instance) {
      AnalyticsEngine.instance = new AnalyticsEngine();
    }
    return AnalyticsEngine.instance;
  }

  registerAnalyzer(
    name: string, 
    analyzer: (trade: Trade, metadata?: TokenMetadata) => SignalStrength
  ) {
    this.analyzers.set(name, analyzer);
  }

  private registerDefaultAnalyzers() {
    // Volume Analysis
    this.registerAnalyzer('volume', (trade, metadata) => {
      const signals: string[] = [];
      let value = 0;
      let confidence = 0;

      if (trade.volume_24h > 0) {
        const volumeVelocity = metadata?.priceHistory ? 
          this.calculateVolumeVelocity(trade, metadata.priceHistory) : 1;

        if (volumeVelocity > 2) {
          value += 30;
          signals.push("🚀 Volume spiking");
          confidence += 20;
        }
      }

      return { value, confidence, signals };
    });

    // Market Cap Analysis
    this.registerAnalyzer('marketCap', (trade) => {
      const signals: string[] = [];
      let value = 0;
      let confidence = 0;

      if (trade.usd_market_cap < 50000) {
        value += 20;
        signals.push("💎 Low market cap opportunity");
        confidence += 15;
      }

      return { value, confidence, signals };
    });

    // Add more default analyzers here
  }

  async analyze(trade: Trade, metadata?: TokenMetadata): Promise<Analysis> {
    const results = await Promise.all(
      Array.from(this.analyzers.entries()).map(async ([name, analyzer]) => {
        try {
          return [name, await analyzer(trade, metadata)] as const;
        } catch (error) {
          console.error(`Error in ${name} analyzer:`, error);
          return [name, { value: 0, confidence: 0, signals: [] }] as const;
        }
      })
    );

    const analysis = this.combineResults(results);
    return analysis;
  }

  private combineResults(
    results: Array<[string, SignalStrength]>
  ): Analysis {
    const timestamp = Date.now();
    
    // Create a mutable copy of the results
    const mutableResults = results.map(([name, signal]) => [
      name,
      {
        ...signal,
        signals: [...signal.signals]
      }
    ]) as [string, SignalStrength][];

    const overallScore = this.calculateOverallScore(mutableResults);

    return {
      timestamp,
      overallScore,
      volumeAnalysis: mutableResults.find(([name]) => name === 'volume')?.[1] || 
        { value: 0, confidence: 0, signals: [] },
      priceAnalysis: mutableResults.find(([name]) => name === 'price')?.[1] || 
        { value: 0, confidence: 0, signals: [] },
      riskAssessment: this.calculateRiskAssessment(mutableResults)
    };
  }

  private calculateOverallScore(results: [string, SignalStrength][]): SignalStrength {
    // Weighted average of all signals
    let totalValue = 0;
    let totalConfidence = 0;
    const allSignals: string[] = [];

    results.forEach(([_, signal]) => {
      totalValue += signal.value * (signal.confidence / 100);
      totalConfidence += signal.confidence;
      allSignals.push(...signal.signals);
    });

    return {
      value: Math.round(totalValue / results.length),
      confidence: Math.round(totalConfidence / results.length),
      signals: allSignals
    };
  }

  private calculateRiskAssessment(results: [string, SignalStrength][]): SignalStrength {
    // Implement risk calculation logic
    return {
      value: 50, // Default risk value
      confidence: 70,
      signals: ["⚠️ Base risk assessment"]
    };
  }

  // Utility methods
  private calculateVolumeVelocity(trade: Trade, history: any[]): number {
    // Implement volume velocity calculation
    return 1;
  }
} 
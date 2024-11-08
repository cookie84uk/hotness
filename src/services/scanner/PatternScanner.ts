interface ScanResult {
  mint: string;
  patterns: PatternPrediction[];
  signals: Signal[];
  score: number;
  timestamp: number;
}

interface Signal {
  type: string;
  strength: number;
  description: string;
}

export class PatternScanner {
  private activeScans: Map<string, NodeJS.Timeout> = new Map();
  private scanResults: Map<string, ScanResult> = new Map();
  private listeners: Set<(results: ScanResult[]) => void> = new Set();

  constructor(
    private readonly mlService: PatternRecognitionML,
    private readonly scoreManager: ScoreManager
  ) {}

  startScanning(tokens: string[], interval: number = 60000) {
    tokens.forEach(mint => {
      if (this.activeScans.has(mint)) return;

      const timer = setInterval(async () => {
        await this.scanToken(mint);
      }, interval);

      this.activeScans.set(mint, timer);
    });
  }

  stopScanning(mint: string) {
    const timer = this.activeScans.get(mint);
    if (timer) {
      clearInterval(timer);
      this.activeScans.delete(mint);
    }
  }

  private async scanToken(mint: string) {
    try {
      // Gather recent data
      const windowData = await this.gatherWindowData(mint);
      
      // ML pattern detection
      const patterns = await this.mlService.detectPatterns(windowData);
      
      // Technical analysis
      const signals = this.analyzeTechnicals(windowData);
      
      // Calculate composite score
      const score = this.calculateScore(patterns, signals);

      const result: ScanResult = {
        mint,
        patterns,
        signals,
        score,
        timestamp: Date.now()
      };

      this.scanResults.set(mint, result);
      this.notifyListeners();
    } catch (error) {
      console.error(`Error scanning ${mint}:`, error);
    }
  }

  private async gatherWindowData(mint: string): Promise<WindowData> {
    const endTime = Date.now();
    const startTime = endTime - (30 * 60 * 1000); // 30 minutes of data

    return {
      prices: await priceHistoryService.getPrices(mint, startTime, endTime),
      volumes: await volumeHistoryService.getVolumes(mint, startTime, endTime),
      hotnessScores: await this.scoreManager.getHistoricalScores(mint, startTime, endTime),
      whaleActivity: await whaleTrackingService.getActivity(mint, startTime, endTime),
      timestamps: Array.from({ length: 30 }, (_, i) => startTime + (i * 60 * 1000))
    };
  }

  private analyzeTechnicals(windowData: WindowData): Signal[] {
    const signals: Signal[] = [];

    // Volume analysis
    const volumeSignal = this.analyzeVolume(windowData.volumes);
    if (volumeSignal) signals.push(volumeSignal);

    // Price momentum
    const momentumSignal = this.analyzeMomentum(windowData.prices);
    if (momentumSignal) signals.push(momentumSignal);

    // Hotness trend
    const hotnessSignal = this.analyzeHotness(windowData.hotnessScores);
    if (hotnessSignal) signals.push(hotnessSignal);

    // Whale activity
    const whaleSignal = this.analyzeWhaleActivity(windowData.whaleActivity);
    if (whaleSignal) signals.push(whaleSignal);

    return signals;
  }

  private calculateScore(patterns: PatternPrediction[], signals: Signal[]): number {
    const patternScore = patterns.reduce((sum, p) => sum + p.confidence, 0) / patterns.length;
    const signalScore = signals.reduce((sum, s) => sum + s.strength, 0) / signals.length;
    
    return (patternScore * 0.6 + signalScore * 0.4) * 100;
  }

  addListener(callback: (results: ScanResult[]) => void) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  private notifyListeners() {
    const results = Array.from(this.scanResults.values())
      .sort((a, b) => b.score - a.score);
    
    this.listeners.forEach(callback => callback(results));
  }

  getActiveScans(): string[] {
    return Array.from(this.activeScans.keys());
  }

  getCurrentResults(): ScanResult[] {
    return Array.from(this.scanResults.values())
      .sort((a, b) => b.score - a.score);
  }
}

export const patternScanner = new PatternScanner(
  patternRecognitionML,
  scoreManager
); 
import { TokenAnalyzer } from './TokenAnalyzer';
import { WalletAnalyzer } from './WalletAnalyzer';
import { SocialAnalyzer } from './SocialAnalyzer';
import { RiskAnalyzer } from './RiskAnalyzer';

export class AnalyzerEngine {
  private tokenAnalyzer: TokenAnalyzer;
  private walletAnalyzer: WalletAnalyzer;
  private socialAnalyzer: SocialAnalyzer;
  private riskAnalyzer: RiskAnalyzer;

  constructor() {
    this.tokenAnalyzer = new TokenAnalyzer();
    this.walletAnalyzer = new WalletAnalyzer();
    this.socialAnalyzer = new SocialAnalyzer();
    this.riskAnalyzer = new RiskAnalyzer();
  }

  async analyzeNewToken(address: string) {
    const [
      tokenMetrics,
      creatorProfile,
      socialSignals,
      riskScore
    ] = await Promise.all([
      this.tokenAnalyzer.analyze(address),
      this.walletAnalyzer.analyzeCreator(address),
      this.socialAnalyzer.analyze(address),
      this.riskAnalyzer.calculateRisk(address)
    ]);

    return {
      metrics: tokenMetrics,
      creator: creatorProfile,
      social: socialSignals,
      risk: riskScore,
      timestamp: Date.now()
    };
  }
} 
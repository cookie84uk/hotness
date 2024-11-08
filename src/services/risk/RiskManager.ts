import { TokenData, RiskMetrics } from '../../types/common';

export class RiskManager {
  private maxPositionSize: number = 0.1; // 10% of portfolio
  private maxDailyLoss: number = 0.05; // 5% daily loss limit
  private maxDrawdown: number = 0.2; // 20% maximum drawdown

  calculateRisk(token: TokenData): RiskMetrics {
    const volatility = this.calculateVolatility(token);
    const liquidity = this.calculateLiquidity(token);
    const concentration = this.calculateConcentration(token);
    
    const overallRisk = (volatility + liquidity + concentration) / 3;

    return {
      volatility,
      liquidity,
      concentration,
      overallRisk
    };
  }

  private calculateVolatility(token: TokenData): number {
    // Simple volatility calculation based on 24h change
    return Math.min(Math.abs(token.change24h) / 100, 1);
  }

  private calculateLiquidity(token: TokenData): number {
    // Basic liquidity score based on volume
    const volumeScore = token.volume24h / token.marketCap;
    return Math.min(volumeScore, 1);
  }

  private calculateConcentration(token: TokenData): number {
    // Basic holder concentration metric
    const concentrationScore = 1000 / token.holders;
    return Math.min(concentrationScore, 1);
  }

  isWithinRiskLimits(position: number, currentLoss: number): boolean {
    return (
      position <= this.maxPositionSize &&
      currentLoss <= this.maxDailyLoss &&
      Math.abs(currentLoss) <= this.maxDrawdown
    );
  }
}

export const riskManager = new RiskManager(); 
import { TokenData } from '../../types';

export interface TokenAnalysis {
    volumeScore: number;
    priceScore: number;
    stabilityScore: number;
    trendScore: number;
    overallScore: number;
}

export class TokenAnalyzer {
    analyzeToken(token: TokenData, historicalData: TokenData[]): TokenAnalysis {
        const volumeScore = this.calculateVolumeScore(token, historicalData);
        const priceScore = this.calculatePriceScore(token, historicalData);
        const stabilityScore = this.calculateStabilityScore(historicalData);
        const trendScore = this.calculateTrendScore(historicalData);

        return {
            volumeScore,
            priceScore,
            stabilityScore,
            trendScore,
            overallScore: this.calculateOverallScore({
                volumeScore,
                priceScore,
                stabilityScore,
                trendScore
            })
        };
    }

    private calculateVolumeScore(current: TokenData, historical: TokenData[]): number {
        if (historical.length === 0) return 0;

        const avgVolume = historical.reduce((sum, data) => sum + data.volume, 0) / historical.length;
        const volumeChange = current.volume / avgVolume;

        // Score based on volume increase
        return Math.min(volumeChange * 50, 100);
    }

    private calculatePriceScore(current: TokenData, historical: TokenData[]): number {
        if (historical.length === 0) return 0;

        const priceChanges = historical.map((data, i) => 
            i > 0 ? (data.price - historical[i-1].price) / historical[i-1].price : 0
        );

        const avgPriceChange = priceChanges.reduce((sum, change) => sum + change, 0) / priceChanges.length;
        
        // Score based on positive price momentum
        return (avgPriceChange > 0) ? Math.min(avgPriceChange * 200, 100) : 0;
    }

    private calculateStabilityScore(historical: TokenData[]): number {
        if (historical.length < 2) return 0;

        const priceChanges = historical.map((data, i) => 
            i > 0 ? Math.abs((data.price - historical[i-1].price) / historical[i-1].price) : 0
        );

        const volatility = Math.sqrt(
            priceChanges.reduce((sum, change) => sum + Math.pow(change, 2), 0) / priceChanges.length
        );

        // Lower volatility = higher stability score
        return Math.max(100 - (volatility * 1000), 0);
    }

    private calculateTrendScore(historical: TokenData[]): number {
        if (historical.length < 2) return 0;

        const prices = historical.map(data => data.price);
        const firstPrice = prices[0];
        const lastPrice = prices[prices.length - 1];
        const priceChange = (lastPrice - firstPrice) / firstPrice;

        // Score based on trend strength
        return Math.min(Math.max(priceChange * 200, 0), 100);
    }

    private calculateOverallScore(scores: Omit<TokenAnalysis, 'overallScore'>): number {
        const weights = {
            volumeScore: 0.3,
            priceScore: 0.3,
            stabilityScore: 0.2,
            trendScore: 0.2
        };

        return Object.entries(weights).reduce((total, [key, weight]) => 
            total + (scores[key as keyof typeof scores] * weight), 0
        );
    }
}

export const tokenAnalyzer = new TokenAnalyzer(); 
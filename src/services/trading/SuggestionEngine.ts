import { TokenData } from '../../types';
import { paperTradingService } from '../paperTrading/PaperTradingService';
import { scoreManager } from '../scoring/ScoreManager';
import { priceService } from '../price/PriceService';

export interface TradeSuggestion {
    mint: string;
    type: 'buy' | 'sell';
    confidence: number;
    reason: string;
    price: number;
    timestamp: number;
}

export class SuggestionEngine {
    private readonly VOLUME_THRESHOLD = 1.5; // 50% increase
    private readonly SCORE_THRESHOLD = 75;

    async analyzeTrade(token: TokenData): Promise<TradeSuggestion | null> {
        const score = await scoreManager.getScore(token.mint);
        const volumeAnalysis = this.analyzeVolume(token);
        const priceAnalysis = await this.analyzePrice(token);

        if (score > this.SCORE_THRESHOLD && volumeAnalysis.significant) {
            return {
                mint: token.mint,
                type: 'buy',
                confidence: this.calculateConfidence(score, volumeAnalysis, priceAnalysis),
                reason: this.generateReason(score, volumeAnalysis, priceAnalysis),
                price: token.price,
                timestamp: Date.now()
            };
        }

        return null;
    }

    private analyzeVolume(token: TokenData) {
        const volumeIncrease = token.volume / (token.volume || 1);
        return {
            significant: volumeIncrease > this.VOLUME_THRESHOLD,
            increase: volumeIncrease
        };
    }

    private async analyzePrice(token: TokenData) {
        const currentPrice = await priceService.getCurrentPrice(token.mint);
        const priceChange = (currentPrice - token.price) / token.price;
        
        return {
            trending: Math.abs(priceChange) > 0.05,
            change: priceChange
        };
    }

    private calculateConfidence(
        score: number,
        volumeAnalysis: { significant: boolean; increase: number },
        priceAnalysis: { trending: boolean; change: number }
    ): number {
        let confidence = 0;

        // Score contribution (0-40 points)
        confidence += (score / 100) * 40;

        // Volume contribution (0-30 points)
        if (volumeAnalysis.significant) {
            confidence += Math.min(volumeAnalysis.increase * 10, 30);
        }

        // Price contribution (0-30 points)
        if (priceAnalysis.trending) {
            confidence += Math.min(Math.abs(priceAnalysis.change) * 100, 30);
        }

        return Math.min(confidence, 100);
    }

    private generateReason(
        score: number,
        volumeAnalysis: { significant: boolean; increase: number },
        priceAnalysis: { trending: boolean; change: number }
    ): string {
        const reasons: string[] = [];

        if (score > this.SCORE_THRESHOLD) {
            reasons.push(`High token score (${score.toFixed(0)})`);
        }

        if (volumeAnalysis.significant) {
            reasons.push(`Volume increase of ${((volumeAnalysis.increase - 1) * 100).toFixed(0)}%`);
        }

        if (priceAnalysis.trending) {
            const direction = priceAnalysis.change > 0 ? 'upward' : 'downward';
            reasons.push(`${direction} price trend (${(Math.abs(priceAnalysis.change) * 100).toFixed(0)}%)`);
        }

        return reasons.join(', ');
    }
}

export const suggestionEngine = new SuggestionEngine();
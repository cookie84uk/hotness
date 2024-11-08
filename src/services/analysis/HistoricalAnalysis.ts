import { TokenData, PaperTrade } from '../../types';

export class HistoricalAnalysis {
    calculateReturns(data: TokenData[]): number[] {
        return data.map((point, i) => 
            i > 0 ? (point.price - data[i-1].price) / data[i-1].price : 0
        );
    }

    calculateVolatility(returns: number[]): number {
        const mean = returns.reduce((sum, r) => sum + r, 0) / returns.length;
        const variance = returns.reduce((sum, r) => 
            sum + Math.pow(r - mean, 2), 0
        ) / returns.length;
        
        return Math.sqrt(variance);
    }

    calculateBeta(tokenReturns: number[], marketReturns: number[]): number {
        const covariance = this.calculateCovariance(tokenReturns, marketReturns);
        const marketVariance = this.calculateVariance(marketReturns);
        return covariance / marketVariance;
    }

    private calculateCovariance(a: number[], b: number[]): number {
        const meanA = a.reduce((sum, val) => sum + val, 0) / a.length;
        const meanB = b.reduce((sum, val) => sum + val, 0) / b.length;
        
        return a.reduce((sum, val, i) => 
            sum + (val - meanA) * (b[i] - meanB), 0
        ) / a.length;
    }

    private calculateVariance(values: number[]): number {
        const mean = values.reduce((sum, val) => sum + val, 0) / values.length;
        return values.reduce((sum, val) => 
            sum + Math.pow(val - mean, 2), 0
        ) / values.length;
    }
}

export const historicalAnalysis = new HistoricalAnalysis(); 
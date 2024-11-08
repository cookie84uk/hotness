import { PaperTrade } from '../../types';
import { paperTradingService } from '../paperTrading/PaperTradingService';
import { priceService } from '../price/PriceService';
import { alertService } from '../notifications/AlertService';

interface RiskMetrics {
    drawdown: number;
    exposure: number;
    volatility: number;
}

export class RiskManager {
    private maxDrawdown: number = 0.1; // 10%
    private maxExposure: number = 0.2; // 20%
    private stopLossPercent: number = 0.05; // 5%
    private takeProfitPercent: number = 0.1; // 10%

    async checkPositions() {
        const activeTrades = await paperTradingService.getActiveTrades();
        
        for (const trade of activeTrades) {
            await this.checkStopLoss(trade);
            await this.checkTakeProfit(trade);
            await this.checkMaxHoldTime(trade);
        }
    }

    private async checkStopLoss(trade: PaperTrade) {
        const currentPrice = await priceService.getCurrentPrice(trade.mint);
        const priceChange = (currentPrice - trade.entryPrice) / trade.entryPrice;

        if (priceChange <= -this.stopLossPercent) {
            try {
                await paperTradingService.closeTrade(trade.id, currentPrice);
                alertService.notify('warning', `Stop loss triggered for ${trade.mint}`);
            } catch (error) {
                console.error('Error closing trade:', error);
            }
        }
    }

    private async checkTakeProfit(trade: PaperTrade) {
        const currentPrice = await priceService.getCurrentPrice(trade.mint);
        const priceChange = (currentPrice - trade.entryPrice) / trade.entryPrice;

        if (priceChange >= this.takeProfitPercent) {
            try {
                await paperTradingService.closeTrade(trade.id, currentPrice);
                alertService.notify('success', `Take profit triggered for ${trade.mint}`);
            } catch (error) {
                console.error('Error closing trade:', error);
            }
        }
    }

    private async checkMaxHoldTime(trade: PaperTrade) {
        if (trade.maxHoldTime && Date.now() - trade.timestamp > trade.maxHoldTime) {
            const currentPrice = await priceService.getCurrentPrice(trade.mint);
            try {
                await paperTradingService.closeTrade(trade.id, currentPrice);
                alertService.notify('info', `Max hold time reached for ${trade.mint}`);
            } catch (error) {
                console.error('Error closing trade:', error);
            }
        }
    }

    async calculateRiskMetrics(): Promise<RiskMetrics> {
        const allTrades = await paperTradingService.getAllTrades();
        const activeTrades = await paperTradingService.getActiveTrades();

        const drawdown = this.calculateDrawdown(allTrades);
        const exposure = this.calculateExposure(activeTrades);
        const volatility = await this.calculateVolatility(activeTrades);

        return { drawdown, exposure, volatility };
    }

    private calculateDrawdown(trades: PaperTrade[]): number {
        const profits = trades.map(t => t.profit || 0);
        const maxProfit = Math.max(...profits, 0);
        const currentProfit = profits.reduce((sum, p) => sum + p, 0);
        return maxProfit > 0 ? (maxProfit - currentProfit) / maxProfit : 0;
    }

    private calculateExposure(trades: PaperTrade[]): number {
        const totalValue = trades.reduce((sum, trade) => 
            sum + (trade.amount * trade.entryPrice), 0
        );
        
        // Assuming a fixed account size for this example
        const accountSize = 10000;
        return totalValue / accountSize;
    }

    private async calculateVolatility(trades: PaperTrade[]): Promise<number> {
        if (trades.length === 0) return 0;

        const returns: number[] = [];
        for (const trade of trades) {
            const currentPrice = await priceService.getCurrentPrice(trade.mint);
            const return_ = (currentPrice - trade.entryPrice) / trade.entryPrice;
            returns.push(return_);
        }

        const mean = returns.reduce((sum, r) => sum + r, 0) / returns.length;
        const variance = returns.reduce((sum, r) => sum + Math.pow(r - mean, 2), 0) / returns.length;
        return Math.sqrt(variance);
    }

    updateRiskParameters(params: {
        maxDrawdown?: number;
        maxExposure?: number;
        stopLossPercent?: number;
        takeProfitPercent?: number;
    }) {
        if (params.maxDrawdown) this.maxDrawdown = params.maxDrawdown;
        if (params.maxExposure) this.maxExposure = params.maxExposure;
        if (params.stopLossPercent) this.stopLossPercent = params.stopLossPercent;
        if (params.takeProfitPercent) this.takeProfitPercent = params.takeProfitPercent;
    }
}

export const riskManager = new RiskManager();
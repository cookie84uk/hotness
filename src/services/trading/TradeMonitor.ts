import { PaperTrade, TokenData } from '../../types';
import { paperTradingService } from '../paperTrading/PaperTradingService';
import { socketService } from '../socketService';
import { alertService } from '../notifications/AlertService';
import { priceService } from '../price/PriceService';
import { riskManager } from './RiskManager';

interface TradeUpdate {
    mint: string;
    currentPrice: number;
    profitLoss: number;
    duration: number;
}

export class TradeMonitor {
    private activeMonitors: Map<string, NodeJS.Timer> = new Map();
    private readonly UPDATE_INTERVAL = 10000; // 10 seconds

    constructor() {
        this.initializeMonitoring();
    }

    private async initializeMonitoring() {
        try {
            // Subscribe to new trades
            paperTradingService.subscribe(this.handleTradesUpdate);

            // Subscribe to price updates
            socketService.subscribeToPrices(this.handlePriceUpdate);

            // Start monitoring existing trades
            const activeTrades = await paperTradingService.getActiveTrades();
            activeTrades.forEach(trade => this.startMonitoring(trade));
        } catch (error) {
            console.error('Failed to initialize trade monitoring:', error);
            alertService.notify('error', 'Failed to initialize trade monitoring');
        }
    }

    private handleTradesUpdate = (trades: PaperTrade[]) => {
        const activeTrades = trades.filter(t => t.status === 'open');
        
        // Start monitoring new trades
        activeTrades.forEach(trade => {
            if (!this.activeMonitors.has(trade.id)) {
                this.startMonitoring(trade);
            }
        });

        // Stop monitoring closed trades
        this.activeMonitors.forEach((timer, tradeId) => {
            if (!activeTrades.find(t => t.id === tradeId)) {
                this.stopMonitoring(tradeId);
            }
        });
    };

    private handlePriceUpdate = async (price: number, mint: string) => {
        const activeTrades = await paperTradingService.getActiveTrades();
        const affectedTrades = activeTrades.filter(t => t.mint === mint);

        affectedTrades.forEach(trade => {
            this.checkTradeConditions(trade, price);
        });
    };

    private startMonitoring(trade: PaperTrade) {
        if (this.activeMonitors.has(trade.id)) {
            return;
        }

        const timer = setInterval(() => {
            this.updateTradeStatus(trade);
        }, this.UPDATE_INTERVAL);

        this.activeMonitors.set(trade.id, timer);
    }

    private stopMonitoring(tradeId: string) {
        const timer = this.activeMonitors.get(tradeId);
        if (timer) {
            clearInterval(timer);
            this.activeMonitors.delete(tradeId);
        }
    }

    private async updateTradeStatus(trade: PaperTrade) {
        try {
            const currentPrice = await priceService.getCurrentPrice(trade.mint);
            const update = this.calculateTradeUpdate(trade, currentPrice);

            // Check risk management conditions
            await riskManager.checkPositions();

            // Notify if significant changes
            this.notifyIfSignificant(update);
        } catch (error) {
            console.error(`Error updating trade status for ${trade.mint}:`, error);
        }
    }

    private calculateTradeUpdate(trade: PaperTrade, currentPrice: number): TradeUpdate {
        const profitLoss = (currentPrice - trade.entryPrice) * trade.amount;
        const duration = Date.now() - trade.timestamp;

        return {
            mint: trade.mint,
            currentPrice,
            profitLoss,
            duration
        };
    }

    private async checkTradeConditions(trade: PaperTrade, currentPrice: number) {
        const profitLoss = (currentPrice - trade.entryPrice) * trade.amount;
        const profitPercent = profitLoss / (trade.entryPrice * trade.amount);

        // Check stop loss
        if (trade.stopLoss && currentPrice <= trade.stopLoss) {
            try {
                await paperTradingService.closeTrade(trade.id, currentPrice);
                alertService.notify('warning', `Stop loss triggered for ${trade.mint}`);
            } catch (error) {
                console.error('Failed to execute stop loss:', error);
            }
        }

        // Check take profit
        if (trade.takeProfit && currentPrice >= trade.takeProfit) {
            try {
                await paperTradingService.closeTrade(trade.id, currentPrice);
                alertService.notify('success', `Take profit triggered for ${trade.mint}`);
            } catch (error) {
                console.error('Failed to execute take profit:', error);
            }
        }
    }

    private notifyIfSignificant(update: TradeUpdate) {
        const profitPercent = update.profitLoss / (update.currentPrice * 100);

        if (Math.abs(profitPercent) >= 0.05) { // 5% change
            const direction = profitPercent > 0 ? 'profit' : 'loss';
            alertService.notify(
                direction === 'profit' ? 'success' : 'warning',
                `${update.mint}: ${direction} of ${(profitPercent * 100).toFixed(2)}%`
            );
        }
    }

    stopAllMonitoring() {
        this.activeMonitors.forEach((timer) => clearInterval(timer));
        this.activeMonitors.clear();
    }
}

export const tradeMonitor = new TradeMonitor();
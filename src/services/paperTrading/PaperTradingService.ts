import { PaperTrade, TokenData } from '../../types';
import { alertService } from '../notifications/AlertService';

export class PaperTradingService {
    private trades: PaperTrade[] = [];
    private listeners: ((trades: PaperTrade[]) => void)[] = [];

    async createTrade(params: {
        mint: string;
        amount: number;
        entryPrice: number;
        stopLoss?: number;
        takeProfit?: number;
    }): Promise<PaperTrade> {
        const trade: PaperTrade = {
            id: Math.random().toString(36).substr(2, 9),
            ...params,
            timestamp: Date.now(),
            status: 'open'
        };

        this.trades.push(trade);
        this.notifyListeners();
        return trade;
    }

    async closeTrade(tradeId: string, exitPrice: number): Promise<PaperTrade> {
        const trade = this.trades.find(t => t.id === tradeId);
        if (!trade) {
            throw new Error('Trade not found');
        }

        trade.exitPrice = exitPrice;
        trade.status = 'closed';
        trade.profit = (exitPrice - trade.entryPrice) * trade.amount;

        this.notifyListeners();
        return trade;
    }

    async getActiveTrades(): Promise<PaperTrade[]> {
        return this.trades.filter(t => t.status === 'open');
    }

    async getAllTrades(): Promise<PaperTrade[]> {
        return [...this.trades];
    }

    async getTradeStats(timeframe: '24h' | '7d' | '30d' | 'all'): Promise<{
        totalTrades: number;
        profitableTrades: number;
        totalProfit: number;
    }> {
        const now = Date.now();
        const timeframes = {
            '24h': 24 * 60 * 60 * 1000,
            '7d': 7 * 24 * 60 * 60 * 1000,
            '30d': 30 * 24 * 60 * 60 * 1000,
            'all': Infinity
        };

        const periodTrades = this.trades.filter(t => 
            now - t.timestamp < timeframes[timeframe]
        );

        return {
            totalTrades: periodTrades.length,
            profitableTrades: periodTrades.filter(t => (t.profit || 0) > 0).length,
            totalProfit: periodTrades.reduce((sum, t) => sum + (t.profit || 0), 0)
        };
    }

    subscribe(callback: (trades: PaperTrade[]) => void) {
        this.listeners.push(callback);
        return () => {
            this.listeners = this.listeners.filter(l => l !== callback);
        };
    }

    private notifyListeners() {
        this.listeners.forEach(listener => listener(this.trades));
    }
}

export const paperTradingService = new PaperTradingService(); 
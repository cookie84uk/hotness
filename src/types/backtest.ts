export interface BacktestResult {
    trades: BacktestTrade[];
    metrics: {
        totalTrades: number;
        winRate: number;
        profitFactor: number;
        netProfit: number;
        maxDrawdown: number;
        averageProfit: number;
        averageLoss: number;
    };
    equityCurve: EquityPoint[];
    monthlyReturns: MonthlyReturn[];
}

interface BacktestTrade {
    entryPrice: number;
    exitPrice: number;
    profit: number;
    timestamp: number;
    duration: number;
}

interface EquityPoint {
    timestamp: number;
    value: number;
}

interface MonthlyReturn {
    month: string;
    return: number;
} 
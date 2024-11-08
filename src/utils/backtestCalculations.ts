import { BacktestResult } from '../types/backtest';

export const calculateEquityCurve = (result: BacktestResult) => {
    const equityCurve = result.trades.reduce((curve, trade) => {
        const lastValue = curve.length > 0 ? curve[curve.length - 1].value : 10000; // Starting capital
        return [...curve, {
            timestamp: trade.timestamp,
            value: lastValue + trade.profit
        }];
    }, [] as { timestamp: number; value: number }[]);

    return equityCurve;
};

export const calculateMonthlyReturns = (result: BacktestResult) => {
    const monthlyReturns = result.trades.reduce((returns, trade) => {
        const date = new Date(trade.timestamp);
        const monthKey = `${date.getFullYear()}-${date.getMonth() + 1}`;
        
        returns[monthKey] = (returns[monthKey] || 0) + trade.profit;
        return returns;
    }, {} as Record<string, number>);

    return Object.entries(monthlyReturns).map(([month, return_]) => ({
        month,
        return: return_
    }));
}; 
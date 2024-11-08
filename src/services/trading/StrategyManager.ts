import { TradingStrategy, ExecutionState } from '../../types/trading';

class StrategyManager {
    private strategies: TradingStrategy[] = [];

    async handleUpdateStrategy(strategy: TradingStrategy): Promise<void> {
        const index = this.strategies.findIndex(s => s.id === strategy.id);
        if (index >= 0) {
            this.strategies[index] = strategy;
        }
    }

    async handleDeleteStrategy(strategyId: string): Promise<void> {
        this.strategies = this.strategies.filter(s => s.id !== strategyId);
    }
}

export const strategyManager = new StrategyManager(); 
export interface TradePattern {
    id: string;
    name: string;
    description: string;
    successRate: number;
    profitFactor: number;
    averageProfit: number;
}

export interface PaperTradingStats {
    '24h': number;
    '7d': number;
    '30d': number;
    all: number;
}

export interface VolumeAnalysis {
    trend: 'increasing' | 'decreasing' | 'stable';
    percentage: number;
}

export interface HotnessAnalysis {
    score: number;
    trend: 'up' | 'down' | 'stable';
}

export interface TradingStrategy {
    id: string;
    name: string;
    description: string;
    enabled: boolean;
    settings: {
        entryConditions: string[];
        exitConditions: string[];
        riskManagement: RiskSettings;
    }
}

export interface RiskSettings {
    stopLoss: number;
    takeProfit: number;
    maxPositionSize: number;
    maxHoldingTime: number;
}

export enum ExecutionState {
    IDLE = 'IDLE',
    RUNNING = 'RUNNING',
    PAUSED = 'PAUSED',
    ERROR = 'ERROR'
} 
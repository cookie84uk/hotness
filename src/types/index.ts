export interface TokenData {
    symbol: string;
    name: string;
    mint: string;
    price: number;
    change24h: number;
    volume: number;
    marketCap: number;
    hotnessScore: number;
    holders?: number;
    uniqueBuyers?: number;
    timestamp?: number;
}

export interface MarketTrade {
    mint: string;
    price: number;
    amount: number;
    timestamp: number;
    type: 'buy' | 'sell';
    sol_amount?: number;
    is_buy?: boolean;
}

export interface PaperTrade {
    id: string;
    mint: string;
    entryPrice: number;
    exitPrice?: number;
    amount: number;
    profit?: number;
    stopLoss?: number;
    takeProfit?: number;
    maxHoldTime?: number;
    timestamp: number;
    status: 'open' | 'closed';
}

export interface WhaleActivity {
    address: string;
    mint: string;
    amount: number;
    type: 'buy' | 'sell';
    timestamp: number;
}

export interface TimeframeStats {
    '5m': number;
    '15m': number;
    '1h': number;
    '24h': number;
}

export interface Analysis {
    score: number;
    signals: string[];
    risk: number;
    momentum: number;
    socialSignals: SocialSignals;
    timestamp: number;
}

export interface SocialSignals {
    twitter: number;
    telegram: number;
    discord: number;
}

export interface TokenMetrics {
    price: number[];
    volume: number[];
    buyers: number[];
    timestamps: number[];
}

export interface HotnessScore {
    total: number;
    components: {
        volume: number;
        price: number;
        social: number;
        whales: number;
    };
}

export interface SignalStrength {
    value: number;
    confidence: number;
    signals: string[];
}

export interface TokenSignals {
    price: SignalStrength;
    volume: SignalStrength;
    social: SignalStrength;
}

export interface RiskMetrics {
    rugPullRisk: number;
    pumpDumpRisk: number;
    volatilityRisk: number;
    overallRisk: number;
}

export interface TokenActivity {
    symbol: string;
    name: string;
    mint: string;
    mintAddress: string;
    price: number;
    volume24h: number;
    marketCap: number;
    holders: number;
    timestamp: number;
    rank?: number;
    topHolders?: number;
}
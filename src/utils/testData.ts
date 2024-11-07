import { Trade, Analysis, TokenMetadata } from '../types';
import { Signal } from '../types/Signal';

export const mockTrade: Trade = {
  symbol: "TEST",
  name: "Test Token",
  mint: "0x123...",
  sol_amount: 1000,
  usd_market_cap: 50000,
  volume_24h: 25000,
  timestamp: Date.now()
};

export const mockAnalysis: Analysis = {
  timestamp: Date.now(),
  overallScore: {
    value: 75,
    confidence: 80,
    signals: ["🚀 High momentum detected"]
  },
  volumeAnalysis: {
    value: 85,
    confidence: 90,
    signals: ["📈 Volume spike", "💹 Consistent buying"]
  },
  priceAnalysis: {
    value: 65,
    confidence: 75,
    signals: ["📊 Bullish pattern"]
  },
  riskAssessment: {
    value: 45,
    confidence: 85,
    signals: ["⚠️ Medium risk level", "🔍 Normal trading patterns"]
  }
};

export function simulateWebSocketMessage() {
  return {
    type: 'trade',
    data: mockTrade
  };
}

export const generateTestSignal = (): Signal => ({
  id: Math.random().toString(36).substr(2, 9),
  type: ['temperature', 'pressure', 'humidity'][Math.floor(Math.random() * 3)],
  value: Math.random() * 100,
  timestamp: Date.now(),
  source: 'test-sensor'
});

export const generateTestData = (count: number): Signal[] => {
  return Array(count).fill(null).map(generateTestSignal);
}; 
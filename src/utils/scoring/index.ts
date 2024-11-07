import { Trade, TokenState } from '../../types';

interface ScoreResult {
  score: number;        // 0-100 base score
  signals: string[];    // Reasons/signals
  risk: number;         // 0-100 risk level
  confidence: number;   // 0-100 confidence
  mode: 'degen' | 'normie';
  hotness?: number;     // New hotness score
}

type TradingMode = 'degen' | 'normie';

interface ModeConfig {
  volumeWeight: number;
  mcapThresholds: {
    low: number;
    medium: number;
    high: number;
  };
  riskTolerance: number;
  minConfidence: number;
  timeWindow: number; // in minutes
}

const MODE_CONFIGS: Record<TradingMode, ModeConfig> = {
  degen: {
    volumeWeight: 5,        // Higher volume sensitivity
    mcapThresholds: {
      low: 25_000,         // $25k
      medium: 100_000,     // $100k
      high: 500_000        // $500k
    },
    riskTolerance: 80,     // Higher risk tolerance
    minConfidence: 30,     // Lower confidence requirement
    timeWindow: 2          // 2 minute window
  },
  normie: {
    volumeWeight: 3,       // Lower volume sensitivity
    mcapThresholds: {
      low: 100_000,        // $100k
      medium: 500_000,     // $500k
      high: 2_000_000      // $2M
    },
    riskTolerance: 40,     // Lower risk tolerance
    minConfidence: 60,     // Higher confidence requirement
    timeWindow: 5          // 5 minute window
  }
};

interface ScoringWeights {
  volume: number;
  momentum: number;
  uniqueBuyers: number;
  marketCap: number;
}

const SCORING_WEIGHTS: Record<'degen' | 'normie', ScoringWeights> = {
  degen: {
    volume: 0.4,      // Higher weight on volume for degen
    momentum: 0.3,    // Quick moves matter more
    uniqueBuyers: 0.2,
    marketCap: 0.1    // Less concern about market cap
  },
  normie: {
    volume: 0.2,      // Less focus on volume
    momentum: 0.2,    // Steady moves preferred
    uniqueBuyers: 0.3, // More emphasis on multiple buyers
    marketCap: 0.3    // Higher weight on established mcap
  }
};

export const calculateScore = (
  trade: Trade,
  mode: 'degen' | 'normie'
): number => {
  const weights = SCORING_WEIGHTS[mode];
  
  // Volume score
  const volumeScore = calculateVolumeScore(trade.sol_amount, mode);
  
  // Momentum score
  const momentumScore = calculateMomentumScore(trade, mode);
  
  // Unique buyers score
  const buyersScore = calculateBuyersScore(trade.uniqueBuyers || 0, mode);
  
  // Market cap score
  const mcapScore = calculateMcapScore(trade.usd_market_cap || 0, mode);

  // Weighted sum
  const totalScore = (
    volumeScore * weights.volume +
    momentumScore * weights.momentum +
    buyersScore * weights.uniqueBuyers +
    mcapScore * weights.marketCap
  );

  return Math.min(100, totalScore);
};

// Helper functions with mode-specific thresholds
function calculateVolumeScore(solAmount: number, mode: 'degen' | 'normie'): number {
  const volInSol = solAmount / 1e9;
  return mode === 'degen'
    ? Math.min(100, volInSol * 20)  // More sensitive to volume
    : Math.min(100, volInSol * 10); // Less sensitive
}

function calculateMcapScore(mcap: number, mode: 'degen' | 'normie'): number {
  if (mode === 'degen') {
    // Prefer smaller mcaps
    return mcap < 50_000 ? 100 :
           mcap < 100_000 ? 75 :
           mcap < 250_000 ? 50 : 25;
  } else {
    // Prefer larger mcaps
    return mcap > 1_000_000 ? 100 :
           mcap > 500_000 ? 75 :
           mcap > 250_000 ? 50 : 25;
  }
}

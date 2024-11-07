import { Trade, TokenState } from '../types';

interface HotScore {
  score: number;
  signals: string[];
  risk: number;
  confidence: number;
}

export const calculateHotScore = (trade: Trade, tokenState: TokenState): HotScore => {
  const signals: string[] = [];
  let score = 0;
  let risk = 0;

  // Convert SOL amount to a more readable number
  const solAmount = trade.sol_amount / 1e9;

  // Volume-based scoring (more dynamic)
  if (solAmount > 5) {
    score += 35;
    signals.push("🐋 Whale trade detected");
    risk += 20;
  } else if (solAmount > 1) {
    score += 25;
    signals.push("🚀 Large trade");
    risk += 15;
  } else if (solAmount > 0.5) {
    score += 15;
    signals.push("📈 Medium trade");
  }

  // Market cap scoring (more granular)
  const mcapInK = trade.usd_market_cap / 1000;
  if (mcapInK < 10) {
    score += 30;
    signals.push("💎 Micro cap gem");
    risk += 40;
  } else if (mcapInK < 50) {
    score += 25;
    signals.push("🌱 Small cap");
    risk += 30;
  } else if (mcapInK < 200) {
    score += 15;
    signals.push("⭐ Mid cap");
    risk += 20;
  }

  // Buy/Sell pressure
  if (trade.is_buy) {
    score += 15;
    signals.push("💫 Buy pressure");
  } else {
    risk += 10;
    signals.push("📉 Sell pressure");
  }

  // Recent activity bonus
  if (tokenState?.lastTrade) {
    const timeSinceLastTrade = Date.now() - tokenState.lastTrade;
    if (timeSinceLastTrade < 60000) { // 1 minute
      score += 20;
      signals.push("⚡ High activity");
    } else if (timeSinceLastTrade < 300000) { // 5 minutes
      score += 10;
      signals.push("🔥 Active trading");
    }
  }

  // Calculate confidence based on available data points
  const confidence = Math.min(100, [
    trade.usd_market_cap !== undefined,
    trade.volume_24h !== undefined,
    tokenState?.lastTrade !== undefined,
    tokenState?.volume_24h !== undefined
  ].filter(Boolean).length * 25);

  return {
    score: Math.min(100, Math.round(score)),
    signals,
    risk: Math.min(100, Math.round(risk)),
    confidence
  };
}; 
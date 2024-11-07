export const calculateHotness = (trade: any, walletBalance?: number) => {
  let score = 0;
  
  // Volume factor (0-50 points)
  const volInSol = trade.sol_amount / 1e9;
  score += Math.min(50, volInSol * 5);
  
  // Market cap factor (0-30 points)
  const mcapInK = trade.usd_market_cap / 1000;
  if (mcapInK < 100) score += 30;  // Low mcap bonus
  else if (mcapInK < 500) score += 20;
  else if (mcapInK < 1000) score += 10;
  
  // Wallet factor (0-20 points)
  if (walletBalance && walletBalance > 100) {
    score += 20;  // Whale bonus
  }
  
  return Math.min(100, Math.round(score));
}; 
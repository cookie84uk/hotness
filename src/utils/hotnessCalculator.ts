const calculateHotness = (trade: any, mode: 'degen' | 'normie' = 'normie'): number => {
  let score = 0;
  const volInSol = trade.sol_amount / 1e9;
  
  if (mode === 'degen') {
    // DEGEN MODE: Favors explosive moves and new tokens
    
    // Volume impact (0-45 points)
    score += Math.min(45, volInSol * 5);
    
    // New token bonus (0-30 points)
    const isNewListing = !trade.birdeye_price && !trade.dexscreener_price;
    if (isNewListing) score += 30;
    
    // Market cap bonus (0-25 points)
    if (trade.usd_market_cap) {
      const mcapInK = trade.usd_market_cap / 1000;
      if (mcapInK < 50) score += 25;
      else if (mcapInK < 100) score += 20;
      else if (mcapInK < 250) score += 15;
    } else {
      score += 25; // Unknown mcap = potential gem
    }
  } else {
    // NORMIE MODE: Favors sustainable growth
    
    // Volume stability (0-35 points)
    score += Math.min(35, volInSol * 3);
    
    // Market cap preference (0-35 points)
    if (trade.usd_market_cap) {
      const mcapInK = trade.usd_market_cap / 1000;
      if (mcapInK > 250 && mcapInK < 1000) score += 35;
      else if (mcapInK > 100 && mcapInK < 250) score += 30;
      else if (mcapInK > 1000) score += 25;
    }
    
    // Listed token bonus (0-30 points)
    if (trade.birdeye_price || trade.dexscreener_price) score += 30;
  }

  return Math.round(Math.min(100, score));
}; 
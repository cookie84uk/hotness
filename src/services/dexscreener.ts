export class DexScreenerCollector {
  async getPairData(address: string) {
    const response = await fetch(
      `https://api.dexscreener.com/latest/dex/pairs/solana/${address}`
    );
    
    return await response.json();
    // Returns:
    // - Price
    // - Volume
    // - Liquidity
    // - Trades
  }
} 
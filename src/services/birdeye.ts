export class BirdeyeDataCollector {
  private apiKey: string;

  async getTokenMetrics(address: string) {
    const response = await fetch(
      `https://public-api.birdeye.so/public/token_metrics?address=${address}`,
      {
        headers: { 'X-API-KEY': this.apiKey }
      }
    );
    
    return await response.json();
    // Returns:
    // - Price history
    // - Volume history
    // - Market cap
    // - Holder analytics
  }

  async getWhaleMovements(address: string) {
    const response = await fetch(
      `https://public-api.birdeye.so/public/wallet_history?address=${address}`,
      {
        headers: { 'X-API-KEY': this.apiKey }
      }
    );
    
    return await response.json();
  }
} 
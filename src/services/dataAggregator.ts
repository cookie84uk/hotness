export class DataAggregator {
  private solanaCollector: SolanaDataCollector;
  private birdeyeCollector: BirdeyeDataCollector;
  private dexScreener: DexScreenerCollector;
  private socialSignals: SocialSignalsCollector;
  private whaleTracker: WhaleTracker;

  async getCompleteTokenAnalysis(token: string) {
    const [
      onChainData,
      birdeyeMetrics,
      dexData,
      socialData,
      whaleData
    ] = await Promise.all([
      this.solanaCollector.getTokenData(token),
      this.birdeyeCollector.getTokenMetrics(token),
      this.dexScreener.getPairData(token),
      this.socialSignals.getTwitterMentions(token),
      this.whaleTracker.trackWhaleMovements(token)
    ]);

    return {
      fundamentals: {
        marketCap: birdeyeMetrics.marketCap,
        supply: onChainData.supply,
        holders: onChainData.holders
      },
      trading: {
        price: dexData.price,
        volume24h: dexData.volume,
        liquidity: dexData.liquidity
      },
      social: {
        twitterMentions: socialData.count,
        sentiment: socialData.sentiment
      },
      whales: {
        largeHolders: whaleData.whaleCount,
        recentMovements: whaleData.recentTrades
      }
    };
  }
} 
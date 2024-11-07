interface WhaleMetrics {
  address: string;
  totalValue: number;  // In SOL
  successfulTokens: {
    symbol: string;
    profit: number;
    holdTime: number;
  }[];
  lastActive: number;
}

const WHALE_THRESHOLD = 100; // 100 SOL

const isWhale = async (address: string) => {
  // Check wallet holdings
  const holdings = await getWalletHoldings(address);
  return holdings.totalValue > WHALE_THRESHOLD;
};

const trackWhaleMovement = async (trade: any) => {
  if (await isWhale(trade.user)) {
    // Log whale trade
    // Check if other whales follow
    // Track token performance after whale entry
  }
}; 
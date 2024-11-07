import { Connection, PublicKey } from '@solana/web3.js';
import { Jupiter } from '@jup-ag/core';

export class SolanaDataCollector {
  private connection: Connection;
  private jupiter: Jupiter;

  async getTokenData(address: string) {
    // Get on-chain data:
    // - Holder count
    // - Token transfers
    // - Liquidity pools
    const tokenData = await this.connection.getTokenSupply(new PublicKey(address));
    const tokenAccounts = await this.connection.getTokenLargestAccounts(new PublicKey(address));
    
    // Get Jupiter DEX data:
    // - Price impact
    // - Available routes
    // - Liquidity depth
    const routes = await this.jupiter.computeRoutes({
      inputMint: new PublicKey(address),
      outputMint: new PublicKey('So11111111111111111111111111111111111111112'), // SOL
      amount: 1000000000 // 1 SOL
    });

    return {
      supply: tokenData.value.uiAmount,
      holders: tokenAccounts.value.length,
      liquidity: routes.routesInfos[0]?.priceImpactPct
    };
  }
} 
import { useWallet } from '@solana/wallet-adapter-react';
import { useState, useEffect } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';
import { TOKEN_PROGRAM_ID } from '@solana/spl-token';

const REQUIRED_TOKEN_MINT = 'YOUR_TOKEN_MINT_ADDRESS';
const MINIMUM_TOKENS = 100; // Minimum tokens required for access

export const useTokenGate = () => {
  const { connected, publicKey } = useWallet();
  const [hasAccess, setHasAccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [tokenBalance, setTokenBalance] = useState(0);

  useEffect(() => {
    const checkAccess = async () => {
      if (!connected || !publicKey) {
        setHasAccess(false);
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        const connection = new Connection(process.env.REACT_APP_RPC_URL!);
        
        // Get all token accounts for the user
        const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
          publicKey,
          {
            programId: TOKEN_PROGRAM_ID,
          }
        );

        // Find our token account
        const tokenAccount = tokenAccounts.value.find(
          (account) => 
            account.account.data.parsed.info.mint === REQUIRED_TOKEN_MINT
        );

        if (tokenAccount) {
          const balance = Number(
            tokenAccount.account.data.parsed.info.tokenAmount.uiAmount
          );
          setTokenBalance(balance);
          setHasAccess(balance >= MINIMUM_TOKENS);
        } else {
          setHasAccess(false);
        }
      } catch (error) {
        console.error('Error checking token access:', error);
        setHasAccess(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAccess();
  }, [connected, publicKey]);

  return { hasAccess, isLoading, tokenBalance };
}; 
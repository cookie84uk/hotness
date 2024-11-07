import React, { createContext, useContext, useState, useEffect } from 'react';

interface TokenData {
  address: string;      // Token mint address
  name: string;        // Token name
  symbol: string;      // Token symbol
  decimals: number;    // Token decimals
  price: number;       // Current price in SOL
  volume24h: number;   // 24h volume
  marketCap: number;   // Market cap
  holders: number;     // Number of holders
}

interface WhaleBuy {
  id: string;
  token: string;
  symbol: string;
  amount: number;
  price: number;
  total: number;
  timestamp: number;
  impact: 'High' | 'Medium';
  txHash: string;
  tokenAddress?: string;  // Token mint address
  isPaperTrade?: boolean;  // Add this field
}

interface TokenContextType {
  tokens: TokenData[];
  whaleBuys: WhaleBuy[];
  selectedToken: string | null;
  setSelectedToken: (symbol: string | null) => void;
}

const initialTokens: TokenData[] = [
  { 
    name: 'Solana', 
    symbol: 'SOL', 
    price: 89.32, 
    change24h: 7.8, 
    volume: 890123,
    hotness: 92
  },
  // Add other tokens as needed
];

const TokenContext = createContext<TokenContextType | undefined>(undefined);

export const TokenProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tokens, setTokens] = useState<TokenData[]>(initialTokens);
  const [whaleBuys, setWhaleBuys] = useState<WhaleBuy[]>([]);
  const [selectedToken, setSelectedToken] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const mockTokens = ['BONK', 'GRASS', 'BOOK', 'PYTH', 'RAY', 'JTO', 'CROWN', 'SOLI'];
      
      if (Math.random() < 0.15) {
        const solAmount = Math.floor(Math.random() * 47) + 3;
        const randomToken = mockTokens[Math.floor(Math.random() * mockTokens.length)];
        
        const newWhale: WhaleBuy = {
          id: Date.now().toString(),
          token: randomToken,
          symbol: randomToken,
          amount: solAmount,
          price: 89.32,
          total: solAmount * 89.32,
          timestamp: Date.now(),
          impact: solAmount > 20 ? 'High' : 'Medium',
          txHash: Date.now().toString(36),
          isPaperTrade: Math.random() > 0.8  // 20% chance of being a paper trade
        };
        
        setWhaleBuys(current => {
          const twoHoursAgo = Date.now() - (2 * 60 * 60 * 1000);
          const filtered = current.filter(buy => buy.timestamp > twoHoursAgo);
          return [newWhale, ...filtered];
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TokenContext.Provider value={{ tokens, whaleBuys, selectedToken, setSelectedToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useTokenContext = () => {
  const context = useContext(TokenContext);
  if (undefined === context) {
    throw new Error('useTokenContext must be used within a TokenProvider');
  }
  return context;
}; 
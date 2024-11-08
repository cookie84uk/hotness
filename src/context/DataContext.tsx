import { createContext, useContext, useState, useEffect } from 'react';
import { socketService } from '../services/socketService';
import { TokenData, Trade, WhaleActivity } from '../types';
import { toast } from 'react-toastify';

interface DataContextType {
  tokens: TokenData[];
  trades: Trade[];
  whaleActivity: WhaleActivity[];
  isLoading: boolean;
  error: string | null;
}

const DataContext = createContext<DataContextType>({
  tokens: [],
  trades: [],
  whaleActivity: [],
  isLoading: true,
  error: null
});

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [tokens, setTokens] = useState<TokenData[]>([]);
  const [trades, setTrades] = useState<Trade[]>([]);
  const [whaleActivity, setWhaleActivity] = useState<WhaleActivity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleTrade = (trade: Trade) => {
      setTrades(prev => [trade, ...prev].slice(0, 100));
      toast.info(`New trade: ${trade.mint} - ${trade.price} SOL`);
    };

    const handleError = (err: Error) => {
      setError(err.message);
      toast.error(err.message);
    };

    socketService.addTradeListener(handleTrade);
    socketService.addErrorListener(handleError);

    return () => {
      socketService.removeTradeListener(handleTrade);
      socketService.removeErrorListener(handleError);
    };
  }, []);

  return (
    <DataContext.Provider value={{ tokens, trades, whaleActivity, isLoading, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext); 
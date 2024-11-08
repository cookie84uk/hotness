import { useState, useEffect } from 'react';
import { eventEmitter } from '../utils/eventEmitter';
import { TokenData } from '../types/common';

export const useTokenData = (mint?: string) => {
  const [tokenData, setTokenData] = useState<TokenData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleUpdate = (data: TokenData) => {
      if (mint && data.mint !== mint) return;
      
      setTokenData(current => {
        const existing = current.findIndex(t => t.mint === data.mint);
        if (existing >= 0) {
          const updated = [...current];
          updated[existing] = data;
          return updated;
        }
        return [...current, data];
      });
      setLoading(false);
    };

    eventEmitter.on('tokenUpdate', handleUpdate);
    return () => {
      eventEmitter.off('tokenUpdate', handleUpdate);
    };
  }, [mint]);

  return { tokenData, loading };
}; 
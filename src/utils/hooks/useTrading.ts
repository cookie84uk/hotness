import { useState, useCallback } from 'react';
import { Position, Trade } from '../types/trading';
import { calculatePnL, calculateTokenAmount, calculateSolValue } from '../trading';

const INITIAL_BALANCE = 10; // 10 SOL

export const useTrading = () => {
  const [simulatedBalance, setSimulatedBalance] = useState(INITIAL_BALANCE);
  const [positions, setPositions] = useState<Position[]>([]);
  const [prices, setPrices] = useState<{[key: string]: number}>({});

  const updatePrice = useCallback((trade: Trade) => {
    const price = trade.sol_amount / trade.token_amount;
    setPrices(prev => ({
      ...prev,
      [trade.symbol]: price
    }));
  }, []);

  const buyPosition = useCallback((trade: Trade, solToSpend: number) => {
    if (solToSpend > simulatedBalance) return false;
    
    const price = trade.sol_amount / trade.token_amount;
    const tokenAmount = calculateTokenAmount(solToSpend, price);
    
    setPositions(prev => [...prev, {
      symbol: trade.symbol,
      name: trade.name,
      tokenAmount,
      solSpent: solToSpend,
      entryPrice: price,
      timestamp: Date.now(),
      currentPrice: price
    }]);

    setSimulatedBalance(prev => prev - solToSpend);
    return true;
  }, [simulatedBalance]);

  const sellPosition = useCallback((position: Position) => {
    const currentPrice = prices[position.symbol] || position.entryPrice;
    const solReceived = calculateSolValue(position.tokenAmount, currentPrice);
    
    setSimulatedBalance(prev => prev + solReceived);
    setPositions(prev => prev.filter(p => p !== position));
    
    return solReceived;
  }, [prices]);

  const getPositionPnL = useCallback((position: Position) => {
    const currentPrice = prices[position.symbol] || position.entryPrice;
    return calculatePnL(position, currentPrice);
  }, [prices]);

  return {
    simulatedBalance,
    positions,
    prices,
    updatePrice,
    buyPosition,
    sellPosition,
    getPositionPnL
  };
}; 
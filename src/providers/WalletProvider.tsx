import React, { createContext, useContext, useState, useEffect } from 'react';

interface WalletContextType {
  connected: boolean;
  connect: () => Promise<void>;
  disconnect: () => void;
}

const WalletContext = createContext<WalletContextType>({} as WalletContextType);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [connected, setConnected] = useState(false);

  const connect = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setConnected(true);
      }
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  const disconnect = () => {
    setConnected(false);
  };

  return (
    <WalletContext.Provider value={{ connected, connect, disconnect }}>
      {children}
    </WalletContext.Provider>
  );
}; 
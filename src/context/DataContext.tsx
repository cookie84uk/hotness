import React, { createContext, useContext, useReducer } from 'react';
import { Token, WhaleActivity, TopCardsData } from '../types';

interface DataState {
  tokens: Token[];
  whaleActivity: WhaleActivity[];
  topCards: TopCardsData;
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  tokens: [],
  whaleActivity: [],
  topCards: {
    hottest: [],
    newest: [],
    biggestGains: []
  },
  loading: false,
  error: null
};

const DataContext = createContext<{
  state: DataState;
  dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

export const useData = () => useContext(DataContext);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}; 
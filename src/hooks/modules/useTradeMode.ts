import { create } from 'zustand';

type Mode = 'degen' | 'normie';

interface TradeModeState {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

export const useTradeMode = create<TradeModeState>((set) => ({
  mode: 'normie',
  setMode: (mode) => set({ mode })
})); 
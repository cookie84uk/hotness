import axios from 'axios';
import { TokenData, Trade, WhaleActivity } from '../types';

const api = axios.create({
  baseURL: 'https://frontend-api.pump.fun'
});

export const fetchTokens = async (): Promise<TokenData[]> => {
  const { data } = await api.get('/tokens');
  return data;
};

export const fetchTrades = async (mint: string): Promise<Trade[]> => {
  const { data } = await api.get(`/trades/${mint}`);
  return data;
};

export const fetchWhaleActivity = async (): Promise<WhaleActivity[]> => {
  const { data } = await api.get('/whales');
  return data;
}; 
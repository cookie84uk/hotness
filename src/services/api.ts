import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const endpoints = {
  tokens: {
    list: '/tokens',
    hottest: '/tokens/hottest',
    newest: '/tokens/newest',
    biggestGains: '/tokens/biggest-gains',
    details: (id: string) => `/tokens/${id}`,
  },
  whaleActivity: '/whale-activity',
}; 
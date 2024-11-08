import { io, Socket } from 'socket.io-client';
import { Trade, TokenData, WhaleActivity } from '../types';

type PriceCallback = (price: number, mint: string) => void;
type TradeCallback = (trade: any) => void;  // Replace 'any' with proper trade type

export class SocketService {
  private socket: Socket | null = null;
  private tradeListeners: TradeCallback[] = [];
  private statusListeners: ((status: string) => void)[] = [];
  private errorListeners: ((error: Error) => void)[] = [];
  private priceListeners: PriceCallback[] = [];

  constructor() {
    this.connect();
  }

  private connect() {
    this.socket = io('wss://frontend-api.pump.fun', {
      transports: ['websocket'],
      autoConnect: true
    });

    this.socket.on('connect', () => {
      console.log('Connected to pump.fun');
      this.notifyStatus('connected');
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from pump.fun');
      this.notifyStatus('disconnected');
    });

    this.socket.on('trade', (data: Trade) => {
      this.notifyTradeListeners(data);
    });

    this.socket.on('error', (error: Error) => {
      this.notifyErrorListeners(error);
    });

    this.socket.on('price', (data: { price: number, mint: string }) => {
      this.notifyPriceListeners(data.price, data.mint);
    });
  }

  addTradeListener(callback: TradeCallback) {
    this.tradeListeners.push(callback);
    return () => this.removeTradeListener(callback);
  }

  removeTradeListener(callback: TradeCallback) {
    this.tradeListeners = this.tradeListeners.filter(cb => cb !== callback);
  }

  addStatusListener(callback: (status: string) => void) {
    this.statusListeners.push(callback);
    return () => this.removeStatusListener(callback);
  }

  removeStatusListener(callback: (status: string) => void) {
    this.statusListeners = this.statusListeners.filter(cb => cb !== callback);
  }

  addErrorListener(callback: (error: Error) => void) {
    this.errorListeners.push(callback);
    return () => this.removeErrorListener(callback);
  }

  removeErrorListener(callback: (error: Error) => void) {
    this.errorListeners = this.errorListeners.filter(cb => cb !== callback);
  }

  subscribeToPrices(callback: PriceCallback) {
    this.priceListeners.push(callback);
    return {
      unsubscribe: () => {
        this.priceListeners = this.priceListeners.filter(cb => cb !== callback);
      }
    };
  }

  subscribeToTrades(callback: TradeCallback) {
    this.tradeListeners.push(callback);
    return {
      unsubscribe: () => {
        this.tradeListeners = this.tradeListeners.filter(cb => cb !== callback);
      }
    };
  }

  private notifyTradeListeners(trade: any) {
    this.tradeListeners.forEach(listener => listener(trade));
  }

  private notifyStatus(status: string) {
    this.statusListeners.forEach(callback => callback(status));
  }

  private notifyErrorListeners(error: Error) {
    this.errorListeners.forEach(callback => callback(error));
  }

  private notifyPriceListeners(price: number, mint: string) {
    this.priceListeners.forEach(listener => listener(price, mint));
  }

  disconnect() {
    this.socket?.disconnect();
  }
}

export const socketService = new SocketService();

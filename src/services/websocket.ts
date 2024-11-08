import { TokenData, WhaleActivity } from '../types/common';
import { hotnessScoreService } from './hotnessScore';
import { eventEmitter } from '../utils/eventEmitter';

class WebSocketService {
  private ws: WebSocket | null = null;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;

  connect(url: string): void {
    try {
      this.ws = new WebSocket(url);
      this.setupEventHandlers();
    } catch (error) {
      console.error('WebSocket connection failed:', error);
      this.handleReconnect();
    }
  }

  private setupEventHandlers(): void {
    if (!this.ws) return;

    this.ws.onmessage = (event: MessageEvent) => {
      try {
        const data = JSON.parse(event.data);
        this.handleMessage(data);
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    };

    this.ws.onerror = (error: Event) => {
      console.error('WebSocket error:', error);
      this.handleReconnect();
    };

    this.ws.onclose = () => {
      console.log('WebSocket connection closed');
      this.handleReconnect();
    };
  }

  private handleMessage(data: TokenData | WhaleActivity): void {
    // Handle different message types
    if ('holders' in data) {
      // Handle TokenData
      this.handleTokenUpdate(data as TokenData);
    } else if ('walletAddress' in data) {
      // Handle WhaleActivity
      this.handleWhaleActivity(data as WhaleActivity);
    }
  }

  private handleTokenUpdate(data: TokenData): void {
    try {
      // Calculate hotness score
      const hotnessScore = hotnessScoreService.calculateScore({
        price: data.price,
        volume: data.volume,
        holders: data.holders || 0,
        change24h: data.change24h
      });

      // Combine token data with hotness score
      const enrichedData = {
        ...data,
        hotnessScore
      };

      // Emit the enriched data for components to consume
      eventEmitter.emit('tokenUpdate', enrichedData);
      
      // If you want to track historical scores
      hotnessScoreService.addHistoricalScore(data.mint, hotnessScore);

    } catch (error) {
      console.error('Error processing token update:', error);
    }
  }

  private handleWhaleActivity(data: WhaleActivity): void {
    // Implement whale activity logic
    console.log('Whale activity detected:', data);
  }

  private handleReconnect(): void {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      setTimeout(() => {
        console.log(`Attempting to reconnect (${this.reconnectAttempts}/${this.maxReconnectAttempts})`);
        // Implement reconnection logic
      }, 5000 * this.reconnectAttempts);
    }
  }
}

export const websocketService = new WebSocketService();
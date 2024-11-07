export class WebSocketService {
  private ws: WebSocket | null = null;
  private reconnectAttempts = 0;
  private maxReconnectAttempts = 5;
  private mode: 'degen' | 'normie' = 'normie';

  connect() {
    try {
      this.ws = new WebSocket(import.meta.env.VITE_WS_URL);
      
      this.ws.onopen = () => {
        console.log('WebSocket Connected');
        this.reconnectAttempts = 0;
      };

      this.ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        // Handle different message types
        this.handleMessage(data);
      };

      this.ws.onclose = () => {
        console.log('WebSocket Disconnected');
        this.attemptReconnect();
      };

    } catch (error) {
      console.error('WebSocket connection error:', error);
    }
  }

  private handleMessage(data: any) {
    switch (data.type) {
      case 'NEW_TOKEN':
        this.handleNewToken(data.token);
        break;
      case 'EARLY_BUYERS':
        this.handleEarlyBuyers(data.buyers);
        break;
      case 'CREATOR_ACTIVITY':
        this.handleCreatorActivity(data.activity);
        break;
      case 'SOCIAL_UPDATE':
        this.handleSocialUpdate(data.update);
        break;
    }
  }

  private handleNewToken(token: any) {
    // Instant analysis of new tokens
    // Quick risk assessment
  }

  private attemptReconnect() {
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      setTimeout(() => {
        this.reconnectAttempts++;
        this.connect();
      }, 1000 * Math.pow(2, this.reconnectAttempts));
    }
  }

  filterTradesByMode(trades: Trade[], mode: 'degen' | 'normie') {
    if (mode === 'degen') {
      return trades.filter(t => t.marketCap < 100000); // Micro caps
    }
    return trades.filter(t => t.marketCap > 100000); // Established tokens
  }

  setMode(mode: 'degen' | 'normie') {
    this.mode = mode;
  }

  handleMessage(data: string) {
    if (data.startsWith('42["tradeCreated"')) {
      const [, trade] = JSON.parse(data.slice(2));
      
      // Apply mode-specific filtering
      if (this.shouldProcessTrade(trade)) {
        this.processTrade(trade);
      }
    }
  }

  private shouldProcessTrade(trade: any): boolean {
    if (this.mode === 'degen') {
      return trade.usd_market_cap < 250_000;
    } else {
      return trade.usd_market_cap > 250_000;
    }
  }
} 
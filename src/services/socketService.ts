import { io } from 'socket.io-client';

class SocketService {
  private socket: any = null;

  connect() {
    console.log('Connecting to socket...');
    
    this.socket = io('wss://frontend-api.pump.fun', {
      transports: ['websocket']
    });

    this.socket.on('connect', () => {
      console.log('Socket connected!');
    });

    this.socket.on('disconnect', () => {
      console.log('Socket disconnected!');
    });

    this.socket.on('error', (error: any) => {
      console.error('Socket error:', error);
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }

  // Add event listener method
  on(event: string, callback: (data: any) => void) {
    if (this.socket) {
      this.socket.on(event, callback);
    }
  }

  // Remove event listener method
  off(event: string, callback: (data: any) => void) {
    if (this.socket) {
      this.socket.off(event, callback);
    }
  }
}

export const socketService = new SocketService();

import { useEffect } from 'react';
import { socketService } from '../services/socketService';

export const useSocket = () => {
  useEffect(() => {
    socketService.connect();
    return () => socketService.disconnect();
  }, []);

  return {
    on: socketService.on.bind(socketService),
    off: socketService.off.bind(socketService)
  };
}; 
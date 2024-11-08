export type AlertType = 'success' | 'warning' | 'error' | 'info';

export interface Alert {
    id: string;
    type: AlertType;
    message: string;
    timestamp: number;
}

class AlertService {
    private listeners: ((alert: Alert) => void)[] = [];

    notify(type: AlertType, message: string) {
        const alert: Alert = {
            id: Math.random().toString(36).substr(2, 9),
            type,
            message,
            timestamp: Date.now()
        };
        
        this.listeners.forEach(listener => listener(alert));
    }

    subscribe(callback: (alert: Alert) => void) {
        this.listeners.push(callback);
        return () => {
            this.listeners = this.listeners.filter(l => l !== callback);
        };
    }
}

export const alertService = new AlertService(); 
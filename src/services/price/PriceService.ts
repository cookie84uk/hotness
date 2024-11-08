type PriceSubscriber = (prices: Record<string, number>) => void;

class PriceService {
    private subscribers: PriceSubscriber[] = [];

    subscribeToPrices(callback: PriceSubscriber) {
        this.subscribers.push(callback);
        return {
            unsubscribe: () => {
                this.subscribers = this.subscribers.filter(sub => sub !== callback);
            }
        };
    }

    // Add other methods as needed
}

export const priceService = new PriceService(); 
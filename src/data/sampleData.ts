// Helper function to generate random price history
const generatePriceHistory = (basePrice: number, points: number = 24) => {
  const history = [];
  let price = basePrice;
  for (let i = 0; i < points; i++) {
    price = price * (1 + (Math.random() * 0.1 - 0.05)); // ±5% change
    history.push(price);
  }
  return history;
};

// Helper to generate random wallet address
const generateWalletAddress = () => {
  return '0x' + Array(40).fill(0).map(() => 
    Math.floor(Math.random() * 16).toString(16)
  ).join('');
};

export const sampleTokens = [
  {
    id: '1',
    name: 'Pepe 2.0',
    symbol: 'PEPE2',
    price: 0.000000234,
    change24h: 156.2,
    hotness: 92,
    priceHistory: generatePriceHistory(0.000000234),
    marketCap: 1234567,
    volume24h: 789012
  },
  {
    id: '2',
    name: 'Moon Rocket',
    symbol: 'MOON',
    price: 0.00000789,
    change24h: 84.5,
    hotness: 88,
    priceHistory: generatePriceHistory(0.00000789),
    marketCap: 2345678,
    volume24h: 890123
  },
  {
    id: '3',
    name: 'AI Token',
    symbol: 'AIT',
    price: 0.000123,
    change24h: -12.3,
    hotness: 75,
    priceHistory: generatePriceHistory(0.000123),
    marketCap: 3456789,
    volume24h: 901234
  },
  // Add more tokens...
];

export const whaleActivity = [
  {
    id: '1',
    timestamp: new Date().getTime() - 1000 * 60 * 5, // 5 minutes ago
    type: 'buy',
    token: 'PEPE2',
    amount: 23.45,
    price: 0.000000234,
    wallet: generateWalletAddress(),
    value: 12345 // in USD
  },
  {
    id: '2',
    timestamp: new Date().getTime() - 1000 * 60 * 15, // 15 minutes ago
    type: 'sell',
    token: 'MOON',
    amount: 45.67,
    price: 0.00000789,
    wallet: generateWalletAddress(),
    value: 23456
  },
  // Add more whale activities...
];

export const topCards = {
  hottest: [
    {
      symbol: 'PEPE2',
      hotness: 92,
      change24h: 156.2
    },
    {
      symbol: 'MOON',
      hotness: 88,
      change24h: 84.5
    },
    {
      symbol: 'AIT',
      hotness: 75,
      change24h: -12.3
    }
  ],
  newest: [
    {
      symbol: 'DOGE2',
      age: '5m ago',
      initialPrice: 0.0000000123
    },
    {
      symbol: 'SHIB2',
      age: '12m ago',
      initialPrice: 0.0000000456
    },
    {
      symbol: 'CAT',
      age: '25m ago',
      initialPrice: 0.0000000789
    }
  ],
  biggestGains: [
    {
      symbol: 'PEPE2',
      change24h: 156.2,
      price: 0.000000234
    },
    {
      symbol: 'MOON',
      change24h: 84.5,
      price: 0.00000789
    },
    {
      symbol: 'ROCKET',
      change24h: 65.4,
      price: 0.00000456
    }
  ]
};

export const marketStats = {
  totalNewTokens24h: 156,
  averageHotness: 65.4,
  totalVolume24h: 12345678,
  activeWallets24h: 7890
};

// Generate more sample tokens
export const generateMoreTokens = (count: number) => {
  return Array(count).fill(0).map((_, index) => ({
    id: (index + 4).toString(),
    name: `Token ${index + 4}`,
    symbol: `TKN${index + 4}`,
    price: Math.random() * 0.0001,
    change24h: (Math.random() * 200 - 100),
    hotness: Math.floor(Math.random() * 100),
    priceHistory: generatePriceHistory(Math.random() * 0.0001),
    marketCap: Math.floor(Math.random() * 10000000),
    volume24h: Math.floor(Math.random() * 1000000)
  }));
};

export const sampleData = {
  tokens: [
    {
      id: '1',
      name: 'Sample Token 1',
      symbol: 'ST1',
      price: 0.00001234,
      change24h: 15.5,
      hotness: 85,
      priceHistory: [1, 2, 3, 4, 5]
    },
    // Add a few more sample tokens
  ],
  whaleActivity: [
    {
      id: '1',
      type: 'buy',
      token: 'Sample Token 1',
      amount: 1000000,
      price: 0.00001234,
      timestamp: Date.now(),
      wallet: '0x123...456'
    },
    // Add a few more activities
  ]
}; 
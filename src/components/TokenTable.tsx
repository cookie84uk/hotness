import React from 'react';

interface Token {
  name: string;
  price: number;
  volume24h: number;
  marketCap: number;
  change24h: number;
}

// Mock data - replace with real data later
const mockTokens: Token[] = [
  {
    name: "SOL Token 1",
    price: 0.00001234,
    volume24h: 15000,
    marketCap: 50000,
    change24h: 125.5
  },
  {
    name: "SOL Token 2",
    price: 0.00000789,
    volume24h: 8000,
    marketCap: 30000,
    change24h: -15.3
  },
  {
    name: "SOL Token 3",
    price: 0.00002345,
    volume24h: 25000,
    marketCap: 75000,
    change24h: 45.7
  },
];

export const TokenTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Token
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              24h Volume
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Market Cap
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              24h Change
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {mockTokens.map((token, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{token.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">${token.price.toFixed(8)}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">${token.volume24h.toLocaleString()}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">${token.marketCap.toLocaleString()}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`inline-flex text-sm font-semibold ${
                  token.change24h >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {token.change24h >= 0 ? '+' : ''}{token.change24h}%
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}; 
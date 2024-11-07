import React from 'react';

interface WhaleTransaction {
  token: string;
  amount: number;
  price: number;
  type: 'buy' | 'sell';
  timestamp: Date;
}

// Mock data - we'll replace with real data later
const mockWhaleTransactions: WhaleTransaction[] = [
  {
    token: "SOL Token 1",
    amount: 50000,
    price: 0.00001234,
    type: 'buy',
    timestamp: new Date()
  },
  {
    token: "SOL Token 2",
    amount: 75000,
    price: 0.00000789,
    type: 'sell',
    timestamp: new Date()
  }
];

export const WhaleActivity = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Token
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount
            </th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Time
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {mockWhaleTransactions.map((tx, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="px-4 py-3 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{tx.token}</div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                  tx.type === 'buy' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {tx.type.toUpperCase()}
                </span>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <div className="text-sm text-gray-900">${tx.amount.toLocaleString()}</div>
              </td>
              <td className="px-4 py-3 whitespace-nowrap">
                <div className="text-sm text-gray-500">
                  {tx.timestamp.toLocaleTimeString()}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}; 
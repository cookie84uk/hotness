import React from 'react';
import { TokenTable } from './TokenTable';
import { WhaleActivity } from './WhaleActivity';

export const HomePage = () => {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg border">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📈</span>
            <div>
              <h3 className="font-semibold text-gray-900">Volume</h3>
              <p className="text-sm text-gray-500">24h Trading Volume</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🐋</span>
            <div>
              <h3 className="font-semibold text-gray-900">Whale Moves</h3>
              <p className="text-sm text-gray-500">Large Transactions</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🎯</span>
            <div>
              <h3 className="font-semibold text-gray-900">Signals</h3>
              <p className="text-sm text-gray-500">Trading Opportunities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Token Table - Takes up 3/5 of the space */}
        <div className="lg:col-span-3 bg-white rounded-lg border">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Hot Tokens</h2>
          </div>
          <TokenTable />
        </div>

        {/* Whale Activity - Takes up 2/5 of the space */}
        <div className="lg:col-span-2 bg-white rounded-lg border">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">🐋 Whale Activity</h2>
          </div>
          <WhaleActivity />
        </div>
      </div>
    </div>
  );
}; 
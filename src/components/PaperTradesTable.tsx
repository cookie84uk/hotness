import React from 'react';

export const PaperTradesTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr>
            <th>Token</th>
            <th>Entry Price</th>
            <th>Current Price</th>
            <th>PnL</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Add your paper trades data here */}
        </tbody>
      </table>
    </div>
  );
}; 
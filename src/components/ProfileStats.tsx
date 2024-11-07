interface ProfileStatsProps {
  stats: {
    totalTrades: number;
    winningTrades: number;
    totalPnL: number;
    avgPnL: number;
    bestTrade: number;
    worstTrade: number;
    degenWinRate: number;
    normieWinRate: number;
  };
}

export const ProfileStats = ({ stats }: ProfileStatsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="p-4 rounded-lg border">
        <h3 className="text-sm font-medium">Total Trades</h3>
        <p className="text-2xl font-bold">{stats.totalTrades}</p>
      </div>

      <div className="p-4 rounded-lg border">
        <h3 className="text-sm font-medium">Win Rate</h3>
        <p className="text-2xl font-bold">
          {((stats.winningTrades / stats.totalTrades) * 100).toFixed(1)}%
        </p>
      </div>

      <div className="p-4 rounded-lg border">
        <h3 className="text-sm font-medium">Total PnL</h3>
        <p className="text-2xl font-bold">
          {stats.totalPnL > 0 ? '+' : ''}{stats.totalPnL.toFixed(2)} SOL
        </p>
      </div>

      <div className="p-4 rounded-lg border">
        <h3 className="text-sm font-medium">Avg PnL</h3>
        <p className="text-2xl font-bold">
          {stats.avgPnL > 0 ? '+' : ''}{stats.avgPnL.toFixed(2)} SOL
        </p>
      </div>
    </div>
  );
}; 
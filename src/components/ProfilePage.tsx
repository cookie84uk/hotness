import { useWallet } from '@solana/wallet-adapter-react';

export const ProfilePage = () => {
  const { connected, publicKey } = useWallet();

  if (!connected) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-bold mb-4">Connect Wallet to View Profile</h2>
        <p className="text-gray-600">Please connect your wallet to access your profile</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Profile Header */}
      <div className="bg-white p-6 rounded-lg border">
        <h1 className="text-2xl font-bold mb-2">My Profile</h1>
        <p className="text-gray-600">Wallet: {publicKey?.toString().slice(0, 8)}...</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-semibold">Total Trades</h3>
          <p className="text-2xl font-bold mt-2">0</p>
        </div>

        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-semibold">Win Rate</h3>
          <p className="text-2xl font-bold mt-2">0%</p>
        </div>

        <div className="bg-white p-6 rounded-lg border">
          <h3 className="font-semibold">PnL</h3>
          <p className="text-2xl font-bold mt-2">0 SOL</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg border">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <p className="text-gray-600">No recent activity</p>
      </div>
    </div>
  );
}; 
interface ProfileSettingsProps {
  preferences: {
    mode: 'degen' | 'normie';
    notifications: boolean;
    autoClose: boolean;
    stopLoss: number;
    takeProfit: number;
  };
}

export const ProfileSettings = ({ preferences }: ProfileSettingsProps) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Settings</h2>
      
      <div className="grid gap-4">
        <div className="flex items-center justify-between">
          <span>Trading Mode</span>
          <span>{preferences.mode === 'degen' ? '🎲 Degen' : '🏦 Normie'}</span>
        </div>

        <div className="flex items-center justify-between">
          <span>Notifications</span>
          <span>{preferences.notifications ? 'On' : 'Off'}</span>
        </div>

        <div className="flex items-center justify-between">
          <span>Auto Close</span>
          <span>{preferences.autoClose ? 'On' : 'Off'}</span>
        </div>

        <div className="flex items-center justify-between">
          <span>Stop Loss</span>
          <span>{preferences.stopLoss}%</span>
        </div>

        <div className="flex items-center justify-between">
          <span>Take Profit</span>
          <span>{preferences.takeProfit}%</span>
        </div>
      </div>
    </div>
  );
}; 
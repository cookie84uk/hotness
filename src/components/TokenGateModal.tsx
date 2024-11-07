import { Dialog } from './ui/dialog';

interface TokenGateModalProps {
  open: boolean;
  onClose: () => void;
}

export const TokenGateModal = ({ open, onClose }: TokenGateModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <div className="p-6 space-y-4">
        <h2 className="text-xl font-bold">🔒 Degen Mode Locked</h2>
        
        <div className="space-y-2">
          <p>Hold {MINIMUM_TOKENS} tokens to unlock Degen Mode features:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Faster signals</li>
            <li>Micro-cap gems</li>
            <li>Higher risk tolerance</li>
            <li>Advanced metrics</li>
          </ul>
        </div>

        <div className="flex gap-4 mt-6">
          <Button onClick={() => window.open('YOUR_DEX_LINK', '_blank')}>
            Buy Tokens
          </Button>
          <Button variant="outline" onClick={onClose}>
            Stay in Normie Mode
          </Button>
        </div>
      </div>
    </Dialog>
  );
}; 
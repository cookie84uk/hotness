import { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useNavigate } from 'react-router-dom';
import { Switch } from './ui/switch';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from './ui/dropdown-menu';
import { Button } from './ui/button';
import { useTradeMode } from '../hooks/modules/useTradeMode';

export const UserPanel = () => {
  const { connected, publicKey } = useWallet();
  const { mode, setMode } = useTradeMode();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center gap-4">
      {/* Wallet Connection */}
      <WalletMultiButton />

      {/* User Settings Dropdown */}
      {connected && (
        <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative">
              <span className="px-2">Settings</span>
              {/* Mode Indicator */}
              <div className="absolute -top-1 -right-1">
                {mode === 'degen' 
                  ? <span className="text-xs">🎲</span>
                  : <span className="text-xs">🏦</span>
                }
              </div>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>
              User Settings
            </DropdownMenuLabel>

            {/* Wallet Info */}
            <DropdownMenuItem className="flex flex-col items-start">
              <span className="text-xs text-muted-foreground">Connected as</span>
              <span className="text-sm truncate">
                {publicKey?.toBase58().slice(0, 4)}...
                {publicKey?.toBase58().slice(-4)}
              </span>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            {/* Trading Mode */}
            <DropdownMenuItem className="flex flex-col gap-2">
              <div className="flex items-center justify-between w-full">
                <span className="text-sm">Trading Mode</span>
                <Switch
                  checked={mode === 'degen'}
                  onCheckedChange={(checked) => setMode(checked ? 'degen' : 'normie')}
                />
              </div>
              <span className="text-xs text-muted-foreground">
                {mode === 'degen' 
                  ? '🎲 High risk, faster signals'
                  : '🏦 Lower risk, stable signals'
                }
              </span>
              <span className="text-xs text-yellow-500">
                Coming Soon: Token holder benefits
              </span>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            {/* Additional Settings */}
            <DropdownMenuItem>
              <span className="text-sm">Notifications</span>
            </DropdownMenuItem>
            
            <DropdownMenuItem>
              <span className="text-sm">Preferences</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </div>
  );
}; 
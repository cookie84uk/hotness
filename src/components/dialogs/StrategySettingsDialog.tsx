import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { TradingStrategy } from '../../types/trading';

interface StrategySettingsDialogProps {
    open: boolean;
    onClose: () => void;
    onSave: (strategy: TradingStrategy) => void;
    strategy?: TradingStrategy;
}

export const StrategySettingsDialog: React.FC<StrategySettingsDialogProps> = ({
    open,
    onClose,
    onSave,
    strategy
}) => {
    // Implementation
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Strategy Settings</DialogTitle>
            <DialogContent>
                {/* Add form fields */}
            </DialogContent>
        </Dialog>
    );
}; 
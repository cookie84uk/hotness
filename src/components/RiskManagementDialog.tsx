import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
} from '@mui/material';

interface RiskManagementDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (settings: RiskSettings) => void;
}

interface RiskSettings {
  maxPositionSize: number;
  stopLoss: number;
  takeProfit: number;
  maxDailyTrades: number;
  riskLevel: 'low' | 'medium' | 'high';
}

export const RiskManagementDialog = ({ open, onClose, onSave }: RiskManagementDialogProps) => {
  const [settings, setSettings] = useState<RiskSettings>({
    maxPositionSize: 5,
    stopLoss: 2,
    takeProfit: 5,
    maxDailyTrades: 10,
    riskLevel: 'medium',
  });

  const handleChange = (field: keyof RiskSettings) => (event: any) => {
    setSettings({
      ...settings,
      [field]: event.target.value,
    });
  };

  const handleSave = () => {
    onSave(settings);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Risk Management Settings</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
          <TextField
            label="Max Position Size (%)"
            type="number"
            value={settings.maxPositionSize}
            onChange={handleChange('maxPositionSize')}
            InputProps={{ inputProps: { min: 1, max: 100 } }}
          />
          <TextField
            label="Stop Loss (%)"
            type="number"
            value={settings.stopLoss}
            onChange={handleChange('stopLoss')}
            InputProps={{ inputProps: { min: 0.1, max: 50 } }}
          />
          <TextField
            label="Take Profit (%)"
            type="number"
            value={settings.takeProfit}
            onChange={handleChange('takeProfit')}
            InputProps={{ inputProps: { min: 0.1, max: 1000 } }}
          />
          <TextField
            label="Max Daily Trades"
            type="number"
            value={settings.maxDailyTrades}
            onChange={handleChange('maxDailyTrades')}
            InputProps={{ inputProps: { min: 1, max: 100 } }}
          />
          <FormControl>
            <InputLabel>Risk Level</InputLabel>
            <Select
              value={settings.riskLevel}
              onChange={handleChange('riskLevel')}
              label="Risk Level"
            >
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave} variant="contained" color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}; 
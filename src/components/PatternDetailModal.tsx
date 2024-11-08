import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box
} from '@mui/material';

interface PatternDetailModalProps {
  open: boolean;
  onClose: () => void;
  pattern: {
    name: string;
    confidence: number;
    description: string;
  };
}

export const PatternDetailModal = ({ open, onClose, pattern }: PatternDetailModalProps) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>{pattern.name}</DialogTitle>
      <DialogContent>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1" gutterBottom>
            Confidence: {pattern.confidence}%
          </Typography>
          <Typography variant="body1">
            {pattern.description}
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}; 
import { Dialog } from './ui/dialog';
import { Button } from './ui/button';
import { MINIMUM_TOKENS } from '../constants';
import { Box, Typography } from '@mui/material';

export const TokenGateModal = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <Box p={3}>
        <Typography variant="h5">Unlock Degen Mode</Typography>
        <Typography>Hold {MINIMUM_TOKENS} tokens to unlock Degen Mode features:</Typography>
        <Box mt={2} display="flex" gap={2}>
          <Button onClick={() => window.open('YOUR_DEX_LINK', '_blank')}>
            Buy Tokens
          </Button>
          <Button variant="outlined" onClick={onClose}>
            Close
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}; 
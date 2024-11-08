import { Box } from '@mui/material';
import { TokenList } from '../TokenList';

export const NormieView = () => {
  return (
    <Box>
      <TokenList tokens={[]} onPaperTrade={() => {}} />
    </Box>
  );
}; 
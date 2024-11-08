import { Box } from '@mui/material';
import { TokenList } from '../TokenList';
import { WhaleActivity } from '../WhaleActivity';

export const DegenView = () => {
  return (
    <Box>
      <TokenList tokens={[]} onPaperTrade={() => {}} />
      <WhaleActivity />
    </Box>
  );
}; 
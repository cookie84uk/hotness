import { themeConfig } from '../../constants';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Token } from '../../types';

interface TokenListProps {
  tokens: Token[];
  onPaperTrade?: (token: Token) => void;
}

export const TokenList = ({ tokens, onPaperTrade }: TokenListProps) => {
  return (
    <Box sx={{ 
      backgroundColor: themeConfig.dark.paper,
      borderRadius: 1,
      overflow: 'hidden'
    }}>
      <TableContainer>
        {/* Your table content */}
      </TableContainer>
    </Box>
  );
}; 
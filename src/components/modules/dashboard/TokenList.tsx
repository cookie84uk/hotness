import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Chip
} from '@mui/material';
import { TokenData } from '../../../types/common';

export const TokenList = () => {
  const [tokens, setTokens] = useState<TokenData[]>([]);

  return (
    <TableContainer component={Paper}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6">Hot Tokens</Typography>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Token</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">24h Change</TableCell>
            <TableCell align="right">Volume</TableCell>
            <TableCell align="right">Market Cap</TableCell>
            <TableCell align="right">Holders</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tokens.map((token) => (
            <TableRow key={token.address}>
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {token.symbol}
                  <Chip
                    label="Hot"
                    color="error"
                    size="small"
                    sx={{ display: token.change24h > 10 ? 'flex' : 'none' }}
                  />
                </Box>
              </TableCell>
              <TableCell align="right">${token.price.toFixed(6)}</TableCell>
              <TableCell 
                align="right"
                sx={{ 
                  color: token.change24h >= 0 ? 'success.main' : 'error.main' 
                }}
              >
                {token.change24h >= 0 ? '+' : ''}{token.change24h.toFixed(2)}%
              </TableCell>
              <TableCell align="right">${token.volume24h.toLocaleString()}</TableCell>
              <TableCell align="right">${token.marketCap.toLocaleString()}</TableCell>
              <TableCell align="right">{token.holders.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

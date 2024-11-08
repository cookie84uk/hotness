import React, { useState } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  TableSortLabel
} from '@mui/material';
import { useTokenData } from '../hooks/useTokenData';

export const TokenList = () => {
  const { tokenData, loading } = useTokenData();
  const [orderBy, setOrderBy] = useState<keyof typeof tokenData[0]>('hotnessScore');
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');

  const handleSort = (property: keyof typeof tokenData[0]) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Hot Tokens
      </Typography>
      
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={orderBy === 'symbol'}
                  direction={orderBy === 'symbol' ? order : 'asc'}
                  onClick={() => handleSort('symbol')}
                >
                  Token
                </TableSortLabel>
              </TableCell>
              <TableCell align="right">
                <TableSortLabel
                  active={orderBy === 'price'}
                  direction={orderBy === 'price' ? order : 'asc'}
                  onClick={() => handleSort('price')}
                >
                  Price
                </TableSortLabel>
              </TableCell>
              <TableCell align="right">
                <TableSortLabel
                  active={orderBy === 'change24h'}
                  direction={orderBy === 'change24h' ? order : 'asc'}
                  onClick={() => handleSort('change24h')}
                >
                  24h Change
                </TableSortLabel>
              </TableCell>
              <TableCell align="right">
                <TableSortLabel
                  active={orderBy === 'volume'}
                  direction={orderBy === 'volume' ? order : 'asc'}
                  onClick={() => handleSort('volume')}
                >
                  Volume
                </TableSortLabel>
              </TableCell>
              <TableCell align="right">
                <TableSortLabel
                  active={orderBy === 'hotnessScore'}
                  direction={orderBy === 'hotnessScore' ? order : 'asc'}
                  onClick={() => handleSort('hotnessScore')}
                >
                  Hotness
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tokenData.map((token) => (
              <TableRow key={token.mint} hover>
                <TableCell>{token.symbol}</TableCell>
                <TableCell align="right">${token.price.toFixed(4)}</TableCell>
                <TableCell 
                  align="right"
                  sx={{ 
                    color: token.change24h >= 0 ? 'success.main' : 'error.main' 
                  }}
                >
                  {token.change24h.toFixed(2)}%
                </TableCell>
                <TableCell align="right">
                  ${token.volume.toLocaleString()}
                </TableCell>
                <TableCell align="right">
                  {token.hotnessScore.toFixed(1)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
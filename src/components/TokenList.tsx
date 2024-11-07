import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Chip,
  Box,
  Typography,
  useTheme,
  IconButton,
  Tooltip
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

interface TokenListProps {
  tokens: Token[];
  onPaperTrade: (token: Token) => void;
  paperBalance: number;
  timeframe: '5m' | '30m' | '1h';
}

const TokenList: React.FC<TokenListProps> = ({ tokens, onPaperTrade, paperBalance, timeframe }) => {
  const theme = useTheme();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
  // Sort tokens by hotness
  const sortedTokens = React.useMemo(() => 
    [...tokens].sort((a, b) => b.hotness - a.hotness),
    [tokens]
  );

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const formatPrice = (price: number) => {
    if (price < 0.00001) return price.toExponential(4);
    return price.toFixed(6);
  };

  const getHotnessColor = (hotness: number) => {
    if (hotness >= 80) return theme.palette.error.main;
    if (hotness >= 60) return theme.palette.warning.main;
    return theme.palette.success.main;
  };

  // Calculate real percentage change
  const calculateChange = (token: Token) => {
    if (!token.priceHistory || token.priceHistory.length < 2) return 0;
    
    const currentPrice = token.priceHistory[token.priceHistory.length - 1];
    let oldPrice;
    
    switch (timeframe) {
      case '5m':
        oldPrice = token.priceHistory[Math.max(token.priceHistory.length - 6, 0)];
        break;
      case '30m':
        oldPrice = token.priceHistory[Math.max(token.priceHistory.length - 31, 0)];
        break;
      case '1h':
        oldPrice = token.priceHistory[Math.max(token.priceHistory.length - 61, 0)];
        break;
      default:
        oldPrice = token.priceHistory[0];
    }
    
    return ((currentPrice - oldPrice) / oldPrice) * 100;
  };

  return (
    <TableContainer 
      component={Paper} 
      sx={{ 
        maxHeight: 440,
        width: { xs: '100%', md: `calc(100% - ${sidebarOpen ? '290px' : '0px'})` },
        transition: 'width 0.2s ease-in-out'
      }}
    >
      <Table stickyHeader size="small">
        <TableHead>
          <TableRow>
            <TableCell>Token</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">{timeframe} %</TableCell>
            <TableCell align="right">Hotness</TableCell>
            <TableCell align="right">Trade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedTokens
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((token) => {
              const change = calculateChange(token);
              return (
                <TableRow key={token.symbol} hover>
                  <TableCell component="th" scope="row">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="body2" fontWeight="bold">
                        {token.symbol}
                      </Typography>
                      {token.signals && token.signals.length > 0 && (
                        <Chip
                          label={token.signals[0]}
                          size="small"
                          sx={{ height: 20 }}
                        />
                      )}
                    </Box>
                  </TableCell>
                  <TableCell align="right">
                    ${formatPrice(token.price)}
                  </TableCell>
                  <TableCell 
                    align="right"
                    sx={{ 
                      color: change > 0 ? 'success.main' : 
                             change < 0 ? 'error.main' : 'text.secondary'
                    }}
                  >
                    {change > 0 ? '+' : ''}{change.toFixed(1)}%
                  </TableCell>
                  <TableCell align="right">
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1 }}>
                      <LocalFireDepartmentIcon 
                        sx={{ 
                          color: getHotnessColor(token.hotness),
                          fontSize: 16
                        }} 
                      />
                      {token.hotness}
                    </Box>
                  </TableCell>
                  <TableCell align="right">
                    {token.trend === 'up' ? (
                      <TrendingUpIcon color="success" />
                    ) : (
                      <TrendingDownIcon color="error" />
                    )}
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title={
                      paperBalance < 0.1 
                        ? "Insufficient paper balance" 
                        : "Paper trade 0.1 SOL"
                    }>
                      <span>
                        <IconButton
                          size="small"
                          color="primary"
                          onClick={() => onPaperTrade(token)}
                          disabled={paperBalance < 0.1}
                        >
                          <ShoppingCartIcon fontSize="small" />
                        </IconButton>
                      </span>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={tokens.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default TokenList;
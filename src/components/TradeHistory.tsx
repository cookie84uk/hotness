import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography
} from '@mui/material';

interface Trade {
  id: string;
  token: string;
  type: 'buy' | 'sell';
  price: number;
  amount: number;
  timestamp: string;
  profit?: number;
}

interface TradeHistoryProps {
  trades: Trade[];
}

export const TradeHistory = ({ trades }: TradeHistoryProps) => {
  return (
    <TableContainer component={Paper}>
      <Typography variant="h6" sx={{ p: 2 }}>
        Trade History
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Token</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Profit/Loss</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trades.map((trade) => (
            <TableRow key={trade.id}>
              <TableCell>{trade.token}</TableCell>
              <TableCell>{trade.type}</TableCell>
              <TableCell>${trade.price.toFixed(4)}</TableCell>
              <TableCell>{trade.amount}</TableCell>
              <TableCell>{new Date(trade.timestamp).toLocaleString()}</TableCell>
              <TableCell>
                {trade.profit !== undefined && (
                  <Typography
                    color={trade.profit >= 0 ? 'success.main' : 'error.main'}
                  >
                    {trade.profit >= 0 ? '+' : ''}{trade.profit.toFixed(2)}%
                  </Typography>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}; 
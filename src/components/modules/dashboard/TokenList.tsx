import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow,
  Typography,
  Box,
} from '@mui/material';
import { CustomCard } from '../../common/Card';
import { useTokenContext } from '../../../context/TokenContext';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedPrice = ({ value }: { value: number }) => (
  <motion.div
    key={value}
    initial={{ scale: 1.2, color: '#4caf50' }}
    animate={{ scale: 1, color: 'inherit' }}
    transition={{ duration: 0.3 }}
  >
    ${value.toFixed(4)}
  </motion.div>
);

export const TokenList = () => {
  const { tokens, selectedToken, setSelectedToken } = useTokenContext();

  return (
    <CustomCard title="Hot Tokens">
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Token</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">24h Change</TableCell>
              <TableCell align="right">Volume</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <AnimatePresence>
              {tokens.map((token) => (
                <motion.tr
                  key={token.symbol}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ 
                    backgroundColor: selectedToken === token.symbol ? 'rgba(25, 118, 210, 0.08)' : 'transparent',
                    cursor: 'pointer'
                  }}
                  onClick={() => setSelectedToken(token.symbol)}
                  whileHover={{ backgroundColor: 'rgba(25, 118, 210, 0.12)' }}
                >
                  <TableCell>
                    <Typography variant="body1">
                      {token.name} ({token.symbol})
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <AnimatedPrice value={token.price} />
                  </TableCell>
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
                </motion.tr>
              ))}
            </AnimatePresence>
          </TableBody>
        </Table>
      </TableContainer>
    </CustomCard>
  );
};

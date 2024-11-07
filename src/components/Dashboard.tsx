import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useTheme } from '@mui/material/styles';
import { toast } from 'react-toastify'; // Add this for notifications
import { 
  Box, 
  Card, 
  Typography, 
  Grid, 
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Stack,
  Link,
  Tooltip
} from '@mui/material';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SolanaIcon from './icons/SolanaIcon';
import { io } from 'socket.io-client';
import PersonIcon from '@mui/icons-material/Person';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'; // For rank
import StarIcon from '@mui/icons-material/Star';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import WalletIcon from '@mui/icons-material/Wallet';

// Enhanced interfaces
interface Trade {
  symbol: string;
  name: string;
  sol_amount: number;
  token_amount: number;
  is_buy: boolean;
  timestamp?: number;
  price?: number;
  usd_amount?: number;
}

interface TokenStats {
  symbol: string;
  price: number;
  volume24h: number;
  marketCap: number;
  holders: number;
  liquiditySOL: number;
  priceChange24h: number;
}

interface TokenActivity extends TokenStats {
  solAmount: number;
  buyCount: number;
  sellCount: number;
  lastUpdate: number;
  hotness: number;
  buyVolume: number;
  sellVolume: number;
  averageTradeSize: number;
  largestTrade: number;
}

// Enhanced hotness calculation
const calculateHotness = (activity: Partial<TokenActivity>): number => {
  const {
    buyCount = 0,
    sellCount = 0,
    lastUpdate = Date.now(),
    solAmount = 0,
    buyVolume = 0,
    holders = 0,
    liquiditySOL = 0,
  } = activity;

  const totalTrades = buyCount + sellCount;
  const timeDiff = (Date.now() - lastUpdate) / 1000; // seconds
  const timeWeight = Math.exp(-timeDiff / 300); // 5-minute decay
  
  // Volume metrics
  const volumeWeight = Math.log(solAmount + 1);
  const buyRatio = buyCount / (totalTrades || 1);
  const buyPressure = buyVolume / (solAmount || 1);
  
  // Liquidity and holder metrics
  const liquidityScore = Math.log(liquiditySOL + 1) / 10;
  const holderScore = Math.log(holders + 1) / 10;

  return (
    timeWeight * (
      totalTrades * 0.25 +     // Trade count weight
      buyRatio * 0.20 +        // Buy ratio weight
      volumeWeight * 0.20 +    // Volume weight
      buyPressure * 0.15 +     // Buy pressure weight
      liquidityScore * 0.10 +  // Liquidity weight
      holderScore * 0.10       // Holder weight
    )
  );
};

// Theme colors from screenshot
const colors = {
  background: '#0A0A0A',
  cardBg: '#141414',
  cardHover: '#1A1A1A',
  primary: '#6E56CF',
  textPrimary: '#FFFFFF',
  textSecondary: '#A1A1AA',
  textTertiary: '#71717A',
  accent: '#FF3B3B'
}

// Featured Token Card Component
const FeaturedTokenCard = ({ symbol, volume }: { symbol: string, volume?: number }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Box
      sx={{
        perspective: '1500px',
        height: '100%',
        width: '100%',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transition: 'transform 0.8s',
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
          cursor: 'pointer',
        }}
        onClick={() => setIsFlipped(prev => !prev)}
      >
        {/* Front of card */}
        <Card
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            backgroundColor: '#2B2F35',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" sx={{ color: '#E0E3E7', mb: 2 }}>
            {symbol}
          </Typography>
          <Typography variant="h6" sx={{ color: '#B0B8C1' }}>
            Volume: {volume} SOL
          </Typography>
        </Card>

        {/* Back of card */}
        <Card
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            backgroundColor: '#2B2F35',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h5" sx={{ color: '#E0E3E7', mb: 2 }}>
            Token Details
          </Typography>
          <Box sx={{ textAlign: 'center', color: '#B0B8C1' }}>
            <Typography variant="body1" sx={{ mb: 1 }}>
              24h Change: +15%
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Market Cap: $1.2M
            </Typography>
            <Typography variant="body1">
              Holders: 1,234
            </Typography>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

const Dashboard = () => {
  const theme = useTheme();
  const [trades, setTrades] = useState<Trade[]>([]);
  const [paperTrades, setPaperTrades] = useState<Trade[]>([]);
  const [tokenActivities, setTokenActivities] = useState<Record<string, TokenActivity>>({});
  const [selectedToken, setSelectedToken] = useState<string | null>(null);
  const [timeframe, setTimeframe] = useState<'5m' | '15m' | '1h' | '24h'>('15m');
  const [hotTokenTimeframe, setHotTokenTimeframe] = useState<'1s' | '1m' | '5m'>('5m');
  const [hotTokenPage, setHotTokenPage] = useState(0);
  const TOKENS_PER_PAGE = 5;

  // Enhanced paper trading
  const handlePaperTrade = useCallback((trade: Trade) => {
    setPaperTrades(prev => {
      const newTrade = {
        ...trade,
        timestamp: Date.now(),
        price: trade.sol_amount / trade.token_amount,
        usd_amount: (trade.sol_amount / 1e9) * 60 // Replace 60 with actual SOL price
      };
      
      toast.success(`Added paper trade for ${trade.symbol}`, {
        position: 'bottom-right',
        autoClose: 3000
      });

      return [newTrade, ...prev];
    });
  }, []);

  // Memoized statistics
  const stats = useMemo(() => {
    const now = Date.now();
    const timeframeMs = {
      '5m': 5 * 60 * 1000,
      '15m': 15 * 60 * 1000,
      '1h': 60 * 60 * 1000,
      '24h': 24 * 60 * 60 * 1000
    }[timeframe];

    return Object.values(tokenActivities).reduce((acc, token) => {
      if (now - token.lastUpdate <= timeframeMs) {
        acc.totalVolume += token.solAmount;
        acc.totalTrades += token.buyCount + token.sellCount;
        acc.uniqueTokens.add(token.symbol);
      }
      return acc;
    }, {
      totalVolume: 0,
      totalTrades: 0,
      uniqueTokens: new Set<string>()
    });
  }, [tokenActivities, timeframe]);

  // WebSocket connection with reconnection logic
  useEffect(() => {
    let socket: Socket | null = null;
    const SOCKET_URL = 'wss://frontend-api.pump.fun';
    
    const socketOptions = {
      transports: ['websocket'],
      reconnection: true,
      reconnectionAttempts: 5,
      reconnectionDelay: 3000,
      timeout: 10000,
    };

    const connect = () => {
      socket = io(SOCKET_URL, socketOptions);

      socket.on('connect', () => {
        console.log('Connected to socket');
      });

      socket.on('disconnect', () => {
        console.log('Disconnected from socket');
      });

      socket.on('error', (error: Error) => {
        console.error('Socket error:', error);
        toast.error('Connection error. Retrying...');
      });

      socket.on('tradeCreated', (trade: Trade) => {
        setTrades(prev => [trade, ...prev].slice(0, 10));
        
        setTokenActivities(prev => {
          const symbol = trade.symbol;
          const solAmount = trade.sol_amount / 1e9;
          const existing = prev[symbol] || {
            symbol,
            solAmount: 0,
            buyCount: 0,
            sellCount: 0,
            lastUpdate: Date.now(),
            hotness: 0,
            buyVolume: 0,
            sellVolume: 0,
            averageTradeSize: 0,
            largestTrade: 0,
            price: 0,
            volume24h: 0,
            marketCap: 0,
            holders: 0,
            liquiditySOL: 0,
            priceChange24h: 0
          };

          const updated = {
            ...existing,
            solAmount: existing.solAmount + solAmount,
            buyCount: existing.buyCount + (trade.is_buy ? 1 : 0),
            sellCount: existing.sellCount + (trade.is_buy ? 0 : 1),
            buyVolume: existing.buyVolume + (trade.is_buy ? solAmount : 0),
            sellVolume: existing.sellVolume + (trade.is_buy ? 0 : solAmount),
            averageTradeSize: (existing.solAmount + solAmount) / (existing.buyCount + existing.sellCount + 1),
            largestTrade: Math.max(existing.largestTrade, solAmount),
            lastUpdate: Date.now()
          };

          updated.hotness = calculateHotness(updated);

          return {
            ...prev,
            [symbol]: updated
          };
        });
      });
    };

    connect();

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  const filteredHotTokens = useMemo(() => {
    const now = Date.now();
    const timeframeMs = {
      '1s': 1000,
      '1m': 60 * 1000,
      '5m': 5 * 60 * 1000
    }[hotTokenTimeframe];

    return Object.values(tokenActivities)
      .filter(token => now - token.lastUpdate <= timeframeMs)
      .sort((a, b) => b.hotness - a.hotness)
      .slice(hotTokenPage * TOKENS_PER_PAGE, (hotTokenPage + 1) * TOKENS_PER_PAGE);
  }, [tokenActivities, hotTokenTimeframe, hotTokenPage]);

  // Define HotTokensCard component inside Dashboard
  const HotTokensCard = () => (
    <Card sx={{ 
      height: '100%',
      backgroundColor: '#2B2F35',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: '12px'
    }}>
      <Box sx={{ p: 2.25 }}>
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          mb: 2 
        }}>
          <Typography variant="h6" sx={{ color: '#E0E3E7' }}>
            Hot Tokens
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 1 }}>
            {(['1s', '1m', '5m'] as const).map((time) => (
              <Button
                key={time}
                size="small"
                variant={hotTokenTimeframe === time ? "contained" : "outlined"}
                onClick={() => setHotTokenTimeframe(time)}
                sx={{
                  minWidth: '40px',
                  px: 1,
                  py: 0.5,
                  color: hotTokenTimeframe === time ? '#fff' : '#6E56CF',
                  backgroundColor: hotTokenTimeframe === time ? '#6E56CF' : 'transparent',
                  '&:hover': {
                    backgroundColor: hotTokenTimeframe === time ? '#7C6AD6' : 'rgba(110, 86, 207, 0.1)'
                  }
                }}
              >
                {time}
              </Button>
            ))}
          </Box>
        </Box>
        
        <Stack 
          spacing={0} 
          divider={<Divider sx={{ backgroundColor: '#27272A' }} />} // Clear divider
        >
          {filteredHotTokens.map((token) => (
            <Box
              key={token.symbol}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 0.75,
                p: 0.75,
                backgroundColor: '#141414',
                '&:hover': {
                  backgroundColor: '#1A1A1A'
                },
                position: 'relative',
              }}
            >
              {/* Main Content */}
              <Box sx={{
                display: 'grid',
                gridTemplateColumns: '24px auto 250px',
                gap: 1,
                alignItems: 'start'
              }}>
                {/* Logo */}
                <Box>
                  <Box sx={{
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(110, 86, 207, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6E56CF',
                    fontSize: '0.6rem'
                  }}>
                    {token.symbol.charAt(0)}
                  </Box>
                </Box>

                {/* Token Info */}
                <Box sx={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0.25
                }}>
                  <Link
                    href={`https://pump.fun/${token.mintAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(`https://pump.fun/${token.mintAddress}`, '_blank');
                    }}
                    sx={{
                      textDecoration: 'none',
                      cursor: 'pointer',
                      '&:hover': {
                        textDecoration: 'underline',
                        textDecorationColor: '#A1A1AA'
                      },
                    }}
                  >
                    <Typography sx={{ 
                      fontSize: '0.875rem',
                      lineHeight: '1.2',
                      fontWeight: 800,
                      color: '#FFFFFF',
                    }}>
                      {token.name} ({token.symbol})
                    </Typography>
                  </Link>
                </Box>

                {/* Stats with tighter icon alignment */}
                <Box sx={{ 
                  display: 'flex',
                  gap: 2,
                  alignItems: 'flex-start'
                }}>
                  <Box sx={{ 
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0.125
                  }}>
                    <Tooltip title="Market Cap" placement="top">
                      <Typography sx={{ 
                        fontSize: '0.5rem',
                        lineHeight: '1.2',
                        color: '#71717A',
                        whiteSpace: 'nowrap',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        minWidth: '140px'
                      }}>
                        MC <span style={{ color: '#A1A1AA' }}>${(token.marketCap || 0).toLocaleString()}k</span>
                        <Tooltip title="Holder Count" placement="top">
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25, ml: 'auto' }}>
                            <PersonIcon sx={{ fontSize: '0.7rem', color: '#71717A' }} />
                            <span style={{ color: '#A1A1AA', fontSize: '0.55rem' }}>{token.buyCount}</span>
                          </Box>
                        </Tooltip>
                      </Typography>
                    </Tooltip>

                    <Tooltip title="24h Volume" placement="top">
                      <Typography sx={{ 
                        fontSize: '0.5rem',
                        lineHeight: '1.2',
                        color: '#71717A',
                        whiteSpace: 'nowrap',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        minWidth: '140px'
                      }}>
                        Vol <span style={{ color: '#A1A1AA' }}>${(token.solAmount * 60).toLocaleString()}</span>
                        <Tooltip title="Time Since Creation" placement="top">
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25, ml: 'auto' }}>
                            <AccessTimeIcon sx={{ fontSize: '0.7rem', color: '#71717A' }} />
                            <span style={{ color: '#A1A1AA', fontSize: '0.55rem' }}>
                              {token.timestamp ? `${Math.floor((Date.now() - token.timestamp) / 1000)}s ago` : '-'}
                            </span>
                          </Box>
                        </Tooltip>
                      </Typography>
                    </Tooltip>

                    <Tooltip title="Top 10 Holders %" placement="top">
                      <Typography sx={{ 
                        fontSize: '0.5rem',
                        lineHeight: '1.2',
                        color: '#71717A',
                        whiteSpace: 'nowrap',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        minWidth: '140px'
                      }}>
                        T10 <span style={{ color: '#A1A1AA' }}>{((token.topHolders || 0) * 100).toFixed(1)}%</span>
                        <Tooltip title="Token Rank" placement="top">
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25, ml: 'auto' }}>
                            <AccountBalanceWalletOutlinedIcon sx={{ fontSize: '0.7rem', color: '#71717A' }} />
                            <span style={{ color: '#A1A1AA', fontSize: '0.55rem' }}>{token.rank || '-'}</span>
                          </Box>
                        </Tooltip>
                      </Typography>
                    </Tooltip>
                  </Box>
                </Box>
              </Box>

              {/* Progress Bar with percentage */}
              <Tooltip title="King of the Hill Progress" placement="top">
                <Box sx={{ 
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  bgcolor: '#1A1A1A',
                  overflow: 'visible'
                }}>
                  <Box
                    sx={{
                      width: `${token.hotness}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #FF3B3B 0%, #FF3B3B 100%)',
                      opacity: 0.8,
                      position: 'relative'
                    }}
                  >
                    <Typography sx={{ 
                      position: 'absolute',
                      right: -24,
                      top: -8,
                      fontSize: '0.55rem',
                      color: '#A1A1AA',
                    }}>
                      {token.hotness.toFixed(2)}%
                    </Typography>
                  </Box>
                </Box>
              </Tooltip>
            </Box>
          ))}
        </Stack>
        
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: 1, 
          mt: 2 
        }}>
          <Button
            size="small"
            disabled={hotTokenPage === 0}
            onClick={() => setHotTokenPage(prev => Math.max(0, prev - 1))}
            sx={{
              minWidth: '40px',
              px: 1,
              color: '#6E56CF',
              '&.Mui-disabled': {
                color: 'rgba(110, 86, 207, 0.3)'
              }
            }}
          >
            Prev
          </Button>
          <Button
            size="small"
            disabled={filteredHotTokens.length < TOKENS_PER_PAGE}
            onClick={() => setHotTokenPage(prev => prev + 1)}
            sx={{
              minWidth: '40px',
              px: 1,
              color: '#6E56CF',
              '&.Mui-disabled': {
                color: 'rgba(110, 86, 207, 0.3)'
              }
            }}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Card>
  );

  return (
    <Box sx={{ 
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#1C1F24',
      padding: '24px',
    }}>
      {/* Cards section */}
      <Grid container spacing={3} sx={{ mb: 2 }}>
        {/* Hot Tokens Card */}
        <Grid item xs={12} md={6} lg={4}>
          <HotTokensCard />
        </Grid>

        {/* Featured Token - 3D Card */}
        <Grid item xs={12} md={4}>
          <FeaturedTokenCard symbol="FEATURED" volume={12.34} />
        </Grid>

        {/* Latest Activity Card */}
        <Grid item xs={12} md={4}>
          <Card sx={{ 
            height: '100%',
            backgroundColor: '#2B2F35',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '12px'
          }}>
            <Box sx={{ p: 2.25 }}>
              <Typography variant="h6" sx={{ color: '#E0E3E7', mb: 2 }}>
                Latest Activity
              </Typography>
              
              {/* Activity Items */}
              {filteredHotTokens.map((activity, index) => (
                <Box
                  key={activity.symbol}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 1,
                    borderRadius: 1,
                    backgroundColor: 'rgba(255,255,255,0.02)',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.05)'
                    }
                  }}
                >
                  {/* Left Side - Token Info */}
                  <Stack spacing={0.5}>
                    <Typography sx={{ color: '#E0E3E7', fontWeight: 'bold' }}>
                      {activity.symbol}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography sx={{ color: '#B0B8C1', fontSize: '0.875rem' }}>
                        ${(activity.solAmount * 60).toFixed(2)}
                      </Typography>
                      <Typography sx={{ color: '#B0B8C1', fontSize: '0.875rem' }}>
                        ({activity.solAmount.toFixed(2)} SOL)
                      </Typography>
                    </Box>
                  </Stack>

                  {/* Middle - Trade Count */}
                  <Stack spacing={0.5} sx={{ textAlign: 'center' }}>
                    <Typography sx={{ color: '#EF5350', fontSize: '0.875rem' }}>
                      {activity.sellCount}s
                    </Typography>
                    <Typography sx={{ color: '#4CAF50', fontSize: '0.875rem' }}>
                      {activity.buyCount}b
                    </Typography>
                  </Stack>

                  {/* Right Side - Paper Trade Button */}
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{
                      minWidth: 'unset',
                      px: 1.5,
                      py: 0.5,
                      borderColor: '#6E56CF',
                      color: '#6E56CF',
                      '&:hover': {
                        borderColor: '#7C6AD6',
                        backgroundColor: 'rgba(110, 86, 207, 0.1)'
                      }
                    }}
                  >
                    Trade
                  </Button>
                </Box>
              ))}
            </Box>
          </Card>
        </Grid>
      </Grid>

      {/* Trade Tables section */}
      <Grid container spacing={2}>
        {/* Recent Trades Table */}
        <Grid item xs={12} md={8}>
          <TableContainer 
            component={Paper} 
            sx={{ 
              backgroundColor: '#2B2F35',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.2)',
            }}
          >
            <Box sx={{ p: 1.5, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <Typography sx={{ 
                color: '#E0E3E7', 
                fontWeight: 'bold',
                fontSize: '1rem'
              }}>
                Recent Trades
              </Typography>
            </Box>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: '#B0B8C1', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Token</TableCell>
                  <TableCell sx={{ color: '#B0B8C1', borderBottom: '1px solid rgba(255,255,255,0.1)' }} align="right">Price</TableCell>
                  <TableCell sx={{ color: '#B0B8C1', borderBottom: '1px solid rgba(255,255,255,0.1)' }} align="right">
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 0.5 }}>
                      Amount <SolanaIcon sx={{ width: 14, height: 14 }} />
                    </Box>
                  </TableCell>
                  <TableCell sx={{ color: '#B0B8C1', borderBottom: '1px solid rgba(255,255,255,0.1)' }} align="right">USD</TableCell>
                  <TableCell sx={{ color: '#B0B8C1', borderBottom: '1px solid rgba(255,255,255,0.1)' }} align="right">Type</TableCell>
                  <TableCell sx={{ color: '#B0B8C1', borderBottom: '1px solid rgba(255,255,255,0.1)' }} align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {trades.map((trade, index) => {
                  const solAmount = trade.sol_amount / 1e9;
                  const usdAmount = solAmount * 60; // Replace with actual SOL price

                  return (
                    <TableRow 
                      key={index}
                      sx={{ 
                        '&:hover': { backgroundColor: 'rgba(61, 75, 92, 0.2)' },
                        transition: 'background-color 0.2s'
                      }}
                    >
                      <TableCell sx={{ color: '#E0E3E7', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        {trade.symbol}
                      </TableCell>
                      <TableCell align="right" sx={{ color: '#E0E3E7', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        ${(trade.sol_amount / trade.token_amount).toFixed(6)}
                      </TableCell>
                      <TableCell align="right" sx={{ color: '#E0E3E7', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 0.5 }}>
                          {solAmount.toFixed(3)}
                          <SolanaIcon sx={{ width: 14, height: 14 }} />
                        </Box>
                      </TableCell>
                      <TableCell align="right" sx={{ color: '#E0E3E7', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        ${usdAmount.toFixed(2)}
                      </TableCell>
                      <TableCell align="right" sx={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        {trade.is_buy ? (
                          <ArrowUpwardIcon sx={{ color: '#4CAF50', fontSize: '1.2rem' }} />
                        ) : (
                          <ArrowDownwardIcon sx={{ color: '#EF5350', fontSize: '1.2rem' }} />
                        )}
                      </TableCell>
                      <TableCell align="right" sx={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{
                            minWidth: 'unset',
                            px: 1,
                            py: 0.5,
                            borderColor: trade.is_buy ? '#4CAF50' : '#EF5350',
                            color: trade.is_buy ? '#4CAF50' : '#EF5350',
                            '&:hover': {
                              borderColor: trade.is_buy ? '#45a049' : '#e53935',
                              backgroundColor: trade.is_buy ? 'rgba(76, 175, 80, 0.1)' : 'rgba(239, 83, 80, 0.1)'
                            }
                          }}
                        >
                          Copy
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>

        {/* Whale Buys */}
        <Grid item xs={12} md={4}>
          <TableContainer 
            component={Paper} 
            sx={{ 
              backgroundColor: '#2B2F35',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '12px',
              boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.2)',
            }}
          >
            <Box sx={{ p: 1.5, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <Typography sx={{ 
                color: '#E0E3E7', 
                fontWeight: 'bold',
                fontSize: '1rem'
              }}>
                Whale Buys (&gt; 10 SOL)
              </Typography>
            </Box>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: '#B0B8C1', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Token</TableCell>
                  <TableCell sx={{ color: '#B0B8C1', borderBottom: '1px solid rgba(255,255,255,0.1)' }} align="right">Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {trades
                  .filter(trade => trade.is_buy && trade.sol_amount / 1e9 > 10)
                  .slice(0, 5)
                  .map((trade, index) => (
                    <TableRow 
                      key={index}
                      sx={{ 
                        '&:hover': { backgroundColor: 'rgba(61, 75, 92, 0.2)' },
                        transition: 'background-color 0.2s'
                      }}
                    >
                      <TableCell sx={{ color: '#E0E3E7', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                        {trade.symbol}
                      </TableCell>
                      <TableCell align="right" sx={{ color: '#4CAF50', borderBottom: '1px solid rgba(255,255,255,0.05)', fontWeight: 'bold' }}>
                        {(trade.sol_amount / 1e9).toFixed(1)} SOL
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

interface TradeTableProps {
  trades: Trade[];
  onPaperTrade?: (trade: Trade) => void;
}

const TradeTable: React.FC<TradeTableProps> = ({ trades, onPaperTrade }) => {
  return (
    <TableContainer 
      component={Paper} 
      sx={{ 
        backgroundColor: '#2B2F35',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '12px',
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.2)',
      }}
    >
      <Box sx={{ p: 1.5, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <Typography sx={{ 
          color: '#E0E3E7', 
          fontWeight: 'bold',
          fontSize: '1rem'
        }}>
          Recent Trades
        </Typography>
      </Box>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: '#B0B8C1', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Token</TableCell>
            <TableCell sx={{ color: '#B0B8C1', borderBottom: '1px solid rgba(255,255,255,0.1)' }} align="right">Price</TableCell>
            <TableCell sx={{ color: '#B0B8C1', borderBottom: '1px solid rgba(255,255,255,0.1)' }} align="right">
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 0.5 }}>
                Amount <SolanaIcon sx={{ width: 14, height: 14 }} />
              </Box>
            </TableCell>
            <TableCell sx={{ color: '#B0B8C1', borderBottom: '1px solid rgba(255,255,255,0.1)' }} align="right">USD</TableCell>
            <TableCell sx={{ color: '#B0B8C1', borderBottom: '1px solid rgba(255,255,255,0.1)' }} align="right">Type</TableCell>
            <TableCell sx={{ color: '#B0B8C1', borderBottom: '1px solid rgba(255,255,255,0.1)' }} align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trades.map((trade, index) => {
            const solAmount = trade.sol_amount / 1e9;
            const usdAmount = solAmount * 60; // Replace with actual SOL price

            return (
              <TableRow 
                key={index}
                sx={{ 
                  '&:hover': { backgroundColor: 'rgba(61, 75, 92, 0.2)' },
                  transition: 'background-color 0.2s'
                }}
              >
                <TableCell 
                  sx={{ 
                    color: '#E0E3E7', 
                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                  }}
                >
                  {trade.symbol}
                </TableCell>
                <TableCell 
                  align="right"
                  sx={{ 
                    color: '#E0E3E7',
                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                  }}
                >
                  ${(trade.sol_amount / trade.token_amount).toFixed(6)}
                </TableCell>
                <TableCell 
                  align="right"
                  sx={{ 
                    color: '#E0E3E7',
                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 0.5 }}>
                    {solAmount.toFixed(3)}
                    <SolanaIcon sx={{ width: 14, height: 14 }} />
                  </Box>
                </TableCell>
                <TableCell 
                  align="right"
                  sx={{ 
                    color: '#E0E3E7',
                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                  }}
                >
                  ${usdAmount.toFixed(2)}
                </TableCell>
                <TableCell 
                  align="right"
                  sx={{ 
                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                  }}
                >
                  {trade.is_buy ? (
                    <ArrowUpwardIcon sx={{ color: '#4CAF50', fontSize: '1.2rem' }} />
                  ) : (
                    <ArrowDownwardIcon sx={{ color: '#EF5350', fontSize: '1.2rem' }} />
                  )}
                </TableCell>
                <TableCell 
                  align="right"
                  sx={{ 
                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                  }}
                >
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => onPaperTrade?.(trade)}
                    sx={{
                      minWidth: 'unset',
                      px: 1,
                      py: 0.5,
                      borderColor: trade.is_buy ? '#4CAF50' : '#EF5350',
                      color: trade.is_buy ? '#4CAF50' : '#EF5350',
                      '&:hover': {
                        borderColor: trade.is_buy ? '#45a049' : '#e53935',
                        backgroundColor: trade.is_buy ? 'rgba(76, 175, 80, 0.1)' : 'rgba(239, 83, 80, 0.1)'
                      }
                    }}
                  >
                    Copy
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Dashboard;


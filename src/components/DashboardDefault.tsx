import { Box, Typography, Grid, Paper, useTheme } from '@mui/material';
import { MarketOverview } from './MarketOverview';
import { TokenList } from './TokenList';
import { TradingPanel } from './TradingPanel';

export const DashboardDefault = () => {
  const theme = useTheme();

  return (
    <Box>
      <Typography 
        variant="h4" 
        gutterBottom
        sx={{ 
          color: 'white',
          mb: 4,
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}
      >
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Market Overview */}
        <Grid item xs={12}>
          <Paper sx={{ 
            p: 3,
            borderRadius: 2,
            boxShadow: theme.shadows[10],
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)'
          }}>
            <MarketOverview />
          </Paper>
        </Grid>

        {/* Token List */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ 
            p: 3,
            borderRadius: 2,
            boxShadow: theme.shadows[10],
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            height: '100%'
          }}>
            <TokenList />
          </Paper>
        </Grid>

        {/* Trading Panel */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ 
            p: 3,
            borderRadius: 2,
            boxShadow: theme.shadows[10],
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            height: '100%'
          }}>
            <TradingPanel />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
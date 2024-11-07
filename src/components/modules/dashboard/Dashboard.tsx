import { Grid, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { CustomCard } from '../../common/Card';
import { TokenList } from './TokenList';
import { WhaleBuys } from './WhaleBuys';

export const Dashboard = () => {
  const theme = useTheme();

  return (
    <Box>
      <Grid container spacing={3}>
        {/* Stats Cards Row */}
        <Grid item xs={12} md={4}>
          <CustomCard 
            title="Total Volume" 
            color={theme.palette.primary.main}
          >
            <Typography variant="h4" color="white">
              $1.2M
            </Typography>
          </CustomCard>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <CustomCard 
            title="Active Tokens" 
            color={theme.palette.secondary.main}
          >
            <Typography variant="h4" color="white">
              156
            </Typography>
          </CustomCard>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <CustomCard 
            title="Hot Score" 
            color="#9c27b0"
          >
            <Typography variant="h4" color="white">
              89
            </Typography>
          </CustomCard>
        </Grid>

        {/* Main Content Row */}
        <Grid item xs={12} md={7}>
          <TokenList />
        </Grid>

        <Grid item xs={12} md={5}>
          <WhaleBuys />
        </Grid>
      </Grid>
    </Box>
  );
};

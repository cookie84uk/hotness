import { Card, CardContent, Box } from '@mui/material';
import { HotnessDisplay } from './HotnessDisplay';
import { HotnessChart } from './HotnessChart';
import { TokenData } from '../types';

interface TokenCardProps {
  token: TokenData;
  onPaperTrade?: () => void;
}

export const TokenCard = ({ token, onPaperTrade }: TokenCardProps) => {
  return (
    <Card>
      <CardContent>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <HotnessDisplay token={token} size="large" />
          {/* ... other token info ... */}
        </Box>
        
        <HotnessChart mint={token.mint} height={150} />
        
        {/* ... rest of card content ... */}
      </CardContent>
    </Card>
  );
}; 
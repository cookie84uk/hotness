import { Card, CardHeader, CardContent, Typography, useTheme } from '@mui/material';

interface CustomCardProps {
  title?: string;
  children: React.ReactNode;
  action?: React.ReactNode;
  sx?: any;
  color?: string;
}

export const CustomCard = ({ 
  title, 
  children, 
  action, 
  sx,
  color 
}: CustomCardProps) => {
  const theme = useTheme();
  
  return (
    <Card
      sx={{
        overflow: 'hidden',
        boxShadow: 3,
        width: '100%',
        height: '100%',
        background: color || theme.palette.background.paper,
        '&.MuiPaper-root': {
          boxShadow: theme.shadows[1],
          '.MuiCardContent-root': {
            background: 'transparent',
            pb: 1,
          },
        },
        ...sx
      }}
    >
      {title && (
        <CardHeader
          sx={{
            p: 3,
            alignItems: 'center',
            '& .MuiTypography-root': {
              color: color ? theme.palette.common.white : undefined,
            },
          }}
          title={
            <Typography variant="h6" sx={{ whiteSpace: 'pre' }}>
              {title}
            </Typography>
          }
          action={action}
        />
      )}
      <CardContent>{children}</CardContent>
    </Card>
  );
}; 
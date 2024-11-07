import React from 'react';
import { Box, Typography } from '@mui/material';

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean, error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ p: 3 }}>
          <Typography color="error">Something went wrong:</Typography>
          <pre>{this.state.error?.message}</pre>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 
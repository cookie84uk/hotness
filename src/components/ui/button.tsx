import { Button as MuiButton, ButtonProps } from '@mui/material';

export const Button = ({ children, variant = "contained", ...props }: ButtonProps) => {
  return (
    <MuiButton variant={variant} {...props}>
      {children}
    </MuiButton>
  );
}; 
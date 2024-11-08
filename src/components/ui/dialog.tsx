import { Dialog as MuiDialog, DialogProps } from '@mui/material';

export const Dialog = ({ children, ...props }: DialogProps) => {
  return (
    <MuiDialog {...props}>
      {children}
    </MuiDialog>
  );
}; 
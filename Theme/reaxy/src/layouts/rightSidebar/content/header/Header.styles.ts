import { Theme } from '@mui/material'

export const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    placeContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '8px',
    position: 'relative',
    boxShadow: 3,
    boxSizing: 'border-box',
    background: (theme: Theme) => theme.palette.background.default,
    zIndex: 0,
    borderRadius: (theme: Theme) => `${theme.shape.borderRadius}px`,
  },
}

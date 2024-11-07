import { Theme, alpha } from '@mui/material'

export const styles = {
  container: {
    svg: {
      path: {
        fill: (theme: Theme) => theme.palette.primary.main,
      },
    },
    '.MuiAvatar-root': {
      background: (theme: Theme) => alpha(theme.palette.primary.light, 0.2),
    },
  },
  avatarList: { width: '100%', maxWidth: '100%', bgcolor: 'background.paper' },
  avatarText: { display: 'inline' },
  formGroup: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    svg: {
      path: {
        fill: (theme: Theme) => theme.palette.primary.main,
      },
    },
  },
  deleteIcon: {
    svg: {
      path: {
        fill: (theme: Theme) => theme.palette.error.main,
      },
    },
  },
  textInteractive: { mt: 4, mb: 2 },
  nestedButton: { pl: 4 },
}

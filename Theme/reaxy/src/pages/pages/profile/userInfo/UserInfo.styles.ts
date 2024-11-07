import { Theme } from '@mui/material'

export const styles = (theme: Theme) => ({
  img: {
    height: '270px',
  },

  cardContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  action: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  topBar: {
    p: 0,
    m: 0,
    '.MuiCardHeader-content': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '56px',
      background: theme.palette.primary.main,
      '.MuiTypography-root': {
        color: theme.palette.common.white,
        fontWeight: 700,
      },
    },
  },
})

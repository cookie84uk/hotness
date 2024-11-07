import BG from '@config/assets/images/admin/headerBg.png'
import { Theme } from '@mui/material'

export const styles = (theme: Theme, { isRtl }: { isRtl: boolean }) => ({
  container: {
    display: {
      lg: 'flex',
      md: 'none',
      sm: 'none',
      xs: 'none',
    },
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    backgroundImage: `url(${BG})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: theme.palette.primary.main,
    p: 2,
    '.MuiTypography-root': {
      color: theme.palette.common.white,
      fontWeight: 700,
      textAlign: 'center',
    },
  },
  image: {
    width: '25px',
    height: '20px',
  },
  listItem: {
    p: '8px',
  },
  typography: {
    color: theme.palette.text.primary,
    marginRight: isRtl ? '8px' : '0px',
    marginLeft: isRtl ? '0px' : '8px',
  },
})

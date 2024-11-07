import { Theme } from '@mui/material'

export const styles = ({ loading }: { loading: boolean }) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
    gap: 4,
    padding: '2rem',
    transition: 'transform 3s ',
    '& .MuiButtonBase-root': { height: '40px' },
  },
  middleContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 3,
    width: '100%',
  },

  accept: {
    cursor: 'pointer',
    textAlign: 'left',
    '.MuiTypography-root': {
      '&:hover': {
        color: (theme: Theme) => theme.palette.primary.main,
        transform: 'scaleY(1.2)',
        transition: 'transform .2s',
      },
    },
  },

  buttonBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 3,
    '.success': {
      color: '#fff',
      background: loading ? (theme: Theme) => theme.palette.success.light : '',
    },
  },

  insideButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    '& .MuiCircularProgress-root': {
      width: '16px !important',
      height: '16px !important',
      color: (theme: Theme) => theme.palette.primary.main,
    },
  },
})

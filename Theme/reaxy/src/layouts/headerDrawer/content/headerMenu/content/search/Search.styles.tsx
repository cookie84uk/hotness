import { Theme, alpha } from '@mui/material/styles'

export const styles = (theme: Theme, { show }: { show: any }) => ({
  container: {
    display: {
      lg: 'flex',
      md: 'flex',
      sm: 'flex',
      xs: 'none',
    },
    // gap: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '30px',
    '.MuiInputBase-root': {
      backgroundColor: '#fff',
      color: '#fff !important',
      background: alpha(theme.palette.primary.main, 1),
      height: '40px',
      borderRadius: '25px',
      width: show ? '300px' : '0px',
      transition: 'width .3s ',
      marginRight: '16px',
      input: {
        color: '#fff !important',
      },
      fieldset: {
        visibility: 'hidden',
      },
    },
  },
  input: {
    flex: 1,
    transition: 'all .5s ease-in-out',
    borderRadius: '25px',
    border: 'none',
    width: show ? '300px' : '0px',
    height: '38px',
    padding: show ? '8px' : '0',
    outline: 'none',
  },
  textField: {},
  icon: { color: theme.palette.common.white, fontSize: '28px' },
})

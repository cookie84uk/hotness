import { Theme, alpha } from '@mui/material/styles'
import BG from '@config/assets/images/admin/headerBg.png'


export const styles = (
  theme: Theme,
  { isRtl }: { isRtl: boolean },
  { open }: { open: boolean }
) => ({
  myComponent: {
    flexDirection: 'row',
    boxSizing: ' border-box',
    display: 'flex',
    placeContent: 'center',
    alignItems: 'center',
  },

  drawer: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      backgroundColor: theme.palette.background.default,
      backgroundImage: `url(${BG})`,
      width: '300px',
      boxSizing: 'border-box',
      margin: 'unset',
      top: 'unset',
      height: '100vh',
      overflow: 'auto',
      borderRadius: 'unset',
      ...(isRtl && {
        borderTopRightRadius: theme.shape.borderRadius,
        borderBottomRightRadius: theme.shape.borderRadius,
      }),
      ...(!isRtl && {
        borderTopLeftRadius: theme.shape.borderRadius,
        borderBottomLeftRadius: theme.shape.borderRadius,
      }),
    },
  },

  aside: {
    width: '300px',
    backgroundImage: `url(${BG})`,
    backgroundColor: theme.palette.background.paper,
    height: '100vh',
    overflow: 'auto',
    transform: open ? 'translateX(0px)' : 'translateX(100%)',
    transition: 'all .3s ease',
    position: 'fixed',
    top: 0,
    right: isRtl ? '' : 0, //
    zIndex: 1204,
    borderRadius: 'unset',
    ...(isRtl && {
      left: 0,
      transform: open ? 'translateX(0px)' : 'translateX(-300px)', // Sağdan açmak için %100 kullanılıyor.
      borderTopRightRadius: theme.shape.borderRadius,
      borderBottomRightRadius: theme.shape.borderRadius,
    }),
    ...(!isRtl && {
      borderTopLeftRadius: theme.shape.borderRadius,
      borderBottomLeftRadius: theme.shape.borderRadius,
    }),

    '& .MuiTypography-root': {},
  },

  backDrop: {
    ...(open && {
      transition: 'all 0.3s',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1203,
      background: (theme: Theme) => alpha(theme.palette.primary.main, 0.4),
    }),
  },

  iconButton: {
    width: '50px',
    height: '150px',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.customColors.modeColor, 0.7),
    '&:hover': {
      backgroundColor: alpha(theme.palette.customColors.modeColor, 0.2),
      '& .MuiSvgIcon-root ': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.primary.light
            : theme.palette.secondary.light,
      },
    },
    color: 'transparent',
    position: 'fixed',
    cursor: 'pointer',
    top: '150px',
    zIndex: 1201,
    ...(isRtl ? { left: 0 } : { right: 0 }),
    display:'flex',
    justifyContent: 'center',
    gap: 4,
    alignItems: 'center',
    flexDirection: 'column',
    transition: 'all .2s',
    '& .MuiSvgIcon-root ': {
      width: '32px',
      height: '32px',
      color: theme.palette.background.paper,
      '&:hover': {
        color:
          theme.palette.mode === 'light'
            ? theme.palette.primary.main
            : theme.palette.secondary.main,
      },
      zIndex: 1,
      animationName: 'icon',
      animationDuration: '2s',
      animationIterationCount: 'infinite',
    },

    '@keyframes icon': {
      from: { transform: 'rotate(0deg)' },
      to: { transform: 'rotate(360deg)' },
    },
  },
})

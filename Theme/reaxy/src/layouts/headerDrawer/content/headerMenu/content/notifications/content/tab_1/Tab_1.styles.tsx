import { Theme } from '@mui/material'

export const styles = (theme: Theme, { isRtl }: { isRtl: boolean }) => ({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    width: '300px',
    maxHeight: '50px',
    overflow: 'hidden',
  },
  img: {
    minWidth: '50px',
    height: '50px',
    borderRadius: '4px',
    objectFit: 'cover',
    mr: isRtl ? '0px' : '8px',
    ml: isRtl ? '8px' : '0px',
  },
  headerTitle: {
    display: 'flex',
    flexDirection: 'row',
    boxSizing: ' border-box',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  name: {
    fontWeight: 'bold',
  },
  timeWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    '&.MuiListItemIcon-root': {
      minWidth: 0,
      mr: '4px',
      color: theme.palette.text.secondary,
    },
  },
  titleTime: {
    '&.MuiTypography-root': {
      color: theme.palette.text.secondary,
    },
  },
  typographyBox: {
    fontSize: "1.17rem",
    lineHeight: ' 14px',
    maxWidth: '200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    whiteSpace: 'normal',
    color: theme.palette.text.secondary,
  },
  typography: {
    color: theme.palette.text.secondary,
    fontSize: "1.17rem",
    lineHeight: ' 14px',
  },
})

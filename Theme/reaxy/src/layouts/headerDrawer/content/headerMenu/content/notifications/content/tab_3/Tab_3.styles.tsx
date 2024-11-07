import { Theme } from '@mui/material'

export const styles = (theme: Theme, { isRtl }: { isRtl: boolean }) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '100%',
    p: 2,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '50px',
    minWidth: '50px',
    boxShadow: 3,
  },
  wrapperMessage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxHeight: '50px',
    overflow: 'hidden',
    ml: isRtl ? '0px' : '8px',
    mr: isRtl ? '8px' : '0px',
  },
  boldTitle: {
    fontWeight: 'bold',
  },
  typographyBox: {
    fontSize: '11px',
    lineHeight: ' 14px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    whiteSpace: 'normal',
    color: theme.palette.text.secondary,
  },
})

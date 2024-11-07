export const styles = ({ acceptTerms }: { acceptTerms: boolean }) => ({
  container: {
    p: '2rem',
    display: 'flex',
    position: 'absolute',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  terms: {
    display: 'flex',
    overflow: 'auto',
    position: 'relative',
    flexDirection: 'column',
    gap: '1rem',
  },

  buttonBox: {
    display: 'flex',
    position: 'relative',
    width: '100%',
    p: '1rem 0 0 0',
    gap: 3,
    '& .MuiButtonBase-root': {
      height: '40px',
      color: !acceptTerms ? '' : '#fff',
    },
  },
})

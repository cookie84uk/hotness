// Create mode-specific views
export const ModeSpecificView = ({ mode }: { mode: 'degen' | 'normie' }) => {
  return mode === 'degen' ? <DegenView /> : <NormieView />;
}; 
export const styles = (
  { DEFAULT }: { DEFAULT: boolean },
  { level }: { level: number },
  { isRtl }: { isRtl: boolean }
) => ({
  listIcons: {
    ...(DEFAULT && {
      marginLeft: `${level * 16}px`,
      marginRight: "auto",
      ...(isRtl && {
        marginRight: `${level * 16}px`,
        marginLeft: "auto",
      }),
    }),
  },
});

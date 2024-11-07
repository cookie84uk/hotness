import { layoutSize } from "@config/constant";

export const styles = ({ footer }: { footer: boolean }) => ({
  container: {
    position: "relative",
    width: "100%",
    maxWidth: "2500px",
    justifyContent: "start",
    marginBottom: footer
      ? `calc(3.05rem + ${layoutSize.FOOTER_HEIGHT})`
      : "1.6rem",
    transition: "all .2s",
  },
});

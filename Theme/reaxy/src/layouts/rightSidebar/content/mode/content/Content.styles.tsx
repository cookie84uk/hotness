export const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    overflow: "hidden",
    gap: 3,
    pt: 3,
  },
  button: {
    width: "50px",
    height: "50px",
    padding: 0,
    position: "relative",
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeft: "25px solid transparent",
    borderRight: "25px solid transparent",
    borderBottom: "25px solid black",
    transform: "rotate(45deg)",
    position: "absolute",
  },
};

import { tss } from "tss-react/mui";

export const useHomeStyles = tss.create(({ theme }) => ({
  homeContainer: {
    background: "#FFF",
    borderRadius: "10px",
  },
  signUpImg: {
    width: "100vw",
    [theme.breakpoints.up("lg")]: {
      width: "75%",
      height: "100%",
      padding: "0.5em 0",
    },
  },
  listContainer: {
    margin: "1rem 0",
  },
  listItemContainer: {
    alignItems: "flex-start",
    margin: "0.5rem 0",
  },
  listItemIconContainer: {
    minWidth: "2.2rem",
    marginTop: "0.2rem",
  },
  listItemTextContainer: {
    margin: 0,
  },
}));

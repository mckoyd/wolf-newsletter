import { tss } from "tss-react/mui";

export const useHomeStyles = tss.create(({ theme }) => ({
  signUpMobileImg: {
    height: "17.75rem",
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
  textField: {
    marginBottom: "1rem",
  },
  subscribeBtn: {
    color: theme.palette.common.white,
    background: "#242742",
    borderRadius: "0.5rem",
    padding: "1rem",
    textTransform: "none",
  },
}));

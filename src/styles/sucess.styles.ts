import { tss } from "tss-react/mui";

export const useSuccessStyles = tss.create(({ theme }) => ({
  successPage: {
    background: "#FFF",
    height: "100vh",
    width: "100vw",
    padding: "8em 2em 2em 2em",
  },
  dismissBtn: {
    color: theme.palette.common.white,
    background: "#242742",
    borderRadius: "0.5rem",
    padding: "1rem",
    textTransform: "none",
    marginBottom: "1rem",
    "&:hover": {
      background: "#242742",
    },
  },
}));

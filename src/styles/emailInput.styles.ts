import { tss } from "tss-react/mui";

export const useEmailInputStyles = tss.create(({ theme }) => ({
  textField: {
    marginBottom: "1rem",
  },
  subscribeBtn: {
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

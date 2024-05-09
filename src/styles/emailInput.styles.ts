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
      background: "linear-gradient(204.47deg, #FF6A3A 0%, #FF527B 100%)",
      boxShadow: "0px 16px 32px rgba(255, 97, 85, 0.5)",
    },
  },
}));

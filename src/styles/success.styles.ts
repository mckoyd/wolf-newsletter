import { tss } from "tss-react/mui";

export const useSuccessStyles = tss.create(({ theme }) => ({
  successPage: {
    background: "#FFF",
    height: "100vh",
    width: "100vw",
    padding: "8em 2em 2em 2em",
    [theme.breakpoints.up("lg")]: {
      width: "25vw",
      height: "50vh",
      padding: "3em",
      borderRadius: "0.5rem",
    },
  },
  dismissBtn: {
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

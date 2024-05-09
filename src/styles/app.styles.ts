import { tss } from "tss-react/mui";

export const useAppStyles = tss.create(({ theme }) => ({
  app: {
    background: theme.palette.common.paleNavy,
    height: "100vh",
    width: "100vw",
  },
}));

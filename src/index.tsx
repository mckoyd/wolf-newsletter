import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import App from "./pages/App";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";

const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  },
]);

const rootElement = document.getElementById("root") as HTMLElement;

const root: ReactDOM.Root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

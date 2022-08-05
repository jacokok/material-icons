import {
  createTheme,
  CssBaseline,
  darkScrollbar,
  ThemeOptions,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    // primary: {
    //   main: "#54DBC8",
    // },
    // secondary: {
    //   main: "#FFB1C3",
    // },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar(),
      },
    },
  },
};

const theme = createTheme(darkTheme);
const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

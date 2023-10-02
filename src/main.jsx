import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider, Text, Title, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import classes from "./App.css";
const theme = createTheme({
  colors: {
    primary: ["#e63946", "#e63946", "#e63946", "#e63946", "#e63946", "#e63946"],
    secondary: ["#1d3557"],
  },
  primaryColor: "red",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);

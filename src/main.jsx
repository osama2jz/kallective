import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider, Text, Title, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
const theme = createTheme({
  components: {
    Text: {
      styles: {
        root: {
          color: "#1d3557",
        },
      },
    },
    Anchor: {
      styles: {
        root: {
          color: "red",
        },
      },
    },
  },
  colors: {
    primary: ["#e63946", "#e63946", "#e63946", "#e63946", "#e63946", "#e63946"],
    gray: [
      "#9399A1",
      "#9399A1",
      "#9399A1",
      "#9399A1",
      "#9399A1",
      "#9399A1",
      "#9399A1",
      "#9399A1",
      "#9399A1",
    ],
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

import React from "react"
import ReactDOM from "react-dom/client";
import Site from "./components/Site";
import { ThemeProvider } from "./ThemeContext";

// Apply Them Global Styling
import "./styles/globals.css"
let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Site />
    </ThemeProvider>
  </React.StrictMode>
)
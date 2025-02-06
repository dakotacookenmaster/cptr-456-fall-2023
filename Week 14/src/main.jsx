import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider autoHideDuration={1000} maxSnack={3} anchorOrigin={{ horizontal: "left", vertical: "bottom" }}>
      <App />
    </SnackbarProvider>
  </React.StrictMode>
);

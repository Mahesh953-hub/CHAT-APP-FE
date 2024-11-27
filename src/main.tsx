import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Find the root element to attach React app
const root = document.getElementById("root")!;

// Wait until the window has fully loaded to hide the loading spinner and show the content
window.onload = () => {
  document.body.classList.add("loaded");
};

// Render the React app
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

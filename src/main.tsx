import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import StarsCanvas from "./components/main/StarBackground.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StarsCanvas />
    <App />
  </React.StrictMode>
);

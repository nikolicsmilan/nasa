import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DataContextProvider } from "./context/DataContext.jsx";
import { AudioContextProvider } from "./context/AudioContext.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DataContextProvider>
      <AudioContextProvider>
        <App />
      </AudioContextProvider>
    </DataContextProvider>
  </React.StrictMode>
);

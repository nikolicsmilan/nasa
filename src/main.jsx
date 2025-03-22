import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DataContextProvider } from "./context/DataContext.jsx";
import { AudioContextProvider } from "./context/AudioContext.jsx";
import { ConsoleContextProvider } from "./context/ConsoleContext.jsx";
//import "./index.css";
console.log('JSX file loaded correctly!')
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <ConsoleContextProvider>
  <DataContextProvider>
    <AudioContextProvider>
      <App />
    </AudioContextProvider>
  </DataContextProvider>
  </ConsoleContextProvider>
</React.StrictMode>
);
/*
  <React.StrictMode>
    <ConsoleContextProvider>
    <DataContextProvider>
      <AudioContextProvider>
        <App />
      </AudioContextProvider>
    </DataContextProvider>
    </ConsoleContextProvider>
  </React.StrictMode>
*/
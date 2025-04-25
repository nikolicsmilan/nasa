import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { DataContextProvider } from "./context/DataContext.jsx";
import { ConsoleContextProvider } from "./context/ConsoleContext.jsx";
//import "./index.css";

import { HoverMenuContextProvider } from "./context/HoverMenuContext"; // Ellenőrizd az útvonalat!
console.log("JSX file loaded correctly!");
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConsoleContextProvider>
      <DataContextProvider>
        <HoverMenuContextProvider> {/* <<< Ennek itt kell lennie! */}
          <App />
        </HoverMenuContextProvider>
      </DataContextProvider>
    </ConsoleContextProvider>
  </React.StrictMode>
);

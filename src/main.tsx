// src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // .jsx extension is optional, TypeScript handles it
import { DataContextProvider } from './context/DataContext';
import { ConsoleContextProvider } from './context/ConsoleContext';
import { HoverMenuContextProvider } from './context/HoverMenuContext';

// 1. Get the root element from the DOM and store it in a variable.
const rootElement = document.getElementById("root");

// 2. Type Guard: Check if the element actually exists before trying to use it.
//    This satisfies TypeScript because it proves rootElement is not null in the code below.
if (!rootElement) {
  throw new Error("Fatal Error: Root element with ID 'root' was not found in the DOM.");
}

// 3. Create the React root using the now-guaranteed HTMLElement.
const root = ReactDOM.createRoot(rootElement);

// 4. Render the application.
root.render(
  <React.StrictMode>
    <ConsoleContextProvider>
      <DataContextProvider>
        <HoverMenuContextProvider>
          <App />
        </HoverMenuContextProvider>
      </DataContextProvider>
    </ConsoleContextProvider>
  </React.StrictMode>
);
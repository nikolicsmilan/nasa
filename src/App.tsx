// Imports the React library, necessary for using JSX and React features like FC.
import React from 'react';
// Imports the component responsible for providing routing context to the app.
import { RouterProvider } from "react-router-dom";
// Imports global application-specific styles.
import "./App.css";
// Imports the main Tailwind CSS file.
import "./tailwind.css";
// Imports a custom hook, likely for saving user data or settings.
import { useSave } from "./hooks/use-saveuser";
// Imports the router configuration object from its dedicated file.
import { router } from "./router";

// Defines the App component as a React Functional Component (FC).
// Since it takes no props, the generic type is empty.
const App: React.FC = () => {
  // Calls the custom hook to perform its side effect (e.g., loading/saving data).
  // This is an application-level effect that should run once on app start.
  useSave();

  // The component returns the JSX structure to be rendered.
  return (
    // Uses a React Fragment (<>) to group multiple elements without adding an extra node to the DOM.
    <>
      {/* This hidden div is likely used as a reference to sample a CSS variable or a Tailwind theme color. */}
      {/* It's a common technique for making theme colors available to JS logic like charting libraries. */}
      <div id="theme-color-ref" className="text-primary hidden">
        Sampling div tailwind for react charts for dynamic colors
      </div>
      {/* Renders the RouterProvider, passing it the application's router configuration. */}
      {/* This component makes routing available to all child components via its context. */}
      <RouterProvider router={router} />
    </>
  );
}

// Exports the App component as the default export of this file, making it available for import in main.tsx.
export default App;
//  FONTOS HA ELHAGYOD A / JELET A CHILDRENNÉL REALTIVE PATH LESZ ÍGY MEG ABSZULÚT TEHÁT  ELÉ KELL ÍRNI AMI A PARENTBEN VAN!!!!!!!!!!!!!!!
//  path: "/route", /galery >> abszolút
// path:/route, galery >> relatív
// linkeknél ugyanez a szabály van!!!!!!!!!!!
// egyből a domain név után ha előtte van egy per jel
// és ha nincs előtte per jel akkor a jelenlegi aktív path után rakja
// ezek most siblingek tehát mindkettena  a gyökérhez tartoznak
// és van ez a speciális Link to=".." >> eggyel feljebb szóval mindkettő a gyökérhez vezet
// de ha egymásba vannak ágyazva akkor csak az előzőhöz vezet és utána a gyökérhez
/*
 <div className={`${choosenStyle} font-mono text-base`}>
      <div id="ezaz" className="text-primary hidden">
        Sampling div tailwind for react charts for dynamic colors
      </div>
      <RouterProvider router={router} />
    </div>
*/

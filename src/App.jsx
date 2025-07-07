// src/App.jsx
import { RouterProvider } from "react-router-dom";
import "./App.css";
import "./tailwind.css";
import { useSave } from "./hooks/use-saveuser";
import { router } from "./router"; // Importáljuk a kiszervezett routert

function App() {
  // A useSave hook itt maradhat, mert ez egy globális,
  // alkalmazás-szintű mellékhatás.
  useSave();

  // A komponens most már sokkal egyszerűbb.
  // Csak a RouterProvider-t rendereli.
  return (
    <>
      <div id="theme-color-ref" className="text-primary hidden">
        Sampling div tailwind for react charts for dynamic colors
      </div>
      <RouterProvider router={router} />
    </>
  );
}

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

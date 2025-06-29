// App.jsx

import { useState, lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./tailwind.css";

// Komponens importok
import Error from "./pages/Error/Error";
const Home = lazy(() => import("./pages/Home/Home"));
const Graph = lazy(() => import("./pages/Graph/Graph"));
const Test = lazy(() => import("./pages/Test/Test"));
const Admin = lazy(() => import("./pages/Admin/Admin"));
const AsteroidePage = lazy(() => import("./pages/Asteroide/Asteroide")); // Győződj meg a névről!

// Layout importok
const AppLayout = lazy(() => import("./layouts/AppLayout"));
const LayoutSimple = lazy(() => import("./layouts/LayoutSimple"));

// DataContext és Hook importok
// A MyDataContext-et most már az AppLayout használja, itt nem feltétlenül kell.
// import { MyDataContext } from "./context/DataContext";
import { useSave } from "./hooks/use-saveuser";
import useAsteroidData from "./hooks/useAsteroidData";
import { sentry } from "./locales/nasadummy";

// Fallback komponens
const LoadingFallback = ({ message = "Loading..." }) => (
  <div className="w-screen h-screen bg-black text-primary flex items-center justify-center text-xl font-mono">
    {message}
  </div>
);

function App() {
  useSave(); // Hook futtatása

  // Dummy adatok
  //const asteroidData = useAsteroidData();
  const [sumObject] = useState(sentry);
  //const defaultVideoSrc = "https://sablonossablon.web.app/video/optimized_earth2.mp4";
const defaultVideoSrc = "/muhold_compress.mp4"
  const router = createBrowserRouter([
    // --- Minden fő útvonal külön objektum ---
    {
      path: "/",
      element: (
        <Suspense fallback={<LoadingFallback message="Loading Layout..." />}>
           <AppLayout showNavbar={false} backgroundConfig={{ type: 'video', src: defaultVideoSrc }} />
        </Suspense>
      ),
      errorElement: <LayoutSimple><Error /></LayoutSimple>,
      children: [ // Csak a Home oldal tartozik ide
        {
          index: true,
          element: (
            <Suspense fallback={<LoadingFallback message="Loading Home..." />}>
              <Home />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "asteroide",
       element: (
         <Suspense fallback={<LoadingFallback message="Loading Layout..." />}>
           {/* Navbar látszik, videó van */}
           <AppLayout showNavbar={true} backgroundConfig={{ type: 'video', src: defaultVideoSrc }} />
        </Suspense>
      ),
      errorElement: <LayoutSimple><Error /></LayoutSimple>,
      children: [ // Csak az Asteroide oldal tartozik ide
        {
          index: true,
          element: (
            <Suspense fallback={<LoadingFallback message="Loading Asteroide Page..." />}>
              <AsteroidePage />
            </Suspense>
          ),
        }
      ]
    },
    {
      path: "graph",
      element: (
         <Suspense fallback={<LoadingFallback message="Loading Layout..." />}>
           {/* Navbar látszik, videó van */}
           <AppLayout showNavbar={true} backgroundConfig={{ type: 'video', src: defaultVideoSrc }} />
        </Suspense>
      ),
      errorElement: <LayoutSimple><Error /></LayoutSimple>,
      children: [ // Csak a Graph oldal tartozik ide
        {
          index: true,
          element: (
            <Suspense fallback={<LoadingFallback message="Loading Graph Page..." />}>
              <Graph sumObject={sumObject} />
            </Suspense>
          ),
        }
      ]
    },
    {
      path: "test",
      element: (
         <Suspense fallback={<LoadingFallback message="Loading Layout..." />}>
           {/* Navbar látszik, statikus kép van */}
           <AppLayout showNavbar={true} backgroundConfig={{ type: 'image', src: '/images/starfield.png' }} />
        </Suspense>
      ),
      errorElement: <LayoutSimple><Error /></LayoutSimple>,
      children: [ // Csak a Test oldal tartozik ide
        {
          index: true,
          element: (
            <Suspense fallback={<LoadingFallback message="Loading Test Page..." />}>
              <Test />
               {/* Placeholder propok: <Test mainConsole={asteroidData} settingsConsole={filterconsole} informationConsole={...}/> */}
            </Suspense>
          )
        }
      ]
    },
    {
      path: "admin",
      element: (
         <Suspense fallback={<LoadingFallback message="Loading Layout..." />}>
           {/* Navbar látszik, nincs extra háttér */}
           <AppLayout showNavbar={true} backgroundConfig={{ type: 'none' }} />
        </Suspense>
      ),
      errorElement: <LayoutSimple><Error /></LayoutSimple>,
      children: [ // Csak az Admin oldal tartozik ide
        {
          index: true,
          element: (
            <Suspense fallback={<LoadingFallback message="Loading Admin Page..." />}>
              <Admin />
              {/* Placeholder propok: <Admin mainConsole={asteroidData} settingsConsole={filterconsole} informationConsole={...}/> */}
            </Suspense>
          )
        }
      ]
    },
    // Catch-all 404 útvonal
    {
      path: "*",
      element: (
        <Suspense fallback={<LoadingFallback message="Loading Error Page..." />}>
          <LayoutSimple>
            <Error />
          </LayoutSimple>
        </Suspense>
      ),
      // Ennek nincs children-je
    },
  ]);

  // Már nincs szükség a külső div-re a témához, mert az AppLayout kezeli
  return (
    <>
      {/* A rejtett div a szín kiolvasásához továbbra is kellhet */}
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


/*
 <Asteroide
                mainConsole={asteroidData}
                settingsConsole={filterconsole} 
                informationConsole={filterconsole.map(
                  (item) => item.description
                )} 
              />
*/
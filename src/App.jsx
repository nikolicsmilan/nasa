import  { useEffect, lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./tailwind.css";
import Error from "./pages/Error/Error";
import { useSave } from "./hooks/use-saveuser"; 
import { MyDataContext } from "./context/DataContext";
import { useDataVisualization } from "./hooks/use-datavisualization";
import { graphconsole } from "./locales/localdata";

const LayoutHome = lazy(() => import("./layouts/LayoutHome"));
const LayoutAsteoride = lazy(() => import("./layouts/LayoutAsteoride"));
const Home = lazy(() => import("./pages/Home/Home"));
const Asteroide = lazy(() => import("./pages/Asteroide/Asteroide"));
const Subscribe = lazy(() => import("./pages/Subscribe/Subscribe"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading Layout...</div>}>
        <LayoutHome />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading Home...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/subscribe",
        element: (
          <Suspense fallback={<div>Loading Subscribe Page...</div>}>
            <Subscribe />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/asteroide",
    element: (
      <Suspense fallback={<div>Loading Asteroide Layout...</div>}>
        <LayoutAsteoride />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading Asteroide Page...</div>}>
            <Asteroide />
          </Suspense>
        ),
      },
    ],
  },


]);
function App() {
  //This needs to run immediately!
 const { saveUser } = useSave();

  const { choosenStyle } = MyDataContext();
  const { handleClick } = useDataVisualization();

  useEffect(() => {
    handleClick("graph", graphconsole[1]);
    handleClick("graph", graphconsole[0]);
  }, []);
  return (
    <div className={`${choosenStyle} font-mono text-base`}>
      <div id="ezaz" className="text-primary hidden">
        Sampling div tailwind for react charts for dynamic colors
      </div>
      <RouterProvider router={router} />
    </div>
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
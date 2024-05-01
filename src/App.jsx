import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./tailwind.css";
import Home from "./pages/Home/Home";
import Galery from "./pages/Galery/Galery";
import LayoutHome from "./layouts/LayoutHome";
import LayoutDashboard from "./layouts/LayoutDashboard";
import Error from "./pages/Error/Error";
import Asteroide from "./pages/Asteroide/Asteroide";
import AsteroideDetail from "./pages/AsteroideDetail/AsteroideDetail";
import SpaceKnowledge from "./pages/Spaceknowledge/SpaceKnowledge";
import Quiz from "./pages/Quiz/Quiz";
import SolarSytsem from "./pages/SolarSystem/SolarSystem";
import { useSave } from "./hooks/use-saveuser";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutHome />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> }, //path: "", ez a 2 alternatíva van de szerintem ez is jó path:"/",
    ],
  },
  {
    path: "/asteroide",
    element: <LayoutHome />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Asteroide /> },
      { path: ":detailId", element: <AsteroideDetail /> },
    ],
  },
  {
    path: "spaceknowledge",
    element: <LayoutDashboard />,
    errorElement: <Error />,
    children: [
      { index: true, element: <SpaceKnowledge /> },
      { path: "solarsystem", element: <SolarSytsem /> },
      { path: "quiz", element: <Quiz /> },
    ],
  },
]);
function App() {
//It is needed for the initilazation
  const {saveUser} = useSave()
  return (
    <div className="">
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

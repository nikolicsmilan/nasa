// src/pages/Home/Home.jsx

import { useEffect, lazy, Suspense } from "react";
import { MyDataContext } from "../../context/DataContext"; // Context import
import { SiNasa } from "react-icons/si";
import SubscribeConsole from "./components/SubscribeConsole";
import { AnimatePresence } from "framer-motion";

// Lazy loading a komponensekhez
const StatusIndicator = lazy(() => import("./components/StatusIndicator"));
const NotificationButton = lazy(() => import("./components/NotificationButton"));
const BrowserObjectButton = lazy(() => import("./components/BrowserObjectButton"));

// Fallback a Suspense-hez (lehetne közös helyen is)
const LoadingSpinner = ({ text = "Loading..." }) => (
  <div className="text-primary p-4">{text}</div>
);

const Home = () => {
  // Contextből csak azt vesszük ki, ami itt tényleg kell
  const { settingsOpen, subscribeToggle, setSubscribeToggle, setSettings } = MyDataContext();

  // Ez a useEffect csak a settings beállítására kellhet itt
  useEffect(() => {
    // Beállítjuk, hogy a settings panel (ha nyitva volt) a "Menu"-t mutassa
    // amikor erre az oldalra érünk. Opcionális, de hasznos lehet.
    // Ha ez nem kell, ez az useEffect törölhető.
    // setSettings("Menu"); // Visszaállítja a settings-t, ha kell
  }, [setSettings]); // Figyel: ha a setSettings referencia stabil, ez csak mountkor fut

  // Subscribe gomb kezelője
  const handleSubscribe = () => {
    setSubscribeToggle((prevState) => !prevState);
  };

  return (
    // Fő konténer az oldalnak, h-full, hogy kitöltse a Layout main területét
    // Az opacity-t a Layout kezeli, itt már nem kell (kivéve ha extra elhalványítást akarsz)
    <div className={`w-full h-full flex border-0 p-0 m-0 ${settingsOpen ? "opacity-20" : ""}`}>

    {/* Bal Oszlop (Tartalom) - lg-től kb. 2/3 vagy 3/5 szélesség */}
    <div className="w-full lg:w-2/5 h-full flex flex-col justify-center items-center p-4 lg:p-6 border-0 relative z-10 overflow-y-auto">
      {/* Header */}
      <header className="flex flex-col items-center justify-center px-6 mb-2 text-center">
         <div className="border-0 m-0 p-0 h-20">
            <SiNasa className="text-7xl md:text-8xl px-0 text-red-500/80 opacity-80" />
          </div>
          <p className=" md:-mt-2 text-lg md:text-xl text-center text-primary font-bold uppercase tracking-wider">
            Aszteroida-vészjelző rendszer
          </p>
      </header>

      {/* Státuszjelző */}
      <Suspense fallback={<LoadingSpinner text="Loading Status..." />}>
        <StatusIndicator color="#27ae60" />
      </Suspense>

      {/* Gombok CSAK mobilon (lg alatt) jelennek meg itt */}
      <div className="mt-6 flex flex-col items-center gap-2 w-full max-w-xs lg:hidden border-0">
        <Suspense fallback={<LoadingSpinner text="" />}>
          <NotificationButton handleSubscribe={handleSubscribe} />
        </Suspense>
        <Suspense fallback={<LoadingSpinner text="" />}>
          <BrowserObjectButton />
        </Suspense>
      </div>
    </div>

    {/* Jobb Oszlop (Gombok - CSAK lg felett) */}
    {/* Csak lg felett jelenik meg, kb 1/3 vagy 2/5 szélesség, középre igazítva */}
    <div className="hidden lg:flex lg:w-3/5 h-full flex-col items-center justify-center p-4 lg:p-6 border-0 relative z-10">
       <div className="flex flex-col items-center gap-4 w-full max-w-xs">
          <Suspense fallback={<LoadingSpinner text="" />}>
            <NotificationButton handleSubscribe={handleSubscribe} />
          </Suspense>
          <Suspense fallback={<LoadingSpinner text="" />}>
            <BrowserObjectButton />
          </Suspense>
        </div>
    </div>

    {/* Feliratkozó Panel (Overlay) - Ez kívül van a flex elrendezésen */}
    <AnimatePresence>
      {subscribeToggle && ( // Csak akkor rendereljük, ha a toggle igaz
         <SubscribeConsole
           subscribeToggle={subscribeToggle} // Ez technikailag nem is kell neki propként
           setSubscribeToggle={setSubscribeToggle}
         />
      )}
    </AnimatePresence>

  </div>
  );
};

export default Home;
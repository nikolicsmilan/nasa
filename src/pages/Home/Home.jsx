// src/pages/Home/Home.jsx

import { useEffect, useState, lazy, Suspense } from "react";
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
    <div className={`w-full h-full flex flex-col lg:flex-row border-0 border-blue-500 ${settingsOpen ? "opacity-20" : ""}`}>

      {/* Bal Oszlop (Tartalom) */}
      {/* Mobilon felül, lg-től balra (w-1/2), flex oszlop, középre igazítva */}
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-center p-4 lg:p-6 border-0 border-orange-500 relative z-10 order-2 lg:order-1">
        {/* Header (NASA logó és cím) */}
        <header className="flex flex-col items-center justify-center px-6 mb-6 text-center">
           <div className="border-0 m-0 p-0 ">
              {/* NASA Logó - Lehetne SVG vagy jobb minőségű kép */}
              <SiNasa className="text-8xl md:text-9xl px-0 text-red-500/80 opacity-80" />
            </div>
            <p className="-mt-4 md:-mt-5 text-lg md:text-xl text-center text-primary font-bold uppercase tracking-wider">
              Aszteroida-vészjelző rendszer
            </p>
        </header>

        {/* Központi Státusz és Gombok */}
        <Suspense fallback={<LoadingSpinner text="Loading Status..." />}>
          <StatusIndicator color="#27ae60" />
        </Suspense>

        <div className="mt-6 flex flex-col items-center gap-4 w-full max-w-xs">
          <Suspense fallback={<LoadingSpinner text="" />}>
            <NotificationButton handleSubscribe={handleSubscribe} />
          </Suspense>
          <Suspense fallback={<LoadingSpinner text="" />}>
            <BrowserObjectButton />
          </Suspense>
        </div>
      </div>

      {/* Jobb Oszlop (Subscribe Form) */}
      {/* Mobilon alul (az order miatt), lg-től jobbra (w-1/2) */}
      {/* Fontos: Kell relative pozíció, hogy az absolute SubscribeConsole működjön */}
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center border-0 border-sky-400 relative order-1 lg:order-2">
        <AnimatePresence>
          {/* A SubscribeConsole abszolút pozícióval jelenik meg ebben a div-ben */}
          <SubscribeConsole
            subscribeToggle={subscribeToggle}
            setSubscribeToggle={setSubscribeToggle}
          />
        </AnimatePresence>
        {/* Ha a SubscribeConsole nem lenne abszolút pozíciós, akkor itt kellene középre igazítani */}
      </div>

    </div>
  );
};

export default Home;
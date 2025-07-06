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
    //setSubscribeToggle((prevState) => !prevState);
    setSubscribeToggle((prevState: boolean) => !prevState);
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

/*
// src/pages/Home/Home.tsx

import React, { useEffect, lazy, Suspense, useContext } from "react";
import { MyDataContext, DataContextType } from "../../context/DataContext"; // Assuming DataContext.tsx exports this type
import { SiNasa } from "react-icons/si";
import SubscribeConsole from "./components/SubscribeConsole";
import { AnimatePresence } from "framer-motion";

// Lazy loading components for better performance.
const StatusIndicator = lazy(() => import("./components/StatusIndicator"));
const NotificationButton = lazy(() => import("./components/NotificationButton"));
const BrowserObjectButton = lazy(() => import("./components/BrowserObjectButton"));

// Define props for the loading spinner component.
type LoadingSpinnerProps = {
  text?: string;
};

// A fallback component for Suspense, now with proper typing.
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ text = "Loading..." }) => (
  <div className="text-primary p-4">{text}</div>
);

const Home: React.FC = () => {
  // Destructure values from the context.
  // We use `useContext` hook and provide the context object.
  // The 'as DataContextType' is a type assertion, useful if the context value can be null initially.
  const { 
    settingsOpen, 
    subscribeToggle, 
    setSubscribeToggle, 
    setSettings 
  } = useContext(MyDataContext) as DataContextType;

  // This effect might reset the settings panel state when navigating to this page.
  useEffect(() => {
    // This could reset the settings view to 'Menu' upon page load.
    // It's optional and can be removed if not needed.
    // setSettings("Menu");
  }, [setSettings]); // Dependency array: this runs when setSettings function changes (usually only once).

  // Handler to toggle the subscribe panel's visibility.
  const handleSubscribe = (): void => {
    setSubscribeToggle((prevState) => !prevState);
  };

  return (
    // Main container for the page, designed to fill the available space.
    <div className={`w-full h-full flex border-0 p-0 m-0 ${settingsOpen ? "opacity-20" : ""}`}>
      
     // Left Column (Main Content) 
      <div className="w-full lg:w-2/5 h-full flex flex-col justify-center items-center p-4 lg:p-6 border-0 relative z-10 overflow-y-auto">
      // Header Section 
        <header className="flex flex-col items-center justify-center px-6 mb-2 text-center">
           <div className="border-0 m-0 p-0 h-20">
              <SiNasa className="text-7xl md:text-8xl px-0 text-red-500/80 opacity-80" />
            </div>
            <p className=" md:-mt-2 text-lg md:text-xl text-center text-primary font-bold uppercase tracking-wider">
              Asteroid Hazard Warning System
            </p>
        </header>

        // Status Indicator with Suspense 
        <Suspense fallback={<LoadingSpinner text="Loading Status..." />}>
          <StatusIndicator color="#27ae60" />
        </Suspense>

        // Buttons for Mobile View (hidden on lg and up) 
        <div className="mt-6 flex flex-col items-center gap-2 w-full max-w-xs lg:hidden border-0">
          <Suspense fallback={<LoadingSpinner text="" />}>
            <NotificationButton handleSubscribe={handleSubscribe} />
          </Suspense>
          <Suspense fallback={<LoadingSpinner text="" />}>
            <BrowserObjectButton />
          </Suspense>
        </div>
      </div>

   //Right Column (Buttons for Desktop View - visible on lg and up) 
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

      // Subscription Panel Overlay 
      <AnimatePresence>
        {subscribeToggle && (
           <SubscribeConsole
             setSubscribeToggle={setSubscribeToggle}
           />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
*/
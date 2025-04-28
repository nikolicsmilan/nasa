// src/layouts/LayoutAsteoride.jsx

import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { FaCog } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import { MyDataContext } from "../context/DataContext";
import SettingsBarAnimation from "../components/Sidebar/SettingsBarAnimation";
import MobileConsoleView from "../components/consoles/views/MobileConsoleView";
import DesktopConsoleView from "../components/consoles/views/DesktopConsoleView";
import logo from "../assets/images/sat4.png";
// import useWindowSize from "../hooks/use-windowsize"; // Eltávolítva, ha a problematicSize logika nem kell
import DesktopMenuAsteroide from "../pages/Asteroide/components/DesktopMenuAsteroide";
import { navigationData } from "../locales/navigationData";
import { settingshome } from "../locales/localdata"; // Ez hiányzott az eredetiből, de kellhet
import NavBarSimple from "../components/navbarsimple/NavBarSimple";

const LayoutAsteoride = () => {
  const { setToggle, settingsOpen, setSettingsOpen, toggle } = MyDataContext();

  // const { width, height } = useWindowSize(); // Eltávolítva, ha a problematicSize logika nem kell

  const clozer = () => {
    setSettingsOpen(false);
  };
  const stopClozer = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    if (!settingsOpen) {
      const timeoutId = setTimeout(() => {
        setToggle(false);
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [settingsOpen, setToggle]);

  // const isProblematicSize = false; // Vagy a régi logika, ha kell

  return (
    <AnimatePresence>
      {/* Fő konténer */}
      <div
        className={`overflow-hidden mystyle border-0 border-red-400
         bg-black text-primary h-screen w-screen flex flex-col relative`} // overflow-hidden, w-screen, relative hozzáadva/módosítva
      >
        {/* === VIDEÓ HÁTTÉR === */}
        <video
          src="https://sablonossablon.web.app/video/optimized_earth2.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40" // position:absolute, object-cover, z-0
          autoPlay
          loop
          muted
        ></video>

        {/* === HEADER === */}
        <header
          className="w-full flex justify-between border-0 border-lime-600
         absolute z-40 top-0 left-0 right-0 h-20"
        >
          {" "}
          {/* left-0 hozzáadva a teljességhez */}
          {/* Logo */}
          <img
            src={logo}
            className="relative z-40 w-20 m-1 p-2 cursor-pointer border-0" // position nem kell, mert a header már absolute
            onClick={() => {
              setToggle(true);
              setSettingsOpen((prevToggle) => !prevToggle);
            }}
            alt="Logo" // Jó gyakorlat alt textet adni
          />
          {/* Desktop Menü */}
          <div className="lg:flex flex-1 flex-row justify-center items-center hidden border-0 border-orange-400">
            <NavBarSimple />
          </div>
          {/* Settings Ikon */}
          <FaCog
            className="relative z-40 text-4xl m-1 p-2 cursor-pointer border-0" // position nem kell
            onClick={() => {
              setToggle(true);
              setSettingsOpen((prevToggle) => !prevToggle);
            }}
          />
        </header>

        {/* === FŐ TARTALOM (MAIN) === */}
        {/* flex-grow: kitölti a maradék helyet a header alatt
            z-30: a videó felett, de a header alatt/mellett
            pt-20: hely a fix 80px (h-20) magas headernek */}
        <main className="flex flex-grow z-30 w-full relative border-0 border-purple-400 justify-center pt-20">
          {/* A régi isProblematicSize logika helyett most már csak az Outlet kell */}
          {/* Az Outletet tartalmazó div: Kitölti a main-t (ami már pt-20-szal van ellátva) */}
          <div className="w-full h-full border-0 border-red-600 relative">
            <Outlet />
          </div>
        </main>

        {/* === Settings Overlay (ha aktív) === */}
        {/* Ennek a pozicionálása és z-indexe (z-50) valószínűleg jó */}
        {toggle && (
          <div
            onClick={clozer}
            className="mx-0 absolute z-50 inset-0 h-full w-full /* Változás: inset-0 a teljes fedéshez */
                 border-orange-300 border-0 flex flex-col items-center p-2 overflow-y-auto bg-black bg-opacity-70" /* Háttér és görgetés */
          >
            {/* A stopClozer-es divek itt lehetnek */}
            <MobileConsoleView stopClozer={stopClozer} />

            <div
              className="flex flex-col items-center my-10 p-2 border-0 w-full max-w-md border-red-400" /* Max szélesség a tartalomnak? */
              onClick={stopClozer}
            >
              <SettingsBarAnimation menupoint={settingshome} />
            </div>

            <DesktopConsoleView stopClozer={stopClozer} />
          </div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default LayoutAsteoride;

// <DesktopMenuAsteroide navigationData={navigationData}/>

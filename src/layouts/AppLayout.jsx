// src/layouts/AppLayout.jsx
import React, { useState, useEffect, lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";
import PropTypes from 'prop-types'; // Prop validációhoz
import { FaCog } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import { MyDataContext } from "../context/DataContext";
import logo from "../assets/images/sat4.png";
import { settingshome } from "../locales/localdata";

// Dinamikus importok a Settings részekhez és a Navbarhoz
const SettingsBarAnimation = lazy(() => import("../components/Sidebar/SettingsBarAnimation"));
const MobileConsoleView = lazy(() => import("../components/consoles/views/MobileConsoleView"));
const DesktopConsoleView = lazy(() => import("../components/consoles/views/DesktopConsoleView"));
const NavBarSimple = lazy(() => import("../components/navbarsimple/NavBarSimple"));

// Alapértelmezett háttérkonfiguráció
const defaultBackground = { type: 'none' };
// Alapértelmezett videó URL (ha több helyen ugyanaz kell)
const defaultVideoSrc = "https://sablonossablon.web.app/video/optimized_earth2.mp4";

const AppLayout = ({
  showNavbar = true, // Alapértelmezetten mutatjuk a navbart
  backgroundConfig = defaultBackground // Alapértelmezetten nincs extra háttér
}) => {
  const { setToggle, settingsOpen, setSettingsOpen, toggle, choosenStyle } = MyDataContext();

  const clozer = () => {
    setSettingsOpen(false);
  };
  const stopClozer = (event) => {
    event.stopPropagation();
  };

  // useEffect a settings overlay bezárásához (változatlan)
  useEffect(() => {
    if (!settingsOpen) {
      const timeoutId = setTimeout(() => {
        setToggle(false);
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [settingsOpen, setToggle]);

  // Háttér renderelése a config alapján
  const renderBackground = () => {
    switch (backgroundConfig.type) {
      case 'video':
        return (
          <video
            key={backgroundConfig.src || defaultVideoSrc} // key a forrás alapján a csere jelzésére
            src={backgroundConfig.src || defaultVideoSrc}
            className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40"
            autoPlay
            loop
            muted
            playsInline // Mobil eszközökhöz
          />
        );
      case 'image':
        return (
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 opacity-80" // Vagy más opacity
            style={{ backgroundImage: `url(${backgroundConfig.src || '/images/starfield.png'})` }} // Fallback statikus kép
          ></div>
        );
      case 'none':
      default:
        // Csak az alap sötét háttér lesz (a külső div miatt)
        // Ide lehetne tenni egy alap csillagos hátteret, ha mindenhol kellene valami minimális
         return (
             <div className="absolute top-0 left-0 w-full h-full bg-black z-0 opacity-90" style={{backgroundImage: 'url(/images/starfield.png)'}}></div>
         );
    }
  };

  return (
    <AnimatePresence>
      {/* Fő konténer */}
      <div
        // A témát itt is alkalmazzuk, ahogy App.jsx-ben
        className={`${choosenStyle} overflow-hidden mystyle border-0
         bg-black text-primary h-screen w-screen flex flex-col relative font-mono`}
      >
        {/* Háttér Renderelése */}
        {renderBackground()}

        {/* === HEADER === */}
        <header
          className="w-full flex justify-between items-center border-0
         absolute z-40 top-0 left-0 right-0 h-20" // items-center hozzáadva
        >
          <img
            src={logo}
            className="relative z-40 w-20 m-1 p-2 cursor-pointer border-0"
            onClick={() => { setToggle(true); setSettingsOpen((prev) => !prev); }}
            alt="Logo"
          />
          {/* Központi Menü - Feltételesen renderelve */}
          <div className="lg:flex flex-1 flex-row justify-center items-center hidden h-full border-0">
            {showNavbar && (
              <Suspense fallback={<div>Loading Menu...</div>}>
                <NavBarSimple />
              </Suspense>
            )}
          </div>
          <FaCog
            className="relative z-40 text-4xl m-1 p-2 cursor-pointer border-0"
            onClick={() => { setToggle(true); setSettingsOpen((prev) => !prev); }}
          />
        </header>

        {/* === FŐ TARTALOM (MAIN) === */}
        <main className="flex flex-grow z-30 w-full relative justify-center pt-20">
            {/* Az Outlet a Page komponenst tölti be */}
            <div className="w-full h-full border-0 relative">
              <Outlet />
            </div>
        </main>

         {/* === Settings Overlay (ha aktív) === */}
         {toggle && (
            <div
              onClick={clozer}
              className="mx-0 absolute z-50 inset-0 h-full w-full
                 border-orange-300 border-0 flex flex-col items-center p-2 overflow-y-auto bg-black bg-opacity-70"
            >
              <Suspense fallback={<div>Loading Settings...</div>}>
                <MobileConsoleView stopClozer={stopClozer} />
                <div
                  className="flex flex-col items-center my-10 p-2 border-0 w-full max-w-md"
                  onClick={stopClozer}
                >
                  <SettingsBarAnimation menupoint={settingshome} />
                </div>
                <DesktopConsoleView stopClozer={stopClozer} />
              </Suspense>
            </div>
          )}
      </div>
    </AnimatePresence>
  );
};

// Prop típusok definiálása
AppLayout.propTypes = {
  showNavbar: PropTypes.bool,
  backgroundConfig: PropTypes.shape({
    type: PropTypes.oneOf(['none', 'video', 'image', 'gradient']).isRequired,
    src: PropTypes.string, // video vagy image esetén
    value: PropTypes.string // gradient esetén
  })
};

export default AppLayout;
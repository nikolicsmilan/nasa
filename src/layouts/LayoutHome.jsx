import React, { useEffect, lazy, Suspense, memo } from "react";
import { Outlet } from "react-router-dom";
import { FaCog } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import { MyDataContext } from "../context/DataContext";
import { settingshome } from "../locales/localdata";
import logo from "../assets/images/sat4.png"
// Lazy betöltés
const SettingsBarAnimation = lazy(() => import("../components/Sidebar/SettingsBarAnimation"));
const MobileConsoleView = lazy(() => import("../components/consoles/views/MobileConsoleView"));
const DesktopConsoleView = lazy(() => import("../components/consoles/views/DesktopConsoleView"));

const LayoutHome = memo(() => {
  const { setToggle, settingsOpen, setSettingsOpen, toggle } =
    MyDataContext();

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
      }, 100); // 1000 milliszekundum = 1 másodperc
      return () => clearTimeout(timeoutId);
    }
  }, [settingsOpen, setToggle]);

  return (
    <AnimatePresence>
      <div
        className={` overflow-y-auto overflow-x-hidden lg:overflow-y-hidden 
      mystyle border-0 border-red-400
       bg-black  text-primary h-screen flex flex-col w-full`}
      >
        <header
          className=" w-full flex  justify-between border-0 
         border-lime-600 absolute z-40 top-0 right-0 "
        >
          <img
            src={logo}
            className={`relative top-0 right-0 z-40  w-20 m-1 p-2 
             cursor-pointer border-0`}
            onClick={() => {
              setToggle(true);
              setSettingsOpen((prevToggle) => !prevToggle);
            }}
          />
          <FaCog
            className={`relative top-0 right-0 z-40 text-4xl m-1 p-2 
             cursor-pointer border-0`}
            onClick={() => {
              setToggle(true);
              setSettingsOpen((prevToggle) => !prevToggle);
            }}
          />{" "}
        </header>

        <main
          className=" flex  flex-grow 
          z-30  w-full relative"
        >
          <div className=" w-full border-0 border-red-400 z-50 relative ">
            <Outlet />
          </div>
          {toggle && (
            <div
              onClick={clozer}
              className="absolute z-50  h-full w-full top-0 right-0 border-lime-300 border-0"
            >
              <Suspense fallback={<div>Loading...</div>}>
                <MobileConsoleView stopClozer={stopClozer} />
              </Suspense>

              <div onClick={stopClozer}>
                <Suspense fallback={<div>Loading...</div>}>
                  <SettingsBarAnimation menupoint={settingshome} />
                </Suspense>
              </div>

              <Suspense fallback={<div>Loading...</div>}>
                <DesktopConsoleView stopClozer={stopClozer} />
              </Suspense>
            </div>
          )}
        </main>
      </div>
    </AnimatePresence>
  );
});

export default LayoutHome;

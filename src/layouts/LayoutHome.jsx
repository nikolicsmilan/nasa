import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { FaCog } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import { MyDataContext } from "../context/DataContext";
import SettingsBarAnimation from "../components/Sidebar/SettingsBarAnimation";
import { settingshome } from "../locales/localdata";
import MobileConsoleView from "../components/consoles/views/MobileConsoleView";
import DesktopConsoleView from "../components/consoles/views/DesktopConsoleView";

const LayoutHome = () => {
  const { setToggle, settingsOpen, setSettingsOpen, toggle,choosenStyle } = MyDataContext();

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
      {/*BETTENI IDE EZT NAGY LEHETŐSÉGEKET NYÚJT
      MAGÁBAN bg-${choosenStyle}-400 */}
      {/*text-${choosenStyle}-400 */}
      <div
        className={` overflow-y-auto overflow-x-hidden lg:overflow-y-hidden 
      mystyle border-0 border-red-400
       bg-black  text-sky-400 h-screen flex flex-col w-full`}
      >
        <header
          className="flex  justify-end border-0
         border-lime-600 absolute z-40 top-0 right-0 "
        >
          {/*delete FaBars icon that one start two menu */}
          <FaCog
            className={`relative top-0 right-0 z-40 text-5xl m-1 p-2 
             cursor-pointer border-0`}
            onClick={() => {
              setToggle(true);
              setSettingsOpen((prevToggle) => !prevToggle);
              // setToggle((prevToggle) => !prevToggle); // Negált érték beállítása
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
              {/*MobileMainconsole: content depend on settings  */}
              <MobileConsoleView stopClozer={stopClozer} />
              {/*MobileMainconsole end  */}

              {/*Settingsbar service mobil and desktop screen 
              settingshome inherit from localdata
              */}
              <div onClick={stopClozer}>
                <SettingsBarAnimation menupoint={settingshome} />
              </div>
              {/*Settingsbar end */}

              {/*Desktop Mainconsole: content depend on settings  */}

              <DesktopConsoleView stopClozer={stopClozer} />

              {/*Desktop Mainconsole end  */}
            </div>
          )}
        </main>
      </div>
    </AnimatePresence>
  );
};

export default LayoutHome;
//<p className="text-white">{choosenSytle} stílus</p>
//<span className="text-white">{choosenStyle}</span>
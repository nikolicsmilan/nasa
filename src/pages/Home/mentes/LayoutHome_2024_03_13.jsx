import React from "react";
import { Outlet } from "react-router-dom";
import {  FaCog } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { slideAnimation } from "../utils/motion";
import { MyDataContext } from "../context/GeneralContext";
import MainNavigationConsole from "../components/MainNavigationConsole";
import StyleConsole from "../components/StyleConsole";
import SoundConsole from "../components/SoundConsole";
import LanguageConsole from "../components/LanguageConsole";
import DataConsole from "../components/DataConsole";
import SettingsBar from "../components/Sidebar/SettingsBar";
import { settingshome } from "../locales/localdata";
import MobileMainConsole from "../components/MobileMainConsole";
import DesktopConsole from "../components/DesktopConsole";

const LayoutHome = () => {
  const { setToggle, settingsOpen, setSettingsOpen } =
    MyDataContext();


  const clozer = () => {
    setSettingsOpen(false);
  };
  const stopClozer = (event) => {
    event.stopPropagation();
  };
  return (
    <AnimatePresence >
      <div
        className="overflow-y-auto overflow-x-hidden lg:overflow-y-hidden 
      mystyle border-0 border-red-400
       bg-black text-sky-400 h-screen flex flex-col w-full"
      >
        <header
          className="flex  justify-end border-0
         border-lime-600 absolute z-40 top-0 right-0 "
        >
          {/*delete FaBars icon that one start two menu */}
          <FaCog
            className="relative top-0 right-0 z-40 text-5xl m-1 p-2 
             cursor-pointer text-sky-200 border-0"
            onClick={() => {
              setSettingsOpen((prevToggle) => !prevToggle);
              setToggle((prevToggle) => !prevToggle); // Negált érték beállítása
            }}
          />
        </header>

        <main
          className=" flex  flex-grow border-0 border-sky-400 
          z-30  w-full relative"
        >
          <div className=" w-full border-0 border-red-400 z-50 relative ">
            <Outlet />
          </div>
          {settingsOpen && (
            <div
              onClick={clozer}
              className="absolute z-50  h-full w-full top-0 right-0 border-lime-300 border-0"
            >
              {/*MobileMainconsole: content depend on settings  */}
              <MobileMainConsole onClick={stopClozer} />
              {/*MobileMainconsole end  */}

              {/*Settingsbar service mobil and desktop screen */}
              <div onClick={stopClozer}>
                <SettingsBar menupoint={settingshome} />
              </div>
              {/*Settingsbar end */}

              {/*Desktop Mainconsole: content depend on settings  */}
              <DesktopConsole onClick={stopClozer} />
              {/*Desktop Mainconsole end  */}
            </div>
          )}
        </main>
      </div>
    </AnimatePresence>
  );
};

export default LayoutHome;
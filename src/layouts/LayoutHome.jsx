import React from "react";
import { Outlet } from "react-router-dom";
//import SidebarGlass from "../components/Sidebar/SidebarGlass";
import { FaBars, FaCog } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { slideAnimation } from "../utils/motion";
import { MyDataContext } from "../context/GeneralContext";
import useWindowSize from "../hooks/use-windowsize";
import MainNavigationConsole from "../components/MainNavigationConsole";
import StyleConsole from "../components/StyleConsole";
import SoundConsole from "../components/SoundConsole";
import LanguageConsole from "../components/LanguageConsole";
import DataConsole from "../components/DataConsole";
import SettingsBar from "../components/Sidebar/SettingsBar";
import { settingshome } from "../locales/localdata";
import MobileMainConsole from "../components/MobileMainConsole";

const LayoutHome = () => {
  const { toggle, setToggle, settingsOpen, setSettingsOpen, settings } =
    MyDataContext();
  const { width, height } = useWindowSize();
  const handleClose = () => {
    setToggle(false);
    setSettingsOpen(false);
  };
  return (
    <AnimatePresence>
      <div
        className="overflow-y-auto overflow-x-hidden lg:overflow-y-hidden 
      mystyle border-0 border-red-400
       bg-black text-sky-400 h-screen flex flex-col w-full"
      >
        <header className="flex  justify-end border-0 border-lime-600 absolute z-40 top-0 right-0 ">
          <FaBars
            className="relative z-50 text-5xl m-1 cursor-pointer
             text-sky-200 flex lg:hidden border-0"
            onClick={() => {
              setToggle((prevToggle) => !prevToggle); // Negált érték beállítása
            }}
          />
          <FaCog
            className="relative top-0 right-0 z-40 text-5xl m-1  cursor-pointer text-sky-200 border-0"
            onClick={() => {
              setSettingsOpen((prevToggle) => !prevToggle); // Negált érték beállítása
            }}
          />
        </header>

        <main className=" flex  flex-grow border-0 border-sky-400 z-30  w-full relative">
          <div className="border-0 border-purple-400 absolute top-0 h-full w-full z-50">
            {/*MobileMainconsole: content depend on settings  */}
            <MobileMainConsole handleClose={handleClose} />
            {/*MobileMainconsole end  */}

            {/*Settingsbar service mobil and desktop screen */}
            <SettingsBar menupoint={settingshome} />
            {/*Settingsbar end */}
          </div>

          <div
            onClick={() => {
              handleClose();
            }}
            className=" w-full border-2 border-sky-400 z-10 relative "
          >
            <Outlet />
          </div>
          {/*Desktop Mainconsole: content depend on settings  */}
          <div
            className={`hidden absolute inset-0
             lg:flex items-start lg:items-center lg:justify-center border-0 border-orange-400 ${
               settingsOpen || toggle ? "opacity-100 md:opacity-100" : ""
             } `}
          >
            <div className="md:max-w-6xl mx-auto border-0 border-white flex justify-center flex-wrap z-50">
              {settings === "Navigation" && <MainNavigationConsole />}
              {settings === "Style" && <StyleConsole />}
              {settings === "Sound" && <SoundConsole />}
              {settings === "Language" && <LanguageConsole />}
              {settings === "Data" && <DataConsole />}
            </div>
          </div>
          {/*Desktop Mainconsole end  */}
        </main>
      </div>
    </AnimatePresence>
  );
};

export default LayoutHome;

/*
   <motion.div
            variants={slideAnimation("left")}
            initial="exit"
            animate={toggle ? "animate" : "exit"}
            exit="exit"
            className=" w-full md:w-80 
            border-4 h-2/4 absolute top-10 left-0 z-30 flex md:hiddenflex-col m-0"
          >
            {settings === "Navigation" && (
              <SidebarGlass onClose={handleClose} />
            )}
            {settings === "Style" && <StyleConsole />}
            {settings === "Sound" && <SoundConsole />}
            {settings === "Language" && <LanguageConsole />}
            {settings === "Data" && <DataConsole />}
          </motion.div>
          <motion.div
            variants={slideAnimation("right")}
            initial="exit"
            animate={settingsOpen ? "animate" : "exit"}
            exit="exit"
            className="lg:w-80 w-full border-4 h-1/4 absolute bottom-0 right-0
             z-30 flex flex-col items-center m-0"
          >
            <SettingsBarGlass onClose={handleClose} />
          </motion.div>
*/

/*
  <div className="absolute inset-0 flex items-center justify-center ">
            <div className="lg:max-w-6xl mx-auto border-0 border-white flex justify-center flex-wrap z-50">
              {menu.map((item) => (
                <NavLink
                  to={item?.link}
                  className=" "
                >
                  <div
                    key={item.id} // Asszumáltam, hogy van egy id az item objektumban
                    className="customshadow3 cursor-pointer rounded-2xl relative flex-col m-3 w-40 lg:w-48 md:w-40 h-14 md:h-28 border-0 border-orange-400"
                  >
                    <div className="customshadow2 rounded-2xl w-40 md:w-40 lg:w-48 h-full text-sky-400 shadow-2xl border-0 bg-sky-400 md:opacity-10 opacity-10 mt-[0px] z-40"></div>

                    <div className="customshadow2 rounded-2xl text-2xl opacity-100 flex h-14 md:h-28 border-purple-400 shadow-2xl items-center justify-center border-0 bg-dark-800 z-20 mt-[-55px] md:mt-[-110px] font-bold">
                      <p className="mx-2 "> {<item.icon />}</p>
                      <h2 className="text-sky-400 opacity-100">{item.title}</h2>
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
*/
/*
  <div className="w-full border-2 border-sky-400 z-10">
            <Outlet />
          </div>
*/
/*
  {toggle && (
            <motion.div
              {...slideAnimation("left")}
              className="w-80 border-0 relative z-30 flex flex-col m-0"
            >
              <Sidebar />
            </motion.div>
          )}

*/
// z-30 relative w-full h-screen

/*
const Layout = () => {
  return (
    <div className="  border-2 border-red-400 bg-black text-sky-400">
      <hedaer className="border-2 relative z-30 ">
        <FaBars className=" absolute z-30  text-2xl" />
      </hedaer>
      <main className=" flex border-2 border-orange-800">
       
      <div className="sidebar w-12 border-2 relative z-30  flex flex-col m-0 ">
      <Sidebar />
    </div>

    <div className="w-full border-2 border-sky-400 z-10">
      <Outlet />
    </div>
  </main>
</div>
);
};
*/

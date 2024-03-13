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
import DesktopConsole from "../components/DesktopConsole";

const LayoutHome = () => {
  const { toggle, setToggle, settingsOpen, setSettingsOpen, settings } =
    MyDataContext();
  const { width, height } = useWindowSize();

  const clozer = () => {
    setSettingsOpen(false);
  };
  const stopClozer = (event) => {
    event.stopPropagation();
  };
  return (
    <AnimatePresence>
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
            className="relative top-0 right-0 z-40 text-5xl m-1 
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
          {/* ITT VAN AZ EGÉSZNEK A KULCSA AKKOR AKTIVÁLÓDJON HA VALAMELYIK 
          GOMBRA KATTINTOK MENU VAGY SETTINGS HA BEZÁRÓDIK NE LEGYEN RÉSZE A DOMNAK
          EZ AZ ÚGY NEVEZET KEZELŐ FELÜLET NEM RÉSZE A TARTALOMNAK
          CSAK ÚGY MOND RÁERESZKEDIK HA VALAMILYEN BEÁLÍTÁST EL AKAROK VÉGEZNI
          a HOME OLDALON SZÜKSÉG VAN EGY KÜLÖN NAVIGÁCIÓS FŐMENÜRE AMI MÁSHOL
          VAN A KÉPERNYŐN ÉS CSAK ANNYI VAN RÁÍRVA KEZDÉS VAGY START
          AMI EGYBŐL AZ ASZTERIDA OLDALRA VISSZI ÍGY EGYSZERŰBB 
          IPHONOSABB MARKETINGESEBB MEGOLDÁS LESZ
          AKI SZERETNE TÖBBET AZ TUDJA HOGY A MENÜT KELL MEGNYITANIA
          ALAPBÓL MINDIG A SETTINGS A NAVIGÁCIÓN LESZ
          CSAK EGY GOMB KELL AMI MEGNYITJA MINDKÉT KEZELEŐ FELELÜLETET
          EZ PEDIG AZ ISMERT MENÜ GOMB LESZ

          jÓ VOLNA EGY OLYAN NAVIGÁCIÓS ELEM IS MELY A TELJES FÁT 
          MUTATJA VONALAKKAL ÖSSZEKÖTVE KVÁZI MINT EGY FOLDER STUKTÚRA
          ÉS AZT HOL ÁLLUNK BIZONYOS PONTJÁN
          */}

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
/*    <FaBars
            className="relative z-50 text-5xl m-1 cursor-pointer
             text-sky-200 flex lg:hidden border-0"
            onClick={() => {
              setToggle((prevToggle) => !prevToggle); // Negált érték beállítása
            }}
          /> */

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

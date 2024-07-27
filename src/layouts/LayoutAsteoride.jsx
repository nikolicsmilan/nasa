import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { FaCog } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import { MyDataContext } from "../context/DataContext";
import SettingsBarAnimation from "../components/Sidebar/SettingsBarAnimation";
import { settingshome } from "../locales/localdata";
import MobileConsoleView from "../components/consoles/views/MobileConsoleView";
import DesktopConsoleView from "../components/consoles/views/DesktopConsoleView";
import logo from "../assets/images/earthbg7.png";
import BiggerConsoles from "../components/consoles/views/BiggerConsoles";
import { menu } from "../locales/localdata";

const LayoutAsteoride = () => {
  const { setToggle, settingsOpen, setSettingsOpen, toggle, choosenStyle } =
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
          <div className="flex">
            {menu.map((item, index) => (
              <div
                key={index}
                onClick={() => handleClick(item)}
                className="group relative z-50 border-0 hover:border-red-400 
             p-2 rounded m-2 bg-950 text-primary cursor-pointer text-3xl hover:bg-600"
              >
                {<item.icon />}
                <div
                  className=" text-center absolute top-0 left-0 mt-[80px] ml-2 w-32
            hidden group-hover:block bg-gray-700 text-white text-sm rounded p-1 z-50"
                >
                  {item.description}
                </div>
              </div>
            ))}
          </div>
          {/*delete FaBars icon that one start two menu */}
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

export default LayoutAsteoride;
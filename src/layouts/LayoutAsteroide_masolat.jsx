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
import { MyConsoleContext } from "../context/ConsoleContext";
import useWindowSize from "../hooks/use-windowsize";
const LayoutAsteoride = () => {
  const { setToggle, settingsOpen, setSettingsOpen, toggle, choosenStyle } =
    MyDataContext();
  const { statusTable } = MyConsoleContext();
  const { width, height } = useWindowSize();
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

  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1200, // Ahogy a Tailwind-ben definiáltad
    "2xl": 1536,
  };
  //1200 alatt és 768 felett nem néz ki jól

  const isProblematicSize = (width >= 768 && width < 1200) || height < 700;
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
            className={`relative top-0 right-0 z-40  w-24 m-1 p-2 
             cursor-pointer border-0`}
            onClick={() => {
              setToggle(true);
              setSettingsOpen((prevToggle) => !prevToggle);
            }}
          />
          <div
            className="lg:flex justify-between items-center hidden border-0 w-full "
            style={
              width >= breakpoints.lg
                ? { width: width - 800 }
                : { width: width }
            }
          >
            <div className="w-32 border-0 px-5">
              {statusTable.dashboard.charAt(0).toUpperCase() +
                statusTable.dashboard.slice(1)}
            </div>

            {!toggle && (
              <div className="flex glowy-button-6 relative top-2">
                {menu.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleClick(item)}
                    className="glowy-button-5 group relative z-50 border-0 hover:border-red-400 
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
            )}
            <div className="w-32 border-0 text-right px-5">
              {statusTable.graph.charAt(0).toUpperCase() +
                statusTable.graph.slice(1)}
            </div>
          </div>
          {/*delete FaBars icon that one start two menu */}
          <FaCog
            className={` relative top-0 right-0 z-40 text-4xl m-1 p-2 
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
          {/*md:hidden xl:block */}
          <div className="md:hidden xl:block  w-full border-0 border-red-400 z-50 relative ">
            <Outlet />
          </div>

          <div className="hidden md:block xl:hidden">
            <div className="p-10 flex flex-col justify-center items-center border-0 w-screen h-screen">
              <h1 className="text-center text-lg">
                You are using a display of a problematic size. We suppose rotate
                your screen.
              </h1>
            
              <div className="m-10 text-center">
              <p className="m-1"> (If you can't use this app even after rotating it,
                contact the manufacturer to get them to make a normal sized
                display for 99% of devices.</p>
                <p> Your screen height: {height} px</p>
                <p> Your screen width: {width} px)</p>
              </div>
            </div>
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
              <div className="border-0 border-red-400" onClick={stopClozer}>
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
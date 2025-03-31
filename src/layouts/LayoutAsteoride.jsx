import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { FaCog } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import { MyDataContext } from "../context/DataContext";
import SettingsBarAnimation from "../components/Sidebar/SettingsBarAnimation";
import { settingshome } from "../locales/localdata";
import MobileConsoleView from "../components/consoles/views/MobileConsoleView";
import DesktopConsoleView from "../components/consoles/views/DesktopConsoleView";
import logo from "../assets/images/sat4.png"
import { menu, mobilmenu } from "../locales/localdata";
import { MyConsoleContext } from "../context/ConsoleContext";
import useWindowSize from "../hooks/use-windowsize";
import DesktopMenuAsteroide from "../pages/Asteroide/components/DesktopMenuAsteroide";
import { navigationData } from "../locales/navigationData";
const LayoutAsteoride = () => {
  const { setToggle, settingsOpen, setSettingsOpen, toggle } = MyDataContext();
  const { statusTable, mobiletoggle, setMobileToggle } = MyConsoleContext();
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
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [settingsOpen, setToggle]);

  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1200,
    "2xl": 1536,
  };
  const menuHandler = (item) => {
    if (item.title === "showmenu") {
      setMobileToggle(true);
    } else {
      setMobileToggle(false);
    }
  };
  // Ellenőrizd a szélességet és a magasságot is
  const isProblematicSize = false;
  //const isProblematicSize = (width >= 768 && width < 1200) || height < 630;
  return (
    <AnimatePresence>
      <div
        className={`overflow-y-aut overflow-x-hidden lg:overflow-y-hidden mystyle border-0 border-red-400
         bg-black text-primary h-screen flex flex-col w-full justify-center items-center`}
      >
        <header className="w-full flex justify-between border-0 border-lime-600
         absolute z-40 top-0 right-0 h-20">
          <img
            src={logo}
            className="relative top-0 right-0 z-40  w-20 m-1 p-2 
             cursor-pointer border-0"
            onClick={() => {
              setToggle(true);
              setSettingsOpen((prevToggle) => !prevToggle);
            }}
          />
          <div
            className="lg:flex flex-1 flex-row justify-center items-center hidden border-0
             border-orange-400 "
            
          >
        <DesktopMenuAsteroide navigationData={navigationData}/>
          </div>
          <FaCog
            className="relative top-0 right-0 z-40 text-4xl m-1 p-2 cursor-pointer border-0"
            onClick={() => {
              setToggle(true);
              setSettingsOpen((prevToggle) => !prevToggle);
            }}
          />
        </header>
        {/* The header is set to MainConsole component. That relative setti */}

        <main className="flex flex-grow z-30 w-full h-full relative border-0 border-purple-400 justify-center">
          {isProblematicSize ? (
            <div className="p-10 flex flex-col justify-center items-center border-0 w-screen h-screen">
              <h1 className="text-center text-lg">
                You are using a display of a problematic size. We suppose rotate
                your screen.
              </h1>
              <div className="m-10 text-center">
                <p className="m-1">
                  (If you can't use this app even after rotating it, may contact
                  the manufacturer to get them to make a normal sized display
                  for 99% of devices.)
                </p>
                <p>Your screen height: {height} px</p>
                <p>Your screen width: {width} px</p>
                <p>Thank you!</p>
              </div>
            </div>
          ) : (
            <>
              {/*md:hidden xl:block */}
              <div className=" w-full h-full border-0 border-red-600 z-50 relative ">
                <Outlet />
              </div>

              {toggle && (
                <div
                  onClick={clozer}
                  className="mx-0 absolute z-50 h-full w-full
                 top-0 right-0
                 border-orange-300 border-0 flex flex-col items-center p-2"
                >
                  <MobileConsoleView stopClozer={stopClozer} />

                  <div
                    className="flex flex-col items-center  my-10 p-2
                    border-0  w-full border-red-400"
                    onClick={stopClozer}
                  >
                    <SettingsBarAnimation menupoint={settingshome} />
                  </div>

                  <DesktopConsoleView stopClozer={stopClozer} />
                </div>
              )}
            </>
          )}
        </main>
      
      </div>
    </AnimatePresence>
  );
};

export default LayoutAsteoride;



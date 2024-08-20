import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MyConsoleContext } from "../../../context/ConsoleContext";
import { useDataVisualization } from "../../../hooks/use-datavisualization";
import useWindowSize from "../../../hooks/use-windowsize";
import { mobilmenu } from "../../../locales/localdata";
const MainConsole = () => {
  const { animationVariants, mobiletoggle, setMobileToggle, statusTable,message, } =
    MyConsoleContext();
  const { consoleContent } = useDataVisualization();
  const { width, height } = useWindowSize();
  const [activeMenu, setActiveMenu] = useState("dontshow"); //Status for the selected menu item
  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1200, // defined in Tailwind
    "2xl": 1536,
  };

  const menuHandler = (item) => {
    if (item.title === "showmenu") {
      setMobileToggle(true);
    } else {
      setMobileToggle(false);
    }
    setActiveMenu(item.title); // Update selected menu item
  };

  const fullglass = "glowy-button-8  border-0 ";
  return (
    <motion.div
      animate={animationVariants}
      className=" flex flex-col items-center md:justify-center relative z-10 rounded inset-0
        border-0  border-lime-400
  
 
    text-dark w-screen md:w-full h-full  shadow-2xl 
    transform perspective-1000 p-2 "
    >
      <div
        className={`${
          statusTable.dashboard === "graph" ? fullglass : ""
        }  border-red-400 border-0  opacity-100 md:top-[20px]
      z-50 relative p-0 overflow-y-scroll overflow-x-scroll 
         text-white flex flex-col   items-center justify-center w-screen 
         xl:w-full h-full `}
        // style={{ width: width - 800, height: height - 120 }}
        style={
          width >= breakpoints.xl
            ? { width: width - 800, height: height - 150 }
            : { width: width - 20 }
        }
      >
        {consoleContent}
      <p className="hidden xl:block text-center text-primary px-2">  {message?.description}</p>

        <div className="absolut  xl:hidden z-50  border-0 border-orange-400 w-full flex justify-center items-center">
          <div className="flex  ">
            {mobilmenu.map((item, index) => (
              <div
                key={index}
                onClick={() => menuHandler(item)}
                className={`${
                  activeMenu === item.title
                    ? "glowy-button-6 hover-active border-red-400 border-0"
                    : ""
                }  group relative z-50 border-0 hover:border-red-400 p-2 rounded m-2 bg-950 text-primary cursor-pointer text-3xl hover:bg-600`}
              >
                {<item.icon />}
                <div className="hidden text-center absolute top-0 left-0 mt-[80px] ml-2 w-32  group-hover:block bg-gray-700 text-white text-sm rounded p-1 z-50">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MainConsole;

/*
POSSIBILTY OTHER DESIGN
 {mobilmenu.map((item, index) => (
              <div
                key={index}
                onClick={() => menuHandler(item)}
                className="glowy-button-3 group relative z-50 border-0 hover:border-red-400 p-2 rounded m-2 bg-950 text-primary cursor-pointer text-3xl hover:bg-600"
              >
                {<item.icon />}
                <div className="hidden text-center absolute top-0 left-0 mt-[80px] ml-2 w-32  group-hover:block bg-gray-700 text-white text-sm rounded p-1 z-50">
                  {item.description}
                </div>
              </div>
            ))}

*/

//  style={{ width: width - 800, height: height - 120 }}

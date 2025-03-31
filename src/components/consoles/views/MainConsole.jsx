import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MyConsoleContext } from "../../../context/ConsoleContext";
import { useDataVisualization } from "../../../hooks/use-datavisualization";
import useWindowSize from "../../../hooks/use-windowsize";
import { mobilmenu } from "../../../locales/localdata";
const MainConsole = () => {
  const {
    animationVariants,
    mobiletoggle,
    setMobileToggle,
    statusTable,
    message,
  } = MyConsoleContext();
  const { consoleContent } = useDataVisualization();
  const { width, height } = useWindowSize();
  const [activeMenu, setActiveMenu] = useState("dontshow"); //Status for the selected menu item
  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1200, 
    "2xl": 1700,
  };

  const menuHandler = (item) => {
    if (item.title === "showmenu") {
      setMobileToggle(true);
    } else {
      setMobileToggle(false);
    }
    setActiveMenu(item.title); // Update selected menu item
  };
  //glowy-button-8
  const fullglass = "  ";
  return (
    <motion.div
      animate={animationVariants}
      className=" flex flex-col items-center justify-center relative z-10 rounded inset-0
        border-0 border-lime-400
  
 
    text-dark w-screen md:w-full h-full  shadow-2xl 
    transform perspective-1000 p-2 "
    >

      
      <div
        className={`${
          statusTable.dashboard === "graph" ? fullglass : ""
        }    glowy-button-9  border-b-8 border-t-0 border-r-8 border-l-0 rounded-2xl border-black 
      z-50 relative p-0 overflow-y-scroll overflow-x-scroll 
         text-white flex flex-col   items-center justify-center w-screen 
         xl:w-full md:h-full  `}
        // style={{ width: width - 800, height: height - 120 }}
        style={
          width >= breakpoints["2xl"] 
            ? { width: width - 600, height: height - 150 } // 2XL gets a 150 adjustment
            : width >= breakpoints.xl 
              ? { width: width - 600, height: height - 150 } // XL gets a 50 adjustment
              : { width: width - 20, height: height - 250 } // Other sizes
        }
      >
        {consoleContent}
  
      </div>

      <div className="absolut  xl:hidden z-50  border-0 border-orange-400 w-full flex justify-center items-center my-5">
        <div className="flex  border-0 border-red-400">
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
    </motion.div>
  );
};

export default MainConsole;

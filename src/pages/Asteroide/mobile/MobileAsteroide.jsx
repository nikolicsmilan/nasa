import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { myAnimation3 } from "../../../utils/motion";
import { MyDataContext } from "../../../context/DataContext";
import { MyConsoleContext } from "../../../context/ConsoleContext";
import BottomConsole from "../../../components/consoles/BottomConsole";
import {
  rightasideconsolesource,
  leftasideconsolesource,
} from "../../../locales/localdata";
import { useDataVisualization } from "../../../hooks/use-datavisualization";
import MainConsole from "../../../components/consoles/views/MainConsole";
import { mobilmenu } from "../../../locales/localdata";
import useWindowSize from "../../../hooks/use-windowsize";
const united = [...leftasideconsolesource, ...rightasideconsolesource];
const MobileAsteroide = () => {
  const { width, height } = useWindowSize();
  const [toggle, setToggle] = useState(false);
  const [subButtons, setSubButtons] = useState(united[0].data);
  //Here need a localsstate cause aggregate 2 arrays and need the outer
  // where find a nameconsole attribute from 6 consoles in localdata
  //left and right consoles
  const [nameconsole, setNameConsole] = useState("dashboard");
  const { handleClick, consoleContent } = useDataVisualization();
  //console.log("MobileAsteroide: ", subButtons);

  const handleMenuChange = (name) => {
    const selectedItem = united.find((item) => item.name === name);
    if (selectedItem) {
      setSubButtons(selectedItem.data);
      setNameConsole(name);
    }
  };

  const handleMouseEnter = () => {
    console.log("handleMouseEnter");
    setToggle(true);
  };

  const handleMouseLeave = () => {
    console.log("handleMouseLeave");
    setToggle(false);
  };

  const closeHandler = () => {
    setToggle(false);
  };

  const menuHandler = (item) => {
    if (item.title === "showmenu") {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };

  return (
    <main className="app transition-all ease-in border-0 border-lime-400 relative z-50 w-screen">
      <AnimatePresence>
        <div
          className="relative top-[60px] border-0 p-2 border-sky-400 flex flex-col items-center justify-center my-1 rounded-2xl w-full"
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
        >
          <div className=" flex justify-center items-center my-0 w-full border-0 border-purple-400">
            <div className="relative border-0 border-sky-400 h-96 w-full">
              {toggle && (
                <motion.div
                  className=" absolute top-0   z-50   rounded m-2 flex flex-col 
                   items-center justify-start border-0 border-red-400"
                  {...myAnimation3("right",width,height)}
                >
                  {united.map((item) => (
                    <div
                      className="cursor-pointer text-3xl text-info m-2 flex flex-col justify-center"
                      onClick={() => handleMenuChange(item.name)}
                    >
                      <span className=" glowy-button-5 border-0 shadow flex justify-center items-center h-12 w-12 text-4xl text-primary">
                        {<item.icon />}
                      </span>
                    </div>
                  ))}
                </motion.div>
              )}
              <div className="border-0  border-orange-400 flex flex-col  justify-center items-center  w-full ">
                <MainConsole />
              </div>
            </div>
          </div>
          <div className=" flex flex-col  items-center relative border- h-32 border-sky-400  w-96 my-0">
            {toggle && (
              <motion.div
                className=" cursor-pointer realtive  z-50"
                {...myAnimation3("up",width,height)}
              >
                <div className="  w-80 h-28 rounded mx-2 flex flex-wrap flex-row items-center justify-center border-0">
                  <BottomConsole
                    buttons={subButtons}
                    //handleClick={handleClickB}
                    // onClick={() => handleClick(nameconsole, item)}
                    handleClick={handleClick}
                    nameconsole={nameconsole}
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex  relative top-2">
          {mobilmenu.map((item, index) => (
            <div
              key={index}
              onClick={() => menuHandler(item)}
              className="glowy-button-5 group relative z-50 border-0 hover:border-red-400 p-2 rounded m-2 bg-950 text-primary cursor-pointer text-3xl hover:bg-600"
            >
              {<item.icon />}
              <div className="hidden text-center absolute top-0 left-0 mt-[80px] ml-2 w-32  group-hover:block bg-gray-700 text-white text-sm rounded p-1 z-50">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default MobileAsteroide;

/* */

//  {consoleContent}

/*
  const handleClickB = (newValues) => {
    if (
      statusTable.dashboard !== "graph" &&
      (nameconsole === "graph" ||
        nameconsole === "filter" ||
        nameconsole === "datatype")
    ) {
      return; // Do nothing if dashboard is not "graph" and this is the "graph", "filter", or "datatype" console
    }
    const { icon, description, title, sign = "", ...rest } = newValues;
    if (nameconsole === "filter") {
      // console.log("történik valami???","nameconsole: ",nameconsole,"title: ",title)

      //displayMode kell állítani!!!!
      setFilterTable((prevFilterTable) => ({
        ...prevFilterTable,
        displayMode: title,
        // sign: sign,
        // ...rest,
      }));
    } else {
      setStatusTable((prevStatusTable) => ({
        ...prevStatusTable,
        [nameconsole]: title,
        sign: sign,
        ...rest,
      }));
    }
  };
*/

/*
  const handleClick = (newValues) => {
    if (
      statusTable.dashboard !== "graph" &&
      (nameconsole === "graph" || nameconsole === "filter" || nameconsole === "datatype")
    ) {
      return; // Do nothing if dashboard is not "graph" and this is the "graph", "filter", or "datatype" console
    }
    const { icon, description, title, sign = "", ...rest } = newValues;
    setStatusTable((prevStatusTable) => ({
      ...prevStatusTable,
      [nameconsole]: title,
      sign: sign,
      ...rest,
    }));
  };*/

/*
  const handleClick = (newValues) => {
    //Only content change

    //we need a function here that is not direct
    //sets the statusTable but decides what
    //be set in the statusTabel if there is any change
    //Must tune the localdata in the ConsoleContext
    // statusTable state el
    //Unnecessary states must be removed
    //Super3dConsole.jsx component itself is in the wrong folder
    const { icon, description, ...rest } = newValues;
    setStatusTable((prevStatusTable) => ({
      ...prevStatusTable,
      ...rest,
    }));
  };*/

/*
     {Object.entries(statusTable).map(([key, value]) => (
                  <div key={key} className="border-0 w-48">
                    <strong>{key}:</strong> {value.toString()}
                  </div>
                ))}
*/
/*
       <div className=" flex flex-col justify-center items-center relative border-0 border-sky-400 h-10 w-96 my-0">
            {toggle && (
              <motion.div
                className="cursor-pointer top-10 z-10 glassmorphism w-120 h-16 rounded m-0 flex flex-row items-center justify-start"
                {...myAnimation("up")}
              >
                <BottomConsole
                 // buttons={subButtons}
                 // handleSubMenuChange={handleSubMenuChange}
                />
              </motion.div>
            )}
          </div>
*/

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mainconsole, sizeconsole } from "../../../locales/localdata";
import { myAnimation } from "../../../utils/motion";
import { MyDataContext } from "../../../context/DataContext";
import { MyConsoleContext } from "../../../context/ConsoleContext";
import BottomConsole from "../../../components/consoles/BottomConsole";
import {
  rightasideconsolesource,
  leftasideconsolesource,
} from "../../../locales/localdata";
import { useDataVisualization } from "../../../hooks/use-datavisualization";

const united = [...leftasideconsolesource, ...rightasideconsolesource];
const MobileAsteroide = () => {
  const { consoleContent } = useDataVisualization();
  const { windowSize } = MyDataContext();
  const { statusTable, setStatusTable,setFilterTable } = MyConsoleContext();
  const [toggle, setToggle] = useState(false);
  const [subButtons, setSubButtons] = useState(united[0].data);
  //Here need a localsstate cause aggregate 2 arrays and need the outer
  // where find a nameconsole attribute from 6 consoles in localdata
  //left and right consoles
  const [nameconsole,setNameConsole]= useState("filter")

  /*
  const handleMenuChange = (name) => {
    if (name === "size") {
      setSubButtons(sizeconsole);
    } else if (name === "color") {
      setSubButtons(colorconsole);
    } else if (name === "roof") {
      setSubButtons(roofconsole);
    } else if (name === "rotate") {
      setSubButtons(rotateconsole);
    }
  };*/
  const handleMenuChange = (name) => {
    const selectedItem = united.find((item) => item.name === name);
    if (selectedItem) {
      setSubButtons(selectedItem.data);
      setNameConsole(name)
    }
  };
/*
  const handleSubMenuChange = (property, value) => {
    setMenu3D((prevState) => ({
      ...prevState,
      [property]: value,
    }));
  };*/

  const handleMouseEnter = () => {
    console.log("handleMouseEnter");
    setToggle(true);
  };

  const handleMouseLeave = () => {
    console.log("handleMouseLeave");
    setToggle(false);
  };

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
  
  };
const closeHandler =()=>{
  setToggle(false);
}
  
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



  const handleClickB = (newValues) => {
    if (
      statusTable.dashboard !== "graph" &&
      (nameconsole === "graph" || nameconsole === "filter" || nameconsole === "datatype")
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

  return (
    <main className="app transition-all ease-in border-0 border-lime-400 relative z-50 w-screen">
      <AnimatePresence>
        <div className="border-0 border-red-400 flex justify-center items-center h-screen">
          <div
            className="border-0 p-2 border-primary flex flex-col items-center justify-center my-10 rounded-2xl w-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >{nameconsole}
            <div className="flex justify-center items-center my-0 w-full border-0 border-purple-400">
              <div className="relative border-0 border-sky-400 h-96 w-full">
                {toggle && (
                  <motion.div
                    className=" absolute top-0   z-10 glassmorphism h-16 md:w-16 h-96 rounded m-2 flex flex-col 
                   items-center justify-start border-0 border-red-400"
                    {...myAnimation(windowSize.width > 640 ? "left" : "right")}
                  >
                    {united.map((item) => (
                      <div
                        className="cursor-pointer text-3xl text-info m-2 flex flex-col justify-center"
                        onClick={() => handleMenuChange(item.name)}
                      >
                        <span className="border-0 shadow flex justify-center items-center h-12 w-16 text-4xl text-primary">
                          {<item.icon />}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                )}
                <div className="flex flex-col  justify-center items-center  w-full border-0">
                  {consoleContent}
                </div>
              </div>
            </div>
            <div className=" flex flex-col justify-center items-center relative border-0 border-sky-400 h-10 w-96 my-0">
              {toggle && (
                <motion.div
                  className="cursor-pointer realtive  z-50"
                  {...myAnimation("up")}
                >
                  <div className=" glassmorphism w-80   rounded mx-2 flex flex-wrap flex-row items-center justify-center">
                  <BottomConsole
                    buttons={subButtons}
                    handleClick={handleClickB}
                  />
                  </div>
                <div className="flex justify-center p-2 m-2 ">
                <div onClick={closeHandler} className=" w-12 h-8 bg-950 text-white flex justify-center items-center rounded">
                 X
                </div>
                </div>

                  
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
};

export default MobileAsteroide;
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

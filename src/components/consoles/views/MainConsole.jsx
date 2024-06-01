import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { mainConsoleAnimation } from "../../../utils/motion";
import { MyDataContext } from "../../../context/DataContext";
import { MyConsoleContext } from "../../../context/ConsoleContext";

const MainConsole = () => {
  const { settingsOpen } = MyDataContext();
  const { leftasideconsole,actualMainConsole } = MyConsoleContext();
  const [animation, setAnimation] = useState("left");

  useEffect(() => {

  }, [settingsOpen]);
  console.log("leftasideconsole: ", leftasideconsole);
  return (
    <motion.div
      //variants={mainConsoleAnimation("right")}
      variants={mainConsoleAnimation(animation)}
      initial="exit"
      animate={actualMainConsole !=="Year" ? "animate" : "exit"}
      exit="exit"
      className="relative z-10 rounded inset-0 border-b-2 
    border-r-2 border-l-[5px] border-t-2 
    border-600 bg-gradient lime:bg-gradient2 
    text-dark flex flex-col items-start w-full h-full  shadow-2xl 
    transform perspective-1000  "
    >
      <h3 className="bg-950 text-primary uppercase text-lg text-center w-full">
        MainConsole actulal:{actualMainConsole}
      </h3>
      

      <div>
        {leftasideconsole.map((item) => (
          <div>
            {item.data.map((item) => (
              <div>{item.title}</div>
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default MainConsole; /*
 <div
        className="border-4 border-lime-400  flex 
        items-start justify-center 
      border-gray-700"
      > */

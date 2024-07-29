import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MyConsoleContext } from "../../../context/ConsoleContext";
import { useDataVisualization } from "../../../hooks/use-datavisualization";

const MainConsole = () => {
  const { actualMainConsole, animationVariants, info, statusTable } =
    MyConsoleContext();
  const { consoleContent } = useDataVisualization();

  return (
    <motion.div
      animate={animationVariants}
      className="relative z-10 rounded inset-0  border-0 border-lime-400
  
    border-600 bg-gradien 
    text-dark flex flex-col items-start w-full h-full  shadow-2xl 
    transform perspective-1000  "
    >
    

      <div
        className="border-0 border-red-400  w-full h-full opacity-100 top-[100px]
      z-50 relative p-0 overflow-y-scroll overflow-x-scroll 
         text-white flex justify-center items-start"
      >
        {consoleContent}

      
      </div>
    </motion.div>
  );
};

export default MainConsole;
//info: {info}
/*
  Dashboard:{statusTable.title}{" "}
         Graph: {statusTable.graph}           filter:{" "}
        {statusTable.filter} {" "} piece: {statusTable.piece} 
*/

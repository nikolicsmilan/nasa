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
      className="relative z-10 rounded inset-0 border-b-2 
    border-r-2 border-l-2 border-t-2 
    border-600 bg-gradien 
    text-dark flex flex-col items-start w-full h-full  shadow-2xl 
    transform perspective-1000  "
    >
      <h3 className="bg-950 text-primary uppercase text-lg text-center w-full">
        Dashboard:{statusTable.title}{" "}
         Graph: {statusTable.graph}           filter:{" "}
        {statusTable.filter} {" "} piece: {statusTable.piece} 
      </h3>

      <div
        className="border-2 w-full opacity-100 
      z-50 relative p-2 overflow-y-scroll overflow-x-scroll   h-full text-white flex justify-center items-center"
      >
        {consoleContent}
      </div>
    </motion.div>
  );
};

export default MainConsole;
//info: {info}

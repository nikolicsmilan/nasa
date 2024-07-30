import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MyConsoleContext } from "../../../context/ConsoleContext";
import { useDataVisualization } from "../../../hooks/use-datavisualization";

const MainConsole = () => {
  const {
    actualMainConsole,
    animationVariants,
    info,
    statusTable,
    filteredData,
  } = MyConsoleContext();
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
        className="border-0 border-red-400  w-full h-full opacity-100 top-[80px]
      z-50 relative p-0 overflow-y-scroll overflow-x-scroll 
         text-white flex flex-col  justify-start items-center"
      >
        {consoleContent}
      </div>
    </motion.div>
  );
};

export default MainConsole;

//This is for showing inc and desc!!!
/*
       <div className="flex flex-row flex-wrap w-full text-primary relative top-[-40px] border-2">
  {filteredData.map((item, index) => (
    <div key={index} className="border-2 p-2 m-2">
      <strong>Name:</strong> <p>{item.name}</p>
      <strong>Value:</strong> <p>{item.value}</p>
    </div>
  ))}
</div>

*/

/*
<div className="flex flex-row flex-wrap w-full text-primary relative top-[-40px] border-2">
{Object.entries(filteredData).map(([key, value]) => (
  <div key={key} className="border-2 p-2 m-2">
    <strong>{key}:</strong><p> {value.toString()}</p>
  </div>
))}
</div>*/

//info: {info}
/*
  Dashboard:{statusTable.title}{" "}
         Graph: {statusTable.graph}           filter:{" "}
        {statusTable.filter} {" "} piece: {statusTable.piece} 
*/

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MyConsoleContext } from "../../../context/ConsoleContext";
import { useDataVisualization } from "../../../hooks/use-datavisualization";
import useWindowSize from "../../../hooks/use-windowsize";
const MainConsole = () => {
  const {
    actualMainConsole,
    animationVariants,
    info,
    statusTable,
    filteredData,
  } = MyConsoleContext();
  const { consoleContent } = useDataVisualization();
  const { width, height } = useWindowSize();
  return (
    <motion.div
      animate={animationVariants}
      className=" flex flex-col items-center  relative z-10 rounded inset-0  border-0 border-lime-400
  
 
    text-dark w-full h-full  shadow-2xl 
    transform perspective-1000  "
    >
      <div
        className="glowy-button-8  border-0 border-red-400   opacity-100 top-[100px]
      z-50 relative p-0 overflow-y-scroll overflow-x-scroll 
         text-white flex flex-col   items-center justify-center w-96 lg:w-full h-full"
        style={{ width: width - 800, height: height - 120 }}
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

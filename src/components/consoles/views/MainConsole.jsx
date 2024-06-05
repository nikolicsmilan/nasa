import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MyConsoleContext } from "../../../context/ConsoleContext";
import { useDataVisualization } from "../../../hooks/use-datavisualization";

const MainConsole = () => {
  const { actualMainConsole, animationVariants, info } = MyConsoleContext();
  const { updateConsole } = useDataVisualization();
  const [consoleContent, setConsoleContent] = useState(
    updateConsole(actualMainConsole)
  );
  useEffect(() => {
    if (info === "animáció 6") {
      setConsoleContent(updateConsole(actualMainConsole));
    }
  }, [info, actualMainConsole, updateConsole]);

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
        MainConsole actulal:{actualMainConsole} info: {info}
      </h3>

      <div className="border-0 opacity-100 
      z-50 relative p-2 overflow-y-scroll overflow-x-scroll   h-full ">
        {consoleContent}
      </div>
    </motion.div>
  );
};

export default MainConsole;

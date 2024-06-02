import React from "react";
import { motion } from "framer-motion";
import { MyConsoleContext } from "../../../context/ConsoleContext";

const MainConsole = () => {
  const { leftasideconsole, actualMainConsole, animationVariants } =
    MyConsoleContext();

  return (
    <motion.div
      animate={animationVariants}
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

export default MainConsole;

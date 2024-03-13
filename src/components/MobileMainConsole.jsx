import React from "react";
import { slideAnimation } from "../utils/motion";
import { MyDataContext } from "../context/GeneralContext";
import { motion } from "framer-motion";
import StyleConsole from "./StyleConsole";
import SoundConsole from "./SoundConsole";
import LanguageConsole from "./LanguageConsole";
import DataConsole from "./DataConsole";
import { homemenu } from "../locales/localdata";
import MainNavigationConsole from "./MainNavigationConsole";
const MobileMainConsole = () => {


  const { toggle, settings,settingsOpen } = MyDataContext();
  return (
    <motion.div
      variants={slideAnimation("left")}
      initial="exit"
      animate={settingsOpen ? "animate" : "exit"}
      exit="exit"
      className=" w-full 
            border-0  border-black h-2/4  
            relative top-20 left-0 z-50 flex lg:hidden flex-col my-2  "
    >
      {settings === "Navigation" && <MainNavigationConsole/>}
      {settings === "Style" && <StyleConsole />}
      {settings === "Sound" && <SoundConsole />}
      {settings === "Language" && <LanguageConsole />}
      {settings === "Data" && <DataConsole />}
      <div className="absolute top-0 left-0 w-8 h-8 bg-transparent border-t-2 border-l-2 border-sky-200 transform -translate-x-0 -translate-y-0"></div>
      <div className="absolute top-0 right-0 w-8 h-8 bg-transparent border-t-2 border-r-2 border-sky-200 transform translate-x-0 -translate-y-0"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 bg-transparent border-b-2 border-l-2 border-sky-200 transform -translate-x-0 translate-y-0"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 bg-transparent border-b-2 border-r-2 border-sky-200 transform translate-x-0 translate-y-0"></div>
    </motion.div>
  );
};

export default MobileMainConsole;

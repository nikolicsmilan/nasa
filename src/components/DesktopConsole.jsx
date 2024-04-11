import React, { useEffect } from "react";
import { MyDataContext } from "../context/GeneralContext";
import MainNavigationConsole from "./MainNavigationConsole";
import StyleConsole from "./StyleConsole";
import SoundConsole from "./SoundConsole";
import LanguageConsole from "./LanguageConsole";
import DataConsole from "./DataConsole";
import { motion } from "framer-motion";
import { slideAnimation } from "../utils/motion";
const DesktopConsole = ({ stopClozer }) => {
  const { settingsOpen, settings } = MyDataContext();

  return (
    <motion.div
      variants={slideAnimation("left")}
      initial="exit"
      animate={settingsOpen ? "animate" : "exit"}
      exit="exit"
      className={`hidden absolute inset-0
     lg:flex items-start lg:items-center lg:justify-center 
     border-0 border-orange-400 `}
    >
      <div
        onClick={stopClozer}
        className="hidden lg:flex flex-wrap lg:max-w-2xl  border-0   relative z-50"
      >
        <div className="absolute top-0 left-0 w-8 h-8 bg-transparent border-t-2 border-l-2 border-sky-200 transform -translate-x-2 -translate-y-2"></div>
        <div className="absolute top-0 right-0 w-8 h-8 bg-transparent border-t-2 border-r-2 border-sky-200 transform translate-x-1 -translate-y-2"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 bg-transparent border-b-2 border-l-2 border-sky-200 transform -translate-x-1 translate-y-2"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 bg-transparent border-b-2 border-r-2 border-sky-200 transform translate-x-1 translate-y-2"></div>
       {/* settings values equal settingshome in localdata */}
       {settings === "Navigation" && <MainNavigationConsole />}
        {settings === "Style" && <StyleConsole />}
        {settings === "Sound" && <SoundConsole />}
        {settings === "Language" && <LanguageConsole />}
        {settings === "Data" && <DataConsole />}
      </div>
    </motion.div>
  );
};

export default DesktopConsole;
//h-[700px]
/*

 {settings === "Navigation" && <MainNavigationConsole />}
        {settings === "Navigation" && <MainNavigationConsole />}
*/
/* ${
       settingsOpen || toggle ? "opacity-100 md:opacity-100" : ""
     }  */
/*
{settings === "Navigation" && <MainNavigationConsole />}
 {settings === "Style" && <StyleConsole />}
      {settings === "Sound" && <SoundConsole />}
      {settings === "Language" && <LanguageConsole />}
      {settings === "Data" && <DataConsole />}
*/

/*
import React from "react";
import { MyDataContext } from "../context/GeneralContext";
import MainNavigationConsole from "./MainNavigationConsole";

const DesktopConsole = () => {
  const { toggle, setToggle, settingsOpen, setSettingsOpen, settings } =
    MyDataContext();
  return (
    <div
      className={`hidden absolute inset-0
     lg:flex items-start lg:items-center lg:justify-center 
     border-0 border-orange-400 ${
       settingsOpen || toggle ? "opacity-100 md:opacity-100" : ""
     } `}
    >
      <div
        className="md:max-w-6xl mx-auto border-2 border-white
     flex justify-center flex-wrap z-50 "
      >
        <div className="hidden lg:flex flex-wrap lg:max-w-2xl  border-0 relative">
          <div className="absolute top-0 left-0 w-8 h-8 bg-transparent border-t-2 border-l-2 border-sky-200 transform -translate-x-2 -translate-y-2"></div>
          <div className="absolute top-0 right-0 w-8 h-8 bg-transparent border-t-2 border-r-2 border-sky-200 transform translate-x-1 -translate-y-2"></div>
          <div className="absolute bottom-0 left-0 w-8 h-8 bg-transparent border-b-2 border-l-2 border-sky-200 transform -translate-x-1 translate-y-2"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-transparent border-b-2 border-r-2 border-sky-200 transform translate-x-1 translate-y-2"></div>
        
          {settings === "Navigation" && <MainNavigationConsole />}
        </div>
      </div>
    </div>
  );
};

export default DesktopConsole;
*/

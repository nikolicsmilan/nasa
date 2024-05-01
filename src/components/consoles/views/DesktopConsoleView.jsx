import React from "react";
import { MyDataContext } from "../../../context/DataContext";
import NavigationConsole from "../NavigationConsole";
import StyleConsole from "../StyleConsole";
import SoundConsole from "../SoundConsole";
import LanguageConsole from "../LanguageConsole";
import DataConsole from "../DataConsole";
import { motion } from "framer-motion";
import { slideAnimation } from "../../../utils/motion";
const DesktopConsoleView = ({ stopClozer }) => {
  const { settingsOpen, settings,users,choosenSytle } = MyDataContext();

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
        className="h-[300px] w-[500px] hidden lg:flex flex-wrap lg:max-w-2xl  border-0   relative z-50"
      >
        <p className={`m-1 text-center border-0 w-full text-${choosenSytle ?choosenSytle:"sky"}-200 uppercase`}>{settings} console</p>
        <div className={`absolute top-0 left-0 w-8 h-8 bg-transparent border-t-2 border-l-2 border-sky-200 border-${choosenSytle}-200 transform -translate-x-2 -translate-y-2`}></div>
        <div className={`absolute top-0 right-0 w-8 h-8 bg-transparent border-t-2 border-r-2 border-${choosenSytle}-200 transform translate-x-1 -translate-y-2`}></div>
        <div className={`absolute bottom-0 left-0 w-8 h-8 bg-transparent border-b-2 border-l-2 border-${choosenSytle}-200 transform -translate-x-1 translate-y-2`}></div>
        <div className={`absolute bottom-0 right-0 w-8 h-8 bg-transparent border-b-2 border-r-2 border-${choosenSytle}-200 transform translate-x-1 translate-y-2`}></div>
        {/* settings values equal settingshome in localdata */}
        {settings === "Navigation" && <NavigationConsole />}
        {settings === "Style" && <StyleConsole key={users} users={users}/>}
        {settings === "Sound" && <SoundConsole />}
        {settings === "Language" && <LanguageConsole />}
        {settings === "Data" && <DataConsole />}
      </div>
    </motion.div>
  );
};

export default DesktopConsoleView;
//h-[700px]

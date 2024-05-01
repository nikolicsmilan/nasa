import React from "react";
import { slideAnimation } from "../../../utils/motion";
import { MyDataContext } from "../../../context/DataContext";
import { motion } from "framer-motion";
import StyleConsole from "../StyleConsole";
import SoundConsole from "../SoundConsole";
import LanguageConsole from "../LanguageConsole";
import DataConsole from "../DataConsole";
import NavigationConsole from "../NavigationConsole";
const MobileConsoleView = ({ stopClozer }) => {
  const { settings, settingsOpen, users,choosenSytle } = MyDataContext();
  return (
    <motion.div
      onClick={stopClozer}
      variants={slideAnimation("left")}
      initial="exit"
      animate={settingsOpen ? "animate" : "exit"}
      exit="exit"
      className=" w-full 
            border-0  border-black h-2/4  
            relative top-20 left-0 z-50 flex lg:hidden flex-col my-2  "
    >
      {settings === "Navigation" && <NavigationConsole />}
      {settings === "Style" && <StyleConsole key={users} users={users} />}
      {settings === "Sound" && <SoundConsole />}
      {settings === "Language" && <LanguageConsole />}
      {settings === "Data" && <DataConsole />}
      <p className={`m-1 text-center border-0 w-full text-${choosenSytle ?choosenSytle:"sky"}-200 uppercase`}>{settings} console</p>
      <div className={`absolute top-0 left-0 w-8 h-8 bg-transparent border-t-2 border-l-2 border-${choosenSytle}-200 ransform -translate-x-0 -translate-y-0`}></div>
      <div className={`absolute top-0 right-0 w-8 h-8 bg-transparent border-t-2 border-r-2 border-${choosenSytle}-200  translate-x-0 -translate-y-0`}></div>
      <div className={`absolute bottom-0 left-0 w-8 h-8 bg-transparent border-b-2 border-l-2 border-${choosenSytle}-200  transform -translate-x-0 translate-y-0`}></div>
      <div className={`absolute bottom-0 right-0 w-8 h-8 bg-transparent border-b-2 border-r-2 border-${choosenSytle}-200  transform translate-x-0 translate-y-0`}></div>
    </motion.div>
  );
};

export default MobileConsoleView;

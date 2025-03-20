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
  const { settings, settingsOpen, users,choosenStyle } = MyDataContext();
  return (
    <motion.div
      onClick={stopClozer}
      variants={slideAnimation("left")}
      initial="exit"
      animate={settingsOpen ? "animate" : "exit"}
      exit="exit"
      className="glowy-button-6 w-full mx-2
            border-2   border-primary h-2/4  
            relative top-[60px]  z-50 flex lg:hidden flex-col my-2  "
    >
      {settings === "Navigation" && <NavigationConsole />}
      {settings === "Style" && <StyleConsole users={users} />}
      {settings === "Sound" && <SoundConsole />}
      {settings === "Language" && <LanguageConsole />}
      {settings === "Data" && <DataConsole />}
      <p className={`m-1 text-base text-center border-0 w-full 
       uppercase absolute bottom-0 `}>{settings} console <span className="text-white">{choosenStyle}</span> mobil</p>
     
    
    </motion.div>
  );
};

export default MobileConsoleView;

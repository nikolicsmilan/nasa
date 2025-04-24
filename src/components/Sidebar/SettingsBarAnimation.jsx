import React from "react";
import { MyDataContext } from "../../context/DataContext";
import SettingsBar from "./SettingsBar";
import { motion } from "framer-motion";
import { slideAnimation } from "../../utils/motion";

//Settingsbar service mobil and desktop screen

//SETTINGSBAR ANIMATION
const SettingsBarAnimation = ({ menupoint }) => {
  const { settingsOpen } = MyDataContext();
  return (
    <motion.div
      variants={slideAnimation("right")}
      initial="exit"
      animate={settingsOpen ? "animate" : "exit"}
      exit="exit"
      className="lg:w-60  border-0 lg:border-0 
     rounded m-1 h-60  lg:h-96
    lg:absolute relative  top-20 lg:right-5 lg:bottom-0
   z-50 flex flex-col items-center "
    >
      <SettingsBar menupoint={menupoint} />
    </motion.div>
  );
};

export default SettingsBarAnimation;

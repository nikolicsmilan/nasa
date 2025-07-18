
import { MyDataContext } from "../../../context/DataContext";
import NavigationConsole from "../NavigationConsole";
import StyleConsole from "../StyleConsole";
import SoundConsole from "../SoundConsole";
import LanguageConsole from "../LanguageConsole";
import DataConsole from "../DataConsole";
import { motion } from "framer-motion";
import { slideAnimation } from "../../../utils/motion";
/*This component responsible only the consoles view
and animation*/
const DesktopConsoleView = ({ stopClozer }) => {
  const { settingsOpen, settings, /* users, */ choosenStyle } = MyDataContext();

  return (
    <motion.div
   // layout
      variants={slideAnimation("left")}
      initial="exit"
      animate={settingsOpen ? "animate" : "exit"}
      exit="exit"
      className={`hidden absolute inset-0 
     lg:flex items-start lg:items-center lg:justify-center 
  `}
    >
      <div
        onClick={stopClozer}
        className="glowy-button-10 h-[300px] w-[500px] hidde lg:flex flex-wrap lg:max-w-2xl
         border-button-theme  bg-button-accent-gradient  relative z-50  "
      >
        {settings === "Menu" && (
          <p className=" border-0 w-full pt-5 text-white text-center uppercase font-bold">
          Főmenü
          </p>
        )}
        {settings === "Style" && (
          <p className=" border-0 w-full pt-5 text-white text-center uppercase font-bold">
            Válaszd ki a megjelenési stílusod!
          </p>
        )}
        {settings === "Sound" && (
          <p className=" border-0 w-full pt-5 text-white text-center uppercase font-bold">
             Állítsd be a hangot
          </p>
        )}
        {settings === "Language" && (
          <p className=" border-0 w-full pt-5 text-white text-center uppercase font-bold">
           Válaszd ki a nyelvet!
          </p>
        )}
        {settings === "Data" && (
          <p className=" border-0 w-full pt-5 text-white text-center uppercase font-bold">
           Adatok
          </p>
        )}
        <div
          className={`absolute top-0 left-0 w-8 h-8 bg-transparent border-t-2 border-l-2 border-600 transform -translate-x-2 -translate-y-2`}
        ></div>
        <div
          className={`absolute top-0 right-0 w-8 h-8 bg-transparent border-t-2 border-r-2 border-600 transform translate-x-1 -translate-y-2`}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-8 h-8 bg-transparent border-b-2 border-l-2 border-600 transform -translate-x-1 translate-y-2`}
        ></div>
        <div
          className={`absolute bottom-0 right-0 w-8 h-8 bg-transparent border-b-2 border-r-2 border-600 transform translate-x-1 translate-y-2`}
        ></div>
        {/* settings values equal settingshome in localdata */}
        {settings === "Menu" && <NavigationConsole />}
        {settings === "Style" && <StyleConsole />}
        {settings === "Sound" && <SoundConsole />}
        {settings === "Language" && <LanguageConsole />}
        {settings === "Data" && <DataConsole />}
        <p
          className={` text-primary m-1 text-center border-0 h-6 w-full uppercase relative `}
        >
          {settings} console -{" "}
          <span className="text-white">{choosenStyle}</span>
          <span className="hidden  lg:inline"> - lg</span>
          <span className="hidden md:inline lg:hidden"> - md</span>
          <span className="inline md:hidden lg:hidden"> - sm</span>
        </p>
      </div>
    </motion.div>
  );
};

export default DesktopConsoleView;
// {settings === "Data" && <DataConsole />}
//h-[700px]
/*  <div className=" w-full shadow-green text-center bottom-[-50px] relative">
          Sound: {users.sound} | Language: {users.language}{" "}
        </div> */

import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { slideAnimation } from "../utils/motion";
import { slideAnimation2 } from "../utils/motion";
//import  MyDataContext  from "../context/GeneralContext";
import { MyDataContext } from "../context/GeneralContext";
const Layout = () => {
  const { toggle, setToggle } = MyDataContext();
  const handleClose = () => {
    setToggle(false);
  };
  return (
    <AnimatePresence>
      <div className="overflow-hidden mystyle border- border-red-400 bg-black text-sky-400 h-screen flex flex-col">
        <header className="border-0 relative z-40">
          <FaBars
            className="absolute z-40 text-2xl m-4  cursor-pointer"
            onClick={() => {
              setToggle((prevToggle) => !prevToggle); // Negált érték beállítása
            }}
          />
        </header>

        <main className="flex flex-grow border-0 border-orange-800 z-30 ">
          <motion.div
            variants={slideAnimation("left")}
            initial="exit"
            animate={toggle ? "animate" : "exit"}
            exit="exit"
            className="w-80 border-0 relative z-30 flex flex-col m-0"
          >
            <Sidebar onClose={handleClose} />
          </motion.div>
          <motion.div
            variants={slideAnimation("right")}
            initial="exit"
            animate={toggle ? "animate" : "exit"}
            exit="exit"
            className="w-80 border-0 relative z-30 flex flex-col m-0"
          >
            <Sidebar onClose={handleClose} />
          </motion.div>

          <div className="w-full border-2 border-sky-400 z-10">
            <Outlet />
          </div>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default Layout;

//motion.js
export const transition = { type: "spring", duration: 0.8 };
export const slideAnimation = (direction) => {
    return {
      initial: {
        x: direction === "left" ? 900 : direction === "right" ? 100 : 100,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
        transition: { ...transition, delay: 0.5 },
      },
      animate: {
        x: direction === "left" ? 800: direction === "right" ? 1700 : 0,
        y: 0,
        opacity: 1,
        transition: { ...transition, delay: 0 },
      },
      exit: {
        x: direction === "left" ? -110 : direction === "right" ? 100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
        transition: { ...transition, delay: 0 },
      },
    };
  };

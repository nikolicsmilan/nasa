import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { slideAnimation } from "../utils/motion";
import { slideAnimation2 } from "../utils/motion";
//import  MyDataContext  from "../context/GeneralContext";
import { MyDataContext } from "../context/GeneralContext";
import useWindowSize from "../hooks/use-windowsize";
const Layout = () => {
  const { toggle, setToggle } = MyDataContext();
  const { width, height } = useWindowSize();
  const handleClose = () => {
    setToggle(false);
  };
  return (
    <AnimatePresence>
      <div className="overflow-y-auto overflow-x-hidden lg:overflow-y-hidden mystyle border- border-red-400 bg-black text-sky-400 h-screen flex flex-col w-full">
        <header className="border-0 relative z-40">
          <FaBars
            className="absolute z-40 text-2xl m-4  cursor-pointer"
            onClick={() => {
              setToggle((prevToggle) => !prevToggle); // Negált érték beállítása
            }}
          />
        </header>

        <main className="flex flex-grow border-0 border-orange-800 z-30  w-full relative">
          <motion.div
            variants={slideAnimation("left")}
            initial="exit"
            animate={toggle ? "animate" : "exit"}
            exit="exit"
            className="w-80 border-0 absolute top-0 left-0 z-30 flex flex-col m-0"
          >
            <Sidebar onClose={handleClose} />
          </motion.div>
          <motion.div
            variants={slideAnimation("right")}
            initial="exit"
            animate={toggle ? "animate" : "exit"}
            exit="exit"
            className="w-80 border-0 absolute bottom-0 right-0
             z-30 flex flex-col m-0"
          >
            <Sidebar onClose={handleClose} />
          </motion.div>
          <div className="w-full border-0 border-sky-400 z-10 relative">
            <Outlet />
          </div>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default Layout;
/*
  <div className="w-full border-2 border-sky-400 z-10">
            <Outlet />
          </div>
*/
/*
  {toggle && (
            <motion.div
              {...slideAnimation("left")}
              className="w-80 border-0 relative z-30 flex flex-col m-0"
            >
              <Sidebar />
            </motion.div>
          )}

*/
// z-30 relative w-full h-screen

/*
const Layout = () => {
  return (
    <div className="  border-2 border-red-400 bg-black text-sky-400">
      <hedaer className="border-2 relative z-30 ">
        <FaBars className=" absolute z-30  text-2xl" />
      </hedaer>
      <main className=" flex border-2 border-orange-800">
       
      <div className="sidebar w-12 border-2 relative z-30  flex flex-col m-0 ">
      <Sidebar />
    </div>

    <div className="w-full border-2 border-sky-400 z-10">
      <Outlet />
    </div>
  </main>
</div>
);
};
*/

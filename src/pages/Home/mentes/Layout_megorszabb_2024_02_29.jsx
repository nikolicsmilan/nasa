import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { slideAnimation } from "../utils/motion";
//import  MyDataContext  from "../context/GeneralContext";
import { MyDataContext } from "../context/GeneralContext";
const Layout = () => {
  const { toggle, setToggle } = MyDataContext();
  const handleClose = () => {
    setToggle(false);
  };
  return (
    <AnimatePresence>
      <div className=" overflow-hidden mystyle border-2 border-red-400 bg-black text-sky-400 flex flex-col">
        <header className="border-0 relative z-40">
          <FaBars
            className="absolute z-40 text-2xl m-4  cursor-pointer"
            onClick={() => {
              setToggle((prevToggle) => !prevToggle); // Negált érték beállítása
            }}
          />
        </header>

 <main className="flex  border-0 border-orange-800 z-30 ">
  {/* Első motion.div */}


  {/* Második motion.div */}
  <motion.div
    variants={slideAnimation("right")}
    initial="exit"
    animate={toggle ? "animate" : "exit"}
    exit="exit"
    className={`w-80 border-0 relative z-30 flex flex-col m-0 ${!toggle && 'hidden'}`} // Ha a toggle hamis, akkor elrejti a divet
  >
    <Sidebar onClose={handleClose} />
    <>b {toggle ?"true":"false"}</>
  </motion.div>

  <motion.div
    variants={slideAnimation("left")}
    initial="exit"
    animate={toggle ? "animate" : "exit"}
    exit="exit"
    className={`w-80 border-0 relative z-40 flex flex-col m-0 ${!toggle && 'hidden'}`} // Ha a toggle igaz, akkor elrejti a divet
  >
    <Sidebar onClose={handleClose} />a
  </motion.div>

  {/* Outlet */}
  <div className="w-screen h-screen border-2 relative border-sky-400 z-10">
    <Outlet />
  </div>
</main>

      </div>
    </AnimatePresence>
  );
};

export default Layout;

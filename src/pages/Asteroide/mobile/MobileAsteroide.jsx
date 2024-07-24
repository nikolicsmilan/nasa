import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mainconsole, sizeconsole } from "../../../locales/localdata";
import { myAnimation } from "../../../utils/motion";
import { MyDataContext } from "../../../context/DataContext";
import BottomConsole from "../../../components/consoles/BottomConsole";
import {
  rightasideconsolesource,
  leftasideconsolesource,
} from "../../../locales/localdata";

const united = [...leftasideconsolesource, ...rightasideconsolesource];
const MobileAsteroide = () => {
  const { windowSize } = MyDataContext();
  const [toggle, setToggle] = useState(false);
  const [subButtons, setSubButtons] = useState(united[0].data);

  /*
  const handleMenuChange = (name) => {
    if (name === "size") {
      setSubButtons(sizeconsole);
    } else if (name === "color") {
      setSubButtons(colorconsole);
    } else if (name === "roof") {
      setSubButtons(roofconsole);
    } else if (name === "rotate") {
      setSubButtons(rotateconsole);
    }
  };*/
  const handleMenuChange = (name) => {
    const selectedItem = united.find((item) => item.name === name);
    if (selectedItem) {
      setSubButtons(selectedItem.data);
    }
  };

  const handleSubMenuChange = (property, value) => {
    setMenu3D((prevState) => ({
      ...prevState,
      [property]: value,
    }));
  };

  const handleMouseEnter = () => {
    console.log("handleMouseEnter");
    setToggle(true);
  };

  const handleMouseLeave = () => {
    console.log("handleMouseLeave");
    setToggle(false);
  };

  return (
    <main className="app transition-all ease-in border-0 border-lime-400 relative z-50 w-screen">
      <AnimatePresence>
        <div className="border-0 border-red-400 flex justify-center items-center h-screen">
          <div
            className="border-0 p-2 border-primary flex flex-col items-center justify-center my-10 rounded-2xl w-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex  my-0 w-full border-0 border-purple-400">
              <div className="relative border-0 border-sky-400 h-96 w-full">
                {toggle && (
                  <motion.div
                    className=" absolute top-0   z-10 glassmorphism h-16 md:w-16 h-96 rounded m-2 flex flex-col 
                   items-center justify-start border-0 border-red-400"
                    {...myAnimation(windowSize.width > 640 ? "left" : "right")}
                  >
                    {united.map((item) => (
                      <div
                        className="cursor-pointer text-3xl text-info m-2 flex flex-col justify-center"
                        onClick={() => handleMenuChange(item.name)}
                      >
                        <span className="border-0 shadow flex justify-center items-center h-12 w-16 text-4xl text-primary">
                          {<item.icon />}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
              <div className="relative right-5 top-0 w-200 h-200 border-0 border-lime-400 flex items-center justify-center"></div>
            </div>
            <div className=" flex flex-col justify-center items-center relative border-0 border-sky-400 h-10 w-96 my-0">
              {toggle && (
                <motion.div
                  className="cursor-pointer realtive  z-10 glassmorphism w-80   rounded mx-2 flex flex-wrap flex-row items-center justify-center"
                  {...myAnimation("up")}
                >
                  <BottomConsole
                    buttons={subButtons}
                    handleSubMenuChange={handleSubMenuChange}
                  />
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
};

export default MobileAsteroide;

/*
       <div className=" flex flex-col justify-center items-center relative border-0 border-sky-400 h-10 w-96 my-0">
            {toggle && (
              <motion.div
                className="cursor-pointer top-10 z-10 glassmorphism w-120 h-16 rounded m-0 flex flex-row items-center justify-start"
                {...myAnimation("up")}
              >
                <BottomConsole
                 // buttons={subButtons}
                 // handleSubMenuChange={handleSubMenuChange}
                />
              </motion.div>
            )}
          </div>
*/

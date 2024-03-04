import React, { useEffect } from "react";
import { MyDataContext } from "../../context/GeneralContext";
import { CircularProgressbar } from "react-circular-progressbar";
import { useOutletContext } from "react-router-dom";
const Asteroide = () => {
  const { setSettings } = MyDataContext();
 
  useEffect(() => {
    setSettings("");
  }, []);
  return (
    <div className=" border-8  border-sky-400 w-full z-10 relative "onClick={()=>{setSettings("");}}>
      <div className="flex  w-full h-screen relative text-xl z-10 border-2 border-lime-400 mt-[0px] ">
        <div
          className={` flex flex-col border-2 md:m-0 py-0 md:py-0 text-center lg:w-full  border-orange-400 mt-[30px] `}
        >
          <div className="border-2 lg:max-w-6xl mx-auto border-white flex justify-center">
            <div className="border-0 border-lime-400 flex flex-col justify-center flex-wrap md:p-10 ">
              <h1 className="z-10 p-2 border-0 text-center md:text-3xl text-2xl  text-sky-400 opacity-100 uppercase font-bold">
                Asteroid impact warning system
              </h1>
              <p className="text-center p-2 text-base">
                "It's a small step for the developer, but a huge step against
                the fake news. "
              </p>
            </div>
          </div>
        
          <div className="border-2 border-orange-400 ">
            <CircularProgressbar percentage={75} />
          </div>
          
          <div className="lg:w-1/2 md:w-1/3 border-0 hidden md:flex items-center md:justify-end ">
            <div className="m-4 ">
              <div className="text-red-600 hidden  lg:block">lg</div>
              <div className="text-red-600 hidden md:block lg:hidden">md</div>
              <div className="text-red-600 sm:block md:hidden lg:hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asteroide;

import React, { useEffect } from "react";
import { MyDataContext } from "../../context/GeneralContext";
import { CircularProgressbar } from "react-circular-progressbar";
import { useOutletContext } from "react-router-dom";
import TorinoScaleChart from "./components/TorinoScaleChart";
import RechartsExample from "./components/RechartsExample";
import PieChartsExample from "./components/PieChartsExample";
import PieChartsExample2 from "./components/PieChartsExample2";
import { NavLink } from "react-router-dom";
const Asteroide = () => {
  const { setSettings } = MyDataContext();
/*
  useEffect(() => {
    setSettings("");
  }, []);*/

  const asteroidak = [
    { name: "asteroide1", ip: 5 },
    { name: "asteroide2", ip: 10 },
  ];

  const hoze = () => {
    console.log("hozé")
    
      };

  return (
    <div
      className=" border-8  border-purple-400 w-full z-50 relative "
      onClick={() => {
        setSettings("");
        hoze()
      }}
    >
      <div className="flex  w-full h-screen relative text-xl z-10 border-2 border-lime-400 mt-[0px] ">
        <div
          className={` flex flex-col border-2 md:m-0 py-0 md:py-0 text-center lg:w-full  border-orange-400 mt-[30px] `}
        >
          <div className="border-2 lg:max-w-6xl mx-auto border-white flex justify-center">
            <div className="border-0 border-lime-400 flex flex-col justify-center flex-wrap md:p-10 ">
              <h1 className="z-10 p-2 border-0 text-center md:text-3xl text-2xl  text-sky-400 opacity-100 uppercase font-bold">
                Asteroid Impact probability diagram
              </h1>
            </div>
          </div>
     
         <button
              className="border-2 m-5 p-5 w-32 rounded cursor-pointer text-sky-400"
              onClick={hoze}
            >
              gomb
            </button>
          <div className="border-0 border-sky-400 lg:max-w-3xl my-10">
            {asteroidak?.map((item) => 
            (  <NavLink
                key={item?.name}
                to={item?.name}
                className={({ isActive }) =>
                  `${isActive ? "mynavlink" : ""}  text-sky-800 m-5 p-5 cursor-pointer border-2`
                }
              >
                {item.name}
              </NavLink>)
            )}
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
/*    <RechartsExample />
          <PieChartsExample2 /> */
//#01b574

//    <TorinoScaleChart/>
/* <div className="border-2 border-orange-400 ">
            <CircularProgressbar percentage={75} />
          </div> */
/*

          <div className="flex">
            <div className="p-5 w-40 bg-lime-300"></div>
            <div className="p-5 w-40 bg-yellow-300"></div>{" "}
            <div className="p-5 w-40 bg-orange-500"></div>{" "}
            <div className="p-5 w-40 bg-red-600"></div>{" "}
            <div className="p-5 w-40 bg-lime-700"></div>
          </div>
          
          <div className="flex">
            <div className="p-5 text-lime-300">meg fogsz lepődni</div>
            <div className="p-5 text-lime-400">meg fogsz lepődni</div>{" "}
            <div className="p-5 text-lime-500">meg fogsz lepődni</div>{" "}
            <div className="p-5 text-lime-600">meg fogsz lepődni</div>{" "}
            <div className="p-5 text-lime-700">meg fogsz lepődni</div>
          </div>
*/

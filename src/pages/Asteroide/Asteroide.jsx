import React, { useEffect, useState } from "react";
import { MyDataContext } from "../../context/DataContext";
import { CircularProgressbar } from "react-circular-progressbar";
import { useOutletContext } from "react-router-dom";
import TorinoScaleChart from "./components/TorinoScaleChart";
import RechartsExample from "./components/RechartsExample";
import PieChartsExample from "./components/PieChartsExample";
import PieChartsExample2 from "./components/PieChartsExample2";
import { NavLink } from "react-router-dom";
import useWindowSize from "../../hooks/use-windowsize";
import RechartsExample2 from "./components/RechartExample2";
import CardConsole1 from "../../components/consoles/views/CardConsole1";
import CardConsole2 from "../../components/consoles/views/CardConsole2";
import CardConsole3 from "../../components/consoles/views/CarConsole3";
import TestCharts1 from "./components/TestCharts1";
const Asteroide = () => {
  const { toggle, choosenSytle } = MyDataContext();
  const { width, height } = useWindowSize();
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [rotateZ, setRotateZ] = useState(0);
  const asteroidak = [
    { name: "asteroide1", ip: 5 },
    { name: "asteroide2", ip: 10 },
  ];

  return (
    <div
      className={` flex border-4  border-blue-400 w-full z-10 relative ${
        toggle ? "opacity-20" : ""
      }`}
    >
      <video
        // src={earth}
        src="https://sablonossablon.web.app/video/optimized_earth2.mp4"
        className="background-video border-0 border-red-400  opacity-30"
        autoPlay
        loop
        muted
      ></video>

      <div className="flex  w-full h-screen relative text-xl z-10 border-4 border-purple-400 mt-[0px] ">
        <div className="flex flex-col gap-4  relative z-50 my-10">
          <label className="flex flex-col">
            <span className="mb-1">Rotate X:</span>
            <input
              type="range"
              min="-180"
              max="180"
              value={rotateX}
              onChange={(e) => setRotateX(e.target.value)}
              className="w-full"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-1">Rotate Y:</span>
            <input
              type="range"
              min="-180"
              max="180"
              value={rotateY}
              onChange={(e) => setRotateY(e.target.value)}
              className="w-full"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-1">Rotate Z:</span>
            <input
              type="range"
              min="-180"
              max="180"
              value={rotateZ}
              onChange={(e) => setRotateZ(e.target.value)}
              className="w-full"
            />
          </label>
        </div>
      </div>
      <div className="m-5">  <CardConsole3 rotateY={rotateY} /></div>
    
      <div className="flex flex-col">
        <CardConsole1 rotateX={rotateX} rotateY={rotateY} rotateZ={rotateZ} />
        <CardConsole1 rotateX={rotateX} rotateY={rotateY} rotateZ={rotateZ} />
        <CardConsole1 rotateX={rotateX} rotateY={rotateY} rotateZ={rotateZ} />
      </div>
    </div>
  );
};

export default Asteroide;

/*  <h1 className="z-10 p-2 border-2 text-center  text-primary opacity-100 uppercase font-bold">
Asteroid Impact probability diagram
</h1>*/

/*  <div className="border-0 lg:max-w-6xl mx-auto border-white flex justify-center">
            <div className="border-0 border-lime-400 flex flex-col justify-center flex-wrap md:p-10 ">
              <h1 className="z-10 p-2 border-0 text-center md:text-3xl text-2xl  text-primary opacity-100 uppercase font-bold">
                Asteroid Impact probability diagram
              </h1>
            </div>
          </div> */

/*      <div className="border-0 border-sky-400 lg:max-w-3xl my-10">
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
          </div> */
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

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
import TestCharts1 from "./components/TestCharts1";
const Asteroide = () => {
  const { toggle } = MyDataContext();

  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [rotateZ, setRotateZ] = useState(0);
  const asteroidak = [
    { name: "asteroide1", ip: 5 },
    { name: "asteroide2", ip: 10 },
  ];

  return (
    <div
      className={`hover:bg-pink-400 flex border-0 
       border-blue-400 w-full z-10 relative ${toggle ? "opacity-20" : ""}`}
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
    </div>
  );
};

export default Asteroide;

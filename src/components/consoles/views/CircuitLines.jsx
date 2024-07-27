import React from "react";
import { FaBoltLightning } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { GiReactor } from "react-icons/gi";
const CircuitLines = () => {
  return (
    <div className="absolute inset-0 z-0">
      <div className="absolute top-10 left-4 w-40 h-0.5 bg-primary opacity-30"></div>
      <div className="absolute top-20 left-16 w-24 h-0.5 bg-primary opacity-30"></div>
      <div className="absolute top-40 left-8 w-32 h-0.5 bg-primary opacity-30">
        Crystal Card
      </div>
      <div className="absolute top-40 right-4 w-32 h-0.5 bg-primary opacity-30">
        Made by CNI
      </div>
      <div className="absolute bottom-10 left-10 w-0.5 h-24 bg-primary opacity-30"></div>
      <div className="absolute bottom-20 left-20 w-0.5 h-16 bg-primary opacity-30"></div>
      <div className="absolute bottom-0 right-10 w-0.5 h-20 bg-primary opacity-30"></div>
      <div className="absolute top-10 right-10 w-40 h-0.5 bg-primary opacity-30"></div>
      <div className="absolute top-20 right-20 w-32 h-0.5 bg-primary opacity-30"></div>
      <div className="absolute bottom-10 left-1/2 w-0.5 h-16 bg-primary opacity-30"></div>
      <GiReactor className="bg-yellow-400 text-dark text-3xl p-2  rounded-full top-10 hidden right-2 opacity-50 absolute" />
      <div
            key={index}
            onClick={() => handleClick(item)}
            className={`group relative border-0 p-1 rounded m-2 ${
              statusTable.dashboard !== "graph" && item.title === statusTable.graph
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-950 hover:bg-600 text-primary cursor-pointer"
            } ${
              statusTable[nameconsole] === item.title && statusTable.dashboard === "graph"
                ? "bg-600"
                : ""
            }`}
          ></div>
  
    </div>
  );
};

export default CircuitLines;
//  <GiReactor className='bg-yellow-400 text-dark text-3xl p-2  rounded-full '/>

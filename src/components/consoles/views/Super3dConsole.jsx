import React from "react";
import tocard from "../../../assets/images/tocard.JPG";
import logo from "../../../assets/images/earthbg7.png";
import qrcode from "../../../assets/images/qrcode.png";
import { MyConsoleContext } from "../../../context/ConsoleContext";
import CircuitLines from "./CircuitLines";
const Super3dConsole = ({
  nameconsole,
  data,
  rotateX,
  rotateY,
  rotateZ,
  origin,
}) => {
  const { actualSettings, setActualSettings } = MyConsoleContext();

  return (
    <div
      style={{
        transform: `
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          rotateZ(${rotateZ}deg)`,
        transformOrigin: origin,
      }}
      className="relative z-10 rounded inset-0 border-b-2 
      border-r-2 border-l-[5px] border-t-2 
      border-600 bg-gradient lime:bg-gradient2 
      text-dark flex flex-col items-start w-80 shadow-2xl 
      transform perspective-1000 m-1 p-2 h-48"
    >
      <h3 className="bg-950 text-primary uppercase text-lg text-center w-full">
        {nameconsole}
      </h3>
      <div className="flex flex-row flex-wrap text-3xl my-2 border-0 relative z-10 cursor-pointer">
        {data.map((item, index) => (
          <div
            key={index}
            className="group relative border-0 shadow p-1 rounded m-2 bg-950 text-primary cursor-pointer"
          >
            {<item.icon />}
            <div className="absolute top-0 left-10 mt-[-40px] ml-2 hidden group-hover:block bg-gray-700 text-white text-sm rounded p-1 z-50">
              {item.description}
            </div>
          </div>
        ))}
      </div>

      <CircuitLines />
    </div>
  );
};

export default Super3dConsole;

//Super3dConsole
//# Desktop kárytákról beszélünk
// nem lehet őket egyben darálni 2x3 ra kell bontani
// Minden kártyának lesz egy pozicója ami egy objektum x y és z
// origin
// Nem lehet őket
/*
<div
        style={{
          transform: `
              rotateX(${rotateX}deg)
               rotateY(${rotateY}deg)
                rotateZ(${rotateZ}deg)`,
          transformOrigin: origin,
        }}
        className=" relative z-10 rounded inset-0 border-b-8 
        border-r-2 border-l-[10px]  border-t-2 border-600 bg-gradient lime:bg-gradient2 
        text-dark flex
         flex-col items-start w-80 
         shadow-2xl transform perspective-1000 m-1 p-2 h-48 "
      >
        <h3 className="bg-950 text-primary uppercase text-lg text-center w-full">
          {nameconsole}
        </h3>
        <div className="flex flex-row flex-wrap text-3xl my-2
         border-0 relative z-10 cursor-pointer">
          {data.map((item, index) => (
            <div
              key={index}
              className="group relative border-0 shadow p-1 rounded m-2 bg-950 text-primary cursor-pointer"
            >
              {<item.icon />}
              <div className="absolute top-0 left-10 mt-[-40px] ml-2 hidden group-hover:block bg-gray-700 text-white text-sm rounded p-1 z-50">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>
*/

import React from "react";
import tocard from "../../../assets/images/tocard.JPG";
import logo from "../../../assets/images/earthbg7.png";
import qrcode from "../../../assets/images/qrcode.png";

const Super3dConsole = ({
    nameconsole,
    data,
    rotateX,
    rotateY,
    rotateZ,
    origin,
  }) => {
    return (
      <div
      style={{
        transform: `
          rotateX(${-10}deg)
          rotateY(${20}deg)
          rotateZ(${0}deg)`,
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
      {/* Circuit Lines */}
      <div className="absolute inset-0 z-0">
  <div className="absolute top-10 left-4 w-40 h-0.5 bg-primary opacity-30">1</div>
  <div className="absolute top-20 left-16 w-24 h-0.5 bg-primary opacity-30">2</div>
  <div className="absolute top-40 left-8 w-32 h-0.5 bg-primary opacity-30">3</div>
  <div className="absolute top-40 right-4 w-32 h-0.5 bg-primary opacity-30">4</div>
  <div className="absolute bottom-10 left-10 w-0.5 h-24 bg-primary opacity-30">5</div>
  <div className="absolute bottom-20 left-20 w-0.5 h-16 bg-primary opacity-30">6</div>
  <div className="absolute bottom-5 right-10 w-0.5 h-20 bg-primary opacity-30">7</div>
  <div className="absolute top-10 right-10 w-40 h-0.5 bg-primary opacity-30">8</div>
  <div className="absolute top-20 right-20 w-32 h-0.5 bg-primary opacity-30">9</div>
  <div className="absolute bottom-10 left-1/2 w-0.5 h-16 bg-primary opacity-30">10</div>
</div>
    </div>
    );
  };
  
  export default Super3dConsole;


//Super3dConsole

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
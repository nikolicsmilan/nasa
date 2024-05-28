import React from "react";
import tocard from "../../../assets/images/tocard.JPG";
import logo from "../../../assets/images/earthbg7.png";
import qrcode from "../../../assets/images/qrcode.png";

const FilterConsole = ({
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
              rotateX(${rotateX}deg)
               rotateY(${rotateY}deg)
                rotateZ(${rotateZ}deg)`,
          transformOrigin: origin,
        }}
        className=" relative z-10 rounded inset-0 border-b-8 
        border-l-2 border-r-[20px]  border-t-2 border-600 bg-gradient lime:bg-gradient2 
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
    );
  };
  
  export default FilterConsole;

/*
const FilterConsole = ({
  nameconsole,
  data,
  rotateX,
  rotateY,
  rotateZ,
  origin,
  description,
}) => {
  return (
    <div
      style={{
        transform: `
            rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
              rotateZ(${rotateZ}deg)`,
        transformOrigin: origin,
      }}
      className=" rounded inset-0 border-b-2 border-l-2 border-t-2
         border-600  bg-gradient lime:bg-gradient2
        text-dark relative flex flex-col
       items-start w-80   
        shadow-2xl  transform  
          perspective-1000 m-1 p-2 h-48"
    >
      <h3 className="bg-950 text-primary uperacase text-lg text-center w-full">
        {nameconsole}
      </h3>
      <div className="flex flex-row flex-wrap text-3xl my-2 border-0 ">
        {data.map((item) => (
          <div className=" border-0 shadow  p-1 rounded m-2 bg-950 text-primary ">{<item.icon />}</div>
        ))}
      </div>
    </div>
  );
};

export default FilterConsole;*/

//FilterConsole

import React from "react";
import { useColor } from "../../../hooks/use-color";
import { useDataVisualization } from "../../../hooks/use-datavisualization";

const Super3dConsole = ({
  nameconsole,
  data,
  rotateX,
  rotateY,
  rotateZ,
  origin,
}) => {
  const { colorIze } = useColor(nameconsole);
  const { handleClick } = useDataVisualization();

  return (
    <div
      style={{
        transform: `
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          rotateZ(${rotateZ}deg)`,
        transformOrigin: origin,
      }}
      //put dependency glowy-button-6
      className={`glassmorphis ${
        origin === "left center"
          ? "bg-gradientreverse  border-r-[0px] border-l-0"
          : "bg-gradien  border-r-0 border-l-[0px]"
      } 
      relative z-10 rounded inset-0 

      border-600 
      text-dark flex flex-col items-start w-64 
      transform perspective-1000 m-0 p-0 h-40 border-0`}
    >
     <div className="flex justify-center border-0 w-full relative top-[-10px]">
     <h3 className=" text-primary uppercase text-lg text-center w-full ">
        {nameconsole}
      </h3>
     </div>
      <div className="glowy-button-6   flex flex-row flex-wrap text-3xl my-0 border-0 relative z-10 cursor-pointer  ">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(nameconsole, item)}
            className={`glowy-button-5 group relative border-0  p-1 rounded m-2 hover:bg-600 
            text-primary cursor-pointer ${colorIze(item)}`}
          >
            {<item.icon />}
            <div className="absolute top-0 left-10 mt-[-40px] ml-2 hidden group-hover:block bg-gray-700 text-white text-sm rounded p-1 z-50">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Super3dConsole;



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
     
      //put dependency glowy-button-6
      className={` glassmorphis 
      relative z-10 rounded 

      border-600 
      text-dark flex flex-col items-start w-80 
     m-0 p-0  border-0`}
    >
        <p className="text-center glowy-button-10 p-1 m-3 mt-1 w-64 hidden">{nameconsole}</p>
      <div className="hover:glowy-button-5   flex flex-row flex-wrap text-2xl my-0
        relative z-10 cursor-pointer border-0 ">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(nameconsole, item)}
            className={`flex flex-col w-20 h-16 justify-center items-center
               glowy-button-5  group  border-0  p-1 rounded m-2 hover:bg-600 
            text-primary cursor-pointer`}
          >
            <div> {<item.icon />} </div>
            <div
              className="text-center group-hover:block
              text-white text-sm rounded p-1 z-50"
            >
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Super3dConsole;

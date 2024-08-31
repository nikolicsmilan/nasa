import React from "react";
import { dashboards } from "../../../locales/localdata";
import { useColor } from "../../../hooks/use-color";
import { useDataVisualization } from "../../../hooks/use-datavisualization";

const DesktopMenuAsteroide = () => {
  const { colorIze } = useColor("dashboard");
  const { handleClick } = useDataVisualization();
  return (
    <div
      //put dependency glowy-button-6
      className={`w-full border-0 border-red-400 h-20  
      text-dark flex flex-col items-center text-3xl 
        `}
    >
      <div className="w-full glowy-button-   flex flex-row flex-wrap 
       border-0 border-lime-400 relative z-10 cursor-pointer h-20 ">
        {dashboards.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick("dashboard", item)}
            className={`flex flex-col  items-center glowy-button-5 group relative border-0  p-1 rounded m-2 hover:bg-600 h-16 w-16
            text-primary cursor-pointer  ${colorIze(item)}`}
          >
            {<item.icon />}
            <div className=" ml-2 hidde group-hover:block  text-white text-sm rounded p-1 z-50">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesktopMenuAsteroide;
//w-full glowy-button-   flex flex-row flex-wrap text-3xl my-0 border-2 border-lime-400 relative z-10 cursor-pointer

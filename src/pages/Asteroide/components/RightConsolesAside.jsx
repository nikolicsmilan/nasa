import React from "react";
import AsideConsole from "./AsideConsole";
import { MyConsoleContext } from "../../../context/ConsoleContext";
// It only separates the data, indicating which component receives it

import TypingAnimation from "../../../components/TypingAnimation/TypingAnimation";
const RightConsolesAside = () => {
  const { rightasideconsole, statusTable,message } = MyConsoleContext();

  console.log("RightConsolesAside ",message)
  return (
    <div className="border-0 p-1 border-red-400 top-20 relative">
      <TypingAnimation customcontent={message.description} />

     
    </div>
  );
};

export default RightConsolesAside;
/*
   <AsideConsole source={rightasideconsole} 
    />
      <div className="hidden flex flex-col w-64 text-primary relative top-[40px]">
          {Object.entries(statusTable).map(([key, value]) => (
            <div key={key}>
              <strong>{key}:</strong> {value.toString()}
            </div>
          ))}
        </div>
*/

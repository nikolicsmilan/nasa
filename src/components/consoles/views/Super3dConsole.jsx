import React from "react";
import { MyConsoleContext } from "../../../context/ConsoleContext";
import CircuitLines from "./CircuitLines";
import { useAnimations } from "../../../hooks/use-animations";
import useDatafilter from "../../../hooks/use-datafilter";
const Super3dConsole = ({
  nameconsole,
  data,
  rotateX,
  rotateY,
  rotateZ,
  origin,
}) => {
  const {
    setActualMainConsole,
    setAnimationVariants,
    setInfo,
    setActualtypedata,
    setSatusTable
  } = MyConsoleContext();
  const { mainConsoleAnimations } = useAnimations();
  const { filterData } = useDatafilter();

  //Here decide what will apear on mainconsole screen

  //Here is only the item pass
  //Then the hook will decide what happens
  const handleClick = (item) => {
    //Only content change

//we need a function here that is not direct
 //sets the statusTable but decides what
 //be set in the statusTabel if there is any change
 //Must tune the localdata in the ConsoleContext
 // statusTable state el
 //Unnecessary states must be removed
 //Super3dConsole.jsx component itself is in the wrong folder
    setSatusTable(item)
  };

  return (
    <div
      style={{
        transform: `
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          rotateZ(${rotateZ}deg)`,
        transformOrigin: origin,
      }}
      className={` ${
        origin === "left center"
          ? "bg-gradientreverse  border-r-[5px] border-l-2"
          : "bg-gradient  border-r-2 border-l-[5px]"
      } 
      relative z-10 rounded inset-0 border-b-2 
      border-t-4 
      border-600 
      text-dark flex flex-col items-start w-80 shadow-2xl 
      transform perspective-1000 m-0 p-0 h-48`}
    >
      <h3 className="bg-950 text-primary uppercase text-lg text-center w-full">
        {nameconsole}
      </h3>
      <div className="flex flex-row flex-wrap text-3xl my-2 border-0 relative z-10 cursor-pointer">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(item)}
            className="group relative border-0 shadow p-1 rounded m-2 bg-950 text-primary cursor-pointer"
          >
            {<item.icon />}
            <div className="absolute top-0 left-10 mt-[-40px] ml-2 hidden group-hover:block bg-gray-700 text-white text-sm rounded p-1 z-50">
              {item.description}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          transform: `
          rotateX(${20}deg)
          rotateY(${10}deg)
          rotateZ(${0}deg)`,
          transformOrigin: origin,
        }}
        className="text-white hidden border bg-gradient mt-[30px] ml-[-6px] w-full min-h-2"
      >
        {" "}
      </div>
      <CircuitLines />
  
    </div>
  );
};

export default Super3dConsole;
/*
  const handleClick = (item) => {
    //Only content change
    setActualMainConsole(item);

    if (item?.sign) {
      console.log("item: ", item);
      console.log("Van sign");
      filterData(item?.sign, "up", 10);
      setActualtypedata(item?.sign);
    }
    //If animations attribute ==== yes run the animations also
    if (item.animations === "yes") {
     // mainConsoleAnimations(setAnimationVariants, setInfo);
    }
  };

*/
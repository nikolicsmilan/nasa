import React from "react";
import { MyConsoleContext } from "../../../context/ConsoleContext";
import CircuitLines from "./CircuitLines";
import { useAnimations } from "../../../hooks/use-animations";

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
    statusTable,
    setStatusTable,
    filterTable, 
    setFilterTable 
  } = MyConsoleContext();
  const { mainConsoleAnimations } = useAnimations();


  const colorIze = (item) => {
    if (
      statusTable.dashboard !== "graph" &&
      (nameconsole === "graph" || nameconsole === "filter" || nameconsole === "datatype")
    ) {
      return "bg-stone-500 cursor-not-allowed";
    } else if (nameconsole === "filter" && filterTable.displayMode === item.title) {
      return "bg-600";
    } else if (statusTable[nameconsole] === item.title) {
      return "bg-600";
    } else {
      return "bg-950";
    }
  };


  const handleClick = (newValues) => {
    if (
      statusTable.dashboard !== "graph" &&
      (nameconsole === "graph" || nameconsole === "filter" || nameconsole === "datatype")
    ) {
      return; // Do nothing if dashboard is not "graph" and this is the "graph", "filter", or "datatype" console
    }
    const { icon, description, title, sign = statusTable.sign, ...rest } = newValues;
    if (nameconsole === "filter") {

     // console.log("történik valami???","nameconsole: ",nameconsole,"title: ",title)

     //displayMode kell állítani!!!!
      setFilterTable((prevFilterTable) => ({
        ...prevFilterTable,
        displayMode: title,
       // sign: sign,
       // ...rest,
      }));
    } else {
      setStatusTable((prevStatusTable) => ({
        ...prevStatusTable,
        [nameconsole]: title,
        sign: sign,
        ...rest,
      }));
    }
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
      className={`glassmorphis ${
        origin === "left center"
          ? "bg-gradientreverse  border-r-[0px] border-l-0"
          : "bg-gradien  border-r-0 border-l-[0px]"
      } 
      relative z-10 rounded inset-0 border-b-0 
      border-t-0 
      border-600 
      text-dark flex flex-col items-start w-80 
      transform perspective-1000 m-0 p-0 h-48`}
    >
      <h3 className=" text-primary uppercase text-lg text-center w-full">
        {nameconsole}
      </h3>
      <div className="flex flex-row flex-wrap text-3xl my-2 border-0 relative z-10 cursor-pointer  ">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(item)}
            className={`group relative border-0  p-1 rounded m-2 hover:bg-600 
            text-primary cursor-pointer ${colorIze(item)}`}
          >
            {<item.icon />}
          
            <div className="absolute top-0 left-10 mt-[-40px] ml-2 hidden group-hover:block bg-gray-700 text-white text-sm rounded p-1 z-50">
              {statusTable[nameconsole]} {item.title}
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
    </div>
  );
};

export default Super3dConsole;
//  <p className="text-sm text-center"> {item.title}</p>
/*
 <div
            key={index}
            onClick={() => handleClick(item)}
            className={`group relative border-0  p-1 rounded m-2 hover:bg-600 
            text-primary cursor-pointer ${
              statusTable[nameconsole] === item.title ? "bg-600" : "bg-950"
            }`}
          >
*/

/*    //Only content change

//we need a function here that is not direct
 //sets the statusTable but decides what
 //be set in the statusTabel if there is any change
 //Must tune the localdata in the ConsoleContext
 // statusTable state el
 //Unnecessary states must be removed
 //Super3dConsole.jsx component itself is in the wrong folder */
//  {item.description}

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


/*
  const colorIzec = (item) => {
    if (statusTable.dashboard !== "graph" && nameconsole === "graph") {
      return "bg-gray-400 cursor-not-allowed";
    } else if (statusTable[nameconsole] === item.title) {
      return "bg-600";
    } else {
      return "bg-950";
    }
  };




    const handleClicka = (newValues) => {
    if (statusTable.dashboard !== "graph" && nameconsole === "graph") {
      return; // Do nothing if dashboard is not "graph" and this is the "graph" console
    }
    const { icon, description, title, sign = "", ...rest } = newValues;
    setStatusTable((prevStatusTable) => ({
      ...prevStatusTable,
      [nameconsole]: title,
      sign: sign,
      ...rest,
    }));
  };

*/

/*
  const handleClick = (newValues) => {
    const { icon, description, title, sign = "", ...rest } = newValues;
    setStatusTable((prevStatusTable) => ({
      ...prevStatusTable,
      [nameconsole]: title,
      sign: sign,
      ...rest,
    }));
  };*/

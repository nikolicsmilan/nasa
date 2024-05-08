import React, { useState } from "react";
import { useSave } from "../../hooks/use-saveuser";
import { MyAudioContext } from "../../context/AudioContext";
import { MyDataContext } from "../../context/DataContext";
import { styles } from "../../locales/localdata";
//import { theme } from "tailwindcss-themer";
//kell egy természetben is látszó színséma!!!!
const StyleConsole = ({ users }) => {
  const { saveUser } = useSave();
  const { playSoundClick } = MyAudioContext();
  const { setChoosenStyle,choosenStyle } = MyDataContext();



  return (
    <div>
      <div
        className="p-5 lg:p-0 w-full flex lg:items-start lg:justify-center
    flex-wrap justify-between overflow-y-auto h-48 lg:h-96"
      >
        {styles?.map((item) => (
           <div
           key={item.title}
           onClick={() => {
            setChoosenStyle(item?.title);
             playSoundClick()
           }}
           className={` shadowactive customshadow3 
           cursor-pointer rounded relative flex-col my-1 w-40 lg:w-48 md:w-40
           h-14  border-0 m-2 border-lime-400`}
         >
           <div
             className={` bg-lime-400 customshadow2 rounded
           w-40 md:w-40 lg:w-48 h-full text-white shadow-2xl border-0 
            md:opacity-10 opacity-10 mt-[0px] z-40 `}
           ></div>
 
           <div
             className=" customshadow2 rounded
          text-xl opacity-100 flex h-14
           border-purple-400 shadow-2xl items-center 
            border-0 bg-dark-800 z-20 mt-[-55px]  "
           >
             <p className="mx-2 text-sky-200"> {<item.icon />}</p>
             <h2 className="text-sky-200 opacity-100">{item.title}</h2>
           </div>
         </div>
        ))}
      </div>

      {styles?.map((item, index) => (
        <div key={index} className={`text-${item.title2}-400`}>
          {item?.title2}
          <span className="text-white">{item?.title2}</span>
        </div>
      ))}



<h2 className="text-primary">Ez egy szöveg1111111111111</h2>
      <h2 className="bg-primary text-white">Ez egy szöveg2222222222 </h2>
      <h2 className="text-primaryb">Ez egy szöveg</h2>
      <h2 className="bg-primaryb">Ez egy szöveg </h2>
      <h2 className="city:font-bold space:text-red-400">Ez egy szöveg </h2>
    </div>
  );
};

export default StyleConsole;
//        saveUser("style", item?.title);
/* onClick={() => {
          saveUser("style", "green");
        }} */
/*  A stílus: {users?.style} tt

      selectedStyle: {selectedStyle} */

      //city:bg-primary space:bg-primary sky:bg-sky-400 green:bg-lime-400

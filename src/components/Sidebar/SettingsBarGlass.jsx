import React from "react";
import { MyDataContext } from "../../context/GeneralContext";

const SettingsBarGlass = ({ menupoint }) => {
  const { settings, setSettings } = MyDataContext();
  return (
    <div
      className="p-5 lg:p-0 w-full flex lg:items-center lg:justify-center
    flex-wrap justify-between overflow-y-auto h-48 lg:h-96"
    >
      {menupoint?.map((item) => (
        <div
          key={item.title}
          onClick={() => {
            setSettings(item?.title);
          }}
          className={`shadowactive customshadow3 
          cursor-pointer rounded relative flex-col my-1 w-40 lg:w-48 md:w-40
          h-14  border-0 border-lime-400`}
        >
          <div
            className="customshadow2 rounded
          w-40 md:w-40 lg:w-48 h-full text-white shadow-2xl border-0 
           bg-sky-400 md:opacity-10 opacity-10 mt-[0px] z-40"
          ></div>

          <div
            className="customshadow2 rounded
         text-xl opacity-100 flex h-14
          border-purple-400 shadow-2xl items-center 
           border-0 bg-dark-800 z-20 mt-[-55px]  "
          >
            <p className="mx-2 text-sky-200"> {<item.icon />}</p>
            <h2 className="text-sky-200 opacity-100">{item.title}</h2>
          </div>
        </div>
      ))}
      <div className="absolute top-0 left-0 w-8 h-8 bg-transparent border-t-2 border-l-2 border-sky-200 transform -translate-x-2 -translate-y-2"></div>
      <div className="absolute top-0 right-0 w-8 h-8 bg-transparent border-t-2 border-r-2 border-sky-200 transform translate-x-1 -translate-y-2"></div>
      <div className="absolute bottom-0 left-0 w-8 h-8 bg-transparent border-b-2 border-l-2 border-sky-200 transform -translate-x-1 translate-y-2"></div>
      <div className="absolute bottom-0 right-0 w-8 h-8 bg-transparent border-b-2 border-r-2 border-sky-200 transform translate-x-1 translate-y-2"></div>
    </div>
  );
};

export default SettingsBarGlass;
/* i use */
/*
        
          <div className="relative w-96 h-96 my-5 bg-white">
 
            <div className="absolute top-0 left-0 w-8 h-8 bg-transparent border-t-4 border-l-4 border-sky-400 transform -translate-x-1 -translate-y-1"></div>
            <div className="absolute top-0 right-0 w-8 h-8 bg-transparent border-t-4 border-r-4 border-sky-400 transform translate-x-1 -translate-y-1"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 bg-transparent border-b-4 border-l-4 border-sky-400 transform -translate-x-1 translate-y-1"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-transparent border-b-4 border-r-4 border-sky-400 transform translate-x-1 translate-y-1"></div>
          </div>
*/

/*sarkok */
/*  <div class="absolute top-0 left-0 border-4 border-sky-400 rounded-tl-lg "></div>
      <div class="absolute top-0 right-0 border-4 border-sky-400  rounded-tr-lg"></div>
      <div class="absolute bottom-0 left-0 border -4 border-sky-400  rounded-bl-lg"></div>
      <div class="absolute bottom-0 right-0 border-4 border-sky-400  rounded-br-lg"></div> */

/*

/*circle in circle */

/*        <div class="relative w-32 h-32 bg-white">a
            <div class="absolute top-0 left-0 border-4 border-sky-400 rounded-tl-lg "></div>
            <div class="absolute top-0 right-0 border-4 border-sky-400  rounded-tr-lg"></div>
            <div class="absolute bottom-0 left-0 border-4 border-sky-400  rounded-bl-lg"></div>
            <div class="absolute bottom-0 right-0 border-4 border-sky-400  rounded-br-lg"></div>
           
            <div className="absolute top-0 left-0 w-3 h-3 bg-transparent border-4 border-black rounded-full"></div>
            <div className="absolute top-0 right-0 w-3 h-3 bg-transparent border-4 border-black rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 bg-transparent border-4 border-black rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-transparent border-4 border-black rounded-full"></div>
          </div> */

/*base */
/*
            <div className="relative w-32 h-32 my-5 bg-white">a
         
            <div className="absolute top-0 left-0 w-8 h-8 bg-transparent border-4 border-sky-400 transform -translate-x-1 -translate-y-1"></div>
            <div className="absolute top-0 right-0 w-8 h-8 bg-transparent border-4 border-sky-400 transform translate-x-1 -translate-y-1"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 bg-transparent border-4 border-sky-400 transform -translate-x-1 translate-y-1"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 bg-transparent border-4 border-sky-400 transform translate-x-1 translate-y-1"></div>
          </div>
          */

/*different color */
/*        <div className="relative w-32 h-32 my-5 bg-white">
      
            <div className="absolute top-0 left-0 w-full h-0 border-t-4 border-red-400"></div>
           
            <div className="absolute bottom-0 left-0 w-full h-0 border-t-4 border-yellow-400"></div>
           
            <div className="absolute top-0 left-0 h-full w-0 border-l-4 border-blue-400"></div>
          
            <div className="absolute top-0 right-0 h-full w-0 border-l-4 border-green-400"></div>
          </div>
 */
/*
import React from "react";
import { MyDataContext } from "../../context/GeneralContext";
import { settingshome } from "../../locales/localdata";
const SettingsBarGlass = () => {
  const { settings, setSettings } = MyDataContext();
  return (
    <div className="">
      {settingshome.map((item) => (
        <div
          onClick={() => {
            setSettings(item?.title);
          }}
          key={item.id} // Asszumáltam, hogy van egy id az item objektumban
          className={`shadowactive customshadow3 
          cursor-pointer rounded relative flex-col m-3 w-40 lg:w-48 md:w-40
          h-14  border-0 border-lime-400`}
        >
          <div
            className="customshadow2 rounded
          w-40 md:w-40 lg:w-48 h-full text-white shadow-2xl border-0 
           bg-sky-400 md:opacity-10 opacity-10 mt-[0px] z-40"
          ></div>

          <div
            className="customshadow2 rounded
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
  );
};

export default SettingsBarGlass;

*/

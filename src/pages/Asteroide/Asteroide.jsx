import React, { useEffect } from "react";
import { MyDataContext } from "../../context/DataContext";
import { CircularProgressbar } from "react-circular-progressbar";
import { useOutletContext } from "react-router-dom";
import TorinoScaleChart from "./components/TorinoScaleChart";
import RechartsExample from "./components/RechartsExample";
import PieChartsExample from "./components/PieChartsExample";
import PieChartsExample2 from "./components/PieChartsExample2";
import { NavLink } from "react-router-dom";
import useWindowSize from "../../hooks/use-windowsize";
import RechartsExample2 from "./components/RechartExample2";
import IdentityCard from "./components/IdentityCard";

const Asteroide = () => {
  const { toggle,choosenSytle } = MyDataContext();
  const { width, height } = useWindowSize();

  const asteroidak = [
    { name: "asteroide1", ip: 5 },
    { name: "asteroide2", ip: 10 },
  ];

  return (
    <div className={`flex border-2  border-purple-400 w-full z-10 relative ${toggle ?"opacity-20":""}`}>
        <video
       // src={earth}
       src="https://sablonossablon.web.app/video/optimized_earth2.mp4"
        className="background-video border-0 border-red-400  opacity-30"
        autoPlay
        loop
        muted
      ></video>
      <div className="flex  w-full h-screen relative text-xl z-10 border-0 border-lime-400 mt-[0px] ">
        <div
          className={` flex flex-col border-2 md:m-0 py-0 md:py-0 text-center lg:w-full  border-orange-400 mt-[30px] `}
        >
        
          <h1 className="z-10 p-2 border-2 text-center  text-primary opacity-100 uppercase font-bold">
                Asteroid Impact probability diagram
              </h1>
       <p>width {width}</p>
          <div
           // Asszumáltam, hogy van egy id az item objektumban
            className={`shadowactive customshadow3 cursor-pointer 
            rounded-2xl 
            relative  flex-col m-0 w-full lg:w-96  h-48 
            border-2 border-600`}
          >
            <div className={` bg-primary customshadow2 rounded-2xl
           w-full lg:w-96  h-full shadow-2xl border-0
                opacity-10 mt-[0px] z-40`}></div>

            <div className="customshadow2 rounded-2xl text-2xl opacity-100
             flex h-48 border-purple-400 shadow-2xl 
             items-center justify-center border-0 bg-dark-800 
             z-20 mt-[-190px] font-bold">
            
            <RechartsExample/>
           
            </div>
            
          </div>
          <div
           // Asszumáltam, hogy van egy id az item objektumban
            className={`shadowactive customshadow3 cursor-pointer 
            rounded-2xl 
            relative  flex-col m-0 w-full lg:w-96  h-48 
            border-2 border-600`}
          >
            <div className={` bg-primary customshadow2 rounded-2xl
           w-full lg:w-96  h-full shadow-2xl border-0
                opacity-10 mt-[0px] z-40`}></div>

            <div className="customshadow2 rounded-2xl text-2xl opacity-100
             flex h-48 border-purple-400 shadow-2xl 
             items-center justify-center border-0 bg-dark-800 
             z-20 mt-[-190px] font-bold">
            
            <RechartsExample2/>
           
            </div>
            
          </div>
<div className="my-3">
<RechartsExample2/>
</div>
<div className="my-3">
<RechartsExample/>
</div>
        
        </div>
      
      </div>
 <IdentityCard/>
 <IdentityCard/>
    </div>
  );
};

export default Asteroide;

/*  <div className="border-0 lg:max-w-6xl mx-auto border-white flex justify-center">
            <div className="border-0 border-lime-400 flex flex-col justify-center flex-wrap md:p-10 ">
              <h1 className="z-10 p-2 border-0 text-center md:text-3xl text-2xl  text-primary opacity-100 uppercase font-bold">
                Asteroid Impact probability diagram
              </h1>
            </div>
          </div> */

/*      <div className="border-0 border-sky-400 lg:max-w-3xl my-10">
            {asteroidak?.map((item) => 
            (  <NavLink
                key={item?.name}
                to={item?.name}
                className={({ isActive }) =>
                  `${isActive ? "mynavlink" : ""}  text-sky-800 m-5 p-5 cursor-pointer border-2`
                }
              >
                {item.name}
              </NavLink>)
            )}
          </div> */
/*    <RechartsExample />
          <PieChartsExample2 /> */
//#01b574

//    <TorinoScaleChart/>
/* <div className="border-2 border-orange-400 ">
            <CircularProgressbar percentage={75} />
          </div> */
/*

          <div className="flex">
            <div className="p-5 w-40 bg-lime-300"></div>
            <div className="p-5 w-40 bg-yellow-300"></div>{" "}
            <div className="p-5 w-40 bg-orange-500"></div>{" "}
            <div className="p-5 w-40 bg-red-600"></div>{" "}
            <div className="p-5 w-40 bg-lime-700"></div>
          </div>
          
          <div className="flex">
            <div className="p-5 text-lime-300">meg fogsz lepődni</div>
            <div className="p-5 text-lime-400">meg fogsz lepődni</div>{" "}
            <div className="p-5 text-lime-500">meg fogsz lepődni</div>{" "}
            <div className="p-5 text-lime-600">meg fogsz lepődni</div>{" "}
            <div className="p-5 text-lime-700">meg fogsz lepődni</div>
          </div>
*/

import React from "react";
import { menu } from "../data/localdata";
import earth720 from "../assets/video/earth_1200p.mov";
const Home = () => {
  return (
    <div className=" border-0  border-red-400 w-full">
      <video
        src={earth720}
        className="background-video border-0 border-red-400"
        autoPlay
        loop
        muted
      ></video>

      <div className="flex h-screen w-full relative text-xl z-30 border-0 mt-[0px] ">
        <div className="w-1/2 border-0 flex items-center justify-end ">
          <div className="border-0   flex justify-end flex-wrap p-10 hidden">
            <div className=" relative   flex-col m-3  w-auto h-28 border-0 border-red-400 ">
              <div
                id="customshadow2"
                className="  h-full text-sky-00 shadow-2xl border-0 bg-sky-400 opacity-10 mt-[0px] z-40"
              ></div>
              <div
                id="customshadow2"
                className="p-5 opacity-100 flex h-28
               border-white  shadow-2xl items-center justify-center border-0 bg-dark-800 z-20 rounded  mt-[-110px]"
              >
                <h1 className="text-2xl text-sky-400  opacity-100 uppercase font-bold">
                  Asztroida becsapodás jelző rendszer{" "}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col border-0 m-10 w-1/2 border-orange-400 ">
          <div className="border-0 border-lime-400 w-full   flex justify-end flex-wrap p-10 ">
            <h1 className="text-3xl text-end text-sky-400  opacity-100 uppercase font-bold">
              Asztroida becsapodás jelző rendszer - Központi természetes
              intelligencia ügynökség
            </h1>
          </div>
          <div className="border-0   flex justify-end flex-wrap p-10 ">
            {menu.map((item) => (
              <div className=" relative   flex-col m-3  w-48 h-28 border-0 border-red-400 ">
                <div
                  id="customshadow2"
                  className="w-48  h-full text-sky-00 shadow-2xl border-0 bg-sky-400 opacity-10 mt-[0px] z-40"
                ></div>
                <div
                  id="customshadow2"
                  className="text-2xl opacity-100 flex h-28
               border-white  shadow-2xl items-center justify-center border-0 bg-dark-800 z-20 rounded  mt-[-110px]"
                >
                  <h2 className=" text-sky-400  opacity-100">{item.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
//Központi természetes intelligencia ügynökség
//bg-black opacity-80
//mt-[100px] mr-[-100px]

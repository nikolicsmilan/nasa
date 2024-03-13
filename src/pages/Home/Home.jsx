import React, { useEffect } from "react";
import earth720 from "../../assets/video/earth_1200p.mov";
//import { MyDataContext } from "../../context/GeneralContext";
import useWindowSize from "../../hooks/use-windowsize";
import { MyDataContext } from "../../context/GeneralContext";
import BiggerConsoles from "../../components/Sidebar/BiggerConsoles";
import { start } from "../../locales/localdata";
const Home = () => {
  const { toggle, settings, setSettings, settingsOpen } = MyDataContext();
  useEffect(() => {
    setSettings;
    setSettings("Navigation");
  }, []);
  const hoze = () => {
    console.log("hozé az izé");
  };
  return (
    <div className=" border-10  border-black w-full z-50 relative ">
      <video
        src={earth720}
        className="background-video border-0 border-red-400 opacity-70"
        autoPlay
        loop
        muted
      ></video>

      <div className="lg:max-w-6xl mx-auto lg:px-4 flex  w-full h-screen relative text-xl z-50 border-r-0 border-l-0 border-black mt-[0px] ">
        <div
          className={` flex flex-col border-0 md:m-0 py-0 md:py-0 text-center lg:w-full  border-orange-400 mt-[30px] ${
            settingsOpen ? "opacity-10 " : ""
          }`}
        >
          <div className="border-0 lg:max-w-6xl mx-auto border-white flex justify-center">
            <div
              className="border-0  border-lime-400 flex
             flex-col justify-center flex-wrap lg:p-10 "
            >
              <h1
                className="cursor-pointer z-10 p-2
               border-0 text-center lg:text-3xl 
               text-2xl  opacity-100 uppercase font-bold"
              >
                Asteroid impact warning system
              </h1>
              <div className="overflow-y-auto h-80 lg:h-auto p-2 ">
                <h2 className="my-5">
                  {" "}
                  "It's a small step for the developer, but a huge step against
                  the fake news."
                </h2>
                <p className=" text-sky-200">
                  ( Or the other way around, but it doesn't matter now... :) )
                </p>
                <p className="text-sky-200">
                  {" "}
                  Click on <span className="text-sky-400 font-bold text-2xl">START</span> button and find out what potentially dangerous
                  asteroids are approaching the earth, how big they are expected
                  to hit and how much damage they would cause if they hit. The
                  data is valid and comes from the NASA Sentry database in near
                  real time.
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-0 h-full w-full justify-center items-start relative z-50">
            <BiggerConsoles menupoint={start} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
/*
Solarsystemwith routing és
                settings próba layoutba ha nem akkor oldalanként. A kapcsolók
                kikapcsolják a másikat. navgáció visszaállítja a settingsbe a
                navigációt
*/

/*

       <div className="lg:max-w-6xl mx-auto border-0 border-white  flex justify-center flex-wrap  md:mt-[90px] ">
            {menu.map((item) => (
              <div
                id=""
                className=" customshadow3 cursor-pointer rounded-2xl relative flex-col m-3  w-40  lg:w-48 md:w-40 h-14 md:h-28 border-0 border-orange-400 "
              >
                <div className="customshadow2 rounded-2xl  w-40 md:w-40  lg:w-48 h-full text-sky-400 shadow-2xl border-0 bg-sky-400 md:opacity-10 opacity-10 mt-[0px] z-40"></div>

                <div
                  className="customshadow2 rounded-2xl text-2xl opacity-100 flex h-14 md:h-28
               border-purple-400  shadow-2xl items-center justify-center border-0 bg-dark-800 z-20  mt-[-55px]  md:mt-[-110px] font-bold"
                >
                  <h2 className="text-sky-400  opacity-100">{item.title}</h2>
                </div>
              </div>
            ))}
          </div>
*/

/*

*/
//lg:max-w-6xl mx-auto
/*
  <div className="border-0   flex justify-end flex-wrap p-10 ">
              {menu.map((item) => (
                <div
                  id="customshadow3"
                  className="flex rounded-2xl items-center justify-center text-2xl relative z-30 
                  color-gradient-box m-1 p-5 lg:w-48 md:w-40 w-28 h-28  shadow-2xl"
                >
                  {item.title}
                </div>
              ))}
            </div>
*/
//Központi természetes intelligencia ügynökség
//bg-black opacity-80
//mt-[100px] mr-[-100px]

/*
 <div className="relative z-30 color-gradient-box p-5 lg:w-48 md:w-40 w-28 h-28 text-xl shadow-2xl">
              Alternativ
            </div>
*/

/*
 <div className="border-0   flex justify-end flex-wrap p-10 ">
            {menu.map((item) => (
              <div className="flex rounded-2xl items-center justify-center text-2xl relative z-30 color-gradient-box m-1 p-5 lg:w-48 md:w-40 w-28 h-28  shadow-2xl">
                {item.title}
              </div>
            ))}
          </div>

*/

/*
   <div   className="border-0   flex justify-end flex-wrap p-10 ">
            {menu.map((item) => (
              <div   className="flex rounded-2xl items-center justify-center text-2xl relative z-30 color-gradient-box m-1 p-5 lg:w-48 md:w-40 w-28 h-28  shadow-2xl">
                {item.title}
              </div>
            ))}
          </div>

*/

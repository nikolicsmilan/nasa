import React from "react";
import { menu } from "../../locales/localdata";
import earth720 from "../../assets/video/earth_1200p.mov";
//import { MyDataContext } from "../../context/GeneralContext";
import useWindowSize from "../../hooks/use-windowsize";
const Home = () => {
  const { width, height } = useWindowSize();
  return (
    <div className=" border-0  border-white w-full">
      <video
        src={earth720}
        className="background-video border-0 border-red-400"
        autoPlay
        loop
        muted
      ></video>

      <div className="flex  w-full relative text-xl z-30 border-0 border-lime-400 mt-[0px] ">
        <div className="lg:w-1/2 md:w-1/3 border-0 hidden md:flex items-center md:justify-end ">
          <div className="m-4 ">
            <div className="text-red-600 hidden  lg:block">lg</div>
            <div className="text-red-600 hidden md:block lg:hidden">md</div>
            <div className="text-red-600 sm:block md:hidden lg:hidden"></div>
          </div>
        </div>
        <div className=" flex flex-col border-0 md:m-0 py-0 md:py-0 text-center lg:w-1/2 md:w-3/4 border-orange-400 ">
          <div className="border-0 flex justify-end">
            <div className="border-0 border-lime-400 flex flex-col justify-end flex-wrap md:p-10 ">
              <h1 className="p-2 border-0 text-end md:text-3xl text-2xl md:text-end text-sky-400 opacity-100 uppercase font-bold">
                Asteroid impact warning system
              </h1>
              <p className="text-end p-2">
                "It's a small step for the developer, but a huge step against
                the fake news."
              </p>
            </div>
          </div>

          <div className="border-0 border-white  flex justify-end flex-wrap  md:mt-[90px] ">
            {menu.map((item) => (
              <div  id="" className=" customshadow3 cursor-pointer rounded-2xl relative flex-col m-3  w-40  lg:w-48 md:w-40 h-14 md:h-28 border-0 border-orange-400 ">
                <div
                
                  className="customshadow2 rounded-2xl  w-40 md:w-40  lg:w-48 h-full text-sky-400 shadow-2xl border-0 bg-sky-400 md:opacity-10 opacity-10 mt-[0px] z-40"
                ></div>

                <div
                
                  className="customshadow2 rounded-2xl text-2xl opacity-100 flex h-14 md:h-28
               border-purple-400  shadow-2xl items-center justify-center border-0 bg-dark-800 z-20  mt-[-55px]  md:mt-[-110px] font-bold"
                >
                  <h2 className="text-sky-400  opacity-100">{item.title}</h2>
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

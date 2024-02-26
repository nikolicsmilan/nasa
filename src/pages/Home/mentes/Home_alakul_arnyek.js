import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import ApiComponent from "../components/Home/ApiComponent";
import ApiComponent2 from "../components/Home/ApiComponent2";
import { getData } from "../components/Home/ApiComponent3";
import { menu } from "../data/localdata";
import earth720 from "../assets/video/earth_720p.mp4";
const Home = () => {
  const navigate = useNavigate();
  const [mydata, setMydata] = useState({});
  //proglameticly
  const navigateHandler = () => {
    navigate("galery");
  };
  /* useEffect(() => {
    getData().then(()=>{
      console.log("ez mi:  ",data)
      setMydata(data)
    });
  }, []);*/
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
        <div className="w-1/2 "></div>
        <div className=" flex flex-col border-0 w-1/2 border-lime-400 ">
          <div>
            <h1 className="text-center z-30 relative">
              Aszteorida becsapodás előrejelző rendszer
            </h1>
          </div>
          <div className="border-0   flex flex-wrap p-10 ">
            {menu.map((item) => (
              <div   className="relative   flex-col m-5  w-48 h-28 border-0 border-red-400 ">
                <div  id="customshadow2" className="w-48  h-full text-sky-400 shadow-2xl border-0 bg-sky-400 opacity-10 mt-[-10px] z-40">

                
                </div>
                <div
                id="customshadow2"
                  className=" opacity-100 flex h-28
               border-white  shadow-2xl items-center justify-center border-0 bg-dark-800 z-20 rounded  mt-[-110px]"
                >
                  <h2 className=" text-sky-400 opacity-100">{item.title}</h2>
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

#customshadow2 {
   
    box-shadow: 2px 23px 30px 13px rgba(17, 104, 175, 0.75);
    -webkit-box-shadow: 2px 23px 30px 12px rgba(17, 104, 175, 0.75);
    -moz-box-shadow: 2px 23px 30px 13px rgba(17, 104, 175, 0.75);
   
   
   }*/
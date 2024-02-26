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
          <div className="border-0 flex flex-wrap p-10 ">
            {menu.map((item) => (
              <div id="customshadow2"  className="relative   flex-col m-5  w-48 h-28 border-0 border-red-400 ">
                <div  id="customshadow2" className="w-48  h-full text-sky-400 shadow-2xl border-0 bg-sky-400 opacity-10 mt-[40px] z-40">

                  sss
                </div>
                <div
               
                  className="flex h-28
               border-sky-400  shadow-2xl items-center justify-center border-2 bg-dark-800 z-20 rounded-full"
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
//   <ApiComponent apiUrl="https://ssd-api.jpl.nasa.gov/sentry.api?des=2000%20SG344" />
//https://nasaapi5.apigateway.nasa-ab2f1.cloud.goog/sentry.api
//https://nasaapi5-ch6ado22.ew.gateway.dev >> ad választ
//borwserből már jó https://nasaapi6-ch6ado22.ew.gateway.dev/sentry.api
// <ApiComponent apiUrl="https://nasaapi6-ch6ado22.ew.gateway.dev/sentry.api" />

//<ApiComponent apiUrl="http://localhost:5000" />
//    <ApiComponent apiUrl="https://app-veturaft2q-uc.a.run.app/" /
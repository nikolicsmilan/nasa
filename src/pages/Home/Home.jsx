import { useEffect, useState, lazy, Suspense } from "react";
import { MyDataContext } from "../../context/DataContext";
import { SiNasa } from "react-icons/si";

import muhold from "../../../public/muhold_compress.mp4";

// Fluoreszkáló Pajzs lazy betöltése
//const PajzsSVG = lazy(() => import("/src/components/PajzsSVG"));
const StatusIndicator = lazy(() => import("./components/StatusIndicator"));
const NotificationButton = lazy(() =>
  import("./components/NotificationButton")
); 
const BrowserObjectButton = lazy(() =>
  import("./components/BrowserObjectButton")
); // Elhagytam a pontokat// Elhagytam a pontokat
const Home = () => {
  const { setSettings, settingsOpen } = MyDataContext();
  const [videoBetoltve, setVideoBetoltve] = useState(false);
  const [szin, setSzin] = useState("green"); // Kezdeti szín
  const szinek = ["green", "yellow", "orange", "red"];
  const [szinIndex, setSzinIndex] = useState(0);

  useEffect(() => {
    setSettings("Navigation");
    const timeoutId = setTimeout(() => {
      setVideoBetoltve(true);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [setSettings]);

  useEffect(() => {
    setSzin(szinek[szinIndex]);
  }, [szinIndex]);

  const valtoztasdASzin = () => {
    setSzinIndex((prevIndex) => (prevIndex + 1) % szinek.length);
  };

  return (
    <div
      className={`border-0  border-red-500 w-full z-40    ${
        settingsOpen ? "opacity-20 " : ""
      } `}
    >
      <div
        className={` flex flex-col md:flex-row border-0 border-red-400 w-full   
          z-50  relative   ${settingsOpen ? "opacity-20 " : ""} `}
      >
        <div
          className="flex flex-col lg:flex h-screen  w-full md:w-1/2
              justify-center items-center  
             z-50 border-0
             border-orange-500  lg:bg-gradien opacity-70  h-80"
        >
          <header className="lg:flex items-center justify-center px-6 relative  border-0 border-pink-400">
            <div className="flex flex-col justify-start items-center  relative px-2 ">
              <div className="border-0  m-0 p-0 ">
                <SiNasa className="text-9xl lg:text-9xl px-0 text-red-500" />
              </div>
              <p className="-mt-[20px] text-xl text-center text-primary font-bold">
              Aszteroida-veszélyjelző rendszer
              </p>
            </div>
          </header>
          <Suspense fallback={<div>Loading...</div>}>
            <StatusIndicator szin="#27ae60" />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <NotificationButton />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <BrowserObjectButton />
          </Suspense>
        </div>

        <div
          className="flex w-full  md:w-1/2 justify-center
             md:justify-center items-center border-0 border-blue-300  md:my-0  flex-col"
        >
          <div
            className="rounded-2xl border-0  border-red-400 opacity-80 
              w-48 flex justify-center items-center "
          ></div>
        </div>
      </div>
      {videoBetoltve && (
        <video
          src={muhold}
          className="background-video border-0 border-red-400  opacity-100"
          autoPlay
          loop
          muted
        />
      )}
    </div>
  );
};

export default Home;
// Earth Impact Monitoring 
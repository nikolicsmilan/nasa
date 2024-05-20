import React from "react";
import useWindowSize from "../../hooks/use-windowsize";
import { MyDataContext } from "../../context/DataContext";
import { useInfo } from "../../hooks/use-info";
const DataConsole = () => {
  const { width, height } = useWindowSize();
  const { toggle, settings, setSettings, settingsOpen, browserInfo,ipAddress,latitude,longitude } =
    MyDataContext();
  console.log(
    " browserInfo: ",
    browserInfo,
    "browserInfo.name",
    browserInfo?.browser.name
  );
  const {
    browser: { name: browserName },
    os: { name: osName, version: osVersion },
    device: { type: deviceType },
  } = browserInfo;

  return (
    <div className=" border-0 h-full border-sky-400 flex flex-col items-start justify-start p-5 ">
      <div className="border-0">Browser: {browserName}</div>
      <div>
        Operating System: {osName} {osVersion}
      </div>
      <div>
        Screen: {width} x {height} px
      </div>
      <div>
      Ip Address: {ipAddress || "no information"}
      </div>
      <div>
      GPS Cordinates: {latitude || "no information"}  {longitude || "no information"}
      </div>
    
    
    
    </div>
  );
};

export default DataConsole;

/* <div className="m-4 ">
      <div className="text-red-600 hidden  lg:block">lg</div>
      <div className="text-red-600 hidden md:block lg:hidden">md</div>
      <div className="text-red-600 block md:hidden lg:hidden">sm</div>
    </div> */

import React from 'react'
import useWindowSize from '../../hooks/use-windowsize'
import { MyDataContext } from '../../context/DataContext';
import { useInfo } from "../../hooks/use-info";
const DataConsole = () => {

  const { width, height } = useWindowSize();
  const { toggle, settings, setSettings, settingsOpen, browserInfo} = MyDataContext();
  console.log(" browserInfo: ", browserInfo,"browserInfo.name",browserInfo?.browser.name)
  const {
    browser: { name: browserName },
   
  } = browserInfo;

  return (
    <div className=" border-0 border-sky-400 flex items-center justify-center ">
    <div className="m-4 ">
      <div className="text-red-600 hidden  lg:block">lg</div>
      <div className="text-red-600 hidden md:block lg:hidden">md</div>
      <div className="text-red-600 block md:hidden lg:hidden">sm</div>
    </div>


    Kedves Titoktalan ügynök az ön feladata az lenne,
    hogy 6 hónapon belül találjon egy Junior Frontendfejlesztői állást
     saját projekteken szerzett 1-2 év tapasztalatal. <br></br><br></br>

    Mesterséges konkurencia: Mission Impossible <br></br><br></br>
    Mesterséges konkurencia: Az összes Junior Frontend fejlesztői állást felzabáltam. 
    <br></br><br></br>
    Titoktalan ügynök: Majd meglátjuk!
    

   Screen: {width}x{height} settings: {settings}
   browser : {browserName}
  </div>
  )
}

export default DataConsole
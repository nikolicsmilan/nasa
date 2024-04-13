import React from 'react'
import useWindowSize from '../../hooks/use-windowsize'
import { MyDataContext } from '../../context/GeneralContext';
const DataConsole = () => {
  const { width, height } = useWindowSize();
  const { toggle, settings, setSettings, settingsOpen } = MyDataContext();
  return (
    <div className=" border-0 border-sky-400 flex items-center justify-center ">
    <div className="m-4 ">
      <div className="text-red-600 hidden  lg:block">lg</div>
      <div className="text-red-600 hidden md:block lg:hidden">md</div>
      <div className="text-red-600 block md:hidden lg:hidden">sm</div>
    </div>
   Screen: {width}x{height} settings: {settings}
  </div>
  )
}

export default DataConsole
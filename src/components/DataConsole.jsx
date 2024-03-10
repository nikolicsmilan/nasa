import React from 'react'

const DataConsole = () => {
  return (
    <div className=" border-2 border-sky-400 flex items-center justify-center ">
    <div className="m-4 ">
      <div className="text-red-600 hidden  lg:block">lg</div>
      <div className="text-red-600 hidden md:block lg:hidden">md</div>
      <div className="text-red-600 block md:hidden lg:hidden">sm</div>
    </div>
  </div>
  )
}

export default DataConsole
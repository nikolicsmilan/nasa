import React from 'react'
import earth from "../../../assets/images/earthbg.png";
const SpaceLogo = () => {
  return (
    <div className="h-[200px] w-[300px] border-0 flex justify-center items-center relative">
    <div
      className="absolute top-0 left-0 w-16 h-16 bg-transparent border-t-[32px] border-l-[32px] border-600 transform -translate-x-1 -translate-y-2"
    ></div>
    <div
      className="absolute top-0 right-0 w-16 h-16 bg-transparent border-t-[32px] border-r-[32px] border-600 transform translate-x-1 -translate-y-2"
    ></div>
    <div
      className="absolute bottom-0 left-0 w-16 h-16 bg-transparent border-b-[32px] border-l-[32px] border-600 transform -translate-x-1 translate-y-2"
    ></div>
    <div
      className="absolute bottom-0 right-0 w-16 h-16 bg-transparent border-b-[32px] border-r-[32px] border-600 transform translate-x-1 translate-y-2"
    ></div>
    <img className="absolute h-[300px] w-[350px] object-cover" src={earth} alt="Earth" />
  </div>
  
  )
}

export default SpaceLogo
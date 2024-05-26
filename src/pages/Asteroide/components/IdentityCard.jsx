import React from "react";
import tocard from "../../../assets/images/tocard.JPG";
import logo from "../../../assets/images/earthbg7.png";

import qrcode from "../../../assets/images/qrcode.png";

const IdentityCard = () => {
  return (
    <div className="flex flex-col items-center gap-10 border-0 bg-mybackground w-96">
      <div
        className=" rounded inset-0 border-b-2 border-l-2 border-t-2 border-sky-600  bg-gradient text-dark relative flex flex-col
       items-start justify-between w-80 p-0  border-gray-300
        shadow-2xl  transform  skew-x-2 skew-y-0   rotate-z-12 rotate-12 perspective-1000 mt-[100px]"
      >
        <div className="flex flex-row justify-between w-full text-start p-0">
          <div className="px-2 text-sm">
            CNI - Central Natural Intelligence
            <p>| Hungary Department</p>
          </div>
          <div className="border-0">
            <img className="w-10 p-1" src={logo} alt="Logo" />
          </div>
        </div>
        <div className="flex flex-row mt-0 h-full">
          <div className="w-36 p-2 filter saturate h-full">
            <img
              src={tocard}
              className="rounded filter grayscale brightness-200 contrast-100 h-30"
              alt="Profile"
            />
          </div>
          <div className="text-sm text-start p-2">
            <p>Name: Milán Nikolics</p>
            <p>Title: Frontend Developer</p>
            <p>Mission: Find a job</p>
            <p>Trigger phrase: Deep down, I'm a senior</p>
            <p className="">Date: 2024/05/23</p>
            <img
              className="w-10 items-end relative left-[148px] top-[-35px]"
              src={qrcode}
              alt="QR Code"
            />
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default IdentityCard;

/*
      <div
        className="bg-gradient relative rounded my-[350px] text-base text-dark flex  flex-col w-80 h-40 border-0
     border-orange-500 shadow-xl"
      >
        <div className=" flex felx-row justify-between w-full border-0 text-start p-0">
          <div className="px-2 text-sm"> CNI - Cental Natural Intelligence 
          <p>| Hungary Department</p></div>
          <div className="border-0"><img className="w-10 p-1" src={logo}/></div>
        </div>

        <div className="flex flex-row mt-0 h-full">
          <div className="w-36  p-2 filter saturate h-full">
            <img
              src={tocard}
              className=" rounded filter grayscale brightness-200 contrast-100 h-30"
            />
          </div>
          <div className="text-sm text-start p-2  ">
            <p>Name: Milán Nikolics</p>
            <p>Title: Frontend Developer</p>
            <p>Mission: Find a job</p>
            <p>Trigger phrase: Deep down, I'm a senior</p>
            <p className="">Date: 2024/05/23</p>

            <img className="w-10 items-end relative left-[148px] top-[-35px]" src={qrcode}/>
            
           
          </div>
        </div>
      </div>
*/

//w-[400px]
//h-[60px] w-[100px]

/*
      <div className="h-[60px] w-[100px] border-0 flex justify-center border-600 relative ">
        <div
          className={`absolute top-0 left-0 w-8 h-8 bg-transparent border-t-8 border-l-8 border-600 transform -translate-x-1 -translate-y-2`}
        ></div>
        <div
          className={`absolute top-0 right-0 w-8 h-8 bg-transparent border-t-8 border-r-8 border-600 transform translate-x-1 -translate-y-2`}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-8 h-8 bg-transparent border-b-8 border-l-8 border-600 transform -translate-x-1 translate-y-2`}
        ></div>
        <div
          className={`absolute bottom-0 right-0 w-8 h-8 bg-transparent border-b-8 border-r-8 border-600 transform translate-x-1 translate-y-2`}
        ></div>
        <img className=" m-1 relative h-[60px]" src={earth} />
      </div>
      <div className="h-[200px] w-[300px] border-0 flex justify-center border-600 relative">
  <div
    className={`absolute top-0 left-0 w-16 h-16 bg-transparent border-t-16 border-l-16 border-600 transform -translate-x-2 -translate-y-4`}
  ></div>
  <div
    className={`absolute top-0 right-0 w-16 h-16 bg-transparent border-t-16 border-r-16 border-600 transform translate-x-2 -translate-y-4`}
  ></div>
  <div
    className={`absolute bottom-0 left-0 w-16 h-16 bg-transparent border-b-16 border-l-16 border-600 transform -translate-x-2 translate-y-4`}
  ></div>
  <div
    className={`absolute bottom-0 right-0 w-16 h-16 bg-transparent border-b-16 border-r-16 border-600 transform translate-x-2 translate-y-4`}
  ></div>
  <img className="m-1 relative h-[100px] w-[200px]" src={earth} />
</div>


<div className="h-[200px] w-[300px] border-0 flex justify-center border-600 relative">
  <div
    className={`absolute top-0 left-0 w-16 h-16 bg-transparent border-t-8 border-l-8 border-600 transform -translate-x-1 -translate-y-2`}
  ></div>
  <div
    className={`absolute top-0 right-0 w-16 h-16 bg-transparent border-t-8 border-r-8 border-600 transform translate-x-1 -translate-y-2`}
  ></div>
  <div
    className={`absolute bottom-0 left-0 w-16 h-16 bg-transparent border-b-8 border-l-8 border-600 transform -translate-x-1 translate-y-2`}
  ></div>
  <div
    className={`absolute bottom-0 right-0 w-16 h-16 bg-transparent border-b-8 border-r-8 border-600 transform translate-x-1 translate-y-2`}
  ></div>
  <img className="m-1 absolute h-[180px] w-[280px]" src={earth} alt="Earth" />
</div>




<div className="h-[200px] w-[300px] border-0 flex justify-center border-600  relative">
  <div
    className={`absolute top-0 left-0 w-16 h-16 bg-transparent border-t-8 border-l-8 border-600  transform -translate-x-1 -translate-y-2`}
  ></div>
  <div
    className={`absolute top-0 right-0 w-16 h-16 bg-transparent border-t-8 border-r-8 border-600  transform translate-x-1 -translate-y-2`}
  ></div>
  <div
    className={`absolute bottom-0 left-0 w-16 h-16 bg-transparent border-b-8 border-l-8 border-600  transform -translate-x-1 translate-y-2`}
  ></div>
  <div
    className={`absolute bottom-0 right-0 w-16 h-16 bg-transparent border-b-8 border-r-8 border-600  transform translate-x-1 translate-y-2`}
  ></div>
  <img className="m-1 absolute h-full w-full object-cover" src={earth} alt="Earth" />
</div>
*/

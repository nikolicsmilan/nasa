import React from "react";
import tocard from "../../../assets/images/tocard.JPG";
import logo from "../../../assets/images/earthbg7.png";
import qrcode from "../../../assets/images/qrcode.png";

const CardConsole1 = ({ rotateX, rotateY, rotateZ,origin,description }) => {
  return (
   
      <div
        style={{
          transform: `
            rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
              rotateZ(${rotateZ}deg)`,
              transformOrigin: origin
        }}
        className=" rounded inset-0 border-b-2 border-l-2 border-t-2
         border-600  bg-gradient lime:bg-gradient2
        text-dark relative flex flex-col
       items-start justify-between w-80 p-0  
        shadow-2xl  transform  skew-x-0 skew-y-0 
          perspective-1000 m-1 h-48"
      >
<p className="text-dark">  {description}</p>
   

      </div>
 
  );
};

export default CardConsole1;

/*  <p className="text-lime-950 font-bold">
              Palermo skála
             Nincs veszély
            </p> */
/*   
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
        </div> */
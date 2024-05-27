import React from "react";
import tocard from "../../../assets/images/tocard.JPG";
import logo from "../../../assets/images/earthbg7.png";
import qrcode from "../../../assets/images/qrcode.png";

const FilterConsole = ({ rotateX, rotateY, rotateZ,origin,description }) => {
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
        <h3>A konzol neve</h3>
<p className="text-dark">  {description}</p>
   

      </div>
 
  );
};

export default FilterConsole;





//FilterConsole
import React from "react";
import kitchen from "../../assets/icons/kitchen.png";
import sink from "../../assets/icons/sink.png";
import cabinet from "../../assets/icons/cabinet.png";
import chair from "../../assets/icons/chair.png";
const TableShadow = () => {
  return (
    <div
      id="customshadow"
      className=" shadow-2xl  border-2  lg:p-5 bg-white w-3/4 md:w-1/2 rounded-2xl relative z-10 mx-auto my-3 md:my-0 lg:my-0 lg:mt-[-80px]  "
    >
      <div className="flex justify-center flex-wrap ">
        <div className="p-2 m-2 flex flex-col items-center justify-center border-0 ">
          <img src={kitchen} alt="konyabútor" title="konyabútor" className="" />
          <p className="text-red-600  font-bold text-sm">Konyabútor</p>
        </div>

        <div className="p-2 m-2 flex flex-col items-center">
          <img src={sink} alt="mosogató " title="mosogató" className="" />
          <p className="text-red-600  font-bold text-sm">Fűrdőszobabútor</p>
        </div>

        <div className="p-2 m-2 flex flex-col items-center justify-center border-0 ">
          <img src={cabinet} alt="szekrény" title="szekrény" className="" />
          <p className="text-red-600  font-bold text-sm">Szekrény</p>
        </div>
        <div className="p-2 m-2 flex flex-col items-center">
          <img src={chair} alt="szék" title="szék" className="" />
          <p className="text-red-600  font-bold text-sm">Előszobabútor</p>
        </div>
      </div>
    </div>
  );
};

export default TableShadow;

import React from "react";
//import headingbackground from "../../assets/headingbackground.png"
import TableShadow from "./TableShadow";
const Heading = () => {
  return (
    <div className="h-screen lg:bg-cover  bg-no-repeat relative bg-image-small sm:bg-image-medium lg:bg-image-large">
      <div className="border-0  px-5 md:w-2/3 lg:w-2/3 w-64 md:p-10 lg:p-10  sm:px-10 sm:py-2">
        <h1 className="border-0 uppercase text-white lg:text-7xl md:text-3xl text-2xl py-10 md:mt-10 md:py-10 lg:my-10   lg:leading-normal">
          <span className="text-red-600 font-bold  block">Asztalos szakemberek</span>{" "}
          Nagyatádon és környékén
        </h1>
        <button className=" block lg:hidden px-5 py-2 bg-red-600 text-white uppercase font-bold rounded-full">
          időpontfoglalás
        </button>
      </div>
    <TableShadow/>
    </div>
  );
};

export default Heading;

//style={{ backgroundImage: `url(${headingbackground})` }}
//bg-cover bg-center
//sm:p-0 sm:m-0 sm:px-10 sm:py-2

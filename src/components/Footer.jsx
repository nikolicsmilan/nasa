import React from "react";
import linkdin from "../assets/icons/linkdin.png";
import facebook from "../assets/icons/facebook.png";
import instagram from "../assets/icons/instagram.png";

const Footer = () => {
  return (
    <div className=" flex flex-col md:flex-row border-0 h-80 mt-10 bg-black text-white">
      <div className=" flex items-center justify-center lg:justify-start border-0 border-white p-5 py-10 md:w-1/2 ">
        <h3 className="text-2xl uppercase md:text-3xl lg:text-5xl ">
          <span className="text-red-600 font-bold">Asztalosra</span> van szüksége?
        </h3>
        <p className="text-2xl md:text-3xl lg:text-5xl">+36204752460</p>
      </div>
      <div className="flex justify-center items-center md:w-1/2">
        <img
          src={linkdin}
          className="w-20  mr-4 cursor-pointer"
          alt="linkdin logo"
          title="linkdin logo"
        />
        <img
          src={facebook}
          className="w-20  mr-4 cursor-pointer"
          alt="facebook logo"
          title="facebook logo"
        />
        <img
          src={instagram}
          className="w-20  mr-4 cursor-pointer"
          alt="instagram logo"
          title="instagram logo"
        />
      </div>
    </div>
  );
};

export default Footer;

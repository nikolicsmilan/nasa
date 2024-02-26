import React from "react";
import furnitureintro from "../../assets/furniture_introduction.png";
import redline from "../../assets/redline.png";

const Introduction = () => {
  return (
    <div className="flex justify-center flex-wrap border-0 border-red-400 w-full px-10  mt-[-380px] md:mt-[-220px] lg:mt-[80px]">
      <div className="w-full  lg:w-96 lg:mx-10 border-0 border-sky-400 flex justify-center">
        <img
          src={furnitureintro}
          alt="konyha asztallal"
          title="konyha asztallal"
          className="w-96 h-96"
        />
      </div>
      <div className="w-full lg:w-96 p-2 border-0  border-sky-400 lg:mx-10 my-10 md:my-10 lg:my-0">
        <div className="flex flex-row w-full">
          <div className="mr-4">
            <img
              src={redline}
              alt="piros vonal alcím előtt"
              title="piros vonal alcím előtt"
              className="h-32 w-12 "
            />
          </div>
          <h2 className="font-bold uppercase text-xl md:text-2xl text-center lg:text-start"> Soproni és Márk asztalos szakemberek Nagyatádon és környékén</h2>
        </div>
        <div className="">
        <p className="p-2 my-2">
          A következőket vállalunk: konyhabútorok, fürdőszobabútorok készítése, beltéri,
          kültéri bútorok tervezése, összeszerelése, beépítése, javítása,
          fatermékek gyártása, nyilászárok készítése beszerelése, vasalatok
          felszerelése, cserélése, kertI kiüllők készítése, ács munkák és
          bármilyen fához kapcsolódó munka elvégzése.{" "}
        </p>
        </div>
      
      </div>
    </div>
  );
};

export default Introduction;

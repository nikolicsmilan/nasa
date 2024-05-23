import React from "react";
import tocard from "../../../assets/images/tocard.JPG";
import logo from "../../../assets/images/earthbg7.png";
import earth from "../../../assets/images/earthbg.png";
import qrcode from "../../../assets/images/qrcode.png";

const IdentityCard = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      d
      <div
        className="bg-gradient relative rounded mt-5 text-base text-dark flex  flex-col w-80 h-40 border-0
     border-orange-500 shadow-xl"
      >
        <div className=" flex felx-row justify-between w-full border-0 text-start p-1">
          <div className="px-2 text-sm"> CNI - Cental Natural Intelligence 
          <p>| Hungary Department</p></div>
          <div className="border-0"><img className="w-10" src={logo}/></div>
        </div>

        <div className="flex flex-row mt-0 h-full">
          <div className="w-32  p-2 filter saturate h-full">
            <img
              src={tocard}
              className=" rounded filter grayscale brightness-200 contrast-100 "
            />
          </div>
          <div className="text-sm text-start p-2 leading-snug">
            <p>Name: Milán Nikolics</p>
            <p>Title: Frontend Developer</p>
            <p>Mission: Find a job</p>
            <p>Trigger phrase: Deep down, I'm a senior</p>
            <p className="">Date: 2024/05/23</p>

            <img className="w-10 items-end relative left-[148px] top-[-25px]" src={qrcode}/>
            
           
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {/* Blur */}
        <figure className="w-40 h-40 overflow-hidden relative">
          <img
            src={tocard}
            alt="Blur Example"
            className="w-full h-full object-cover filter blur"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white text-center py-1">
            Blur
          </figcaption>
        </figure>
        {/* Brightness */}
        <figure className="w-40 h-40 overflow-hidden relative">
          <img
            src={tocard}
            alt="Brightness Example"
            className="w-full h-full object-cover filter brightness-50"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white text-center py-1">
            Brightness
          </figcaption>
        </figure>
        {/* Contrast */}
        <figure className="w-40 h-40 overflow-hidden relative">
          <img
            src={tocard}
            alt="Contrast Example"
            className="w-full h-full object-cover filter contrast-150"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white text-center py-1">
            Contrast
          </figcaption>
        </figure>
        {/* Drop-shadow */}
        <figure className="w-40 h-40 overflow-hidden relative">
          <img
            src={tocard}
            alt="Drop Shadow Example"
            className="w-full h-full object-cover filter drop-shadow-lg"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white text-center py-1">
            Drop Shadow
          </figcaption>
        </figure>
        {/* Grayscale */}
        <figure className="w-40 h-40 overflow-hidden relative">
          <img
            src={tocard}
            alt="Grayscale Example"
            className="w-full h-full object-cover filter grayscale"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white text-center py-1">
            Grayscale
          </figcaption>
        </figure>
        {/* Hue-rotate */}
        <figure className="w-40 h-40 overflow-hidden relative">
          <img
            src={tocard}
            alt="Hue Rotate Example"
            className="w-full h-full object-cover filter hue-rotate-90"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white text-center py-1">
            Hue Rotate
          </figcaption>
        </figure>
        {/* Invert */}
        <figure className="w-40 h-40 overflow-hidden relative">
          <img
            src={tocard}
            alt="Invert Example"
            className="w-full h-full object-cover filter invert"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white text-center py-1">
            Invert
          </figcaption>
        </figure>
        {/* Opacity */}
        <figure className="w-40 h-40 overflow-hidden relative">
          <img
            src={tocard}
            alt="Opacity Example"
            className="w-full h-full object-cover filter opacity-50"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white text-center py-1">
            Opacity
          </figcaption>
        </figure>
        {/* Saturate */}
        <figure className="w-40 h-40 overflow-hidden relative">
          <img
            src={tocard}
            alt="Saturate Example"
            className="w-full h-full object-cover filter saturate-200"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white text-center py-1">
            Saturate
          </figcaption>
        </figure>
        {/* Sepia */}
        <figure className="w-40 h-40 overflow-hidden relative">
          <img
            src={tocard}
            alt="Sepia Example"
            className="w-full h-full object-cover filter sepia"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white text-center py-1">
            Sepia
          </figcaption>
        </figure>

        {/* Brightness */}
        <figure className="w-40 h-40 overflow-hidden relative">
          <img
            src={tocard}
            alt="Brightness Example"
            className="w-full filter brightness-150"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white text-center py-1">
            Brightness
          </figcaption>
        </figure>
        {/* Grayscale */}
        <figure className="w-40 h-40 overflow-hidden relative">
          <img
            src={tocard}
            alt="Grayscale Example"
            className="w-full filter grayscale brightness-200 contrast-100"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white text-center py-1">
            ID
          </figcaption>
        </figure>
        {/* Contrast */}
        <figure className="w-40 h-40 overflow-hidden relative">
          <img
            src={tocard}
            alt="Contrast Example"
            className="w-full filter contrast-150"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white text-center py-1">
            Contrast
          </figcaption>
        </figure>
        {/* Blur */}
        <figure className="w-40 h-40 overflow-hidden relative">
          <img src={tocard} alt="Blur Example" className="w-full filter blur" />
          <figcaption className="absolute inset-x-0 bottom-0 bg-black bg-opacity-50 text-white text-center py-1">
            Blur
          </figcaption>
        </figure>
      </div>
      fdsfdsf




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



    </div>
  );
};

export default IdentityCard;

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

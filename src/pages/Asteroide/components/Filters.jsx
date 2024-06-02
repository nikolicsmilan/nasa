import React from "react";
import tocard from "../../../assets/images/tocard.JPG";
const Filters = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 mt-[500px]">
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
    </div>
  );
};

export default Filters;

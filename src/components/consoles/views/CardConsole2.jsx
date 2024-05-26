import React, { useState } from 'react';
import tocard from "../../../assets/images/tocard.JPG";
import logo from "../../../assets/images/earthbg7.png";
import qrcode from "../../../assets/images/qrcode.png";
const CardConsole2 = () => {
  const [rotateX, setRotateX] = useState(12);
  const [rotateY, setRotateY] = useState(12);
  const [rotateZ, setRotateZ] = useState(2);

  return (
    <div className="flex flex-col items-center gap-10 border-2 border-pink-400 relative w-96 mt-10">
      <div
        className={`rounded inset-0 border-b-2 border-l-2 border-t-2
         border-sky-600 bg-gradient-to-r from-gray-100 via-gray-200
          to-gray-300
        text-dark relative flex flex-col
        items-start justify-between w-80 p-0
         border-gray-300
        shadow-2xl transform perspective-1000 mt-10`}
      
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
            <p>Date: 2024/05/23</p>
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

export default CardConsole2;
/*
      <div className="flex flex-col gap-4">
        <label className="flex flex-col">
          <span className="mb-1">Rotate X:</span>
          <input
            type="range"
            min="-180"
            max="180"
            value={rotateX}
            onChange={(e) => setRotateX(e.target.value)}
            className="w-full"
          />
        </label>
        <label className="flex flex-col">
          <span className="mb-1">Rotate Y:</span>
          <input
            type="range"
            min="-180"
            max="180"
            value={rotateY}
            onChange={(e) => setRotateY(e.target.value)}
            className="w-full"
          />
        </label>
        <label className="flex flex-col">
          <span className="mb-1">Rotate Z:</span>
          <input
            type="range"
            min="-180"
            max="180"
            value={rotateZ}
            onChange={(e) => setRotateZ(e.target.value)}
            className="w-full"
          />
        </label>
      </div>
*/
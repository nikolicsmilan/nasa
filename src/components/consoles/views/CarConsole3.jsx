import React from 'react';

const CardConsole3 = ({ rotateY }) => {
  return (
    <div className="rounded inset-0 border-b-2 border-l-2 border-t-2
    border-sky-600  bg-gradient 
   text-dark relative flex flex-col
  items-start justify-between w-96 h-48 p-0  border-gray-300
   shadow-2xl  transform  skew-x-0 skew-y-0 
    rotate-12 perspective-1000 mt-[100px]"   style={{
        transform: `rotateY(${rotateY}deg)`,
        transformOrigin: 'left center', // A bal szél lesz a forgási pont
        transition: 'transform 0.3s',
      }}>
      <div
        className=" "
      
      >
        {/* Kártya tartalma */}
        <div className="p-4">
          <h2 className="text-lg font-bold">Kártya Tartalom</h2>
          <p>Ez egy kártya, amelynek bal széle rögzített, és elforgatva van.</p>
        </div>
      </div>
    </div>
  );
};

export default CardConsole3;



//CarConsole3
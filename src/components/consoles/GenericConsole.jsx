import React from "react";

const GenericConsole = ({ data, handleClick, placeholder }) => {
  return (
    <div className="border-0 p-1 w-full h-90">
      <div className="p-5 lg:p-2 w-full flex lg:items-start  flex-wrap justify-between overflow-y-auto h-full lg:h-96">
        {data?.map((item) => (
          <div
            key={item.title}
            onClick={() => handleClick(item)}
            className={`shadowactive customshadow3 cursor-pointer rounded relative flex-col my-1 w-40 lg:w-48 md:w-40 h-14 border-0 m-0 border-lime-400 text-base`}
          >
            <div
              className={`bg-primary customshadow2 lime:boxShadow rounded w-40 md:w-40 lg:w-48 h-full text-white shadow-2xl border-0 md:opacity-10 opacity-10 mt-[0px] z-40`}
            ></div>
            <div className="customshadow2 rounded opacity-100 flex h-14 border-purple-400 shadow-2xl items-center border-0 bg-dark-800 z-20 mt-[-55px]">
              <p className="mx-2 text-primary">{<item.icon />}</p>
              <h2 className="text-white opacity-100">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default GenericConsole;

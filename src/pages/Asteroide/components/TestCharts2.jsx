import React from "react";
import RechartsExample from "../components/RechartsExample";
import RechartsExample2 from "../components/RechartExample2";
import SquareminConsole from "../../../components/consoles/views/SquareminConsole"
const TestCharts2 = () => {
  return (
    <div
      className={` flex flex-row flex-wrap border-0 gap-8 md:m-0 
    py-0 md:py-0 text-center lg:w-full  border-orange-400 mt-[30px] `}
    >
      <div
        // Asszumáltam, hogy van egy id az item objektumban
        className={`shadowactive customshadow3 cursor-pointer 
      rounded-2xl 
      relative  flex-col m-0 w-full lg:w-96  h-48 
      border-2 border-600`}
      >
        <div
          className={` bg-primary customshadow2 rounded-2xl
     w-full lg:w-96  h-full shadow-2xl border-0
          opacity-10 mt-[0px] z-40`}
        ></div>

        <div
          className="customshadow2 rounded-2xl text-2xl opacity-100
       flex h-48 border-purple-400 shadow-2xl 
       items-center justify-center border-0 bg-dark-800 
       z-20 mt-[-190px] font-bold"
        >
          <RechartsExample />
        </div>
      </div>

      <div
        // Asszumáltam, hogy van egy id az item objektumban
        className={`shadowactive customshadow3 cursor-pointer 
      rounded-2xl 
      relative  flex-col m-0 w-full lg:w-96  h-48 
      border-2 border-600`}
      >
        <div
          className={` bg-primary customshadow2 rounded-2xl
     w-full lg:w-96  h-full shadow-2xl border-0
          opacity-10 mt-[0px] z-40`}
        ></div>
      </div>
      <SquareminConsole title="Torino skkála"/> 
      <div
        //key={item.id} // Asszumáltam, hogy van egy id az item objektumban
        className={`shadowactive customshadow3 cursor-pointer 
            rounded-2xl 
            relative flex-col m-3 w-96  h-48 
            border-0 border-orange-400`}
      >
        <div
          className={` bg-primary customshadow2 rounded-2xl
           w-96 h-full shadow-2xl border-0
                opacity-10 mt-[0px] z-40`}
        ></div>

        <div
          className="customshadow2 rounded-2xl text-2xl opacity-100
             flex h-48  border-purple-400 shadow-2xl 
             items-center justify-center border-0 bg-dark-800 
             z-20 mt-[-190px] font-bold"
        >
          <p className={`text-primary mx-2 transform rotate-90 text-3xl`}> </p>
          <h2 className="text-red-600 opacity-100 font-bold text-3xl uppercase">
            Console
          </h2>
        </div>
      </div>
      <div
        //key={item.id} // Asszumáltam, hogy van egy id az item objektumban
        className={`shadowactive customshadow6 cursor-pointer 
            rounded-2xl 
            relative flex-col m-3 w-96  h-48 
            border-0 border-orange-400`}
      >
        <div
          className={` bg-primary customshadow2 rounded-2xl
           w-96 h-full shadow-2xl border-0
                opacity-10 mt-[0px] z-40`}
        ></div>

        <div
          className="customshadow2 rounded-2xl text-2xl opacity-100
             flex h-48  border-purple-400 shadow-2xl 
             items-center justify-center border-0 bg-dark-800 
             z-20 mt-[-190px] font-bold"
        >
          <p className={`text-primary mx-2 transform rotate-90 text-3xl`}> </p>
          <h2 className="text-red-600 opacity-100 font-bold text-3xl uppercase">
            Console2
          </h2>
        </div>
      </div>

      <div
        //key={item.id} // Asszumáltam, hogy van egy id az item objektumban
        className={`shadowactive customshadow6 cursor-pointer 
            rounded-2xl 
            relative flex-col m-3 w-96  h-48 
            border-t-2 border-l-4 border-r-2 border-black`}
      >
        <div
          className={` bg-primary customshadow2 rounded-2xl
           w-96 h-full shadow-2xl border-0
                opacity-10 mt-[0px] z-40`}
        ></div>

        <div
          className="customshadow2 rounded-2xl text-2xl opacity-100
             flex h-48  border-purple-400 shadow-2xl 
             items-center justify-center border-0 bg-dark-800 
             z-20 mt-[-190px] font-bold"
        >
          <p className={`text-primary mx-2 transform rotate-90 text-3xl`}> </p>
          <h2 className="text-red-600 opacity-100 font-bold text-3xl uppercase">
            Console3
          </h2>
        </div>
      </div>

     
    
    </div>
  );
};

export default TestCharts2;
/*
   <div className="my-3">
      <RechartsExample2 />
    </div>
    <div className="my-3">
      <RechartsExample />
    </div>

         <div
        className="customshadow2 rounded-2xl text-2xl opacity-100
       flex h-48 border-purple-400 shadow-2xl 
       items-center justify-center border-0 bg-dark-800 
       z-20 mt-[-190px] font-bold"
      >
        <RechartsExample2 />
      </div>
*/

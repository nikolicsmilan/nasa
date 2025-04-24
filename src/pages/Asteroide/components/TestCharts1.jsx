import RechartsExample from "../components/RechartsExample";
import RechartsExample2 from "../components/RechartExample2";
const TestCharts1 = () => {
  return (
    <div
    className={` flex flex-col flex-wrap border-2 md:m-0 
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
    xx
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
        <RechartsExample2 />
      </div>
    </div>
    xx
    <div className="my-3">
      <RechartsExample2 />
    </div>
    <div className="my-3">
      <RechartsExample />
    </div>
  </div>
  )
}

export default TestCharts1
import React from "react";
import SquareminConsole from "../../../components/consoles/views/SquareminConsole";

const currentYear = new Date().getFullYear();
const dummydata = [
  { title: "torino scale", value: 0 },
  { title: "palermo scale", value: 0 },
  { title: "sum of object", value: 0 },
  { title: "earliest impact", value: currentYear + 100 },
];
const GeneralDashboard = () => {
  return (
    <div className="flex flex-col w-full border-0">
      <div className="text-950 text-xl font-bold uppercase text-center w-full border-0 my-2 bg-gradient">
        <h1>Now only Dummy Data!!!</h1>
      </div>


      <div className="flex ">
        {dummydata.map((item) => (
          <div>
            <SquareminConsole title={item.title} value={item.value} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralDashboard;

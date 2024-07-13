import React,{useState} from "react";
import SquareminConsole from "../../../components/consoles/views/SquareminConsole";
import { nasa } from "../../../locales/nasaapi";
const currentYear = new Date().getFullYear();
const dummydata = [
  { title: "torino scale", value: 0 },
  { title: "palermo scale", value: 0 },
 // { title: "sum of object", value: 0 },
  { title: "earliestimpact", value: currentYear + 100 },
];
const GeneralDashboard = ({filteredData}) => {
  const [sumObject, setSumObject] = useState(nasa);

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
        <div>
        <SquareminConsole title="sum of object" value={sumObject.count} />
        </div>
      </div>

      
    </div>
  );
};

export default GeneralDashboard;

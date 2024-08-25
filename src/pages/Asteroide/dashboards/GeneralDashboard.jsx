import React, { useState } from "react";
import SquareminConsole from "../../../components/consoles/views/SquareminConsole";
import { nasa } from "../../../locales/nasaapi";
import GlowyButton from "../../../components/buttons/GlowyButton";
import GlowButton2 from "../../../components/buttons/GlowButton2 ";
import GlowyButton3 from "../../../components/buttons/GlowyButton3";
import GlowyButton4 from "../../../components/buttons/GlowyButton4";
import GlowyButton5 from "../../../components/buttons/GlowyButton5";
import { MyConsoleContext } from "../../../context/ConsoleContext";
const currentYear = new Date().getFullYear();
const dummydata = [
  { title: "torino scale", value: 0 },
  { title: "palermo scale", value: 0 },
  // { title: "sum of object", value: 0 },
  { title: "earliestimpact", value: currentYear + 100 },
];
const GeneralDashboard = ({ filteredData }) => {
  const [sumObject, setSumObject] = useState(nasa);
  const { mobiletoggle } = MyConsoleContext();
  const tomb = [1, 2, 3,];
  return (
    <div
      className={`  flex flex-col w-full border-0 h-full justify-start ${
        mobiletoggle ? "opacity-50" : ""
      }`}
    >
      <div className="flex justify-center flex-wrap border-0 border-primary  w-full p-1">
        {tomb.map((item) => (
          <div className=" glowy-button-6  border-b-4 border-t-2 border-r-4 border-l-2
           rounded-2xl border-black flex justify-start flex-wrap shadow-2xl w-60 h-60">
            <div className=" w-full">
              {" "}
              <h1 className="my-1 text-center text-primary text-lg">
                Main data
              </h1>
            </div>
            <div className="border-0 w-full flex flex-wrap justify-center ">
              {dummydata.map((item) => (
                <div>
                  <SquareminConsole title={item.title} value={item.value} />
                </div>
              ))}
              <div>
                <SquareminConsole
                  title="sum of object"
                  value={sumObject.count}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default GeneralDashboard;

/*
import React, { useState } from "react";
import SquareminConsole from "../../../components/consoles/views/SquareminConsole";
import { nasa } from "../../../locales/nasaapi";
import GlowyButton from "../../../components/buttons/GlowyButton";
import GlowButton2 from "../../../components/buttons/GlowButton2 ";
import GlowyButton3 from "../../../components/buttons/GlowyButton3";
import GlowyButton4 from "../../../components/buttons/GlowyButton4";
import GlowyButton5 from "../../../components/buttons/GlowyButton5";
import { MyConsoleContext } from "../../../context/ConsoleContext";
const currentYear = new Date().getFullYear();
const dummydata = [
  { title: "torino scale", value: 0 },
  { title: "palermo scale", value: 0 },
  // { title: "sum of object", value: 0 },
  { title: "earliestimpact", value: currentYear + 100 },
];
const GeneralDashboard = ({ filteredData }) => {
  const [sumObject, setSumObject] = useState(nasa);
  const { mobiletoggle } = MyConsoleContext();
  const tomb = [1, 2, 3,];
  return (
    <div
      className={`  flex flex-col w-full border-0 h-full justify-start ${
        mobiletoggle ? "opacity-50" : ""
      }`}
    >
      <div className="flex justify-center flex-wrap border-2 border-primary  w-full p-1">
        {tomb.map((item) => (
          <div className=" glowy-button-6  border-b-4 border-t-2 border-r-4 border-l-2
           rounded-2xl border-black flex justify-start flex-wrap shadow-2xl w-96">
            <div className=" w-full">
              {" "}
              <h1 className="my-1 text-center text-primary text-lg">
                Main data
              </h1>
            </div>
            <div className="border-0 w-full flex flex-wrap ">
              {dummydata.map((item) => (
                <div>
                  <SquareminConsole title={item.title} value={item.value} />
                </div>
              ))}
              <div>
                <SquareminConsole
                  title="sum of object"
                  value={sumObject.count}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default GeneralDashboard;
*/

/*

     <div className=" glowy-button-6  border-b-4 border-t-2 border-r-4 border-l-2 rounded-2xl border-black flex justify-start flex-wrap shadow-2xl w-96">
          <div className=" w-full">
            {" "}
            <h1 className="my-5 text-center text-primary text-lg">Main data</h1>
          </div>
          <div className="border-0 w-full flex flex-wrap ">
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
*/
/*
<div className="hidden lg:block ">
<GlowyButton>GlowyButton1</GlowyButton>
<GlowButton2>GlowyButton2</GlowButton2>
<GlowyButton3>GlowyButton3</GlowyButton3>
<GlowyButton4>GlowyButton4</GlowyButton4>
<GlowyButton5>GlowyButton5</GlowyButton5>

</div>*/
//<button className="glow-button">Glowing Button</button>

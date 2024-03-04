import React from "react";
import { MyDataContext } from "../../context/GeneralContext";
import { settingshome } from "../../locales/localdata";
const SettingsBar = () => {
  const { settings, setSettings } = MyDataContext();
  return (
    <div className="flex flex-col    border-0 flex-grow px-5">
      {settingshome.map((item) => (
        <div
        onClick={()=>{setSettings(item?.title)}}
          id=""
          key={item?.title}
          className="color-gradient-box-menu flex items-center text-dark 
     border-0 border-red-400  my-2 rounded h-14"
        >
          <p className="m-2 "> {<item.icon />}</p>
          <p className="">{item?.title}</p>
        </div>
      ))}
    </div>
  );
};

export default SettingsBar;

import { MyDataContext } from "../../context/DataContext";
import { MyAudioContext } from "../../context/AudioContext";

//SETTINGSBAR LOOK
const SettingsBar = ({ menupoint }) => {
  const { setSettings } = MyDataContext();
  const { playSoundClick } = MyAudioContext();

  return (
    <div
      className="p-0 lg:p-3 w-full flex items-center justify-start
    flex-wrap  overflow-y-auto  lg:h-96 border-0 border-primary  "
    >
      {menupoint?.map((item) => (
        <div
        key={item?.title}
          onClick={() => {
            setSettings(item?.title);
            playSoundClick();
          }}
          className={`flex flex-col  items-center justify-center text-2xl glowy-button-5
               group relative border-0   rounded m-2 hover:bg-600 
            text-primary cursor-pointer  h-16 w-16 lg:w-20`}
        >
          <div className="pt-2">{<item.icon />}</div>
          <div
            className="  
            group-hover:block  text-white text-sm rounded p-1 z-50"
          >
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SettingsBar;
/*
 onClick={() => {
            setSettings(item?.title);
            playSoundClick()
          }}
*/
//#38bdf8
//bg-${choosenStyle}-400

import { MyDataContext } from "../../context/DataContext";


//SETTINGSBAR LOOK
const SettingsBar = ({ menupoint }) => {
  const { setSettings, playSoundClick } = MyDataContext();

  return (
    <div className="p-0 lg:p-3 w-full flex items-center justify-start flex-wrap overflow-y-auto lg:h-96 border-0 border-primary">
      {menupoint?.map((item) => (
        <div
          key={item?.title}
          onClick={() => {
            setSettings(item?.title);
            playSoundClick();
          }}
          // --- OSZTÁLY MÓDOSÍTVA ---
          className={`flex flex-col items-center justify-center text-2xl
                     group relative border border-transparent rounded-lg m-2 hover:bg-primary/20 hover:shadow-md // Alap + hover stílus
                     text-primary cursor-pointer h-16 w-16 lg:w-20 transition-colors`}
          // A glowy-button-5 eltávolítva, helyette egyszerűbb hover
        >
          <div className="pt-2">{item.icon && <item.icon />}</div>
          <div className="group-hover:block text-white text-sm rounded p-1 z-50">
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

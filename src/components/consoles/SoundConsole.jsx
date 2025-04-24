import { MyDataContext } from "../../context/DataContext";
import { sounds } from "../../locales/localdata";
import { useSave } from "../../hooks/use-saveuser";
import GenericConsole from "./GenericConsole";

const SoundConsole = () => {
  const { playSoundClick } = MyDataContext();
  const { saveUser } = useSave();

  const handleClick = (item) => {
    saveUser("sound", item?.title);
    playSoundClick();
  };
  return (
    <GenericConsole
      data={sounds}
      handleClick={handleClick}
      placeholder="ITT VAN VALAMI"
    />
  );
};

export default SoundConsole;




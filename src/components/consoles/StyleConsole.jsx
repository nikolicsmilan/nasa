import { useSave } from "../../hooks/use-saveuser";
import { MyDataContext } from "../../context/DataContext";
import { styles } from "../../locales/localdata";
import GenericConsole from "./GenericConsole";

const StyleConsole = () => {
  const { saveUser } = useSave();
  const { setChoosenStyle, users,playSoundClick } = MyDataContext();

  const handleClick = (item) => {
    saveUser("style", item?.title);
    setChoosenStyle(item?.title);
    playSoundClick();
  };

  return (
    <GenericConsole
      active={users.style}
      data={styles}
      handleClick={handleClick}
      placeholder="ITT VAN VALAMI"
    />
  );
};

export default StyleConsole;

import React from "react";
import { useSave } from "../../hooks/use-saveuser";
import { MyAudioContext } from "../../context/AudioContext";
import { MyDataContext } from "../../context/DataContext";
import { styles } from "../../locales/localdata";
import GenericConsole from "./GenericConsole";

const StyleConsole = () => {
  const { saveUser } = useSave();
  const { playSoundClick } = MyAudioContext();
  const { setChoosenStyle, users } = MyDataContext();

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

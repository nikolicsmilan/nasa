import React from "react";
import { MyAudioContext } from "../../context/AudioContext";
import { sounds } from "../../locales/localdata";
import { useSave } from "../../hooks/use-saveuser";
import GenericConsole from "./GenericConsole";

const SoundConsole = () => {
  const { playSoundClick } = MyAudioContext();
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




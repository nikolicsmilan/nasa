import React from 'react';
import { languages } from "../../locales/localdata";
import { useSave } from "../../hooks/use-saveuser";
import GenericConsole from './GenericConsole';
const LanguageConsole = () => {
  const { saveUser } = useSave();
  const handleClick = (item) => {
    saveUser("sound", item?.title);
    playSoundClick();
  };
  return (
    <GenericConsole
    data={languages}
    handleClick={handleClick}
    placeholder="ITT VAN VALAMI"
  />
  )
}

export default LanguageConsole
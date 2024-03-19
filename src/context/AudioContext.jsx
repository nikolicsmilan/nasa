import { useContext, createContext, useState, useEffect } from "react";
import clicksound from "../assets/sound/click.mp3";

const AudioContext = createContext();

export const AudioContextProvider = ({ children }) => {
  const [sound, setSound] = useState({});
  const playSoundClick = () => {
    if (sound && sound.click) {
      sound.click.currentTime = 0;
      sound.click.volume = 0.2;
      sound.click.play();
    }
  };
  useEffect(() => {
    const loadHangok = async () => {
      try {
        const click = new Audio(clicksound);

        setSound({
          click,
          //hang2,
        });
      } catch (error) {
        console.error("Hiba a hangfájlok betöltésekor", error);
      }
    };

    loadHangok();

    // A cleanup függvény, ha szükséges
    return () => {
      // Cleanup, ha szükséges
    };
  }, []);
  return (
    <AudioContext.Provider
      value={{
        sound,playSoundClick
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const MyAudioContext = () => {
  return useContext(AudioContext);
};

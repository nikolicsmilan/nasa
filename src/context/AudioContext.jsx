import { useContext, createContext, useState, useEffect } from "react";

const AudioContext = createContext();

export const AudioContextProvider = ({ children }) => {
  const [sound, setSound] = useState({});
  const [hoze, setHoze] = useState("izé");

  useEffect(() => {
    const loadHangok = async () => {
      try {
        //const click = new Audio("../../assets/sound/click.mp3");
        const click = new Audio("/src/assets/sound/click.mp3");
        //const hang2 = new Audio('/path/to/hang2.mp3');

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
        sound,
        hoze,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export const MyAudioContext = () => {
  return useContext(AudioContext);
};

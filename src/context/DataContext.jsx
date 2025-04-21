import { useContext, createContext, useState, useEffect } from "react";
import { useSave } from "../hooks/use-saveuser";
import { useInfo } from "../hooks/use-info";
import UAParser from "ua-parser-js";
import clicksound from "../assets/sound/click.mp3";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [windowSize, setWindowSize] = useState({
    //  width: undefined,
    // height: undefined,
    width: window.innerWidth || 800, // Provide a default value like 800
    height: window.innerHeight || 600, // Provide a default value like 600
  });
  const [toggle, setToggle] = useState(true);
  const [subscribeToggle, setSubscribeToggle] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settings, setSettings] = useState("Menu");
  const [users, setUsers] = useState({
    style: "sky",
    sound: "on",
    language: "en",
  });
  const [choosenStyle, setChoosenStyle] = useState("sky");
  const { updateBrowserInfo, updateIpAddress, updateGPS } = useInfo();
  const [browserInfo, setBrowserInfo] = useState(null);
  const [ipAddress, setIPAddress] = useState("");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [sound, setSound] = useState({});
  const playSoundClick = () => {
    // Most már közvetlenül hozzáfér a 'sound' state-hez és a 'users' state-hez
    if (sound && sound.click && users?.sound === "on") {
      console.log("DataContext: hangot ad");
      sound.click.currentTime = 0;
      sound.click.volume = 0.2;
      sound.click.play();
    }
  }
  useEffect(() => {
    // Parse the user agent string to get browser and device information
    /*   const parser = new UAParser();
    const userAgent = navigator.userAgent;
    const parsedInfo = parser.setUA(userAgent).getResult();
    console.log("parsedinfo: ",parsedInfo );
    setBrowserInfo(parsedInfo);*/
    updateBrowserInfo(setBrowserInfo);
    updateIpAddress(setIPAddress);
    updateGPS(setLatitude, setLongitude);
  }, []);

// AudioContext.jsx - EREDETI
useEffect(() => {
  const loadHangok = async () => {
    try {
      // Létrehozza az Audio objektumot
      const click = new Audio(clicksound);
      // Beállítja a 'sound' state-et az Audio objektummal
      setSound({
        click,
      });
    } catch (error) {
      console.error("Hiba a hangfájlok betöltésekor", error);
    }
  };

  loadHangok(); // Meghívja a betöltő függvényt

  // ... (cleanup) ...
}, []);
  return (
    <DataContext.Provider
      value={{
        windowSize,
        setWindowSize,
        toggle,
        setToggle,
        settingsOpen,
        setSettingsOpen,
        settings,
        setSettings,
        users,
        setUsers,
        choosenStyle,
        setChoosenStyle,
        browserInfo,
        setBrowserInfo,
        ipAddress,
        setIPAddress,
        latitude,
        longitude,
        subscribeToggle,
        setSubscribeToggle,
        playSoundClick
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const MyDataContext = () => {
  return useContext(DataContext);
};

/*const {
  browser: { name: browserName },
 
} = browserInfo;*/
/*
const { browser: { name: browserName } = {} } = browserInfo;

// Ez egy üres karakterláncot ad a browserName-nek, ha a browserInfo null vagy üres



/*
  useEffect(()=>{
    changeStyle(users.style)
  },[users?.style])*/

// KELLENE EGY OLYAN HOOK AMI AUTOMATIKUSAN LEFUT
// HA A USERS MEGVÁLTOZIK ÉS BEÁLÍT PARAMÉTEREKET AMIK AZTÁN
// MEGJELENEK A KÜLÖNBÖZŐ KOMPONESEKBEN
//STYLE >> bg-sky-400

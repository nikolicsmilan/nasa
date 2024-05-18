import { useContext, createContext, useState, useEffect } from "react";
import { useSave } from "../hooks/use-saveuser";
import UAParser from "ua-parser-js";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [toggle, setToggle] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settings, setSettings] = useState("Navigation");
  const [users, setUsers] = useState({ style: "sky", sound: "on" });
  const [choosenStyle, setChoosenStyle] = useState("sky");
  const [browserInfo, setBrowserInfo] = useState(null);

console.log("Ez a browserInfo: ",browserInfo)
/*const {
  browser: { name: browserName },
 
} = browserInfo;*/
/*
const { browser: { name: browserName } = {} } = browserInfo;

// Ez egy üres karakterláncot ad a browserName-nek, ha a browserInfo null vagy üres
console.log(`Böngésző neve: ${browserName}`);*/
//console.log("Ez a browserName: ",browserName)

  /*
  useEffect(()=>{
    changeStyle(users.style)
  },[users?.style])*/

  // KELLENE EGY OLYAN HOOK AMI AUTOMATIKUSAN LEFUT
  // HA A USERS MEGVÁLTOZIK ÉS BEÁLÍT PARAMÉTEREKET AMIK AZTÁN
  // MEGJELENEK A KÜLÖNBÖZŐ KOMPONESEKBEN
  //STYLE >> bg-sky-400


  useEffect(() => {
    // Parse the user agent string to get browser and device information
    const parser = new UAParser();
    const userAgent = navigator.userAgent;
    const parsedInfo = parser.setUA(userAgent).getResult();
    console.log("parsedinfo: ",parsedInfo );
    setBrowserInfo(parsedInfo);
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const MyDataContext = () => {
  return useContext(DataContext);
};

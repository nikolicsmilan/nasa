import { useContext, createContext, useState } from "react";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [toggle, setToggle] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settings, setSettings] = useState("Navigation");
  const [users, setUsers] = useState({});


  // KELLENE EGY OLYAN HOOK AMI AUTOMATIKUSAN LEFUT
  // HA A USERS MEGVÁLTOZIK ÉS BEÁLÍT PARAMÉTEREKET AMIK AZTÁN
  // MEGJELENEK A KÜLÖNBÖZŐ KOMPONESEKBEN
  //STYLE >> bg-sky-400
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const MyDataContext = () => {
  return useContext(DataContext);
};

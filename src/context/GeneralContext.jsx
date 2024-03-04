import { useContext, createContext, useState } from "react";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [toggle, setToggle] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settings, setSettings] = useState("");
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const MyDataContext = () => {
  return useContext(DataContext);
};

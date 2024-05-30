import { useContext, createContext, useState, useEffect } from "react";
import { useSave } from "../hooks/use-saveuser";
import { useInfo } from "../hooks/use-info";
import { leftasideconsolesource } from "../locales/localdata";
const ConsoleContext = createContext();

export const ConsoleContextProvider = ({ children }) => {
  const [leftasideconsole, setLeftasideconsole] = useState(leftasideconsolesource);

  useEffect(() => {}, []);
  return (
    <ConsoleContext.Provider
      value={{
        leftasideconsole,
        setLeftasideconsole,
      }}
    >
      {children}
    </ConsoleContext.Provider>
  );
};

export const MyConsoleContext = () => {
  return useContext(ConsoleContext);
};

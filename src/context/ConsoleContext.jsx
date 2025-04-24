import { useContext, createContext, useState } from "react";

const ConsoleContext = createContext();

export const ConsoleContextProvider = ({ children }) => {
  const [mobiletoggle, setMobileToggle] = useState(false);
  const [actualMainConsole, setActualMainConsole] = useState("Year");
  const [acitveMainConsole, setActiveMainConsole] = useState(false);
  const [animationVariants, setAnimationVariants] = useState({});
  const [info, setInfo] = useState("");

  return (
    <ConsoleContext.Provider
      value={{
        actualMainConsole,
        setActualMainConsole,
        info,
        setInfo,
        acitveMainConsole,
        setActiveMainConsole,
        animationVariants,
        setAnimationVariants,
        mobiletoggle,
        setMobileToggle,
      }}
    >
      {children}
    </ConsoleContext.Provider>
  );
};

export const MyConsoleContext = () => {
  return useContext(ConsoleContext);
};

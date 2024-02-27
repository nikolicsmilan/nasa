import { useContext, createContext, useState } from "react";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [toggle, setToggle] = useState(false);

  return (
    <DataContext.Provider
      value={{
        windowSize,
        setWindowSize,
        toggle,
        setToggle,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const MyDataContext = () => {
  return useContext(DataContext);
};

import { useContext, createContext, useState } from "react";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
      });

  return (
    <DataContext.Provider
      value={{
        windowSize,
        setWindowSize
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const MyDataContext = () => {
  return useContext(DataContext);
};

import { useState, useEffect } from "react";
import { MyDataContext } from "../context/DataContext";

const useWindowSize = () => {
    const { windowSize,setWindowSize} = MyDataContext();
  

  useEffect(() => {
   
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      return window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
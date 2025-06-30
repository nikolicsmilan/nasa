import { useState, useEffect } from "react";
import { MyDataContext } from "../context/DataContext";

const useWindowSize = () => {
  const { windowSize, setWindowSize } =MyDataContext();
  const [setIsLandscape] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
     //   width: window.innerWidth,
      //  height: window.innerHeight,
      width: window.innerWidth || 800, // Provide a default value like 800
      height: window.innerHeight || 600, // Provide a default value like 600
      });
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWindowSize]);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      const handleOrientationChange = () => {
        setIsLandscape(window.innerWidth > window.innerHeight);
      };

      window.addEventListener("resize", handleOrientationChange);
      handleOrientationChange();

      return () => {
        window.removeEventListener("resize", handleOrientationChange);
      };
    }
  }, []);

//  return [windowSize, isLandscape];
return windowSize;
};

export default useWindowSize;



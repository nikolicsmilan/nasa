import { useState, useEffect, useContext } from "react";
import { MyDataContext } from "../context/DataContext";

const useWindowSize = () => {
  const { windowSize, setWindowSize } = useContext(MyDataContext);
  const [isLandscape, setIsLandscape] = useState(false);

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
      window.removeEventListener("resize", handleResize);
    };
  }, [setWindowSize]);

  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      const handleOrientationChange = () => {
        setIsLandscape(window.innerWidth > window.innerHeight);
      };

      window.addEventListener('resize', handleOrientationChange);
      handleOrientationChange();

      return () => {
        window.removeEventListener('resize', handleOrientationChange);
      };
    }
  }, []);

  return [windowSize, isLandscape];
};

export default useWindowSize;


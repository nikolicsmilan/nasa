import React from "react";

export const useAnimations = () => {
  const mainConsoleAnimations = (setAnimationVariants, setInfo) => {
    const runAnimations = () => {
      //  if (actualMainConsole) {
      setTimeout(() => {
        setAnimationVariants({ x: 0, scale: 1, transition: { duration: 1 } });
        setInfo("animáció 3");
      }, 0);

      setTimeout(() => {
        setAnimationVariants({ x: 0, scale: 0.2, transition: { duration: 1 } });
        setInfo("animáció 4");
      }, 100);

      setTimeout(() => {
        setAnimationVariants({
          x: 1200,
          scale: 0.2,
          transition: { duration: 1 },
        });
        setInfo("animáció 5");
      }, 1500);
      setTimeout(() => {
        setAnimationVariants({ x: 1200, scale: 0, opacity: 0 });
        setInfo("animáció 6");
      }, 2000);
      setTimeout(() => {
        setAnimationVariants({ x: -1200, scale: 0, opacity: 0 });
        setInfo("animáció 7");
      }, 2300);
      setTimeout(() => {
        setAnimationVariants({ x: 0, scale: 0.2, transition: { duration: 1 } });
        setInfo("animáció 8");
      }, 2500);
      setTimeout(() => {
        setAnimationVariants({ x: 0, scale: 1, transition: { duration: 1 } });
        setInfo("animáció 9");
      }, 3500);
      //  }
    };
    runAnimations();
  };

  return { mainConsoleAnimations };
};

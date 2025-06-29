
export const useAnimations = () => {


  
  const mainConsoleAnimations = (setAnimationVariants, setInfo) => {
    const runAnimations = () => {
      //  if (actualMainConsole) {
      setTimeout(() => {
        setAnimationVariants({ x: 0, scale: 1, transition: { duration: 1 } });
        setInfo("animáció 1");
      }, 0);

      setTimeout(() => {
        setAnimationVariants({ x: 0, scale: 0.2, transition: { duration: 1 } });
        setInfo("animáció 2");
      }, 100);

      setTimeout(() => {
        setAnimationVariants({
          x: 1200,
          scale: 0.2,
          transition: { duration: 1 },
        });
        setInfo("animáció 3");
      }, 1500);
      setTimeout(() => {
        setAnimationVariants({ x: 1200, scale: 0, opacity: 0 });
        setInfo("animáció 4");
      }, 2000);
      setTimeout(() => {
        setAnimationVariants({ x: -1200, scale: 0, opacity: 0 });
        setInfo("animáció 5");
      }, 2300);
      setTimeout(() => {
        setAnimationVariants({ x: 0, scale: 0.2, transition: { duration: 1 } });
        setInfo("animáció 6");
      }, 2500);
      setTimeout(() => {
        setAnimationVariants({ x: 0, scale: 1, transition: { duration: 1 } });
        setInfo("animáció 7");
      }, 3500);
      //  }
    };
    runAnimations();
  };

  return { mainConsoleAnimations };
};

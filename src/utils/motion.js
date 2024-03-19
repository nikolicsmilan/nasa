export const transition = { type: "spring", duration: 0.8 };
/*export const slideAnimation = (direction) => {
    return {
      initial: {
        x: direction === "left" ? 900 : direction === "right" ? 1100 : 100,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
        transition: { ...transition, delay: 0.5 },
      },
      animate: {
        x: direction === "left" ? 800: direction === "right" ? 1700 : 0,
        y: 0,
        opacity: 1,
        transition: { ...transition, delay: 0 },
      },
      exit: {
        x: direction === "left" ? -110 : direction === "right" ? 100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
        transition: { ...transition, delay: 0 },
      },
    };
  };*/

  // A slideAnimation függvény meghatározása

/*
export const slideAnimation = (direction) => {
  return {
    initial: {
      x: direction === "left" ? 900 : direction === "right" ? -900 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      x: 90,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      x: direction === "left" ? -900 : direction === "right" ? 900 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0 },
    },
  };
};*/

/*
export const slideAnimation = (direction,width) => {
  return {
    initial: {
      x: direction === "left" ? 900 : direction === "right" ? -900 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      x: direction === "left" ? 0: direction === "right" ? width : 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      x: direction === "left" ? -900 : direction === "right" ? 1900 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0 },
    },
  };
};*/

export const slideAnimation = (direction) => {
  return {
    initial: {
      x: direction === "left" ? 900 : direction === "right" ? -900 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0 },
    },
    animate: {
      x: direction === "left" ? 0: direction === "right" ? 0 : 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      x: direction === "left" ? -900 : direction === "right" ? 1900 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0 },
    },
  };
};







  export const slideAnimation2 = (direction) => {
    return {
      initial: {
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
        transition: { ...transition, delay: 0.5 },
      },
      animate: {
        x: direction === "left" ? 100: direction === "right" ? 500 : 0,
        y: 0,
        opacity: 1,
        transition: { ...transition, delay: 0 },
      },
      exit: {
        x: direction === "left" ? -110 : direction === "right" ? 100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        opacity: 0,
        transition: { ...transition, delay: 0 },
      },
    };
  };

  /*ok */

  /*export const slideAnimation = (direction) => {
  return {
    initial: {
      x: direction === "left" ? 900 : direction === "right" ? -900 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      x: direction === "left" ? 0: direction === "right" ? 1450 : 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      x: direction === "left" ? -900 : direction === "right" ? 1900 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0 },
    },
  };
};
 */


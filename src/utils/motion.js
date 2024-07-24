export const transition = { type: "spring", duration: 0.8 };

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


export const myAnimation = (direction) => {
  return {
    initial: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      x: direction === "left" ? 60 : direction === "right" ? -10 : 0,
      y: direction === "up" ? 20 : direction === "down" ? -100 : 0,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      transition: { ...transition, delay: 0 },
    },
  };
};












   
  





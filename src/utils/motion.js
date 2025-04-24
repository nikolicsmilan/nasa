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
      x: direction === "left" ? 0 : direction === "right" ? 0 : 0,
      y: 10,
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
export const subcribeAnimation = (direction) => {
  return {
    initial: {
      x: direction === "left" ? 900 : direction === "right" ? -900 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0 },
    },
    animate: {
      x: direction === "left" ? 0 : direction === "right" ? 0 : 0,
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

export const myAnimation = (direction, width, height) => {
  return {
    initial: {
      x: direction === "left" ? 320 : direction === "right" ? width + 80 : 0,
      y: direction === "up" ? 80 : direction === "down" ? -10 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      x: direction === "left" ? 280 : direction === "right" ? width - 80 : 0,
      y: direction === "up" ? 0 : direction === "down" ? -100 : 0,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      x: direction === "left" ? 320 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      transition: { ...transition, delay: 0 },
    },
  };
};

export const myAnimation3 = (direction, width, height, options = {}) => {
  const defaultValues = {
    initial: { x: 0, y: 0 },
    animate: { x: 0, y: 0 },
    exit: { x: 0, y: 0 },
  };

  const getDirectionValues = (state) => {
    const values = options[state] || {};
    switch (direction) {
      case "left":
        return { x: values.x ?? defaultValues[state].x, y: 0 };
      case "right":
        return {
          x: values.x ?? (state === "initial" ? width + 80 : width - 80),
          //y: 0,
          y: 100 
        };
      case "up":
        return { x: -20, y: values.y ?? (state === "initial" ? 80 : -120) };
      case "down":
        return { x: 0, y: values.y ?? (state === "initial" ? -10 : -100) };
      default:
        return { x: 0, y: 0 };
    }
  };

  return {
    initial: {
      ...getDirectionValues("initial"),
      opacity: 0,
      transition: { ...transition, delay: 0.5 },
    },
    animate: {
      ...getDirectionValues("animate"),
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      ...getDirectionValues("exit"),
      transition: { ...transition, delay: 0 },
    },
  };
};

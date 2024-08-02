// utils.js
export const getComputedStyleColor = (elementId) => {
    const tempDiv = document.getElementById(elementId);
    const color = window.getComputedStyle(tempDiv).color;
    return color;
  };
  
// utils.js
export const getComputedStyleColor = (elementId) => {
  // id=="ezaz" in App.js to reach every component
    const tempDiv = document.getElementById(elementId);
    const color = window.getComputedStyle(tempDiv).color;
    return color;
  };
  
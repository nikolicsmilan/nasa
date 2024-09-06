import { useState, useEffect } from 'react';
import { getComputedStyleColor } from '../utils/getComputedStyleColor';

const useLineChartColors = (styleDependency) => {
  const [colors, setColors] = useState({
    tooltip: "#000",
    legend: "#000",
    line1: "rgba(136, 132, 216, 1)",
    line2: "rgba(130, 202, 157, 1)",
    line3: "rgba(251, 191, 36, 1)",
    lineInc: "rgba(255, 99, 132, 1)",
    lineDesc: "rgba(54, 162, 235, 1)",
  });

  useEffect(() => {
    setColors({
      tooltip: getComputedStyleColor("ezaz"),
      legend: getComputedStyleColor("ezaz"),
      line1: "rgba(136, 132, 216, 1)",
      line2: "rgba(130, 202, 157, 1)",
      line3: "rgba(251, 191, 36, 1)",
      lineInc: "rgba(255, 99, 132, 1)",
      lineDesc: "rgba(54, 162, 235, 1)",
    });
  }, [styleDependency]);

  return colors;
};

export default useLineChartColors;

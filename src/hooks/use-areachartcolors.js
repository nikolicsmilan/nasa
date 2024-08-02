// useAreaChartColors.js
import { useState, useEffect } from 'react';
import { getComputedStyleColor } from '../utils/getComputedStyleColor';

const useAreaChartColors = (styleDependency) => {
  const [colors, setColors] = useState({
    tooltip: "#000",
    legend: "#000",
    area1: "rgba(136, 132, 216, 0.2)",
    area2: "rgba(130, 202, 157, 0.2)",
    area3: "rgba(251, 191, 36, 0.2)",
    areaInc: "rgba(255, 99, 132, 0.2)",
    areaDesc: "rgba(54, 162, 235, 0.2)",
  });

  useEffect(() => {
    setColors({
      tooltip: getComputedStyleColor("ezaz"),
      legend: getComputedStyleColor("ezaz"),
      area1: "rgba(136, 132, 216, 0.2)",
      area2: "rgba(130, 202, 157, 0.2)",
      area3: "rgba(251, 191, 36, 0.2)",
      areaInc: "rgba(255, 99, 132, 0.2)",
      areaDesc: "rgba(54, 162, 235, 0.2)",
    });
  }, [styleDependency]);

  return colors;
};

export default useAreaChartColors;

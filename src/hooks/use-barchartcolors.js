// useAreaChartColors.js
import { useState, useEffect } from "react";
import { getComputedStyleColor } from "../utils/getComputedStyleColor";

const useBarhartColors = (styleDependency) => {
  const [colors, setColors] = useState({
    tooltip: getComputedStyleColor("ezaz"),
    legend: getComputedStyleColor("ezaz"),
    general:[
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)'
    ],
  });

  useEffect(() => {
    setColors({
      tooltip: getComputedStyleColor("ezaz"),
      legend: getComputedStyleColor("ezaz"),
   
      general:[
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)'
      ],
    });
  }, [styleDependency]);

  return colors;
};

export default useBarhartColors;

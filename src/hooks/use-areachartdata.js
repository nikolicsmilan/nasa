// useAreaChartData.js
import { useState, useEffect } from 'react';

const useAreaChartData = (filteredData, displayMode, colors) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    if (displayMode === "inc") {
      setChartData({
        labels: filteredData.map((d) => d.name),
        datasets: [
          {
            label: "Value",
            data: filteredData.map((d) => d.value),
            borderColor: "rgba(255, 99, 132, 1)", // Szín "inc" módhoz
            backgroundColor: colors.areaInc,
            fill: true,
            tension: 0.4,
          },
        ],
      });
    } else if (displayMode === "desc") {
      setChartData({
        labels: filteredData.map((d) => d.name),
        datasets: [
          {
            label: "Value",
            data: filteredData.map((d) => d.value),
            borderColor: "rgba(54, 162, 235, 1)", // Szín "desc" módhoz
            backgroundColor: colors.areaDesc,
            fill: true,
            tension: 0.4,
          },
        ],
      });
    } else {
      setChartData({
        labels: filteredData.map((d) => d.name),
        datasets: [
          {
            label: "Max",
            data: filteredData.map((d) => d.max?.value),
            borderColor: "rgba(136, 132, 216, 1)",
            backgroundColor: colors.area1,
            fill: true,
            tension: 0.4,
          },
          {
            label: "Avg",
            data: filteredData.map((d) => d.avg?.value),
            borderColor: "rgba(130, 202, 157, 1)",
            backgroundColor: colors.area2,
            fill: true,
            tension: 0.4,
          },
          {
            label: "Min",
            data: filteredData.map((d) => d.min?.value),
            borderColor: "rgba(251, 191, 36, 1)",
            backgroundColor: colors.area3,
            fill: true,
            tension: 0.4,
          },
        ],
      });
    }
  }, [filteredData, displayMode, colors]);

  return chartData;
};

export default useAreaChartData;

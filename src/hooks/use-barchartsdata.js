import { useState, useEffect } from "react";

const useBarChartData = (filteredData, displayMode, colors) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    setChartData({
      labels: filteredData.map((d) => d.name),
      datasets: [
        {
          label: displayMode,
          data: filteredData.map((d) => d.value),
          // borderColor: "rgba(136, 132, 216, 1)", // Szín "max" módhoz
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
          backgroundColor: colors.general,
         
        },
      ],
    });
  }, [filteredData, displayMode, colors]);
  return chartData;
};

export default useBarChartData;

/*
 else if (displayMode === "avg") {
          setChartData({
            labels: filteredData.map((d) => d.value),
            datasets: [
              {
                label: "Avg",
                data: filteredData.map((d) => d.avg),
                borderColor: "rgba(130, 202, 157, 1)", // Szín "avg" módhoz
                backgroundColor: colors.hoze,
                fill: true,
                tension: 0.4,
              },
            ],
          });
        } else if (displayMode === "min") {
          setChartData({
            labels: filteredData.map((d) => d.value),
            datasets: [
              {
                label: "Min",
                data: filteredData.map((d) => d.min),
                borderColor: "rgba(251, 191, 36, 1)", // Szín "min" módhoz
                backgroundColor: colors.hoze,
                fill: true,
                tension: 0.4,
              },
            ],
          });
        }
*/

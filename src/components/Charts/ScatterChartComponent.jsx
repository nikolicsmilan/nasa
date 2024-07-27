import React, { useState, useEffect } from "react";
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import useWindowSize from "../../hooks/use-windowsize";
import { MyDataContext } from "../../context/DataContext";
import { MyConsoleContext } from "../../context/ConsoleContext";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const initialData = [
  { name: "A", x: 1, y: 4000 },
  { name: "B", x: 2, y: 3000 },
  { name: "C", x: 3, y: 2000 },
  { name: "D", x: 4, y: 2780 },
  { name: "E", x: 5, y: 1890 },
  { name: "F", x: 6, y: 2390 },
  { name: "G", x: 7, y: 3490 },
];

const ScatterChartComponent = () => {
  const { width, height } = useWindowSize();
  const [colors, setColors] = useState({ tooltip: "#000", legend: "#000" });
  const [chartData, setChartData] = useState({
    datasets: [
      {
        label: 'Dataset 1',
        data: initialData.map(d => ({ x: d.x, y: d.y })),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      }
    ]
  });

  const { users } = MyDataContext();
  const { filteredData, actualMainConsole, actualTypeData } = MyConsoleContext();

  useEffect(() => {
    const getComputedStyleColor = (elementId) => {
      const tempDiv = document.getElementById(elementId);
      const color = window.getComputedStyle(tempDiv).color;
      return color;
    };

    setColors({
      tooltip: getComputedStyleColor("ezaz"),
      legend: getComputedStyleColor("ezaz"),
    });
  }, [users.style]);

  useEffect(() => {
    if (actualMainConsole.title === "Scatter" && actualTypeData === "h") {
      const transformedData = filteredData.map((item) => ({
        name: item.fullname,
        x: parseFloat(item.x),
        y: parseFloat(item.h),
      }));

      setChartData({
        datasets: [
          {
            label: 'Dataset 1',
            data: transformedData.map(d => ({ x: d.x, y: d.y })),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          }
        ]
      });
    }
  }, [filteredData, actualMainConsole.title, actualTypeData]);

  return (
    <div className="border-0 border-purple-400 flex justify-center" style={{ width: width - 800, height: height - 200 }}>
      <div id="ezaz" className="text-primary hidden">
        Sampling div tailwind for react charts for dynamic colors
      </div>
      <Scatter
        data={chartData}
        options={{
          plugins: {
            tooltip: {
              bodyColor: colors.tooltip
            },
            legend: {
              labels: {
                color: colors.legend
              }
            }
          },
          scales: {
            x: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'X Axis',
                color: colors.legend
              },
              ticks: {
                color: colors.legend
              }
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'Y Axis',
                color: colors.legend
              },
              ticks: {
                color: colors.legend
              }
            }
          }
        }}
        height={height - 200}
        width={width - 800}
      />
    </div>
  );
};

export default ScatterChartComponent;

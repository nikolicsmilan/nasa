import React, { useState, useEffect } from "react";
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import useWindowSize from "../../hooks/use-windowsize";
import { MyDataContext } from "../../context/DataContext";
import { MyConsoleContext } from "../../context/ConsoleContext";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const initialData = [
  { name: "A", h: 4000 },
  { name: "B", h: 3000 },
  { name: "C", h: 2000 },
  { name: "D", h: 2780 },
  { name: "E", h: 1890 },
  { name: "F", h: 2390 },
  { name: "G", h: 3490 },
];

const RadialBarChartComponent = () => {
  const { width, height } = useWindowSize();
  const [colors, setColors] = useState({ tooltip: "#000", legend: "#000" });
  const [chartData, setChartData] = useState({
    labels: initialData.map(d => d.name),
    datasets: [
      {
        label: 'Dataset 1',
        data: initialData.map(d => d.h),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)'
        ],
        borderWidth: 1
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
    if (actualMainConsole.title === "Radial" && actualTypeData === "h") {
      const transformedData = filteredData.map((item) => ({
        name: item.fullname,
        h: parseFloat(item.h),
      }));

      setChartData({
        labels: transformedData.map(d => d.name),
        datasets: [
          {
            label: 'Dataset 1',
            data: transformedData.map(d => d.h),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
          }
        ]
      });
    }
  }, [filteredData, actualMainConsole.title, actualTypeData]);

  return (
    <div className="border-0 border-purple-400 flex justify-center"  style={{ width: width - 800, height: height - 200 }}>
      <div id="ezaz" className="text-primary hidden">
        Sampling div tailwind for react charts for dynamic colors
      </div>
      <PolarArea
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
            r: {
              angleLines: {
                color: colors.legend
              },
              grid: {
                color: colors.legend
              },
              pointLabels: {
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

export default RadialBarChartComponent;



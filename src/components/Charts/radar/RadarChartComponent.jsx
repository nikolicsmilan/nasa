import React, { useState, useEffect } from "react";
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';
import useWindowSize from "../../../hooks/use-windowsize";
import { MyDataContext } from "../../../context/DataContext";
import { MyConsoleContext } from "../../../context/ConsoleContext";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const initialData = [
  { name: "A", h: 4000, ip: 2400, diameter: 2400 },
  { name: "B", h: 3000, ip: 1398, diameter: 2210 },
  { name: "C", h: 2000, ip: 9800, diameter: 2290 },
  { name: "D", h: 2780, ip: 3908, diameter: 2000 },
  { name: "E", h: 1890, ip: 4800, diameter: 2181 },
  { name: "F", h: 2390, ip: 3800, diameter: 2500 },
  { name: "G", h: 3490, ip: 4300, diameter: 2100 },
];

const RadarChartComponent = () => {
  const { width, height } = useWindowSize();
  const [colors, setColors] = useState({ tooltip: "#000", legend: "#000" });
  const [chartData, setChartData] = useState({
    labels: initialData.map(d => d.name),
    datasets: [
      {
        label: 'H',
        data: initialData.map(d => d.h),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'IP',
        data: initialData.map(d => d.ip),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Diameter',
        data: initialData.map(d => d.diameter),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
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
    if (actualMainConsole.title === "Radar" && actualTypeData === "h") {
      const transformedData = filteredData.map((item) => ({
        name: item.fullname,
        h: parseFloat(item.h),
        ip: parseFloat(item.ip),
        diameter: parseFloat(item.diameter),
      }));

      setChartData({
        labels: transformedData.map(d => d.name),
        datasets: [
          {
            label: 'H',
            data: transformedData.map(d => d.h),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
          {
            label: 'IP',
            data: transformedData.map(d => d.ip),
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            label: 'Diameter',
            data: transformedData.map(d => d.diameter),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          }
        ]
      });
    }
  }, [filteredData, actualMainConsole.title, actualTypeData]);

  return (
    <div className="border-0 border-purple-400 flex justify-center" style={{ width: width - 800, height: height - 200 }}>
    
      <Radar
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

export default RadarChartComponent;

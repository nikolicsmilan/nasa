import React, { useState, useEffect } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Line } from "react-chartjs-2";
import useWindowSize from "../../hooks/use-windowsize";
import { MyDataContext } from "../../context/DataContext";
import { MyConsoleContext } from "../../context/ConsoleContext";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const initialData = [
  { name: "A", h: 4000, ip: 2400, diameter: 2400 },
  { name: "B", h: 3000, ip: 1398, diameter: 2210 },
  { name: "C", h: 2000, ip: 9800, diameter: 2290 },
  { name: "D", h: 2780, ip: 3908, diameter: 2000 },
  { name: "E", h: 1890, ip: 4800, diameter: 2181 },
  { name: "F", h: 2390, ip: 3800, diameter: 2500 },
  { name: "G", h: 3490, ip: 4300, diameter: 2100 },
];

const AreaChartComponent = () => {
  const { width, height } = useWindowSize();
  const [colors, setColors] = useState({ tooltip: "#000", legend: "#000", area1: "rgba(136, 132, 216, 0.2)", area2: "rgba(130, 202, 157, 0.2)", area3: "rgba(251, 191, 36, 0.2)" });
  const [chartData, setChartData] = useState({
    labels: initialData.map(d => d.name),
    datasets: [
      {
        label: 'h',
        data: initialData.map(d => d.h),
        borderColor: 'rgba(136, 132, 216, 1)',
        backgroundColor: colors.area1,
        fill: true
      },
      {
        label: 'ip',
        data: initialData.map(d => d.ip),
        borderColor: 'rgba(130, 202, 157, 1)',
        backgroundColor: colors.area2,
        fill: true
      },
      {
        label: 'diameter',
        data: initialData.map(d => d.diameter),
        borderColor: 'rgba(251, 191, 36, 1)',
        backgroundColor: colors.area3,
        fill: true
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
      area1: "rgba(136, 132, 216, 0.2)",
      area2: "rgba(130, 202, 157, 0.2)",
      area3: "rgba(251, 191, 36, 0.2)"
    });
  }, [users.style]);

  useEffect(() => {
    if (actualMainConsole.title === "Area" && actualTypeData === "h") {
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
            label: 'h',
            data: transformedData.map(d => d.h),
            borderColor: 'rgba(136, 132, 216, 1)',
            backgroundColor: colors.area1,
            fill: true
          },
          {
            label: 'ip',
            data: transformedData.map(d => d.ip),
            borderColor: 'rgba(130, 202, 157, 1)',
            backgroundColor: colors.area2,
            fill: true
          },
          {
            label: 'diameter',
            data: transformedData.map(d => d.diameter),
            borderColor: 'rgba(251, 191, 36, 1)',
            backgroundColor: colors.area3,
            fill: true
          }
        ]
      });
    }
  }, [filteredData, actualMainConsole.title, actualTypeData, colors.area1, colors.area2, colors.area3]);

  return (
    <div className="border-0 border-purple-400 flex justify-center" style={{ width: width - 800, height: height - 200 }}>
      <div id="ezaz" className="text-primary hidden">
        Sampling div tailwind for react charts for dynamic colors
      </div>
      <Line
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
              ticks: {
                color: colors.legend
              }
            },
            y: {
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

export default AreaChartComponent;

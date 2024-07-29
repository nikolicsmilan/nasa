import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import useWindowSize from "../../hooks/use-windowsize";
import { MyDataContext } from "../../context/DataContext";
import { MyConsoleContext } from "../../context/ConsoleContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const AreaChartComponent = () => {

  const { users } = MyDataContext();
  const { filteredData, actualMainConsole, actualTypeData, filterTable } =
    MyConsoleContext();
    const { width, height } = useWindowSize();
  const [colors, setColors] = useState({
    tooltip: "#000",
    legend: "#000",
    area1: "rgba(136, 132, 216, 0.2)",
    area2: "rgba(130, 202, 157, 0.2)",
    area3: "rgba(251, 191, 36, 0.2)",
  });
  console.log("filteredData in AreaChartComponent", filteredData);
  const [chartData, setChartData] = useState({
    labels: filteredData.map((d) => d.name),
    datasets: [
      {
        label: "Max",
        data: filteredData.map((d) => d.max),
        borderColor: "rgba(136, 132, 216, 1)",
        backgroundColor: colors.area1,
        fill: true,
        borderWidth: 1,
        tension: 0.4,
      },
      {
        label: "Avg",
        data: filteredData.map((d) => d.avg),
        borderColor: "rgba(130, 202, 157, 1)",
        backgroundColor: colors.area2,
        fill: true,
        borderWidth: 1,
        tension: 0.4,
      },
      {
        label: "Min",
        data: filteredData.map((d) => d.min),
        borderColor: "rgba(251, 191, 36, 1)",
        backgroundColor: colors.area3,
        fill: true,
        borderWidth: 1,
        tension: 0.4,
      },
    ],
  });

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
      area3: "rgba(251, 191, 36, 0.2)",
    });
  }, [users.style]);

  useEffect(() => {
  //  if (actualMainConsole.title === "Area" && actualTypeData === "h") {
      setChartData({
        labels: filteredData.map((d) => d.name),
        datasets: [
          {
            label: "max",
            data: filteredData.map((d) => d.max),
            borderColor: "rgba(136, 132, 216, 1)",
            backgroundColor: colors.area1,
            fill: true,
            tension:0.4
          },
          {
            label: "avg",
            data: filteredData.map((d) => d.avg),
            borderColor: "rgba(130, 202, 157, 1)",
            backgroundColor: colors.area2,
            fill: true,
            tension:0.4
          },
          {
            label: "min",
            data: filteredData.map((d) => d.min),
            borderColor: "rgba(251, 191, 36, 1)",
            backgroundColor: colors.area3,
            fill: true,
            tension:0.4
          },
        ],
      });
   // }
  }, [
    filteredData,    
    actualMainConsole.title,
    actualTypeData,
    colors.area1,
    colors.area2,
    colors.area3,
  ]);

  return (
    <div
      className="border-0 border-purple-400 flex justify-center w-96 lg:w-full h-full"
      style={{ width: width - 800, height: height - 200 }}
    >
      <div id="ezaz" className="text-primary hidde">
      
      </div>
   {/*ITT VAN A BAJ A SZÉLESSÉGEL */}
     <Line
        data={chartData}
        options={{
          plugins: {
            tooltip: {
              bodyColor: colors.tooltip,
            },
            legend: {
              labels: {
                color: colors.legend,
              },
            },
          },
          scales: {
            x: {
              ticks: {
                color: colors.legend,
              },
            },
            y: {
              ticks: {
                color: colors.legend,
              },
            },
          },
        }}
        height={height - 200}
        width={width - 800}
      />

  
    </div>
  );
};

export default AreaChartComponent;
/*


const initialData = [
  { name: "A", h: 4000, ip: 2400, diameter: 2400 },
  { name: "B", h: 3000, ip: 1398, diameter: 2210 },
  { name: "C", h: 2000, ip: 9800, diameter: 2290 },
  { name: "D", h: 2780, ip: 3908, diameter: 2000 },
  { name: "E", h: 1890, ip: 4800, diameter: 2181 },
  { name: "F", h: 2390, ip: 3800, diameter: 2500 },
  { name: "G", h: 3490, ip: 4300, diameter: 2100 },
  { name: "H", h: 3490, ip: 4300, diameter: 2100 },
  { name: "I", h: 3490, ip: 4300, diameter: 2100 },
  { name: "J", h: 3490, ip: 4300, diameter: 2100 },
];

const initialData = [
  { name: "1", max: 4000, avg: 2400, min: 2400 },
  { name: "2", max: 3000, avg: 1398, min: 2210 },
  { name: "3", max: 2000, avg: 9800, min: 2290 },
  { name: "4", max: 2780, avg: 3908, min: 2000 },
  { name: "5", max: 1890, avg: 4800, min: 2181 },
  { name: "6", max: 2390, avg: 3800, min: 2500 },
  { name: "7", max: 3490, avg: 4300, min: 2100 },
  { name: "8", max: 3490, avg: 4300, min: 2100 },
  { name: "9", max: 3490, avg: 4300, min: 2100 },
  { name: "10", max: 3490, avg: 4300, min: 2100 },
];

*/

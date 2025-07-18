import  { useState, useEffect } from "react";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import useWindowSize from "../../../hooks/use-windowsize";
import { MyDataContext } from "../../../context/DataContext";
import { MyConsoleContext } from "../../../context/ConsoleContext";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const initialData = [
  { name: "Step 1", value: 100 },
  { name: "Step 2", value: 80 },
  { name: "Step 3", value: 60 },
  { name: "Step 4", value: 40 },
  { name: "Step 5", value: 20 },
];

const FunnelChartComponent = () => {
  const { width, height } = useWindowSize();
  const [colors, setColors] = useState({ tooltip: "#000", legend: "#000" });
  const [chartData, setChartData] = useState({
    labels: initialData.map(d => d.name),
    datasets: [
      {
        label: 'Dataset 1',
        data: initialData.map(d => d.value),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
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
    if (actualMainConsole.title === "Funnel" && actualTypeData === "h") {
      const transformedData = filteredData.map((item) => ({
        name: item.fullname,
        value: parseFloat(item.h),
      }));

      setChartData({
        labels: transformedData.map(d => d.name),
        datasets: [
          {
            label: 'Dataset 1',
            data: transformedData.map(d => d.value),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1
          }
        ]
      });
    }
  }, [filteredData, actualMainConsole.title, actualTypeData]);

  return (
    <div className="border-0 border-purple-400 flex justify-center" style={{ width: width - 800, height: height - 200 }}>
   
      <Bar
        data={chartData}
        options={{
          indexAxis: 'y',
          scales: {
            x: {
              beginAtZero: true
            }
          },
          plugins: {
            tooltip: {
              bodyColor: colors.tooltip
            },
            legend: {
              labels: {
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

export default FunnelChartComponent;


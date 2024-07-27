import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import useWindowSize from '../../hooks/use-windowsize';
import { MyDataContext } from '../../context/DataContext';
import { MyConsoleContext } from '../../context/ConsoleContext';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const { width, height } = useWindowSize();
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  const { users } = MyDataContext();
  const { filteredData, actualMainConsole, actualTypeData } = MyConsoleContext();

  useEffect(() => {
    const data01 = [
      { name: "Page A", value: 4000 },
      { name: "Page B", value: 3000 },
      { name: "Page C", value: 2000 },
    ];

    const data02 = [
      { name: "Page D", value: 2780 },
      { name: "Page E", value: 1890 },
      { name: "Page F", value: 2390 },
      { name: "Page G", value: 3490 },
    ];

    setChartData({
      labels: [...data01.map(d => d.name), ...data02.map(d => d.name)],
      datasets: [
        {
          label: 'Dataset 1',
          data: data01.map(d => d.value),
          backgroundColor: ['#8884d8', '#82ca9d', '#fbbf24'],
        },
        {
          label: 'Dataset 2',
          data: data02.map(d => d.value),
          backgroundColor: ['#d97706', '#ea580c', '#b45309', '#f59e0b'],
        },
      ],
    });
  }, [filteredData, actualMainConsole.title, actualTypeData]);

  return (
    <div className='border-0 flex justify-center' style={{ width: width - 800, height: height - 200 }}>
      <Pie
        data={chartData}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              enabled: true,
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;







/*import React, { useState, useEffect } from 'react';
import {
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from 'recharts';
import useWindowSize from '../../hooks/use-windowsize';
import { MyDataContext } from '../../context/DataContext';
import { MyConsoleContext } from '../../context/ConsoleContext';

const data01 = [
  { name: "Page A", value: 4000 },
  { name: "Page B", value: 3000 },
  { name: "Page C", value: 2000 },
];

const data02 = [
  { name: "Page D", value: 2780 },
  { name: "Page E", value: 1890 },
  { name: "Page F", value: 2390 },
  { name: "Page G", value: 3490 },
];

const PieChart = () => {
  const { width, height } = useWindowSize();
  const [colors, setColors] = useState({
    tooltip: "#000",
    legend: "#000",
    pie01: "#8884d8",
    pie02: "#82ca9d",
    pieLabels: ["#fbbf24", "#d97706", "#ea580c"], // Három szín a második pie chart számára
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

 
  return (
    <div className="border-0 border-purple-400">
      <div id="ezaz" className="text-primary hidden">
        Sampling div tailwind for react charts for dynamic colors
      </div>
      <RechartsPieChart
        width={width - 800}
        height={height - 200}
      >
        <Tooltip contentStyle={{ color: colors.tooltip }} />
        <Legend wrapperStyle={{ color: colors.legend }} />
        <Pie
          data={data01}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill={colors.pie01}
          label
        />
        <Pie
          data={data02}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={90}
          outerRadius={120}
          fill={colors.pie02}
          label
        >
          {data02.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={pieLabels[index % pieLabels.length]} />
          ))}
        </Pie>
      </RechartsPieChart>
     
    </div>
  );
};

export default PieChart;*/

/*
    <RechartsPieChart
        width={width - 800}
        height={height - 200}
      >
        <Tooltip contentStyle={{ color: colors.tooltip }} />
        <Legend wrapperStyle={{ color: colors.legend }} />
        <Pie
          data={data01}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill={colors.pie01}
          label
        />
        <Pie
          data={data02}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={90}
          outerRadius={120}
          fill={colors.pie02}
          label
        >
          {data02.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={pieLabels[index % pieLabels.length]} />
          ))}
        </Pie>
      </RechartsPieChart>
*/


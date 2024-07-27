import React, { useState, useEffect } from 'react';
import {
  LineChart as RechartsLineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts';
import useWindowSize from '../../hooks/use-windowsize';
import { MyDataContext } from '../../context/DataContext';
import { MyConsoleContext } from '../../context/ConsoleContext';

const LineChart = () => {
  const { width, height } = useWindowSize();
  const [colors, setColors] = useState({ xAxis: "", yAxis: "", tooltip: "" });
  const [newData, setNewData] = useState([
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  ]);
  const [dataKeys, setDataKeys] = useState({
    key1: "pv",
    key2: "uv",
    key3: "amt"
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
      xAxis: getComputedStyleColor("ezaz"),
      yAxis: getComputedStyleColor("ezaz"),
      tooltip: getComputedStyleColor("ezaz"),
    });
  }, [users.style]);

  useEffect(() => {
    if (actualMainConsole.title === "Line" && actualTypeData === "h") {
      const transformedData = filteredData.map((item) => ({
        name: item.fullname,
        h: parseFloat(item.h),
        ip: parseFloat(item.ip),
        diameter: parseFloat(item.diameter),
      }));

      setNewData(transformedData);
      setDataKeys({ key1: "h", key2: "ip", key3: "diameter" });
    }
  }, [filteredData, actualMainConsole.title, actualTypeData]);

  return (
    <div className="border-0 border-purple-400">
      <div id="ezaz" className="text-primary hidden">
        Sampling div tailwind for react charts for dynamic colors
      </div>
      <RechartsLineChart
        width={width - 800}
        height={height - 200}
        data={newData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="1 1" />
        <XAxis dataKey="name" tick={{ fill: colors.xAxis }} />
        <YAxis tick={{ fill: colors.yAxis }} />
        <Tooltip contentStyle={{ color: colors.tooltip }} />
        <Legend />
        <Line type="monotone" dataKey={dataKeys.key1} stroke="#8884d8" />
        <Line type="monotone" dataKey={dataKeys.key2} stroke="#82ca9d" />
        <Line type="monotone" dataKey={dataKeys.key3} stroke="#fbbf24" />
      </RechartsLineChart>
     
    </div>
  );
};

export default LineChart;



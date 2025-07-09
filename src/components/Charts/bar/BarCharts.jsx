// src/components/Charts/bar/BarCharts.jsx
import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";
import useWindowSize from "../../../hooks/use-windowsize";
import { MyDataContext } from "../../../context/DataContext";
import { MyConsoleContext } from "../../../context/ConsoleContext";

const data = [
  { name: "A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "G", uv: 3490, pv: 4300, amt: 2100 },
];

const BarCharts = () => {
  const { width, height } = useWindowSize();
  const [colors, setColors] = useState({ xAxis: "", yAxis: "", tooltip: "" });
  const [newData, setNewData] = useState(data);
  const [dataKeys, setDataKeys] = useState({
    key1: "uv",
    key2: "pv",
    key3: "amt",
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
      xAxis: getComputedStyleColor("theme-color-ref"),
      yAxis: getComputedStyleColor("theme-color-ref"),
      tooltip: getComputedStyleColor("theme-color-ref"),
    });
  }, [users.style]);

  useEffect(() => {
    if (actualMainConsole.title === "Bar" && actualTypeData === "h") {
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
    
      <BarChart
        width={width - 800}
        height={height - 200}
        data={newData}
        margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tick={{ fill: colors.xAxis }} />
        <YAxis tick={{ fill: colors.yAxis }} />
        <Tooltip contentStyle={{ color: colors.tooltip }} />
        <Legend />
        <Bar dataKey={dataKeys.key1} fill="#8884d8" />
        <Bar dataKey={dataKeys.key2} fill="#82ca9d" />
        <Bar dataKey={dataKeys.key3} fill="#fbbf24" />
      </BarChart>
     
    </div>
  );
};

export default BarCharts;


import React, { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import useWindowSize from "../../hooks/use-windowsize";
import { MyDataContext } from "../../context/DataContext";
import { MyConsoleContext } from "../../context/ConsoleContext";
import Table_1 from "../Table/Table_1";
const data = [
  { name: "A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "G", uv: 3490, pv: 4300, amt: 2100 },
];

const AreaCharts = () => {
  const { width, height } = useWindowSize();
  const [colors, setColors] = useState({ xAxis: "", yAxis: "", tooltip: "" });
  const [newData, setNewData] = useState(data);
  const [dataKeys, setDataKeys] = useState({
    key1: "uv",
    key2: "pv",
    key3: "amt",
  });
  const { users } = MyDataContext();
  const { filteredData, actualMainConsole, actualTypeData } =
    MyConsoleContext();
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
 // console.log("filteredData: ", filteredData);

  useEffect(() => {
    if (actualMainConsole.title === "Area" && actualTypeData === "h") {
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
      {/* Megjelenítjük a táblázatot */}
      <AreaChart
        height={height - 200}
        width={width - 800}
        data={newData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#fbbf24" stopOpacity={0.3} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" tick={{ fill: colors.xAxis }} />
        <YAxis tick={{ fill: colors.yAxis }} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip contentStyle={{ color: colors.tooltip }} />
        <Area
          type="monotone"
          dataKey={dataKeys.key1}
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey={dataKeys.key2}
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
        <Area
          type="monotone"
          dataKey={dataKeys.key3}
          stroke="#fbbf24"
          fillOpacity={1}
          fill="url(#colorAmt)"
        />
      </AreaChart>
      <p>
        actualMainConsole {actualMainConsole.title} actualTypeData:{" "}
        {actualTypeData}
      </p>
    </div>
  );
};

export default AreaCharts;
// <Table_1 data={filteredData} />
/*
      <AreaChart
        height={height - 200}
        width={width - 800}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorAmt" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#fbbf24" stopOpacity={0.3} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" tick={{ fill: colors.xAxis }} />
        <YAxis tick={{ fill: colors.yAxis }} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip contentStyle={{ color: colors.tooltip }} />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        />
        <Area
          type="monotone"
          dataKey="amt"
          stroke="#fbbf24"
          fillOpacity={1}
          fill="url(#colorAmt)"
        />
      </AreaChart>
*/

//AreaCharts
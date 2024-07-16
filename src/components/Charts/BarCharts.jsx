import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import useWindowSize from "../../hooks/use-windowsize";
import { MyDataContext } from "../../context/DataContext";
import { MyConsoleContext } from "../../context/ConsoleContext";
const data = [
  {
    day: "05-01",
    uv: -1,
    pv: 10,
  },
  {
    day: "05-02",
    uv: 2,
    pv: 15,
  },
  {
    day: "05-03",
    uv: 3,
    pv: 12,
  },
  {
    day: "05-04",
    uv: 4,
    pv: 12,
  },
  {
    day: "05-05",
    uv: 12,
    pv: 16,
  },
  {
    day: "05-06",
    uv: 5,
    pv: 16,
  },
  {
    day: "05-07",
    uv: 3,
    pv: 12,
  },
  {
    day: "05-08",
    uv: 0,
    pv: 8,
  },
  {
    day: "05-09",
    uv: -3,
    pv: 5,
  },
];

const BarCharts = () => {
  const { users } = MyDataContext();
  const { filteredData, actualMainConsole, actualTypeData } =
    MyConsoleContext();
  const [newData, setNewData] = useState(data);
  const { width, height } = useWindowSize();
  const [colors, setColors] = useState({ xAxis: "", yAxis: "", tooltip: "" });

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
    if (actualMainConsole.title === "Bar" && actualTypeData === "h") {
      const transformedData = filteredData.map((item) => ({
        name: item.fullname, // Felhasználjuk a fullname mezőt a 'name' helyett
        h: parseFloat(item.h), // Felhasználjuk a v_inf mezőt az 'uv' helyett
        ip: parseFloat(item.ip), // Felhasználjuk az ip mezőt a 'pv' helyett
      }));

      setNewData(transformedData);
    }
  }, [filteredData, actualMainConsole.title, actualTypeData]);
  return (
    <div>
      <div id="ezaz" className="text-primary hidden">
        Sampling div tailwind for react charts for dynamic colors
      </div>
      <BarChart height={height - 200} width={width - 800} data={newData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip cursor={{ fill: "transparent" }} />
        <Legend />
        <Bar dataKey="h" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default BarCharts;
//  <Bar dataKey="ip" fill="#82ca9d" fillOpacity={1}   />
// shape={null} activeBar={false}

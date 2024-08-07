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
import useWindowSize from "../../../hooks/use-windowsize";
import { MyDataContext } from "../../../context/DataContext";
import { MyConsoleContext } from "../../../context/ConsoleContext";
import useAreaChartColors from "../../../hooks/use-areachartcolors";
import useAreaChartData from "../../../hooks/use-areachartdata";
import CustomAreaChartLine from "./CustomAreaChartLine";
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
  const { filteredData, filterTable, statusTable } = MyConsoleContext();
  const { width, height } = useWindowSize();
  const colors = useAreaChartColors(users.style);
  const chartData = useAreaChartData(
    filteredData,
    filterTable.displayMode,
    colors
  );
  //style={{ width: width - 800, height: height - 200 }}
  return (
    <div className=" border-0 "  style={{ width: width - 800, height: height - 200 }}>
      <CustomAreaChartLine
        filteredData={filteredData}
        filterTable={filterTable}
        data={chartData}
        colors={colors}
        statusTable={statusTable}
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

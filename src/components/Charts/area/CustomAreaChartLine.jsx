import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { areachartlineoptions } from "../../../locales/chartoptions";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale
);

const CustomAreaChartLine = ({
  data,
  colors,
  statusTable,
  width,
  height,
  filterTable,
  filteredData,
}) => {

  const options = areachartlineoptions(
    colors,
    statusTable,
    filterTable,
    filteredData
  );

  //in Chart.js and react-chartjs-2, an area chart is actually a special type of a line chart.
  return <Line data={data} options={options} height={height} width={width} />;
};

export default CustomAreaChartLine;


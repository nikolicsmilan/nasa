import { Bar } from "react-chartjs-2";
import { barchartOptions } from "./barchartOptions";

const CustomBarChart = ({
  data,
  colors,
  statusTable,
  width,
  height,
  filterTable,
  filteredData,
}) => {
  const options = barchartOptions(
    colors,
    statusTable,
    filterTable,
    filteredData
  );

  return <Bar data={data} options={options} height={height} width={width} />;
};

export default CustomBarChart;

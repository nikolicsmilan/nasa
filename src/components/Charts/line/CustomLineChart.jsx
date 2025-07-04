
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
//import { linechartoptions } from "../../../locales/chartoptions"; // Hasonlóan, mint az area chart options

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale);

const CustomLineChart = ({
  data, 
  width,
  height,
 // filterTable,
  //filteredData,
  //colors,
 // statusTable,
}) => {
//const options = linechartoptions(colors, statusTable, filterTable, filteredData);
//options={options} 
  return <Line data={data} height={height} width={width} />;
};

export default CustomLineChart;

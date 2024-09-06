import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import useWindowSize from "../../../hooks/use-windowsize";
import { MyDataContext } from "../../../context/DataContext";
import { MyConsoleContext } from "../../../context/ConsoleContext";
import useLineChartColors from "../../../hooks/use-linechartcolors"; // hasonlóan az areachartcolors hookhoz
import useLineChartData from "../../../hooks/use-linechartdata"; // hasonlóan az areachartdata hookhoz
import CustomLineChart from "./CustomLineChart"; // az új komponens neve

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChartComponent = () => {
  const { users } = MyDataContext();
  const { filteredData, filterTable, statusTable } = MyConsoleContext();
  const { width, height } = useWindowSize();
  const colors = useLineChartColors(users.style); // Line chart színek
  const chartData = useLineChartData(filteredData, filterTable.displayMode, colors); // Line chart adatok

  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1200,
    "2xl": 1536,
  };

  const chartWidth = width >= breakpoints.xl ? width : width + 1700;
  const chartHeight = width >= breakpoints.xl ? height : height + 2200;

  return (
    <div
      className="flex flex-col items-center justify-center"
      style={
        width >= breakpoints.xl
          ? { width: width - 600, height: height - 100 }
          : { width: width, height: height - 200 }
      }
    >
      <CustomLineChart
        filteredData={filteredData}
        filterTable={filterTable}
        data={chartData}
        colors={colors}
        statusTable={statusTable}
        height={chartHeight}
        width={chartWidth}
      />
    </div>
  );
};

export default LineChartComponent;



import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  TimeScale,      // <<< Hozzáadva a dátum tengelyhez
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import 'chartjs-adapter-date-fns'; // <<< Hozzáadva az adapter
import useWindowSize from "../../../hooks/use-windowsize";
import { MyDataContext } from "../../../context/DataContext";
import useAreaChartColors from "../../../hooks/use-areachartcolors"; // Újrahasználhatjuk ezt, ha a színek jók
// import useBarhartColors from "../../../hooks/use-barchartcolors"; // Vagy használhatunk külön BarChart színeket
import useBarChartData from "../../../hooks/useBarChartData"; // <<< Az ÚJ adat hook
import CustomBarChart from "./CustomBarChart"; // A belső chart komponens

// Regisztráljuk a szükséges elemeket, beleértve a TimeScale-t is
ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,      // <<< Regisztrálva
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Fogadja a config és displayedData propokat!
const BarChartComponent = ({ config, displayedData }) => {
  const { users } = MyDataContext(); // Stílushoz továbbra is kellhet
  const { width, height } = useWindowSize();

  // Színek lekérése - Használhatjuk az AreaChart színeit, vagy létrehozhatunk egy useBarChartColors hookot
  const colors = useAreaChartColors(users?.style); // Példa: AreaChart színek újrahasználata
  console.log("BarChartComponent: colors", colors);
  console.log("BarChartComponent: displayedData", displayedData);

  // Az ÚJ useBarChartData hook hívása a megfelelő propokkal
  const chartData = useBarChartData(
    displayedData, // A már feldolgozott és limitált adatok
    colors,        // A színek
    config         // Az aktuális config
  );

  // Breakpointok (változatlan)
  const breakpoints = {
    sm: 640, md: 768, lg: 1024, xl: 1200, "2xl": 1536,
  };

  // Méretezés (változatlan - bár lehet, hogy ezt is át kéne gondolni)
  const chartWidth = width >= breakpoints.xl ? width : width + 1700;
  const chartHeight = width >= breakpoints.xl ? height : height + 2200;

  return (
    <div
      // A container stílusát lehet egyszerűsíteni, ha nem kell a fix méret
      className="flex flex-col items-center justify-center"
       style={
        width >= breakpoints.xl
          ? { width: width - 600, height: height - 100 }
          : { width: width, height: height - 200 }
      }
    >
      {/* A CustomBarChart hívása a REFKTORÁLT propokkal */}
      <CustomBarChart
        config={config}              // <<< Átadjuk a configot
        data={chartData}             // <<< Az új hook által generált adatok
        colors={colors}              // <<< A színek
        displayedData={displayedData} // <<< Az eredeti (limitált) adatok a tooltiphez
        height={chartHeight}
        width={chartWidth}
        // Régi propok (statusTable, filterTable, filteredData) eltávolítva
      />
    </div>
  );
};

export default BarChartComponent;


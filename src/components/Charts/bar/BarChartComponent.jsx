/*import {
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

export default BarChartComponent;*/

// src/components/Charts/bar/BarChartComponent.jsx
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  TimeScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import 'chartjs-adapter-date-fns';
import { MyDataContext } from "../../../context/DataContext";
import useAreaChartColors from "../../../hooks/use-areachartcolors"; // Vagy használhatsz useBarChartColors-t
import useBarChartData from "../../../hooks/useBarChartData";
import CustomBarChart from "./CustomBarChart";
// import useWindowSize from "../../../hooks/use-windowsize"; // <<< ELTÁVOLÍTVA

// Regisztráljuk a szükséges elemeket
ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

/**
 * Fő wrapper komponens a Bar Chart megjelenítéséhez.
 * Egyszerűsített verzió: Nem használ useWindowSize-ot, kitölti a szülő konténert.
 * @param {object} props - Propok.
 * @param {object} props.config - Aktuális config.
 * @param {Array<object>} props.displayedData - A feldolgozott, megjelenítendő (limitált) adatok.
 * @returns {JSX.Element} A renderelt BarChart komponens.
 */
const BarChartComponent = ({ config, displayedData }) => {
  const { users } = MyDataContext();
  // Használhatod az AreaChart színeit, vagy egy dedikált useBarChartColors hookot
  const colors = useAreaChartColors(users?.style);
  const chartData = useBarChartData(displayedData, colors, config);

  return (
    // Külső div: Kitölti a szülőjét (pl. GraphContent -> CenterPanel belső div)
    <div className="w-full h-full flex flex-col items-center justify-center">
      {/* A belső komponens megkapja a props-okat, de width/height nélkül,
          mivel a Chart.js responsive módja kezeli a méretet a szülő div alapján */}
      <CustomBarChart
        config={config}
        displayedData={displayedData}
        data={chartData}
        colors={colors}
        // height és width propok eltávolítva
      />
    </div>
  );
};

export default BarChartComponent;


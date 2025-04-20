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
import useWindowSize from "../../../hooks/use-windowsize";
import { MyDataContext } from "../../../context/DataContext";
import useAreaChartColors from "../../../hooks/use-areachartcolors";
import useAreaChartData from "../../../hooks/use-areachartdata"; // Ezt a hookot is lehet, hogy módosítani kell!
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

// Fogadja az ÚJ propokat
const AreaChartComponent = ({ config, displayedData }) => {
  const { users } = MyDataContext(); // Ez maradhat, ha a style kell
  const { width, height } = useWindowSize();
  const colors = useAreaChartColors(users?.style); // Biztonságosabb hozzáférés
console.log("AreaChartComponent: colors",colors)
console.log("AreaChartComponent displayedData: ",displayedData)
  // A useAreaChartData hooknak most az ÚJ propokat adjuk át.
  // A 'displayMode' már nem feltétlenül releváns az Area chartnál az új logikában.
  // Lehet, hogy a useAreaChartData-nak csak a displayedData és a colors kell.
  // Ellenőrizd a useAreaChartData hookot, hogy mire van szüksége!
  // Itt most feltételezem, hogy csak az adatokra és a színekre van szüksége.
  const chartData = useAreaChartData(
    displayedData, // A már feldolgozott és leszűrt adatok
    // config.displayMode, // Valószínűleg nem kell már itt
    colors,
    config
  );

  const breakpoints = {
    sm: 640, md: 768, lg: 1024, xl: 1200, "2xl": 1536,
  };

  const chartWidth = width >= breakpoints.xl ? width : width + 1700; // Ez a logika fura, de maradjon egyelőre
  const chartHeight = width >= breakpoints.xl ? height : height + 2200; // Ez a logika fura, de maradjon egyelőre

  return (
    <div
      className=" flex flex-col items-center justify-center "
      style={
        width >= breakpoints.xl
          ? { width: width - 600, height: height - 100 }
          : { width: width, height: height - 200 }
      }
    >
      {/* A CustomAreaChartLine-nak is az ÚJ propokat adjuk át */}
      <CustomAreaChartLine
        config={config}              // ÚJ
        displayedData={displayedData} // Valószínűleg a chartData (data prop) elég neki
        data={chartData}             // A useAreaChartData által generált adatok
        colors={colors}
        height={chartHeight}
        width={chartWidth}
        // Régi propok eltávolítva: statusTable, filterTable, filteredData
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

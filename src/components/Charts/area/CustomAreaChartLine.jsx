// src/components/Charts/area/CustomAreaChartLine.jsx

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, TimeScale, PointElement, Filler
} from "chart.js";
import "chartjs-adapter-date-fns";
// === IMPORT JAVÍTÁSA: Ellenőrizd, hogy a fájlnév PONTOSAN ez-e az 'area' mappában! ===
import { areachartlineoptions } from "./areachartlineoptions"; // <<<--- Explicit .js kiterjesztés hozzáadva
// =================================================================================

ChartJS.register(
  Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, TimeScale, PointElement, Filler
);

/**
 * Wrapper komponens a react-chartjs-2 <Line> komponense köré.
 * Felelős az opciók lekéréséért és a <Line> komponens rendereléséért.
 * @param {object} props - A komponens propjai.
 * @param {object} props.config - Az aktuális grafikon konfigurációs objektum.
 * @param {object} props.data - A Chart.js számára formázott adat objektum ({ labels: [], datasets: [] }).
 * @param {object} props.colors - A diagram színeit tartalmazó objektum.
 * @param {number | string} props.width - A diagram szélessége.
 * @param {number | string} props.height - A diagram magassága.
 * @param {Array<object>} props.displayedData - Az eredeti (feldolgozott, limitált) adatok tömbje (tooltiphez).
 * @returns {JSX.Element} A renderelt <Line> diagram komponens.
 */
const CustomAreaChartLine = ({
  config,
  data,
  colors,
  width,
  height,
  displayedData
}) => {

  // Meghívjuk az opciókat generáló függvényt a megfelelő paraméterekkel
  const options = areachartlineoptions(
    colors,        // Átadott színek
    config,        // Átadott konfiguráció
    displayedData  // Átadott eredeti adatok
   );

  // Visszaadjuk a react-chartjs-2 <Line> komponenst a kapott adatokkal és opciókkal
  return <Line data={data} options={options} height={height} width={width} />;
};

// Komponens exportálása
export default CustomAreaChartLine;

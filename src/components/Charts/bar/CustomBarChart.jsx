// src/components/Charts/bar/CustomBarChart.jsx (JAVÍTOTT)

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS, CategoryScale, LinearScale, TimeScale, BarElement, Title, Tooltip, Legend
} from "chart.js";
import 'chartjs-adapter-date-fns';
import { barchartOptions } from "./barchartOptions"; // Import a helyi fájlból

ChartJS.register(
  CategoryScale, LinearScale, TimeScale, BarElement, Title, Tooltip, Legend
);

// Fogadja az ÚJ propokat
const CustomBarChart = ({
  config,         // <<< Ezt kapja
  data,
  colors,
  width,
  height,
  displayedData   // <<< Ezt kapja
}) => {

  // === JAVÍTÁS ITT: Helyes propok átadása az options függvénynek ===
  const options = barchartOptions(
    colors,        // Színek
    config,        // Az aktuális config objektum
    displayedData  // A tooltiphez szükséges adatok
    // Régi propok (statusTable, filterTable, filteredData) eltávolítva
  );
  // ============================================================

  // Renderelés változatlan
  return <Bar data={data} options={options} height={height} width={width} />;
};

export default CustomBarChart;

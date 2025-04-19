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
// A chartoptions import marad, de a függvényt majd módosítjuk
import { areachartlineoptions } from "../../../locales/chartoptions";

ChartJS.register(
  Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale
);

// Fogadja az ÚJ propokat
const CustomAreaChartLine = ({
  config, // <<<--- ÚJ
  data,   // Ez a formázott adat a useAreaChartData-ból
  colors,
  width,
  height,
  // Régi propok eltávolítva: statusTable, filterTable, filteredData
}) => {

  // Az areachartlineoptions-nak most a config-ot adjuk át
  // A filterTable és filteredData helyett a config-ból származó infókat használja majd
  const options = areachartlineoptions(
    colors,
    config // <<<--- Átadjuk a config-ot
    // filteredData már nem kell itt, a tooltip callback a 'data'-ból dolgozhat
  );

  return <Line data={data} options={options} height={height} width={width} />;
};

export default CustomAreaChartLine;


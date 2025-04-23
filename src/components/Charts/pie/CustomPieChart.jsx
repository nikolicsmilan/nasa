// src/components/Charts/pie/CustomPieChart.jsx
import { Pie } from "react-chartjs-2"; // Pie komponenst használunk (lehetne Doughnut is)
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend, Title
} from "chart.js"; // Pie charthoz szükséges alap elemek
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Adatcímke plugin importálása
import { piechartOptions } from "./chartOptions"; // Helyi chart opciók importálása

// Szükséges elemek és a Datalabels plugin regisztrálása
ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

/**
 * Wrapper komponens a react-chartjs-2 <Pie> komponense köré.
 * @param {object} props - Propok.
 * @param {object} props.config - Aktuális config.
 * @param {object} props.data - Chart.js data objektum a hookból.
 * @param {object} props.colors - Szín objektum.
 * @returns {JSX.Element} A renderelt Pie diagram.
 */
const CustomPieChart = ({ config, data, colors }) => { // displayedData itt nem kell, mert az options már megkapta

  // Opciók generálása a piechartOptions függvénnyel
  // Átadjuk a data objektumot is, mert a datalabels formatter használhatja
  const options = piechartOptions(colors, config, data);

  // Rendereljük a Pie komponenst
  return <Pie data={data} options={options} />;
};

// Exportálás
export default CustomPieChart;
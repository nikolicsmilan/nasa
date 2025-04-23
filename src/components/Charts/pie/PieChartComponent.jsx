// src/components/Charts/pie/PieChartComponent.jsx

import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js"; // Alap elemek
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Plugin import
import useWindowSize from "../../../hooks/use-windowsize"; // Ablakméret hook
import { MyDataContext } from "../../../context/DataContext"; // Adat kontextus
import useAreaChartColors from "../../../hooks/use-areachartcolors"; // Szín hook (újrahasználjuk)
import usePieChartData from "../../../hooks/use-piechartdata"; // Az ÚJ Pie adat hook
import useProcessedGraphData from "../../../hooks/use-processed-graph-data"; // <<< ÚJ: A teljes adat feldolgozásához
import CustomPieChart from "./CustomPieChart"; // Belső chart komponens

// Regisztráció (főleg a plugin miatt fontos itt is, vagy globálisan)
ChartJS.register(ArcElement, Tooltip, Legend, Title, ChartDataLabels);

/**
 * Fő wrapper komponens a Pie Chart megjelenítéséhez.
 * Felelős az adatok előkészítéséért (a TELJES adathalmazból) és a CustomPieChart rendereléséért.
 * @param {object} props - Propok.
 * @param {object} props.config - Aktuális config.
 * @param {object} props.sumObject - A TELJES, nyers adat objektum ({data: [], count: ...}) a Graph.jsx-ből.
 * @returns {JSX.Element} A renderelt PieChart komponens.
 */
const PieChartComponent = ({ config, sumObject }) => { // <<< sumObject-et kap propként
  const { users } = MyDataContext(); // Felhasználói stílus
  const { width } = useWindowSize(); // Csak a szélesség kell a méretezéshez
  const colors = useAreaChartColors(users?.style); // Színek lekérése

  // 1. Először feldolgozzuk a TELJES adatot a _parsedValue hozzáadásával, de limitálás NÉLKÜL
  //    Ehhez módosítani kell a useProcessedGraphData hookot VAGY annak logikáját itt használni.
  //    Egyszerűbb megoldás: használjuk a hookot, de a configból kivesszük a limitet neki.
  const configForFullData = { ...config, displayLimit: sumObject?.data?.length || Infinity }; // Ideiglenes config limit nélkül
  const allProcessedData = useProcessedGraphData(sumObject, configForFullData); // Lefuttatjuk a feldolgozást limit nélkül
  console.log(">>> DEBUG [PieChartComponent] allProcessedData for Pie Hook:", allProcessedData);
  // 2. Az ÚJ usePieChartData hook hívása a TELJES feldolgozott adattal
  const chartData = usePieChartData(allProcessedData, config, colors);
  const breakpoints = { xl: 1200 };
  // Debug log
  // console.log("PieChartComponent: chartData", chartData);

// === KÍSÉRLET A MÉRETEZÉSRE ===
  // Próbáljuk meg a Chart komponensnek szánt méreteket használni,
  // de lehet, hogy %-os érték jobb lenne a szélességre.
  const chartContainerStyle =
    width >= breakpoints.xl
      ? { width: '80%', height: '80%', margin: 'auto' } // Nagy képernyőn %-os szélesség/magasság
      : { width: '95%', height: 'auto', margin: 'auto' }; // Kisebb képernyőn, magasság auto

  // Vagy próbálj fixebb méretet, ami közelít a CenterPanel-hez:
  // const chartContainerStyle =
  //   width >= breakpoints.xl
  //     ? { width: width - 700, height: height - 250 } // Kisebb margókkal, mint a CenterPanel
  //     : { width: width - 50, height: height - 300 };
  // =============================

  return (
    <div className="flex flex-col items-center justify-center w-full" style={chartContainerStyle}>
      {/* Ellenőrizzük, hogy van-e adat a chartData-ban (főleg a dataset adatai) */}
      {chartData && chartData.datasets && chartData.datasets[0]?.data.length > 0 ? (
        <CustomPieChart
          config={config}
          data={chartData}
          colors={colors}
        />
      ) : (
        // Üzenet, ha az adott dataType-hoz nincs implementálva a kategorizálás, vagy nincs adat
        <p className="text-neutral-500 p-4 text-center">
          Pie chart categorization not implemented for '{config?.dataType}' or no data available.
        </p>
      )}
    </div>
  );
};

export default PieChartComponent;

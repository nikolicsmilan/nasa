import {
  Chart as ChartJS, // Chart.js mag könyvtár importálása ChartJS néven
  CategoryScale, // X tengelyhez (kategóriák, pl. nevek) szükséges skála importálása
  LinearScale, // Y tengelyhez (numerikus értékek) szükséges skála importálása
  TimeScale, // Y tengelyhez (dátum értékek) szükséges skála importálása
  PointElement, // A diagramon lévő pontok megjelenítéséhez szükséges elem
  LineElement, // A vonal megjelenítéséhez szükséges elem
  Title, // A diagram címének megjelenítéséhez szükséges plugin
  Tooltip, // Az egérmutatóra megjelenő tooltiphez szükséges plugin
  Legend, // A jelmagyarázathoz szükséges plugin (bár most ki van kapcsolva)
  Filler, // A vonal alatti terület kitöltéséhez szükséges plugin
} from "chart.js"; // Chart.js könyvtárból
import "chartjs-adapter-date-fns"; // Chart.js adapter importálása a date-fns könyvtárral való dátumkezeléshez
import useWindowSize from "../../../hooks/use-windowsize"; // Custom hook az ablakméret figyeléséhez
import { MyDataContext } from "../../../context/DataContext"; // Adat kontextus importálása (felhasználói beállításokhoz)
import useAreaChartColors from "../../../hooks/use-areachartcolors"; // Custom hook a területdiagram színeinek lekéréséhez
import useAreaChartData from "../../../hooks/use-areachartdata"; // Custom hook a Chart.js számára szükséges adatformátum generálásához
import CustomAreaChartLine from "./CustomAreaChartLine"; // A tényleges <Line> komponenst tartalmazó wrapper importálása

// A szükséges Chart.js modulok regisztrálása a könyvtárban
ChartJS.register(
  CategoryScale, // Kategória skála regisztrálása
  LinearScale, // Lineáris skála regisztrálása
  TimeScale, // Időskála regisztrálása
  PointElement, // Pont elem regisztrálása
  LineElement, // Vonal elem regisztrálása
  Title, // Cím plugin regisztrálása
  Tooltip, // Tooltip plugin regisztrálása
  Legend, // Legenda plugin regisztrálása
  Filler // Kitöltő plugin regisztrálása
);

// Az AreaChartComponent fő komponens definíciója
// @param {object} config - Az aktuális grafikon konfigurációs objektum.
// @param {Array<object>} displayedData - A feldolgozott, megjelenítendő adatok tömbje.
// @returns {JSX.Element} A renderelt AreaChart komponens.
const AreaChartComponent = ({ config, displayedData }) => {
  const { users } = MyDataContext(); // Felhasználói beállítások (pl. stílus) kiolvasása a DataContext-ből
  const { width, height } = useWindowSize(); // Aktuális ablakméret kiolvasása a custom hookkal
  const colors = useAreaChartColors(users?.style); // Diagram színeinek lekérése a felhasználó stílusa alapján
  // Debug logok (fejlesztéshez hasznosak)
  // console.log("AreaChartComponent: colors", colors);
  // console.log("AreaChartComponent displayedData: ", displayedData);

  // A Chart.js számára szükséges 'data' objektum generálása a useAreaChartData hook segítségével
  const chartData = useAreaChartData(
    displayedData, // A már feldolgozott, rendezett és limitált adatok
    colors, // A téma alapján generált szín
    config // Az aktuális grafikon konfiguráció
  );

  // Töréspontok definiálása a reszponzív méretezéshez
  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1200,
    "2xl": 1536, // Különböző képernyőszélesség értékek pixelben
  };

  // Diagram szélességének számítása az ablakméret alapján (a logika itt még finomítható)
  const chartWidth = width >= breakpoints.xl ? width : width + 1700;
  // Diagram magasságának számítása az ablakméret alapján (a logika itt még finomítható)
  const chartHeight = width >= breakpoints.xl ? height : height + 2200;

  // A komponens JSX struktúrájának visszaadása
  return (
    // Külső div a chart pozicionálásához és alapvető stílusához
    <div
      className=" flex flex-col items-center justify-center " // Flexbox központosítás
      // Dinamikus stílus az ablakméret alapján (a konténer méretének beállítása)
      style={
        width >= breakpoints.xl
          ? { width: width - 600, height: height - 150 } // Nagyobb képernyőn
          : { width: width, height: height - 200 } // Kisebb képernyőn
      }
    >
      {/* A belső CustomAreaChartLine komponens renderelése, átadva neki a szükséges propokat */}
      <CustomAreaChartLine
        config={config} // Aktuális konfiguráció átadása
        displayedData={displayedData} // Eredeti (limitált) adatok átadása (tooltiphez)
        data={chartData} // A Chart.js formátumú adatok átadása
        colors={colors} // Színek átadása
        height={chartHeight} // Kiszámított magasság átadása
        width={chartWidth} // Kiszámított szélesség átadása
      />
    </div>
  );
};

// Az AreaChartComponent exportálása alapértelmezettként
export default AreaChartComponent;

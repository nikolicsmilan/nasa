import { useState, useEffect } from "react"; // React hookok importálása

// Custom Hook a Chart.js AreaChart számára szükséges adatstruktúra előállítására.
// @param {Array<object>} displayedData - A már feldolgozott, rendezett, limitált adatok tömbje.
// @param {object} colors - A diagram színeit tartalmazó objektum (pl. { tooltip: '...', legend: '...' }).
// @param {object} config - Az aktuális grafikon konfigurációs objektum (pl. { dataType: '...' }).
// @returns {object} Chart.js data objektum ({ labels: [], datasets: [] }).
const useAreaChartData = (displayedData, colors, config) => {
  // State a generált Chart.js adatobjektum tárolására
  const [chartData, setChartData] = useState({
    labels: [], // Kezdetben üres címkék
    datasets: [], // Kezdetben üres adatsorok
  });

  // useEffect hook, ami újraszámolja a chartData-t, ha a függőségek változnak
  useEffect(() => {
    // Elsődleges szín meghatározása a tooltip színéből, türkiz fallbackkel
    const primaryColor = colors?.tooltip || "rgb(34, 211, 238)";
    // Háttérszín generálása áttetsző verzióként
    const backgroundColor = primaryColor
      .replace("rgb(", "rgba(")
      .replace(")", ", 0.3)");
    // Adattípus kiolvasása a configból a labelhez
    const dataType = config?.dataType;
    // Label formázása (nagy kezdőbetűvel) vagy 'Value' alapértelmezett
    const capitalizedLabel = dataType
      ? dataType.charAt(0).toUpperCase() + dataType.slice(1)
      : "Value";
    // Ellenőrizzük, hogy van-e megjelenítendő adat
    if (!displayedData || displayedData.length === 0 || !config) {
      // config ellenőrzés hozzáadva
      setChartData({ labels: [], datasets: [] }); // Ha nincs, üres adatstruktúrát állítunk be
      return; // Kilépünk a hookból
    }

    // Beállítjuk a chartData state-et a formázott adatokkal
    setChartData({
      // Címkék (X tengely): Az aszteroidák nevei vagy indexelt placeholder
      labels: displayedData.map(
        (d, index) =>
          // Zárójelek eltávolítása
          // Ha a bal oldal "truthy" (nem null, undefined, false, 0, NaN, ""),
          // akkor a || operátor a bal oldali értéket (a tisztított fullname-et) adja vissza.
          // Ha a bal oldal "falsy" (null, undefined, ""),
          // akkor a || operátor a jobb oldali értéket (`Item [index+1]`) adja vissza.
          d.fullname?.replace(/^\((.*)\)$/, "$1").trim() || `Item ${index + 1}`
      ),
      // Adatsorok (csak egy van ebben az esetben)
      datasets: [
        {
          label: capitalizedLabel, // Az adatsor neve (pl. "Impacts")
          data: displayedData.map((d) => d._parsedValue), // Az Y értékek (parse-olt számok vagy Date objektumok)
          // Parsing objektum (Chart.js 3+): Segít, ha a 'data' tömb objektumokat tartalmazna
          parsing: {
            yAxisKey: "y", // Megmondja, hogy az 'y' kulcsot keresse (ha objektum lenne a data-ban)
          },
          // Vizuális beállítások
          borderColor: primaryColor, // Vonal színe (nem áttetsző)
          backgroundColor: backgroundColor, // Terület kitöltő színe (áttetsző)
          borderWidth: 1.5, // Vonal vastagsága
          fill: true, // Terület kitöltése engedélyezve
          tension: 0.8, // Vonal görbületének mértéke (0 = szögletes, 1 = nagyon íves)
          pointRadius: 10, // Adatpontok mérete a vonalon (kicsi)
          pointHoverRadius: 1, // Adatpontok mérete hover esetén
        },
      ],
    });

    // console.log("useAreaChartData - Returning:", JSON.stringify(chartData)); // Debug log
  }, [displayedData, colors, config]); // Függőségi tömb: újraszámol, ha ezek változnak

  // Visszaadjuk az aktuális chartData state-et
  return chartData;
};

// Hook exportálása
export default useAreaChartData;

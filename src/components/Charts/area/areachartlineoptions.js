// Importáljuk a date-fns formázó függvényét
import { format } from "date-fns";

/**
 * Generálja a Chart.js opciókat az Area és Line típusú diagramokhoz.
 * Kezeli a dinamikus címkéket, tooltipet, tengelytípusokat (beleértve az időskálát).
 * @param {object} colors - A diagram színeit tartalmazó objektum (pl. { tooltip: '...', legend: '...' }).
 * @param {object} config - Az aktuális grafikon konfigurációs objektum (pl. { dataType: '...', dataKey: '...', displayLimit: ... }).
 * @param {Array<object>} displayedData - Az eredeti (feldolgozott, limitált) adatok tömbje (tooltiphez).
 * @returns {object} A Chart.js options objektuma.
 */
export const areachartlineoptions = (colors, config, displayedData) => {
  // Biztonságosan kiolvassuk a configból a szükséges értékeket
  const { dataType, dataKey, displayLimit } = config || {}; // displayLimit is kellhet a maxTicksLimit-hez
  // Ha nincs config vagy dataType, alapértelmezett opciókat adunk vissza
  if (!config || !dataType || !dataKey) {
    return { responsive: true, maintainAspectRatio: false };
  }

  // Biztonságos tömb kezelése és szín alapértékek
  const safeDisplayedData = Array.isArray(displayedData) ? displayedData : [];
  const tooltipColor = colors?.tooltip || "#FFFFFF";
  const legendColor = colors?.legend || "#FFFFFF";

  // Megnézzük, hogy az Y tengely dátum alapú lesz-e
  const isDateAxis = dataKey === "last_obs";

  // Visszaadjuk a teljes Chart.js options objektumot
  return {
    responsive: true, // Diagram alkalmazkodik a konténer méretéhez
    maintainAspectRatio: false, // Ne tartsa meg az alapértelmezett képarányt (fontos a magasság/szélesség beállításához)
    parsing: false, // Kikapcsoljuk a Chart.js saját adatértelmezését (mivel előre feldolgozott adatokat adunk)
    plugins: {
      // Beépülő modulok konfigurációja
      tooltip: {
        // Tooltip (buboréksúgó) beállításai
        enabled: true, // Tooltip engedélyezve
        callbacks: {
          // Egyedi függvények a tooltip tartalmának generálásához
          label: function (context) {
            // A fő tooltip címke (általában az érték) formázása
           // let datasetLabel = context.dataset.label || ""; // Adatsor neve (pl. "Impacts")
            const yValue = context.parsed?.y; // A pont parse-olt Y értéke pl ip: (0.01)
            const dataIndex = context.dataIndex; // A pont indexe az adatsorban
           // console.log("dataIndex: ", dataIndex);
            const originalItem = safeDisplayedData[dataIndex]; // Az eredeti adatobjektum kinyerése az index alapján
            const fullname = originalItem?.fullname || "Unknown Asteroid"; // Aszteroida nevének kinyerése
            const cleanedFullname = fullname.replace(/^\((.*)\)$/, "$1").trim(); // Zárójelek eltávolítása a névből

            let formattedValue = "N/A"; // Alapértelmezett érték, ha valami hiba van
            if (yValue !== null && yValue !== undefined) {
              // Csak akkor formatálunk, ha van érvényes Y érték
              if (isDateAxis && originalItem?._parsedValue instanceof Date) {
                // Ha dátum tengely és az érték Date objektum...
                try {
                  // ...formázzuk olvasható dátummá a date-fns segítségével
                  formattedValue = format(
                    originalItem._parsedValue, // A Date objektumot használjuk
                    "yyyy-MM-dd" // Kívánt formátum
                  );
                } catch (e) {
                  // Hibakezelés, ha a formázás nem sikerül
                  console.error("Error formatting date for tooltip:", e);
                  formattedValue = "Invalid Date";
                }
              } else {
                // Ha nem dátum, akkor szám...
                // ...formázzuk helyi formátumra (pl. ezres tagolás)
                formattedValue = yValue.toLocaleString();
              }
              // Visszaadjuk a tooltip sorait egy tömbben
              return [`${cleanedFullname}`, `${dataType}: ${formattedValue}`];
            }
            // Ha nem volt érvényes Y érték
            return [`${cleanedFullname}`, `${dataType}: N/A`];
          },
        },
        // Tooltip vizuális stílusai
       backgroundColor: "rgba(0, 0, 0, 0.8)", // Fekete, áttetsző háttér
        titleFont: { size: 14, weight: "bold" }, // Cím betűmérete és vastagsága
        bodyFont: { size: 12, lineHeight: 1.4 }, // Törzs betűmérete és sorköze
        footerFont: { size: 10 }, // Lábjegyzet betűmérete
        padding: 8, // Belső margó
        displayColors: false, // Ne jelenjen meg a szín-négyzet az érték mellett
        borderColor: tooltipColor, // Keret színe
        borderWidth: 1, // Keret vastagsága
        caretSize: 6, // A kis nyíl mérete
        cornerRadius: 4, // Lekerekítés
        xAlign: "center", // Vízszintes igazítás (lehet 'left', 'right')
        yAlign: "bottom", // Függőleges igazítás (lehet 'top', 'center')
      },
      legend: {
        // Jelmagyarázat beállításai
        display: false, // Legenda kikapcsolva (mivel csak egy adatsor van)
        labels: {
          // Címkék stílusa (ha látható lenne)
          color: legendColor,
          boxWidth: 12,
          padding: 15,
          font: { size: 12 },
        },
        position: "top", // Elhelyezkedés (ha látható lenne)
        align: "center", // Igazítás (ha látható lenne)
      },
      title: {
        // A diagram fő címének beállításai
        display: true, // Cím megjelenítése
        text: `${dataType.charAt(0).toUpperCase() + dataType.slice(1)}`, // Cím szövege (az aktuális adattípus nagy kezdőbetűvel)
        color: legendColor, // Cím színe
        font: { size: 26, weight: "bold" }, // Cím betűmérete és vastagsága
        position: "top", // Elhelyezkedés
        align: "center", // Igazítás
        padding: { top: 20, bottom: 20 }, // Térköz a cím felett/alatt
      },
    },
    scales: {
      // Tengelyek beállításai
      // X tengely (kategóriák - aszteroida nevek)
      x: {
        type: "category", // Tengely típusa
        ticks: {
          // Tengely címkéinek (nevek) beállításai
          color: legendColor, // Szín
          maxRotation: 45, // Maximális elforgatás (fokban)
          minRotation: 0, // Minimális elforgatás
          autoSkip: true, // Automatikus címkekihagyás, ha túl sűrű lenne
          maxTicksLimit: displayLimit || 15, // Max megjelenő címkék száma (a configból vagy 15)
        },
        grid: {
          // Rácsvonalak beállításai ezen a tengelyen
          color: "rgba(128, 128, 128, 0.2)", // Rácsvonal színe
          borderColor: "rgba(128, 128, 128, 0.4)", // Tengelyvonal színe
        },
        title: {
          // X tengely feliratának beállításai
          display: false, // Felirat megjelenítése
          text: "Asteroid", // Felirat szövege
          color: legendColor, // Felirat színe
        },
      },
      // Y tengely (értékek - szám vagy dátum)
      y: {
        type: isDateAxis ? "time" : "linear", // Típus dinamikus beállítása
        ticks: {
          // Tengely címkéinek (értékek) beállításai
          color: legendColor, // Szín
          padding: 5, // Térköz a tengely és a címkék között
          source: isDateAxis ? "auto" : undefined, // Dátumnál az 'auto' segít a címkegenerálásban
        },
        title: {
          // Y tengely feliratának beállításai
          display: true, // Felirat megjelenítése
          text: `${dataType.charAt(0).toUpperCase() + dataType.slice(1)}`, // Felirat szövege (aktuális adattípus)
          color: legendColor, // Felirat színe
          font: { size: 12 }, // Betűméret
        },
        grid: {
          // Rácsvonalak ezen a tengelyen (ezek a vízszintes rácsok)
          color: "rgba(128, 128, 128, 0.2)", // Rácsvonal színe
          borderColor: "rgba(128, 128, 128, 0.4)", // Tengelyvonal színe
        },
        time: isDateAxis // Csak akkor adjuk meg, ha időskála
          ? {
              // Időskála specifikus beállításai
              tooltipFormat: "yyyy-MM-dd", // Dátum formátuma a tooltipben (ezt a callback felülírja)
              unit: "year", // Alapértelmezett időegység a tengelyen (Chart.js válthat)
              displayFormats: { year: "yyyy" }, // Dátum megjelenítési formátuma a tengelyen
            }
          : undefined, // Ha nem időskála, nincs szükség erre
      },
    },
    interaction: {
      // Interakciók (pl. hover) beállításai
      mode: "index", // Mód: 'index' (azonos indexű pontok kiemelése) vagy 'nearest', 'point' stb.
      intersect: false, // Ne csak akkor aktiválódjon a tooltip, ha pont a pont fölött van az egér
      axis: "x", // Melyik tengely mentén keressen pontokat a tooltip (AreaChartnál 'x')
    },
    animation: {
      // Animációk beállításai
      duration: 900, // Animáció időtartama ms-ban
      easing: "easeInOutQuad", // Animáció típus (easing function)
    },
  };
};
// Itt nincs más export, csak az areachartlineoptions

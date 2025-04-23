// src/components/Charts/pie/chartOptions.js
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Importáljuk a datalabels plugint

/**
 * Generálja a Chart.js opciókat a Pie és Doughnut diagramokhoz.
 * Tartalmazza a tooltip, legenda, cím és datalabels plugin beállításait.
 * @param {object} colors - A diagram színeit tartalmazó objektum.
 * @param {object} config - Az aktuális grafikon konfigurációs objektum.
 * @param {object} chartData - A usePieChartData által visszaadott { labels, datasets } objektum.
 * @returns {object} A Chart.js options objektuma.
 */
export const piechartOptions = (colors, config, chartData) => {
  const { dataType } = config || {}; // Adattípus a címhez
  const legendColor = colors?.legend || '#FFFFFF'; // Szín a legendához és címkékhez
  const tooltipColor = colors?.tooltip || '#FFFFFF'; // Szín a tooltip keretéhez

  return {
    responsive: true, // Alkalmazkodás a konténerhez
    maintainAspectRatio: false, // Méretarány felülbírálása

    plugins: { // Plugin beállítások
      tooltip: { // Tooltip konfiguráció
        enabled: true, // Engedélyezve
        backgroundColor: "rgba(0, 0, 0, 0.8)", // Háttérszín
        titleFont: { size: 14, weight: "bold" }, // Cím betűtípusa
        bodyFont: { size: 12, lineHeight: 1.4 }, // Törzs betűtípusa
        padding: 8, // Belső térköz
        borderColor: tooltipColor, // Keretszín
        borderWidth: 1, // Keretvastagság
        callbacks: { // Egyedi tartalom generálása
          // Tooltip címke: Kategória neve, darabszám és százalék
          label: function(context) {
            const label = context.label || ''; // Kategória neve
            const value = context.parsed || 0; // Érték (darabszám)
            // Összes darabszám kiszámítása a százalékhoz
            const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
            // Százalék kiszámítása és formázása
            const percentage = total > 0 ? ((value / total) * 100).toFixed(1) + '%' : '0.0%';
            // Formázott string visszaadása
            return `${label}: ${value.toLocaleString()} (${percentage})`;
          }
        }
      },
      legend: { // Legenda konfiguráció
        display: true, // Legenda megjelenítése
        position: 'bottom', // Elhelyezés alul
        labels: { // Címkék stílusa
          color: legendColor, // Szín
          padding: 20, // Térköz a címkék között
          font: { size: 11 }, // Betűméret
          boxWidth: 12, // Szín-négyzet szélessége
        },
      },
      title: { // Cím konfiguráció
        display: true, // Megjelenítés
        text: `${dataType ? dataType.charAt(0).toUpperCase() + dataType.slice(1) : 'Data'} Distribution`, // Dinamikus cím
        color: legendColor, // Szín
        font: { size: 16, weight: 'bold' }, // Betűstílus
        padding: { top: 15, bottom: 25 }, // Térköz
      },
      datalabels: { // chartjs-plugin-datalabels konfiguráció
        display: true, // Engedélyezzük a címkék megjelenítését a szeleteken/kívül
        // Mi jelenjen meg címkeként
        formatter: (value, context) => {
          const label = context.chart.data.labels[context.dataIndex] || ''; // Kategória neve
          // Összes darabszám kiszámítása
          const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
          // Százalék kiszámítása
          const percentage = total > 0 ? ((value / total) * 100) : 0;
          // Csak akkor jelenítjük meg, ha a százalék > 0.1% (nagyon kicsiket nem)
          if (percentage < 0.1) {
            return null; // Ne jelenjen meg címke
          }
          // Kétsoros címke: Név + Százalék
          return `${label}\n${percentage.toFixed(1)}%`;
        },
        color: '#fff', // Címke színe (fehér)
        anchor: 'end', // Horgonypont a szelet külső szélén ('center', 'start')
        align: 'start', // Igazítás a horgonyponthoz képest ('center', 'start', 'end', 'top', 'bottom', szög)
        offset: 15, // Távolság a horgonyponttól (kívülre helyezi)
        borderRadius: 4, // Lekerekítés (ha háttérszínt adnánk)
        // backgroundColor: 'rgba(0, 0, 0, 0.6)', // Opcionális háttér a címkének
        // padding: 4, // Opcionális padding a címkének
        font: { // Betűstílus
          size: 10,
          weight: 'bold',
        },
        // === KIVEZETŐ VONALAK (CONNECTOR) ===
        // Kapcsold be, ha szeretnél vonalat a szelet és a címke között
         // Ezzel kísérletezni kellhet a jó kinézetért
        /*
        connector: {
          display: true, // Vonal megjelenítése
          color: 'rgba(255, 255, 255, 0.5)', // Vonal színe
          thickness: 1, // Vonal vastagsága
          length: 10, // Vonal hossza (opcionális)
        }
        */
        // ===================================
      }
    },
    // Nincs szükség 'scales' (tengelyek) beállításra Pie chart esetén
  };
};
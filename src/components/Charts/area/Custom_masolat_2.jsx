import React from "react";
import { Line } from "react-chartjs-2";

const CustomAreaChartLine = ({
  //Three or one object max min value
  data,
  /*for exmample   {
            label: "Max",
            data: filteredData.map((d) => d.max?.value),
            borderColor: "rgba(136, 132, 216, 1)",
            backgroundColor: colors.area1,
            fill: true,
            tension: 0.4,
          },*/
  colors,
  statusTable,
  width,
  height,
  filterTable,
  filteredData,
}) => {
  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += " ";
            }
            if (context.parsed.y !== null) {
              // Az értéket és a mértékegységet két sorba formázzuk
              const { dataIndex } = context;
              const { displayMode } = filterTable;
              const fullname =
                filteredData[dataIndex][displayMode].name || "Unknown";
              const cleanedFullname = fullname
                .replace(/^\((.*)\)$/, "$1")
                .trim();

              return [
                `${cleanedFullname}`,
                `${label}`,
                `${statusTable.datatype}`, // A mértékegység
                `${context.parsed.y}`, // Az érték
                `${context.parsed.y}`,
              ];
            }
            return label;
          },
        },

        bodyColor: colors.tooltip,
        bodyFont: {
          size: 16,
          lineHeight: 1.5, // Növelhetjük a vonalak közötti távolságot
        },
        titleFont: {
          size: 16, // Tooltip címének betűmérete
          color: colors.tooltip, // Tooltip címének színe
        },
        footerFont: {
          size: 20,
        },
        padding: 10,
        displayColors: false, // Az adatpont színeinek elrejtése a tooltipben
        caretSize: 16, // Tooltip "nyíl" méretének beállítása
        backgroundColor: "#000", // Tooltip háttérszíne
        borderColor: "#000", // Tooltip szegélyszíne
        borderWidth: 1, // Tooltip szegélyszélesség
        xAlign: "center", // Tooltip középre igazítása vízszintesen
        yAlign: "center",
      },

      legend: {
        labels: {
          color: colors.legend,
        },
      },
    },

    scales: {
      x: {
        ticks: {
          color: colors.legend,
        },
      },
      y: {
        ticks: {
          color: colors.legend,
        },
        title: {
          display: true,
          text: `${statusTable.datatype}`, // Hozzáadjuk a mértékegységet az y-tengely címkéjéhez
          color: colors.legend,
        },
      },
    },

    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
  };

  return <Line data={data} options={options} height={height} width={width} />;
};

export default CustomAreaChartLine;
import React from "react";
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
import { areachartlineoptions } from "../../../locales/chartoptions";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale
);

const CustomAreaChartLine = ({
  data,
  colors,
  statusTable,
  width,
  height,
  filterTable,
  filteredData,
}) => {
  // Egyéni plugin a mértékegység grafikonra helyezésére

  const options = areachartlineoptions(
    colors,
    statusTable,
    filterTable,
    filteredData
  );

  //in Chart.js and react-chartjs-2, an area chart is actually a special type of a line chart.
  return <Line data={data} options={options} height={height} width={width} />;
};

export default CustomAreaChartLine;

/*
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
          lineHeight: 1.5,
        },
        titleFont: {
          size: 16,
          color: colors.tooltip,
        },
        footerFont: {
          size: 20,
        },
        padding: 10,
        displayColors: false,
        caretSize: 16,
        backgroundColor: "#000",
        borderColor: "#000",
        borderWidth: 1,
        xAlign: "center",
        yAlign: "center",
      },
      legend: {
        labels: {
          color: colors.legend,
        },
      },
      title: {
        display: true,
        text: `${statusTable.datatype.charAt(0).toUpperCase() + statusTable.datatype.slice(1)}`,
        color: colors.legend,
        font: {
          size: 20,
        },
        position: 'top',
        align: 'center',
        padding: {
          bottom: 10,
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
  };*/

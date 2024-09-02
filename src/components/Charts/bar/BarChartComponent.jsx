/*import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import useWindowSize from "../../../hooks/use-windowsize";
import { MyDataContext } from "../../../context/DataContext";
import { MyConsoleContext } from "../../../context/ConsoleContext";
import useBarhartColors from "../../../hooks/use-barchartcolors";
import useBarChartData from "../../../hooks/use-barchartsdata";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChartComponent = () => {
  const { users } = MyDataContext();
  const {
    filteredData,
    actualMainConsole,
    actualTypeData,
    statusTable,
    filterTable,
  } = MyConsoleContext();
  const { width, height } = useWindowSize();
  const colors = useBarhartColors(users.style);
  const chartData = useBarChartData(
    filteredData,
    filterTable.displayMode,
    colors
  );

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
              const fullname = filteredData[dataIndex]?.fullname || "Unknown";
              const cleanedFullname = fullname
                .replace(/^\((.*)\)$/, "$1")
                .trim();
              return [
                `${cleanedFullname}`,
                `${label}`,
                `${statusTable.datatype}`, // A mértékegység
                `${context.parsed.y}`, // Az érték
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
        //        borderColor: "#000", // Tooltip szegélyszíne
        borderColor: ["rgba(255, 99, 132, 1)"],
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
      },
    },

    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
  };


  return (
    <div
      className="border-0 border-purple-400 flex justify-center"
      style={{ width: width - 800, height: height - 200 }}
    >
      <Bar
        data={chartData}
        options={options}
        height={height - 200}
        width={width - 800}
      />
    </div>
  );
};

export default BarChartComponent;*/


import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import useWindowSize from "../../../hooks/use-windowsize";
import { MyDataContext } from "../../../context/DataContext";
import { MyConsoleContext } from "../../../context/ConsoleContext";
import useBarhartColors from "../../../hooks/use-barchartcolors";
import useBarChartData from "../../../hooks/use-barchartsdata";
import CustomBarChart from "./CustomBarChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChartComponent = () => {
  const { users } = MyDataContext();
  const {
    filteredData,
    actualMainConsole,
    actualTypeData,
    statusTable,
    filterTable,
  } = MyConsoleContext();
  const { width, height } = useWindowSize();
  const colors = useBarhartColors(users.style);
  const chartData = useBarChartData(
    filteredData,
    filterTable.displayMode,
    colors
  );

  return (
    <div
      className="border-0 border-purple-400 flex justify-center"
      style={{ width: width - 800, height: height - 200 }}
    >
      <CustomBarChart
        data={chartData}
        colors={colors}
        statusTable={statusTable}
        height={height - 200}
        width={width - 800}
        filterTable={filterTable}
        filteredData={filteredData}
      />
    </div>
  );
};

export default BarChartComponent;


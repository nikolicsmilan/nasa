/*import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import useWindowSize from "../../hooks/use-windowsize";
import { MyDataContext } from "../../context/DataContext";
import { MyConsoleContext } from "../../context/ConsoleContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const AreaChartComponent = () => {
  const { users } = MyDataContext();
  const { filteredData, actualTypeData, filterTable,statusTable } = MyConsoleContext();
  const { width, height } = useWindowSize();
  const [colors, setColors] = useState({
    tooltip: "#000",
    legend: "#000",
    area1: "rgba(136, 132, 216, 0.2)",
    area2: "rgba(130, 202, 157, 0.2)",
    area3: "rgba(251, 191, 36, 0.2)",
    areaInc: "rgba(255, 99, 132, 0.2)", // Szín "inc" módhoz
    areaDesc: "rgba(54, 162, 235, 0.2)", // Szín "desc" módhoz
  });
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const getComputedStyleColor = (elementId) => {
      const tempDiv = document.getElementById(elementId);
      const color = window.getComputedStyle(tempDiv).color;
      return color;
    };

    setColors({
      tooltip: getComputedStyleColor("ezaz"),
      legend: getComputedStyleColor("ezaz"),
      area1: "rgba(136, 132, 216, 0.2)",
      area2: "rgba(130, 202, 157, 0.2)",
      area3: "rgba(251, 191, 36, 0.2)",
      areaInc: "rgba(255, 99, 132, 0.2)",
      areaDesc: "rgba(54, 162, 235, 0.2)",
    });
  }, [users.style]);

  useEffect(() => {
    if (filterTable.displayMode === "inc") {
      setChartData({
        labels: filteredData.map((d) => d.name),
        datasets: [
          {
            label: "Value",
            data: filteredData.map((d) => d.value),
            borderColor: "rgba(255, 99, 132, 1)", // Szín "inc" módhoz
            backgroundColor: colors.areaInc,
            fill: true,
            tension: 0.4,
          },
        ],
      });
    } else if (filterTable.displayMode === "desc") {
      setChartData({
        labels: filteredData.map((d) => d.name),
        datasets: [
          {
            label: "Value",
            data: filteredData.map((d) => d.value),
            borderColor: "rgba(54, 162, 235, 1)", // Szín "desc" módhoz
            backgroundColor: colors.areaDesc,
            fill: true,
            tension: 0.4,
          },
        ],
      });
    } else {
      setChartData({
        labels: filteredData.map((d) => d.name),
        datasets: [
          {
            label: "Max",
            data: filteredData.map((d) => d.max),
            borderColor: "rgba(136, 132, 216, 1)",
            backgroundColor: colors.area1,
            fill: true,
            tension: 0.4,
          },
          {
            label: "Avg",
            data: filteredData.map((d) => d.avg),
            borderColor: "rgba(130, 202, 157, 1)",
            backgroundColor: colors.area2,
            fill: true,
            tension: 0.4,
          },
          {
            label: "Min",
            data: filteredData.map((d) => d.min),
            borderColor: "rgba(251, 191, 36, 1)",
            backgroundColor: colors.area3,
            fill: true,
            tension: 0.4,
          },
        ],
      });
    }
  }, [
    filteredData,    

    actualTypeData,
    colors.area1,
    colors.area2,
    colors.area3,
    filterTable.displayMode,
  ]);

  return (
    <div
      className="border-0 border-purple-400 flex justify-center w-96 lg:w-full h-full"
      style={{ width: width - 800, height: height - 200 }}
    >
      <div id="ezaz" className="text-primary hidden"></div>
      <Line
        data={chartData}
        options={{
          plugins: {
            tooltip: {
              bodyColor: colors.tooltip,
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
        }}
        height={height - 200}
        width={width - 800}
      />
    </div>
  );
};

export default AreaChartComponent;*/
import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import useWindowSize from "../../hooks/use-windowsize";
import { MyDataContext } from "../../context/DataContext";
import { MyConsoleContext } from "../../context/ConsoleContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const AreaChartComponent = () => {
  const { users } = MyDataContext();
  const { filteredData, actualTypeData, filterTable, statusTable } =
    MyConsoleContext();
  const { width, height } = useWindowSize();
  const [colors, setColors] = useState({
    tooltip: "#000",
    legend: "#000",
    area1: "rgba(136, 132, 216, 0.2)",
    area2: "rgba(130, 202, 157, 0.2)",
    area3: "rgba(251, 191, 36, 0.2)",
    areaInc: "rgba(255, 99, 132, 0.2)", // Szín "inc" módhoz
    areaDesc: "rgba(54, 162, 235, 0.2)", // Szín "desc" módhoz
  });
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const getComputedStyleColor = (elementId) => {
      const tempDiv = document.getElementById(elementId);
      const color = window.getComputedStyle(tempDiv).color;
      return color;
    };

    setColors({
      tooltip: getComputedStyleColor("ezaz"),
      legend: getComputedStyleColor("ezaz"),
      area1: "rgba(136, 132, 216, 0.2)",
      area2: "rgba(130, 202, 157, 0.2)",
      area3: "rgba(251, 191, 36, 0.2)",
      areaInc: "rgba(255, 99, 132, 0.2)",
      areaDesc: "rgba(54, 162, 235, 0.2)",
    });
  }, [users.style]);

  useEffect(() => {
    if (filterTable.displayMode === "inc") {
      setChartData({
        labels: filteredData.map((d) => d.name),
        datasets: [
          {
            label: "Value",
            data: filteredData.map((d) => d.value),
            borderColor: "rgba(255, 99, 132, 1)", // Szín "inc" módhoz
            backgroundColor: colors.areaInc,
            fill: true,
            tension: 0.4,
          },
        ],
      });
    } else if (filterTable.displayMode === "desc") {
      setChartData({
        labels: filteredData.map((d) => d.name),
        datasets: [
          {
            label: "Value",
            data: filteredData.map((d) => d.value),
            borderColor: "rgba(54, 162, 235, 1)", // Szín "desc" módhoz
            backgroundColor: colors.areaDesc,
            fill: true,
            tension: 0.4,
          },
        ],
      });
    } else {
      setChartData({
        labels: filteredData.map((d) => d.name),
        datasets: [
          {
            label: "Max",
            data: filteredData.map((d) => d.max),
            borderColor: "rgba(136, 132, 216, 1)",
            backgroundColor: colors.area1,
            fill: true,
            tension: 0.4,
          },
          {
            label: "Avg",
            data: filteredData.map((d) => d.avg),
            borderColor: "rgba(130, 202, 157, 1)",
            backgroundColor: colors.area2,
            fill: true,
            tension: 0.4,
          },
          {
            label: "Min",
            data: filteredData.map((d) => d.min),
            borderColor: "rgba(251, 191, 36, 1)",
            backgroundColor: colors.area3,
            fill: true,
            tension: 0.4,
          },
        ],
      });
    }
  }, [
    filteredData,
    actualTypeData,
    colors.area1,
    colors.area2,
    colors.area3,
    colors.areaInc,
    colors.areaDesc,
    filterTable.displayMode,
  ]);

  return (
    <div
      className="border-0 border-purple-400 flex justify-center w-96 lg:w-full h-full"
      style={{ width: width - 800, height: height - 200 }}
    >
      <div id="ezaz" className="text-primary hidden"></div>
      <Line
        data={chartData}
        options={{
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
                    return [
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
                size: 20,
                lineHeight: 2, // Növelhetjük a vonalak közötti távolságot
              },
              titleFont: {
                size: 6,
              },
              footerFont: {
                size: 24,
              },
              padding: 10,
              displayColors: false, // Az adatpont színeinek elrejtése a tooltipben
              caretSize: 16, // Tooltip "nyíl" méretének beállítása
              backgroundColor: "#fff", // Tooltip háttérszíne
              borderColor: "#ddd", // Tooltip szegélyszíne
              borderWidth: 1, // Tooltip szegélyszélesség
              // Beállíthatod az alábbiakat is
              xAlign: "center", // Tooltip középre igazítása vízszintesen
              yAlign: "bottom", // Tooltip elhelyezése az adatpont alatt
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
        }}
        height={height - 200}
        width={width - 800}
      />
    </div>
  );
};

export default AreaChartComponent;

/*


const initialData = [
  { name: "A", h: 4000, ip: 2400, diameter: 2400 },
  { name: "B", h: 3000, ip: 1398, diameter: 2210 },
  { name: "C", h: 2000, ip: 9800, diameter: 2290 },
  { name: "D", h: 2780, ip: 3908, diameter: 2000 },
  { name: "E", h: 1890, ip: 4800, diameter: 2181 },
  { name: "F", h: 2390, ip: 3800, diameter: 2500 },
  { name: "G", h: 3490, ip: 4300, diameter: 2100 },
  { name: "H", h: 3490, ip: 4300, diameter: 2100 },
  { name: "I", h: 3490, ip: 4300, diameter: 2100 },
  { name: "J", h: 3490, ip: 4300, diameter: 2100 },
];

const initialData = [
  { name: "1", max: 4000, avg: 2400, min: 2400 },
  { name: "2", max: 3000, avg: 1398, min: 2210 },
  { name: "3", max: 2000, avg: 9800, min: 2290 },
  { name: "4", max: 2780, avg: 3908, min: 2000 },
  { name: "5", max: 1890, avg: 4800, min: 2181 },
  { name: "6", max: 2390, avg: 3800, min: 2500 },
  { name: "7", max: 3490, avg: 4300, min: 2100 },
  { name: "8", max: 3490, avg: 4300, min: 2100 },
  { name: "9", max: 3490, avg: 4300, min: 2100 },
  { name: "10", max: 3490, avg: 4300, min: 2100 },
];

*/

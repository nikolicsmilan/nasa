import {
  AreaChartComponent,
  BarChartComponent,
  LineChartComponent,
  PieChartComponent,
  RadarChartComponent,
  RadialBarChartComponent,
  ScatterChartComponent,
  FunnelChartComponent,
} from "../../../components/Charts/index";
// import { MyConsoleContext } from "../../../context/ConsoleContext"; // <<<--- ELTÁVOLÍTVA

// Fogadja az ÚJ propokat
export const GraphContent = ({ config, displayedData,sumObject }) => {
  // const { mobiletoggle } = MyConsoleContext(); // <<<--- ELTÁVOLÍTVA

  // Ellenőrizzük, hogy a config és a graphType létezik-e
  const graphType = config?.graphType;
  if (!graphType) {
    // Ha nincs graphType, nem tudunk mit megjeleníteni
    return (
      <div className="flex border-0 p-2 border-red-500 w-full justify-center">
        <h1>Graph type not specified in config.</h1>
      </div>
    );
  }

  // A switch most a config.graphType alapján dönt
  switch (graphType) {
    case "area":
      return (
        <div
          // className={`... ${mobiletoggle ? "opacity-50" : ""}`} // <<<--- ELTÁVOLÍTVA
          className={`border-0 border-lime-400 w-full flex flex-col items-center justify-center`}
        >
         
          <AreaChartComponent config={config} displayedData={displayedData} />
        </div>
      );
    case "bar":
      return (
        <div
          // className={`... ${mobiletoggle ? "opacity-50" : ""}`} // <<<--- ELTÁVOLÍTVA
          className={`border-0 border-lime-400 w-full flex flex-col items-center justify-center`}
        >
       
          <BarChartComponent config={config} displayedData={displayedData} />;
        </div>
      );

    // Hasonlóan átadjuk az új propokat

    case "line":
      return (
        <LineChartComponent config={config} displayedData={displayedData} />
      );
    case "pie":
      return (
        <PieChartComponent config={config} displayedData={displayedData}  sumObject={sumObject} />
      );
    case "radar":
      return (
        <RadarChartComponent config={config} displayedData={displayedData} />
      );
    case "radialBar":
      return (
        <RadialBarChartComponent
          config={config}
          displayedData={displayedData}
        />
      );
    case "scatter":
      return (
        <ScatterChartComponent config={config} displayedData={displayedData} />
      );
    case "funnel":
      return (
        <FunnelChartComponent config={config} displayedData={displayedData} />
      );
    default:
      return (
        <div className="flex border-0 p-2 border-yellow-400 w-full justify-center">
          <h1>Chart type '{graphType}' is under development or unknown.</h1>
        </div>
      );
  }
};
// src/pages/Graph/components/GraphContent.jsx


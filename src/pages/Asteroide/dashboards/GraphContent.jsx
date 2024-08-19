import React from "react";
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
import { MyConsoleContext } from "../../../context/ConsoleContext";
//w-full border-0 border-orange-400 flex justify-center

export const GraphContent = () => {
  const { statusTable, mobiletoggle } = MyConsoleContext();
  switch (statusTable.graph) {
    case "area":
      return (
        <div
          className={`border-t-4 border-primary flex flex-col
             items-center justify-center ${
            mobiletoggle ? "opacity-50" : ""
          }`}
        >
          <AreaChartComponent />
        </div>
      );
    case "bar":
      return <BarChartComponent />;
    case "line":
      return <LineChartComponent />;
    case "pie":
      return <PieChartComponent />;
    case "radar":
      return <RadarChartComponent />;
    case "radialBar":
      return <RadialBarChartComponent />;
    case "scatter":
      return <ScatterChartComponent />;
    case "funnel":
      return <FunnelChartComponent />;
    default:
      return (
        <div className="flex border-0 p-2 border-lime-400 w-full justify-center">
          <h1>This graph type is under development</h1>
        </div>
      );
  }
};

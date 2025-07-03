import {
  AreaChartComponent, BarChartComponent, PieChartComponent, //... többi import
} from "../../../components/Charts/index";

export const GraphContent = ({ config, displayedData, sumObject }) => {
  const graphType = config?.graphType;
  if (!graphType) {
    return <div className="p-4"><h1>Graph type not specified.</h1></div>;
  }

  // A komponenseknek most már maguknak kell h-full-nak lenniük
  switch (graphType) {
    case "area":
      return <AreaChartComponent config={config} displayedData={displayedData} />;
    case "bar":
      return <BarChartComponent config={config} displayedData={displayedData} />;
    case "pie":
      // A PieChartComponent-nek is h-full-nak kell lennie a belső divjében
      return <PieChartComponent config={config} sumObject={sumObject} />;
    // ... többi case ...
    default:
      return <div className="p-4 flex justify-center items-center w-full h-full"><h1>Chart type {graphType} is under development.</h1></div>;
  }
};


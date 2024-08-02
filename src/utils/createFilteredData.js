import { createSampledData } from "./createSampledData";
import { createTopBottomAverageData } from "./createTopBottomAverageData";
import { calculateTopBottomAverage } from "./calculateTopBottomAverage";
import { createBarChartData } from "./createBarChartData";
export const createFilteredData = ({
  sumObject,
  statusTable,
  displayMode,
  piece,
}) => {
  console.log("createFilteredData run ... ");

  // Sort data based on sign and choose top bottom and avarage
  //there are as many pieces as there are piece variables
  const { top10, bottom10, average10 } = calculateTopBottomAverage(
    sumObject,
    statusTable,
    piece
  );
  const { sign, graph } = statusTable;
  console.log(
    "top10: ",
    top10,
    "bottom10: ",
    bottom10,
    "average10: ",
    average10
  );
  // Check the graph type and handle accordingly
  switch (graph) {
    case "area":
      if (displayMode === "inc" || displayMode === "desc") {
        return createSampledData(sumObject, statusTable, displayMode, piece);
      }
      //choose max min avg or all and only value that sign
      //and this is the wrong i cant get what fullname belong to the data
      return createTopBottomAverageData(
        top10,
        bottom10,
        average10,
        displayMode,
        sign
      );

    case "bar":
      return createBarChartData(sumObject, statusTable, displayMode, piece);
    //inc és desc nem működjön ebben az esetben ezt a colorize nél

    // Customize behavior for 'bar'
    //  return handleBarGraph(sumObject, statusTable, displayMode, piece);
    // return formatBarChartData(sumObject, statusTable, displayMode, piece);
    case "line":
    // Customize behavior for 'line'
    //  return handleLineGraph(sumObject, statusTable, displayMode, piece);

    case "pie":
    // Customize behavior for 'pie'
    //  return handlePieGraph(sumObject, statusTable, displayMode, piece);

    case "radar":
    // Customize behavior for 'radar'
    //  return handleRadarGraph(sumObject, statusTable, displayMode, piece);

    case "radialBar":
    // Customize behavior for 'radialBar'
    //return handleRadialBarGraph(sumObject, statusTable, displayMode, piece);

    case "scatter":
    // Customize behavior for 'scatter'
    // return handleScatterGraph(sumObject, statusTable, displayMode, piece);

    case "funnel":
    // Customize behavior for 'funnel'
    //return handleFunnelGraph(sumObject, statusTable, displayMode, piece);

    default:
      // Default case if graph type is unknown
      console.warn("Unknown graph type:", graph);
      return [];
  }
};

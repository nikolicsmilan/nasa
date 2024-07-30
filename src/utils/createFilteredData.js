import { createIncrementalData } from "./createIncrementalData";
import { createTopBottomAverageData } from "./createTopBottomAverageData";
import { calculateTopBottomAverage } from "./calculateTopBottomAverage";

export const createFilteredData = ({ sumObject,statusTable, displayMode }) => {
 
 
 
  //It returns 3 arrays with the 10 highest lowest
  // and average values. So divdide all of data 3 arrays
  const { top10, bottom10, average10 } = calculateTopBottomAverage(sumObject,statusTable);
  const { sign } = statusTable;
  console.log("top10: ",top10)
  if (displayMode === "inc") {
    return createIncrementalData(data);
  }
  // depend by displayMode return all array or one by one: all || max | avg | min
  return createTopBottomAverageData(top10, bottom10, average10, displayMode, sign);
};

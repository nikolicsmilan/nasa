/*export const createIncrementalData = (data) => {
  console.log("createIncrementalData run ... ")
    const step = Math.floor(data.length / 9); // 9 intermediate steps + min and max
    const sampledData = [data[0]]; // Start with min value
  
    for (let i = 1; i < 9; i++) {
      sampledData.push(data[i * step]);
    }
  
    sampledData.push(data[data.length - 1]); // End with max value
  
    return sampledData.map((item, index) => ({
      name: (index + 1).toString(),
      value: item.h,
    }));
  };*/
/*
  export const createIncrementalData = (data, statusTable) => {
    const { sign } = statusTable;
  
    // Sort data by the specified sign value
    const sortedData = data
      .map((item) => ({ ...item, value: parseFloat(item[sign]) })) // Use `sign` for value
      .filter((item) => !isNaN(item.value))
      .sort((a, b) => a.value - b.value);
  
    const step = Math.floor(sortedData.length / 9); // 9 intermediate steps + min and max
    const sampledData = [sortedData[0]]; // Start with min value
  
    for (let i = 1; i < 9; i++) {
      sampledData.push(sortedData[i * step]);
    }
  
    sampledData.push(sortedData[sortedData.length - 1]); // End with max value
  
    return sampledData.map((item, index) => ({
      name: (index + 1).toString(),
      value: item.value,
    }));
  };*/

  export const createSampledData = (data, statusTable, displayMode) => {
    const { sign } = statusTable;
  
    // Sort data by the specified sign value
    const sortedData = data
      .map((item) => ({ ...item, value: parseFloat(item[sign]) })) // Use `sign` for value
      .filter((item) => !isNaN(item.value))
      .sort((a, b) => a.value - b.value);
  
    if (displayMode === "desc") {
      sortedData.reverse(); // Reverse the order for descending mode
    }
  
    const step = Math.floor(sortedData.length / 9); // 9 intermediate steps + min and max
    const sampledData = [sortedData[0]]; // Start with min value
  
    for (let i = 1; i < 9; i++) {
      sampledData.push(sortedData[i * step]);
    }
  
    sampledData.push(sortedData[sortedData.length - 1]); // End with max value
  
    return sampledData.map((item, index) => ({
      name: (index + 1).toString(),
      value: item.value,
    }));
  };
  
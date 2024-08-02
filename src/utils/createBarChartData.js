/*export const createBarChartData = (data, statusTable, displayMode, piece) => {
    const { sign } = statusTable;
    let filteredData;
  
    // Map data to the appropriate format and filter based on displayMode
    const sortedData = data
      .map((item) => ({ ...item, value: parseFloat(item[sign]) })) // Convert value
      .filter((item) => !isNaN(item.value)) // Remove NaN values
      .sort((a, b) => a.value - b.value); // Sort data by value
  
    if (displayMode === "min") {
      filteredData = [sortedData[0]]; // Only min value
    } else if (displayMode === "max") {
      filteredData = [sortedData[sortedData.length - 1]]; // Only max value
    } else if (displayMode === "avg") {
      const average = sortedData.reduce((acc, item) => acc + item.value, 0) / sortedData.length;
      filteredData = sortedData
        .map(item => ({ ...item, diff: Math.abs(item.value - average) })) // Calculate difference from average
        .sort((a, b) => a.diff - b.diff) // Sort by difference
        .slice(0, piece || 10); // Get closest values to average
    } else {
      // Default case for general sampling
      const count = piece || 10; // Number of steps or data points
      const step = Math.floor(sortedData.length / (count - 1)); // Step size
      const sampledData = [sortedData[0]]; // Start with min value
  
      for (let i = 1; i < count - 1; i++) {
        sampledData.push(sortedData[i * step]); // Sample intermediate values
      }
  
      sampledData.push(sortedData[sortedData.length - 1]); // End with max value
  
      filteredData = sampledData;
    }
  
    return filteredData.map((item, index) => ({
      name: (index + 1).toString(), // Use just numbers for the name
      value: item.value, // Value for the bar chart
    }));
  };*/

  export const createBarChartData = (data, statusTable, displayMode, piece) => {
    const { sign } = statusTable;
  
    // Ensure that `data` is sorted by value
    const sortedData = data
      .map((item) => ({ ...item, value: parseFloat(item[sign]) }))
      .filter((item) => !isNaN(item.value))
      .sort((a, b) => a.value - b.value);
  
    // Determine the number of items to use
    const count = piece || 10;
  
    // Extract specific data based on `displayMode`
    let chartData;
    switch (displayMode) {
      case 'min':
        // Use the bottom 'count' items
        chartData = sortedData.slice(0, count);
        break;
      case 'max':
        // Use the top 'count' items
        chartData = sortedData.slice(-count).reverse();
        break;
      case 'avg':
        // Use the average data
        const middleIndex = Math.floor(sortedData.length / 2);
        chartData = sortedData.slice(
          middleIndex - Math.floor(count / 2),
          middleIndex + Math.ceil(count / 2)
        );
        break;
      default:
        // Fallback if displayMode is not recognized
        chartData = sortedData;
    }
  
    // Transform the data into the format required for the bar chart
    return chartData.map((item, index) => ({
      name: (index + 1).toString(), // Just the index number as name
      value: item.value,
      fullname:item.fullname
    }));
  };
  
  
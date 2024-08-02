  export const createSampledData = (data, statusTable, displayMode, piece) => {
    const { sign } = statusTable;
  
    // Sort data by the specified sign value
    const sortedData = data
      .map((item) => ({ ...item, value: parseFloat(item[sign]) })) // Use `sign` for value
      .filter((item) => !isNaN(item.value))
      .sort((a, b) => a.value - b.value);
  
    if (displayMode === "desc") {
      sortedData.reverse(); // Reverse the order for descending mode
    }
  
    const count = piece || 10; // Default to 10 if piece is not provided
    const step = Math.floor(sortedData.length / (count - 1)); // Determine step size based on count
    const sampledData = [sortedData[0]]; // Start with min value
  
    for (let i = 1; i < count - 1; i++) {
      sampledData.push(sortedData[i * step]);
    }
  
    sampledData.push(sortedData[sortedData.length - 1]); // End with max value
  
    return sampledData.map((item, index) => ({
      name: (index + 1).toString(),
      value: item.value,
      fullname: item.fullname || '' 
    }));
  };
  
  
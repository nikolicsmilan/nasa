/*export const calculateTopBottomAverage = (data, statusTable) => {
  const { sign } = statusTable;

  // Use `sign` for value extraction
  const numericValues = data
    .map((item) => parseFloat(item[sign])) // Extract numeric values based on `sign`
    .filter((value) => !isNaN(value));     // Filter out NaN values

  const min = Math.min(...numericValues);
  const max = Math.max(...numericValues);
  const avg = numericValues.reduce((acc, val) => acc + val, 0) / numericValues.length;

  const sortedByValue = [...data]
    .map((item) => ({ ...item, value: parseFloat(item[sign]) })) // Use `sign` for value
    .filter((item) => !isNaN(item.value))
    .sort((a, b) => a.value - b.value);

  const top10 = sortedByValue.slice(-10).reverse();
  const bottom10 = sortedByValue.slice(0, 10);
  const middleIndex = Math.floor(sortedByValue.length / 2);
  const average10 = sortedByValue.slice(middleIndex - 5, middleIndex + 5);

  return {
    top10,
    bottom10,
    average10,
  
  };
};*/

export const calculateTopBottomAverage = (data, statusTable) => {
  console.log("calculateTopBottomAverage run ... ")
  const { sign } = statusTable;
//console.log("In calculateTopBottomAverage sign: ",sign)
  // Extract numeric values based on `sign`
  const numericValues = data
    .map((item) => parseFloat(item[sign])) // Extract numeric values based on `sign`
    .filter((value) => !isNaN(value));     // Filter out NaN values

  // Sort data based on the numeric values
  const sortedByValue = [...data]
    .map((item) => ({ ...item, value: parseFloat(item[sign]) })) // Use `sign` for value
    .filter((item) => !isNaN(item.value))
    .sort((a, b) => a.value - b.value);

  // Extract top 10, bottom 10, and average 10 data points
  const top10 = sortedByValue.slice(-10).reverse();
  const bottom10 = sortedByValue.slice(0, 10);
  const middleIndex = Math.floor(sortedByValue.length / 2);
  const average10 = sortedByValue.slice(middleIndex - 5, middleIndex + 5);

  return {
    top10,
    bottom10,
    average10
  };
};



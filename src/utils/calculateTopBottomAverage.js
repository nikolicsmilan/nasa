export const calculateTopBottomAverage = (data, statusTable,piece ) => {
  console.log("calculateTopBottomAverage run ... ")
  const { sign } = statusTable;

  // Sort data based on the numeric values
  const sortedByValue = [...data]
    .map((item) => ({ ...item, value: parseFloat(item[sign]) })) // Use `sign` for value
    .filter((item) => !isNaN(item.value))
    .sort((a, b) => a.value - b.value);

 // Determine the number of items to select
 const count = piece || 10;  // Use the piece value, defaulting to 10 if not provided

 // Extract top, bottom, and average data points based on count
 const top10 = sortedByValue.slice(-count).reverse();
 const bottom10 = sortedByValue.slice(0, count);
 const middleIndex = Math.floor(sortedByValue.length / 2);
 const average10 = sortedByValue.slice(middleIndex - Math.floor(count / 2), middleIndex + Math.ceil(count / 2));

  return {
    top10,
    bottom10,
    average10
  };
};



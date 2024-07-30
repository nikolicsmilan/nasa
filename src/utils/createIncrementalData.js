export const createIncrementalData = (data) => {
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
  };
  
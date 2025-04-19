//This will be terminated
export const calculateStatistics = (data) => {
    const hValues = data.map((item) => parseFloat(item.h)).filter((h) => !isNaN(h));
    const min = Math.min(...hValues);
    const max = Math.max(...hValues);
    const avg = hValues.reduce((acc, val) => acc + val, 0) / hValues.length;
  
    return { min, max, avg };
  };
  
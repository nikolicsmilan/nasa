import React, { useState, useEffect } from "react";
import {

  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import useWindowSize from "../../../hooks/use-windowsize";
//import { ip1000, ipteszt } from "../../../locales/localdata";

// This is the format that recharts library want to get things
const data = [
  { name: "2017", react: 32, angular: 37, vue: 60 },
  { name: "2018", react: 40, angular: 35, vue: 55 },
  { name: "2019", react: 50, angular: 30, vue: 45 },
  { name: "2020", react: 60, angular: 25, vue: 35 },
  { name: "2021", react: 70, angular: 20, vue: 25 },
  { name: "2022", react: 80, angular: 15, vue: 15 },
];

const RechartsExample = () => {
  // const { windowSize: { width, height } } = useWindowSize();
  //const { width, height } = useWindowSize();
  const [maxIp, setMaxIp] = useState(0);
   const { windowSize } = useWindowSize();
  //const { width, height } = windowSize;

  useEffect(() => {
    const newMaxIp = Math.max(...ip1000.map((d) => d.ip));
    setMaxIp(newMaxIp);
  }, [ip1000]);

  const sortedData = ip1000.sort((a, b) => {
    // Extract the date part before the decimal point
    const dateA = a.date.split(".")[0];
    const dateB = b.date.split(".")[0];

    // Parse the extracted dates
    const parsedDateA = Date.parse(dateA);
    const parsedDateB = Date.parse(dateB);

    // Sort based on the parsed timestamps
    return parsedDateA - parsedDateB;
  });
  /*
  const sortedData = ip1000.sort((a, b) => {
    // Parse the dates into milliseconds since epoch (January 1, 1970, 00:00:00 UTC)
    const dateA = Date.parse(a.date);
    const dateB = Date.parse(b.date);
  
    // Sort based on the parsed timestamps
    return dateA - dateB;
  });*/
  //const sortedData = ip1000.sort((a, b) => new Date(a.date) - new Date(b.date));
  return (
    //úgy kell hogy -40 mobil és /5 lg nél
    <div className="border-0 border-purple-400"></div>
  );
};

export default RechartsExample;
/* <LineChart width={width> 1000 ? width/5:width-40} height={190} data={sortedData}>
        <Line type="monotone" dataKey="ip" stroke="#2196F3" strokeWidth={1} />

        <CartesianGrid stroke="#2196F3" />
        <XAxis
        stroke="#2196F3"
          dataKey="date"
          sort="ascending"
          tickFormatter={(value) => {
            console.log("date value: ", value.split(".")[0]);
            const date = new Date(value.split(".")[0]);
            return date.getFullYear();
          }}
        />
        <YAxis domain={[0, maxIp]} stroke="#2196F3" />
        <Tooltip stroke="#2196F3"  />
        <Legend stroke="#2196F3" />
      </LineChart> */

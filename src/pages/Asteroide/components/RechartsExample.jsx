import React,{useState, useEffect} from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import useWindowSize from "../../../hooks/use-windowsize";
import { ip1000, ipteszt } from "../../../locales/localdata";

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
  const { width, height } = useWindowSize();
  const [maxIp, setMaxIp] = useState(0);

  useEffect(() => {
    const newMaxIp = Math.max(...ip1000.map((d) => d.ip));
    setMaxIp(newMaxIp);
  }, [ip1000]);
  const sortedData = ip1000.sort((a, b) => new Date(a.date) - new Date(b.date));
  return (
    <div>
      <LineChart width={width / 2} height={300} data={sortedData}>
        <Line type="monotone" dataKey="ip" stroke="#2196F3" strokeWidth={3} />

        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" sort="ascending"  />
        <YAxis domain={[0, maxIp]} />
        <Tooltip />
        <Legend />
      </LineChart>

      <LineChart width={width / 2} height={300} data={ipteszt}>
        <Line type="monotone" dataKey="ip" stroke="#2196F3" strokeWidth={3} />

        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis
          domain={[0, 1]}
          tickFormatter={(value) => `${(value * 10) ^ 1}`}
        />
        <Tooltip />
        <Legend />
      </LineChart>

      <LineChart width={width / 2} height={300} data={data}>
        <Line
          type="monotone"
          dataKey="react"
          stroke="#2196F3"
          strokeWidth={3}
        />
        <Line
          type="monotone"
          dataKey="angular"
          stroke="#F44236"
          strokeWidth={3}
        />
        <Line type="monotone" dataKey="vue" stroke="#FFCA29" strokeWidth={3} />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </div>
  );
};

export default RechartsExample;

import { useState } from "react";

const initStatusTable = {
  dashboard: "graph",
  graph: "area",
  information: "nasa",
  operation: "joystick",
  resorces: "firebase",
  animations: "no",
  sign: "ip",
  order: "asc",
  sourcetype: "max",
  datatype: "potentialimpacts"
};

export const useStatusTable = () => {
  const [statusTable, setStatusTable] = useState(initStatusTable);
  return [statusTable, setStatusTable];
};
/*
const initStatusTable = {
  dashboard: "graph", // | graph
  graph: "area", //bar | line | pie | radar | radialBar | scatter | funnel
  information: "nasa",
  operation: "joystick",
  resorces: "firebase",
  //All
  animations: "no", //or yes
  // If there is a sign, filter for it
  sign: "magnitudo", //magnitudo |ip | ps_max | v_inf | ts_max | diameter | energy | date
  // Only filter
  piece: 10,
  order: "asc", //desc
  sourcetype: "max", //min |
};

*/
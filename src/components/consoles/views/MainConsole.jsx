import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MyConsoleContext } from "../../../context/ConsoleContext";
import { useDataVisualization } from "../../../hooks/use-datavisualization";
import useWindowSize from "../../../hooks/use-windowsize";
const MainConsole = () => {
  const {
    actualMainConsole,
    animationVariants,
    info,
    statusTable,
    filteredData,
  } = MyConsoleContext();
  const { consoleContent } = useDataVisualization();
  const { width, height } = useWindowSize();
  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1200, // Ahogy a Tailwind-ben definiáltad
    '2xl': 1536,
  };
  return (
    <motion.div
      animate={animationVariants}
      className=" flex flex-col items-center  relative z-10 rounded inset-0  border-0 border-lime-400
  
 
    text-dark w-screen md:w-full h-full  shadow-2xl 
    transform perspective-1000  "
    >
      <div
        className=" glowy-button-8  border-0 border-red-400   opacity-100 md:top-[100px]
      z-50 relative p-0 overflow-y-scroll overflow-x-scroll 
         text-white flex flex-col   items-center justify-center lg:w-full h-full"
        // style={{ width: width - 800, height: height - 120 }}
        style={width >= breakpoints.lg ? { width: width - 800, height: height - 200 } : {width: width }}
      >
        {consoleContent}
      </div>
    </motion.div>
  );
};

export default MainConsole;
//  style={{ width: width - 800, height: height - 120 }}
/*

import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import useWindowSize from "../../../hooks/use-windowsize";
import { MyDataContext } from "../../../context/DataContext";
import { MyConsoleContext } from "../../../context/ConsoleContext";
import useAreaChartColors from "../../../hooks/use-areachartcolors";
import useAreaChartData from "../../../hooks/use-areachartdata";
import CustomAreaChartLine from "./CustomAreaChartLine";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const AreaChartComponent = () => {
  const { users } = MyDataContext();
  const { filteredData, filterTable, statusTable } = MyConsoleContext();
  const { width, height } = useWindowSize();
  const colors = useAreaChartColors(users.style);
  const chartData = useAreaChartData(
    filteredData,
    filterTable.displayMode,
    colors
  );
  //style={{ width: width - 800, height: height - 200 }}

  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1200, // Ahogy a Tailwind-ben definiáltad
    '2xl': 1536,
  };


  // Feltételes méretek lg breakpointhoz igazodva
  const chartWidth = width >= breakpoints.lg ? width - 800 : width + 800;
  const chartHeight = width >= breakpoints.lg ? height - 120 : height + 1200;
  return (
    <div className=" border-2 "  >

      csdfcdsfsddsfdsfsd
      <CustomAreaChartLine
        filteredData={filteredData}
        filterTable={filterTable}
        data={chartData}
        colors={colors}
        statusTable={statusTable}
        height={chartHeight}
        width={chartWidth}
       // height={height}
       // width={width}
      />vxcvxcvx
    </div>
  );
};

export default AreaChartComponent;
*/
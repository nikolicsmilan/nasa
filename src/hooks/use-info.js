import React, { useEffect, useContext } from "react";
import { MyDataContext } from "../context/DataContext";
import UAParser from "ua-parser-js";
export const useInfo = () => {
  const { setBrowserInfo} = MyDataContext();

  const teddAmitKell =()=>{
    console.log("useInfo lefut?")
  }

  useEffect(() => {
    // Parse the user agent string to get browser and device information
    const parser = new UAParser();
    const userAgent = navigator.userAgent;
    const parsedInfo = parser.setUA(userAgent).getResult();
    console.log("parsedinfo: ",parsedInfo );
    setBrowserInfo(parsedInfo);
  }, []);


  return { teddAmitKell };
};
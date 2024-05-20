import React, { useEffect, useContext } from "react";
import { MyDataContext } from "../context/DataContext";
import UAParser from "ua-parser-js";
export const useInfo = () => {
  //const { setBrowserInfo} = MyDataContext();

  const updateBrowserInfo =(setBrowserInfo)=>{
    console.log("useInfo lefut?")
    const parser = new UAParser();
    const userAgent = navigator.userAgent;
    const parsedInfo = parser.setUA(userAgent).getResult();
    console.log("parsedinfo: ",parsedInfo );
    setBrowserInfo(parsedInfo);
  }


  return { updateBrowserInfo };
};
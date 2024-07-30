import React, { useEffect, useContext } from "react";
import { MyDataContext } from "../context/DataContext";
import UAParser from "ua-parser-js";
export const useInfo = () => {
  //const { setBrowserInfo} = MyDataContext();

  const updateBrowserInfo =(setBrowserInfo)=>{
    //console.log("useInfo lefut?")
    const parser = new UAParser();
    const userAgent = navigator.userAgent;
    const parsedInfo = parser.setUA(userAgent).getResult();
    //console.log("parsedinfo: ",parsedInfo );
    setBrowserInfo(parsedInfo);
  }

  const updateIpAddress =(setIPAddress)=>{
   const fetchIPAddress = async () => {
      try {
        const response = await fetch('https://api.ipify.org/?format=json');
        const data = await response.json();
        setIPAddress(data.ip);
      } catch (error) {
        console.log('Error retrieving IP address:', error);
      }
    };

    fetchIPAddress();
  }

  const updateGPS =(setLatitude,setLongitude)=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Retrieve the latitude and longitude from the Geolocation API
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
   }



  return { updateBrowserInfo,updateIpAddress,updateGPS };
};
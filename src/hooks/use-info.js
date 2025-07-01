// A fájl tetejére importáld be a useCallback-et
import { useState, useCallback } from "react";
import UAParser from "ua-parser-js";

export const useInfo = () => {
  const [setError] = useState(null);

  // Csomagoljuk a függvényeket useCallback-be
  const updateBrowserInfo = useCallback((setBrowserInfo) => {
    //console.log("useInfo lefut?")
    
    const parser = new UAParser();
    const userAgent = navigator.userAgent;
    const parsedInfo = parser.setUA(userAgent).getResult();
    //console.log("parsedinfo: ",parsedInfo );
    setBrowserInfo(parsedInfo);
  }, []); // Az üres függőségi tömb [] biztosítja, hogy a függvény referenciája stabil marad

  const updateIpAddress = useCallback((setIPAddress) => {
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
  }, []); // Ez a függvény is stabil lesz

  const updateGPS = useCallback((setLatitude, setLongitude) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
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
  }, [setError]); // Itt a setError a függőség, de mivel a useState-ből jön, az is stabil, így ez is rendben van. Akár üres is lehetne a tömb.

  return { updateBrowserInfo, updateIpAddress, updateGPS };
};
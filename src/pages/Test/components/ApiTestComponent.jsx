// src/pages/Test/components/ApiTestComponent.jsx

// Ha React state-et vagy useEffect-et használsz, akkor kell az import:
// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Ha axios-t használsz

const ApiTestComponent = () => {
    // Példa state-ek az adatok és a betöltési/hiba állapot tárolására
    // const [sentryData, setSentryData] = useState(null);
    // const [isLoading, setIsLoading] = useState(false);
    // const [error, setError] = useState(null);
  
    const handleFetchSentryData = async () => {
      // setIsLoading(true);
      // setError(null);
      // try {
      //   // FONTOS: A VITE_API_BASE_URL-t be kell állítanod a .env fájlodban,
      //   // és annak a backend szervered címére kell mutatnia (pl. http://localhost:3500)
      //   const backendUrl = `${import.meta.env.VITE_API_BASE_URL}/api/sentry`; // Példa végpont
      //   console.log("Fetching data from:", backendUrl);
      //   const response = await fetch(backendUrl); // Vagy axios.get(backendUrl)
      //   if (!response.ok) {
      //     throw new Error(`HTTP error! status: ${response.status}`);
      //   }
      //   const data = await response.json();
      //   setSentryData(data);
      // } catch (e) {
      //   console.error("Error fetching Sentry data:", e);
      //   setError(e.message);
      //   setSentryData(null);
      // } finally {
      //   setIsLoading(false);
      // }
      alert("API Fetch logic to be implemented here!");
      console.log("Fetch Sentry Data button clicked. Implement fetching logic.");
    };
  
    return (
      <div className="p-4 text-neutral-300 w-full">
        <h2 className="text-xl text-primary mb-4">NASA Sentry System API Test</h2>
        <p className="mb-4 text-sm">
          This component will interact with your custom backend to fetch data from the NASA Sentry System API.
        </p>
        
        <button
          onClick={handleFetchSentryData}
          className="bg-accent hover:bg-accent/80 text-accent-content font-bold py-2 px-4 rounded mb-4
                     transition-colors duration-200"
        >
          Fetch Sentry Data
        </button>
  
        {/* Itt jelenítheted meg a betöltési állapotot, a hibákat vagy a kapott adatokat */}
        {/* {isLoading && <p className="text-info">Loading data...</p>}
        {error && <p className="text-error">Error: {error}</p>}
        {sentryData && (
          <div>
            <h3 className="text-lg text-secondary mt-4 mb-2">Received Data:</h3>
            <pre className="bg-neutral-800 p-3 rounded-md text-xs overflow-x-auto">
              {JSON.stringify(sentryData, null, 2)}
            </pre>
          </div>
        )} */}
        <div className="mt-4 p-3 bg-neutral-700/50 rounded">
          <p className="text-sm">API response will be displayed here.</p>
        </div>
      </div>
    );
  };
  
  export default ApiTestComponent;
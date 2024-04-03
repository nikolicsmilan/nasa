import React, { useState } from 'react';
import axios from 'axios';

function ApiComponent2() {
  console.log("eeeeeeeeeezzzzzzzz lefut??????????????????")
  const [responseData, setResponseData] = useState(null);
  const apiUrl = 'https://ssd-api.jpl.nasa.gov/sentry.api';

  const fetchData = () => {
    axios.get(apiUrl)
      .then(response => {
        setResponseData(response);
      })
      .catch(error => {
        console.error('Hiba:', error);
      });
  };
console.log("responseData:", responseData)
  return (
    <div>
      <button onClick={fetchData}>Adatok lekérése</button>
      {responseData && (
        <div>
          <h2>Válasz:</h2>
          <pre>{JSON.stringify(responseData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default ApiComponent2;

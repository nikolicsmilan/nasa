import React, { useState, useEffect } from 'react';

const ApiComponent = ({ apiUrl }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      }
      
      setIsLoading(false);
    };

    fetchData();
  }, [apiUrl]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {/* Render the fetched data */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ApiComponent;




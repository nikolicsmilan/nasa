import React, { useState, useEffect, ReactElement } from 'react';

// 1. Define the interface for the component's props.
// The `<TData>` is a generic type parameter representing the structure of the expected API data.
interface ApiComponentProps<TData> {
  apiUrl: string;
}

// Example data structure that the API might return.
// You should replace this with your actual data type.
interface User {
  id: number;
  name: string;
  email: string;
}

// 2. The component is made generic with `<TData>`.
// This allows it to work with any data structure, like `User` or `Product`.
const ApiComponent = <TData,>({ apiUrl }: ApiComponentProps<TData>): ReactElement => {
  
  // 3. Type the state variables for full type safety.
  const [data, setData] = useState<TData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      // Reset state before each new fetch
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        // We tell TypeScript what to expect from the JSON response.
        const jsonData = await response.json() as TData;
        setData(jsonData);

      } catch (err: unknown) { 
        // 4. In modern TypeScript, the caught error type is 'unknown'.
        // We must safely check its type before using its properties.
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
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
  
  // By this point, `data` should not be null, but we can add a check for robustness.
  if (!data) {
    return <div>No data found.</div>;
  }

  return (
    <div>
      {/* Render the fetched data */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

/*
// Example of how to use this generic component in another file:
//
// export const MyPage = () => {
//   // Here, we specify that we are working with the `User` interface.
//   return <ApiComponent<User> apiUrl="https://jsonplaceholder.typicode.com/users/1" />;
// }
*/

export default ApiComponent;
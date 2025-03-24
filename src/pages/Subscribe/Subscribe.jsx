import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // A navigációhoz

const Subscribe = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/subscribe', {
        username,
        email,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      {/* A tartalom a hátterezett konténerbe kerül */}
      <div className="bg-black bg-opacity-50 rounded-lg shadow-lg p-8 w-3/4 max-w-md">
        <h1 className="text-2xl font-bold text-white mb-4">Feliratkozás</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label htmlFor="username" className="block text-gray-200 text-sm font-bold mb-2">
              Felhasználónév:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-200 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Feliratkozás
          </button>
          {message && (
            <div className="text-white">
              {message}
            </div>
          )}
        </form>
         {/* Vissza gomb */}
         <Link to="/" className="mt-4 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
           Vissza a főoldalra
         </Link>
      </div>
    </div>
  );
};

export default Subscribe;
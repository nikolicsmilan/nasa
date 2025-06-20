// config/allowedOrigins.js

// Define all origins that are allowed to access the API.
// This list will be used by the CORS configuration.

const allowedOrigins = [
    // Development origins
    'http://localhost:5173', // Your React dev server
    'http://127.0.0.1:5173', // Another common localhost address
    'http://localhost:8000', // Your own API server for self-requests or tools
  
    // Production origins (add your actual domain names here later)
    'https://www.your-production-domain.com',
    'https://your-production-domain.com'
  ];
  
  module.exports = allowedOrigins;

// config/corsOptions.js
const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
  /**
   * The origin function determines whether a request's origin is allowed.
   * @param {string} origin - The 'Origin' header from the incoming request.
   * @param {function} callback - The function to call with the result (error, isAllowed).
   */
  origin: (origin, callback) => {
    // In development, we can be more lenient for tools like Postman.
    // The '!origin' check allows server-to-server requests and REST clients.
    if (process.env.NODE_ENV === 'development') {
      callback(null, true);
      return;
    }

    // In production, strictly enforce the whitelist.
    // The request is allowed if its origin is in our allowedOrigins array.
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      // If the origin is not in the whitelist, reject the request.
      callback(new Error("Not allowed by CORS"));
    }
  },
  // Allows cookies and credentials to be sent with cross-origin requests.
  credentials: true,
  // Specifies the status code to send for successful OPTIONS requests (pre-flight).
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
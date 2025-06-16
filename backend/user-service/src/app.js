/*// src/app.js
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const rfs = require("rotating-file-stream");
const path = require("path");

const corsOptions = require("./config/corsOptions"); // Import CORS options
//const authRoutes = require('./auth/authRoutes');   // Import auth routes
//const userRoutes = require('./user/userRoutes');   // Import user routes
const api = require("./routes/api");

const app = express();

// Middlewares (apply before routes)
if (process.env.NODE_ENV !== "test") {
  // Create a rotating write stream
  const accessLogStream = rfs.createStream("access.log", {
    interval: "1d", // Rotate daily
    path: path.join(__dirname, "..", "logs", "morgan"), // Log directory
  });
  app.use(morgan("combined", { stream: accessLogStream }));
}

// Setup the logger
app.use(morgan("combined", { stream: accessLogStream }));
app.use(cors(corsOptions)); // Apply CORS configuration
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded request bodies

//Routes

console.log("app.js: api middleware");
app.use(
  "/api",
  (req, res, next) => {
    console.log("app.js: /api útvonalra érkezett kérés");
    next(); // Fontos, hogy a next() függvényt meghívd
  },
  api
);

module.exports = app;*/

// src/app.js

// --- Imports ---
// Import the Express framework to create and manage the server.
const express = require("express");
// Import CORS middleware to handle Cross-Origin Resource Sharing.
const cors = require("cors");
// Import Morgan middleware for HTTP request logging.
const morgan = require("morgan");
// Import Rotating File Stream to manage log files, preventing them from growing too large.
const rfs = require("rotating-file-stream");
// Import the built-in 'path' module to handle and transform file paths.
const path = require("path");

// --- Custom Modules ---
// Import custom CORS configuration options.
const corsOptions = require("./config/corsOptions");
// Import the main API router that combines all other routes.
const api = require("./routes/api");

// --- App Initialization ---
// Create an instance of the Express application.
const app = express();

// --- Middleware Configuration ---

// Setup file-based logging, but only if the environment is not 'test'.
if (process.env.NODE_ENV !== "test") {
  // Define a stream for writing logs to a file that rotates daily.
  const accessLogStream = rfs.createStream("access.log", {
    interval: "1d", // Rotate the log file once a day.
    path: path.join(__dirname, "..", "logs", "morgan"), // Set the directory for log files.
  });
  
  // Use morgan to log all requests in 'combined' format to the file stream.
  app.use(morgan("combined", { stream: accessLogStream }));
}

// Setup console-based logging specifically for the 'development' environment.
if (process.env.NODE_ENV === 'development') {
    // Use morgan's 'dev' format for concise, color-coded logs in the console.
    app.use(morgan('dev'));
}

// Apply CORS middleware with the specified options to control cross-origin requests.
app.use(cors(corsOptions));
// Parse incoming requests with JSON payloads.
app.use(express.json());
// Parse incoming requests with URL-encoded payloads.
app.use(express.urlencoded({ extended: false }));

// --- API Routes ---
// Mount the main API router under the '/api' base path.
app.use("/api", api);

// --- Module Export ---
// Export the configured Express app instance to be used by the server.
module.exports = app;

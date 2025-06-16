// src/server.js

// --- Core Node.js Modules ---
// Import the 'http' module to create an HTTP server.
const http = require("http");
// Import the 'cluster' module to enable multi-process scaling.
const cluster = require('cluster');
// Import the 'os' module to get information about the operating system, like CPU cores.
const os = require('os');

// --- Environment Configuration ---
// Load environment variables from a .env file into process.env.
require("dotenv").config();

// --- Custom Application Modules ---
// Import the configured Express application instance from app.js.
const app = require("./app");
// Import the MongoDB connection function from the services layer.
const { mongoConnect } = require("./services/mongo");
// Import the custom event logging utility.
const { logEvents } = require("./middlewares/logEvents");

// --- Constants ---
// Define the port for the server, using an environment variable or a default value.
const PORT = process.env.PORT || 8000;
// Define a boolean flag to control whether to connect to the database on startup.
const CONNECT_TO_DB = process.env.CONNECT_TO_DB === "true";

// --- Cluster Setup ---
// Conditionally start the application in cluster mode.
// This block runs only if the environment is 'production' AND this is the primary process.
if (process.env.NODE_ENV === 'production' && cluster.isPrimary) {
  // Get the number of available CPU cores.
  const numCPUs = os.cpus().length;
  // Log that the primary process is starting up in production mode.
  console.log(`Primary process ${process.pid} is running in production mode.`);
  // Log the number of workers that will be created.
  console.log(`Forking server for ${numCPUs} CPU cores...`);

  // Create a new worker process for each available CPU core.
  for (let i = 0; i < numCPUs; i++) {
    // The fork() method creates a new worker process.
    cluster.fork();
  }

  // Set up an event listener for when a worker process exits.
  // This provides a "self-healing" mechanism.
  cluster.on('exit', (worker, code, signal) => {
    // Log an error message indicating which worker died and why.
    console.error(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`);
    // Record the event to a dedicated cluster log file.
    logEvents(`Worker ${worker.process.pid} died`, 'clusterLog.txt');
    // Log the action of restarting the worker.
    console.log('Starting a new worker...');
    // Create a new worker to replace the one that died.
    cluster.fork();
  });

} else {
  // This block is executed by:
  // 1. All worker processes in 'production' mode.
  // 2. A single process in 'development' or 'test' mode.
  startServer();
}

/**
 * Initializes the database connection (if configured) and starts the HTTP server.
 */
async function startServer() {
  // Create an HTTP server using the Express app as the request handler.
  const server = http.createServer(app);

  try {
    // Check the flag to determine if a database connection is needed.
    if (CONNECT_TO_DB) {
      // Asynchronously connect to the MongoDB database.
      await mongoConnect();
      // Log that the current process has successfully connected.
      console.log(`Process ${process.pid}: Connected to MongoDB.`);
    }

    // Start the server and have it listen for incoming connections on the specified port.
    server.listen(PORT, () => {
      // Log a confirmation message once the server is successfully listening.
      console.log(`Process ${process.pid} is listening on port ${PORT}...`);
      // Add a helpful message to indicate when the server is not in production mode.
      if (process.env.NODE_ENV !== 'production') {
          console.log('Running in development mode.');
      }
    });

  } catch (error) {
    // Catch and log any errors that occur during the server startup process.
    console.error(`Process ${process.pid} failed to start:`, error);
    // Exit the process with an error code to indicate failure.
    // If this is a worker, the primary process will handle restarting it.
    process.exit(1);
  }
}
const http = require('http');
require('dotenv').config();
const app = require('./app');
const { mongoConnect } = require('./services/mongo');

const logger = require('./utils/logger'); // Import the logger module

const PORT = process.env.PORT || 8000;
const CONNECT_TO_DB = process.env.CONNECT_TO_DB === 'true';

const server = http.createServer(app);

// File: src/server.js

// Benefits of using a separate startServer() function with async/await:
// - More modular: The code is better organized and easier to break down into parts.
//   Database connection and server startup are in separate functions, improving readability and maintainability.
// - Easier to test: It's easier to test individual components (e.g., database connection) separately using mocks or stubs.
// - Flexibility: It's easier to manage other dependencies before starting the server.
//   For example, if you need to load configuration files or connect to external APIs, you can do so asynchronously in the startServer() function.
// - Retry capability: It's easier to implement retries for database connection in case of failure.
async function startServer() {
  try {
    if (CONNECT_TO_DB) {
      await mongoConnect();
      logger.info('Connected to MongoDB');
    } else {
      logger.info('Not connecting to MongoDB');
    }

    server.listen(PORT, () => {
      logger.info(`Listening on port ${PORT}...`); // Use the logger module
    });
  } catch (error) {
    logger.error("Error during server startup:", error);
    process.exit(1); // Exit the process if startup fails
  }
}

startServer();
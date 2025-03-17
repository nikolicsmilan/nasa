const http = require("http");
require("dotenv").config();
const app = require("./app");
const { mongoConnect } = require("./services/mongo");
const { logEvents } = require("./middlewares/logEvents");

const PORT = process.env.PORT || 8000;
const CONNECT_TO_DB = process.env.CONNECT_TO_DB === "true";
// This is where the Express app (defined in app.js) is integrated
//  into the HTTP server.
// Run all middleware
const server = http.createServer(app);

// File: src/server.js

// Benefits of using a separate startServer() function with async/await:
// - More modular: The code is better organized and easier
//  to break down into parts.  Database connection and server startup
// are in separate functions,  improving readability and maintainability.
// - Easier to test: It's easier to test individual components
// (e.g., database connection) separately using mocks or stubs.
// - Flexibility: It's easier to manage other dependencies
// before starting the server.
// For example, if you need to load configuration files
// or connect to external APIs, you can do so asynchronously in
// the startServer() function.
// - Retry capability: It's easier to implement retries for database
// connection in case of failure.
async function startServer() {
  try {
    if (CONNECT_TO_DB) {
      await mongoConnect();
      logEvents("Connected to MongoDB", "mongoLog.txt");
      console.log("Connected to MongoDB");
    } else {
      logEvents("Not connecting to MongoDB", "mongoLog.txt");
      console.log(`Start without mongo db `);
    }
    //The await keyword is only valid inside
    //  async functions or within the top-level bodies of modules
    server.listen(PORT, async () => {
      // Async callback
      //  server.listen(PORT, () => {
      await logEvents(`Listening on port ${PORT}...`, "serverLog.txt");
      console.log(`Listening on port ${PORT}...`);
    });
  } catch (error) {
    // Awaiting here to ensure the error is logged
    //  to errorLog.txt before exiting the process.
    // This is the best compromise, as it guarantees error
    //  logging in a critical situation, even though it blocks the thread briefly.
    await logEvents(error, "errorLog.txt");
    console.error(error);
      process.exit(1);
  }
}

startServer();

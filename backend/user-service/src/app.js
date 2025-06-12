// src/app.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const rfs = require('rotating-file-stream');
const path = require('path');

const corsOptions = require('./config/corsOptions'); // Import CORS options
//const authRoutes = require('./auth/authRoutes');   // Import auth routes
//const userRoutes = require('./user/userRoutes');   // Import user routes
const api = require('./routes/api');

const app = express();

// Middlewares (apply before routes)
// Create a rotating write stream
const accessLogStream = rfs.createStream('access.log', {
    interval: '1d', // Rotate daily
    path: path.join(__dirname,  '..', 'logs', 'morgan') // Log directory
  });

  // Setup the logger
app.use(morgan('combined', { stream: accessLogStream }));
app.use(cors(corsOptions)); // Apply CORS configuration
app.use(express.json());    // Parse JSON request bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded request bodies

//Routes

console.log("app.js: api middleware");
app.use('/api', (req, res, next) => {
  console.log("app.js: /api útvonalra érkezett kérés");
  next(); // Fontos, hogy a next() függvényt meghívd
}, api);

module.exports = app;
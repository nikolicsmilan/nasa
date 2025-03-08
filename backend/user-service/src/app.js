const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const corsOptions = require('./config/corsOptions'); // Import CORS options
//const authRoutes = require('./auth/authRoutes');   // Import auth routes
//const userRoutes = require('./user/userRoutes');   // Import user routes
const logger = require('./utils/logger');           // Import logger
const api = require('./routes/api');

const app = express();

// Middlewares (apply before routes)
app.use(morgan('combined', { stream: { write: message => logger.http(message.trim()) } })); // Log HTTP requests
app.use(cors(corsOptions)); // Apply CORS configuration
app.use(express.json());    // Parse JSON request bodies
app.use(express.urlencoded({ extended: false })); // Parse URL-encoded request bodies

//Routes
app.use('/', api);


module.exports = app;
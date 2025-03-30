const express = require('express');

const subscribersRouter = require('./subscribers/subscribers.router');
//const usersRouter = require('./users/launches.router');

const api = express.Router();
console.log("api.js: subscribersRouter middleware");

api.use('/subscribers', (req, res, next) => {
    console.log("api.js: /subscribers útvonalra érkezett kérés");
    next();
  }, subscribersRouter);
//api.use('/users', usersRouter);

module.exports = api;
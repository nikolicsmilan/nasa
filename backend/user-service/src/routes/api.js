const express = require('express');

const subscribersRouter = require('./subscribers/subscribers.router');
const usersRouter = require('./users/launches.router');

const api = express.Router();

api.use('/subscribers', subscribersRouter);
api.use('/users', usersRouter);

module.exports = api;
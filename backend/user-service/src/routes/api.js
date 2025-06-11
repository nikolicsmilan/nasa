/*const express = require('express');

const subscribersRouter = require('./subscribers/subscribers.router');
//const usersRouter = require('./users/launches.router');

const api = express.Router();
console.log("api.js: subscribersRouter middleware");

api.use('/subscribers', (req, res, next) => {
    console.log("api.js: /subscribers útvonalra érkezett kérés");
    next();
  }, subscribersRouter);
//api.use('/users', usersRouter);

module.exports = api;*/

// src/routes/api.js

const express = require('express');

// 1. A régi, nem létező subscribers.router importot töröljük.
// const subscribersRouter = require('./subscribers/subscribers.router'); // <-- TÖRÖLVE

// 2. Importáljuk az új, egységes users.router-t.
const usersRouter = require('./users/users.router'); // <-- ÚJ IMPORT

const api = express.Router();

// 3. A régi /subscribers útvonalat töröljük.
// api.use('/subscribers', ..., subscribersRouter); // <-- TÖRÖLVE

// 4. Bejegyezzük az új /users útvonalat.
// Ez azt jelenti, hogy minden olyan kérés, ami a `/users`-szel kezdődik,
// a usersRouter-hez lesz továbbítva.
// Például: a /users/subscribe kérés a usersRouter-en belül a '/subscribe' útvonalra fog illeszkedni.
api.use('/users', usersRouter);

module.exports = api;